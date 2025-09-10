// scripts/fetch_vsop87.mjs
// Gera JSONs VSOP87A (L,B,R, série 'A') para: Mercúrio..Plutão + Terra
// Fontes: IMCCE/CDS (catálogo VI/81) e espelho GitHub.
// Saída: data/vsop87/{MERCURIO,VENUS,EARTH,MARS,JUPITER,SATURN,URANUS,NEPTUNE,PLUTO}.json
// Formato: { "L":[L0..L5], "B":[B0..B5], "R":[R0..R5] }, com termos [A,B,C] (A e C em unidades VSOP, B em fase).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '../data/vsop87');
await fs.promises.mkdir(OUT_DIR, { recursive: true });

// ----- Onde baixar -----
// 1) VizieR/CDS (oficial). Os arquivos "vsop87a.{planet}.txt" aparecem neste catálogo.
//    Ex.: Mercúrio = vsop87a.mer, Vênus = vsop87a.ven, Terra = vsop87a.ear, etc.
//    Endpoint estável (texto): https://cdsarc.cds.unistra.fr/ftp/cats/VI/81/
const CDS_BASE = 'https://cdsarc.cds.unistra.fr/ftp/cats/VI/81/';

// 2) Espelho GitHub (caso o CDS esteja lento): repo ctdk/vsop87 mantém os mesmos arquivos.
const GH_BASE  = 'https://raw.githubusercontent.com/ctdk/vsop87/master/';

// Mapas de nomes (VSOP87A)
const PLANET_MAP = {
  MERCURIO: 'mer', VENUS: 'ven', EARTH: 'ear', MARS: 'mar',
  JUPITER: 'jup', SATURN: 'sat', URANUS: 'ura', NEPTUNE: 'nep', PLUTO: 'plu'
};

// Em VSOP87A cada planeta tem 3 arquivos (L,B,R) com 6 subseções (0..5):
// Arquivo: vsop87a.{code} (ex.: vsop87a.mer)
// O formato das linhas dos blocos é: i  A  B  C
// e os blocos são delimitados por cabeçalhos como "VSOP87 VERSION A - L0" etc.
// Vamos parsear em grupos L0..L5, B0..B5, R0..R5.

async function fetchText(urls) {
  for (const url of urls) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      return await res.text();
    } catch (e) {
      if (url === urls.at(-1)) throw e;
    }
  }
}

function splitBlocks(txt) {
  // Separa em 18 blocos (L0..L5, B0..B5, R0..R5) pela etiqueta de cabeçalho.
  // Procuramos linhas tipo: "VSOP87 VERSION A - L0"
  const lines = txt.split(/\r?\n/);
  const blocks = {};
  let current = null;

  const headerRe = /VSOP87\s+VERSION\s+A\s+-\s+([LBR])(\d)/i;
  for (const line of lines) {
    const m = line.match(headerRe);
    if (m) {
      current = `${m[1].toUpperCase()}${m[2]}`;
      blocks[current] = [];
      continue;
    }
    if (!current) continue;
    // Termos: índice   A                B                 C
    // ex.:  1  440250710.0  0.0  0.0
    const t = line.trim().split(/\s+/);
    if (t.length >= 4 && /^\d+$/.test(t[0])) {
      const A = Number(t[1]);
      const B = Number(t[2]);
      const C = Number(t[3]);
      if (Number.isFinite(A) && Number.isFinite(B) && Number.isFinite(C)) {
        blocks[current].push([A, B, C]);
      }
    }
  }
  return blocks;
}

function packJSON(blocks) {
  // Gera { L:[L0..L5], B:[B0..B5], R:[R0..R5] }
  function arr(prefix) {
    const out = [];
    for (let k = 0; k <= 5; k++) out.push(blocks[`${prefix}${k}`] || []);
    return out;
  }
  return { L: arr('L'), B: arr('B'), R: arr('R') };
}

async function buildPlanet(planetKey) {
  const code = PLANET_MAP[planetKey];
  const filename = `vsop87a.${code}`;
  const urls = [
    CDS_BASE + filename,                      // oficial
    GH_BASE + 'vsop87a/' + filename          // espelho
  ];
  
  console.log(`📡 Baixando ${planetKey}...`);
  try {
    const raw = await fetchText(urls);
    const blocks = splitBlocks(raw);
    const json = packJSON(blocks);
    const outPath = path.join(OUT_DIR, `${planetKey}.json`);
    await fs.promises.writeFile(outPath, JSON.stringify(json, null, 2));
    console.log('✅', planetKey, '→', outPath);
  } catch (error) {
    console.error('❌', planetKey, 'ERRO:', error.message);
  }
}

(async () => {
  console.log('🌟 Iniciando download dos coeficientes VSOP87...\n');
  
  const planets = Object.keys(PLANET_MAP);
  for (const p of planets) {
    await buildPlanet(p);
  }
  
  console.log('\n🎉 Todos os JSONs VSOP87A gerados em', OUT_DIR);
})();

