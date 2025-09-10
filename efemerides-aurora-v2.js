// ===================================================================
// EFEMÉRIDES AURORA — VERSÃO PRECISA (V2)
// Cálculos astronômicos precisos baseados em Meeus e NOAA
// ===================================================================

const EfemeridesAurora = (function() {
    'use strict';

    // Constantes astronômicas
    const SIGNOS = ['Áries','Touro','Gêmeos','Câncer','Leão','Virgem',
                   'Libra','Escorpião','Sagitário','Capricórnio','Aquário','Peixes'];
    
    const SIMBOLOS_PLANETAS = {
        'Sol':'☉', 'Lua':'☽', 'Mercúrio':'☿', 'Vênus':'♀', 'Marte':'♂',
        'Júpiter':'♃', 'Saturno':'♄', 'Urano':'♅', 'Netuno':'♆', 'Plutão':'♇',
        'Nodo Norte':'☊', 'Nodo Sul':'☋', 'Lilith':'⚸', 'Quíron':'⚷'
    };

    const ASPECTOS = {
        'Conjunção': {angulo: 0, orbe: 8, simbolo: '☌'},
        'Sextil': {angulo: 60, orbe: 6, simbolo: '⚹'},
        'Quadratura': {angulo: 90, orbe: 8, simbolo: '□'},
        'Trígono': {angulo: 120, orbe: 8, simbolo: '△'},
        'Oposição': {angulo: 180, orbe: 8, simbolo: '☍'}
    };

    const DIGNIDADES = {
        'Sol': {domicilio: ['Leão'], exaltacao: ['Áries'], exilio: ['Aquário'], queda: ['Libra']},
        'Lua': {domicilio: ['Câncer'], exaltacao: ['Touro'], exilio: ['Capricórnio'], queda: ['Escorpião']},
        'Mercúrio': {domicilio: ['Gêmeos','Virgem'], exaltacao: ['Virgem'], exilio: ['Sagitário','Peixes'], queda: ['Peixes']},
        'Vênus': {domicilio: ['Touro','Libra'], exaltacao: ['Peixes'], exilio: ['Escorpião','Áries'], queda: ['Virgem']},
        'Marte': {domicilio: ['Áries','Escorpião'], exaltacao: ['Capricórnio'], exilio: ['Libra','Touro'], queda: ['Câncer']}
    };

    // Funções utilitárias
    function norm360(x) { 
        while(x < 0) x += 360; 
        while(x >= 360) x -= 360; 
        return x; 
    }

    function rad(deg) { return deg * Math.PI / 180; }
    function deg(rad) { return rad * 180 / Math.PI; }

    // Dia Juliano corrigido com UTC
    function julianDay(date) {
        const year = date.getUTCFullYear();
        const month = date.getUTCMonth() + 1;
        const day = date.getUTCDate();
        const hour = date.getUTCHours();
        const minute = date.getUTCMinutes();
        const second = date.getUTCSeconds();
        
        const a = Math.floor((14 - month) / 12);
        const y = year + 4800 - a;
        const m = month + 12 * a - 3;
        
        const jdn = day + Math.floor((153 * m + 2) / 5) + 365 * y + 
                   Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
        
        const dayFraction = (hour + minute/60 + second/3600) / 24;
        return jdn + dayFraction - 0.5;
    }

    // Posição do Sol com longitude aparente (Meeus/NOAA)
    function posicaoSol(date) {
        const JD = julianDay(date);
        const T = (JD - 2451545.0) / 36525.0;
        
        // Longitude média
        const L0 = norm360(280.46646 + 36000.76983 * T + 0.0003032 * T * T);
        
        // Anomalia média
        const M = norm360(357.52911 + 35999.05029 * T - 0.0001537 * T * T);
        const Mr = rad(M);
        
        // Equação do centro
        const C = (1.914602 - 0.004817 * T - 0.000014 * T * T) * Math.sin(Mr) +
                 (0.019993 - 0.000101 * T) * Math.sin(2 * Mr) +
                 0.000289 * Math.sin(3 * Mr);
        
        // Longitude verdadeira
        const L = L0 + C;
        
        // Nutação em longitude (simplificada)
        const omega = norm360(125.04 - 1934.136 * T);
        const deltaPsi = -17.20 * Math.sin(rad(omega)) / 3600;
        
        // Longitude aparente
        const lambda = L + deltaPsi;
        
        const signoIndex = Math.floor(lambda / 30);
        const grauNoSigno = lambda % 30;
        
        return {
            longitude: lambda,
            signo: SIGNOS[signoIndex],
            simbolo: SIMBOLOS_PLANETAS['Sol'],
            grauNoSigno: grauNoSigno,
            grauAbsoluto: lambda
        };
    }

    // Posição da Lua com série de Meeus (mais precisa)
    function posicaoLua(date) {
        const JD = julianDay(date);
        const T = (JD - 2451545.0) / 36525.0;
        
        // Longitude média da Lua
        const Lp = norm360(218.3164477 + 481267.88123421 * T - 0.0015786 * T * T);
        
        // Elongação média
        const D = norm360(297.8501921 + 445267.1114034 * T - 0.0018819 * T * T);
        
        // Anomalia média do Sol
        const M = norm360(357.5291092 + 35999.0502909 * T - 0.0001536 * T * T);
        
        // Anomalia média da Lua
        const Mp = norm360(134.9633964 + 477198.8675055 * T + 0.0087414 * T * T);
        
        // Argumento de latitude
        const F = norm360(93.2720950 + 483202.0175233 * T - 0.0036539 * T * T);
        
        // Termos principais da série de Meeus
        const Dr = rad(D), Mr = rad(M), Mpr = rad(Mp), Fr = rad(F);
        
        let deltaL = 0;
        // Principais termos periódicos (série truncada)
        deltaL += 6288774 * Math.sin(Mpr);
        deltaL += 1274027 * Math.sin(2*Dr - Mpr);
        deltaL += 658314 * Math.sin(2*Dr);
        deltaL += 213618 * Math.sin(2*Mpr);
        deltaL += -185116 * Math.sin(Mr);
        deltaL += -114332 * Math.sin(2*Fr);
        deltaL += 58793 * Math.sin(2*Dr - 2*Mpr);
        deltaL += 57066 * Math.sin(2*Dr - Mr - Mpr);
        deltaL += 53322 * Math.sin(2*Dr + Mpr);
        deltaL += 45758 * Math.sin(2*Dr - Mr);
        
        // Converter para graus
        deltaL = deltaL / 1000000;
        
        const longitude = norm360(Lp + deltaL);
        const signoIndex = Math.floor(longitude / 30);
        const grauNoSigno = longitude % 30;
        
        return {
            longitude: longitude,
            signo: SIGNOS[signoIndex],
            simbolo: SIMBOLOS_PLANETAS['Lua'],
            grauNoSigno: grauNoSigno,
            grauAbsoluto: longitude
        };
    }

    // Fase Lunar precisa
    function faseLunar(date) {
        const JD = julianDay(date);
        const T = (JD - 2451545.0) / 36525.0;
        
        // Longitude média da Lua
        const Lp = norm360(218.3164477 + 481267.88123421 * T);
        
        // Longitude média do Sol
        const Ls = norm360(280.46646 + 36000.76983 * T);
        
        // Elongação
        const elongacao = norm360(Lp - Ls);
        
        // Determinar fase baseada na elongação
        if (elongacao < 45 || elongacao > 315) {
            return { fase: 'Nova', iluminacao: 0 };
        } else if (elongacao >= 45 && elongacao < 135) {
            return { fase: 'Crescente', iluminacao: 50 };
        } else if (elongacao >= 135 && elongacao < 225) {
            return { fase: 'Cheia', iluminacao: 100 };
        } else {
            return { fase: 'Minguante', iluminacao: 50 };
        }
    }

    // Nodo Norte (Ω médio - Meeus)
    function nodoNorte(date) {
        const JD = julianDay(date);
        const T = (JD - 2451545.0) / 36525.0;
        
        const omega = norm360(125.0445479 - 1934.1362891 * T + 0.0020754 * T * T);
        const signoIndex = Math.floor(omega / 30);
        const grauNoSigno = omega % 30;
        
        return {
            longitude: omega,
            signo: SIGNOS[signoIndex],
            simbolo: SIMBOLOS_PLANETAS['Nodo Norte'],
            grauNoSigno: grauNoSigno,
            grauAbsoluto: omega
        };
    }

    // Nodo Sul
    function nodoSul(date) {
        const nn = nodoNorte(date);
        const longitude = norm360(nn.longitude + 180);
        const signoIndex = Math.floor(longitude / 30);
        const grauNoSigno = longitude % 30;
        
        return {
            longitude: longitude,
            signo: SIGNOS[signoIndex],
            simbolo: SIMBOLOS_PLANETAS['Nodo Sul'],
            grauNoSigno: grauNoSigno,
            grauAbsoluto: longitude
        };
    }

    // Lilith média (Meeus)
    function lilith(date) {
        const JD = julianDay(date);
        const T = (JD - 2451545.0) / 36525.0;
        
        const L = norm360(83.3532465 + 4069.0137287 * T - 0.0103200 * T * T);
        const signoIndex = Math.floor(L / 30);
        const grauNoSigno = L % 30;
        
        return {
            longitude: L,
            signo: SIGNOS[signoIndex],
            simbolo: SIMBOLOS_PLANETAS['Lilith'],
            grauNoSigno: grauNoSigno,
            grauAbsoluto: L
        };
    }

    // Quíron aproximado (mantém v1)
    function quiron(date) {
        const JD = julianDay(date);
        const T = (JD - 2451545.0) / 36525.0;
        let L = norm360(207.2 + 1.478 * T);
        const signoIndex = Math.floor(L / 30);
        const grauNoSigno = L % 30;
        
        return {
            longitude: L,
            signo: SIGNOS[signoIndex],
            simbolo: SIMBOLOS_PLANETAS['Quíron'],
            grauNoSigno: grauNoSigno,
            grauAbsoluto: L
        };
    }

    // Calcular todas as posições
    function calcularTodasPosicoes(date) {
        const pos = {};
        pos['Sol'] = posicaoSol(date);
        pos['Lua'] = posicaoLua(date);
        pos['Nodo Norte'] = nodoNorte(date);
        pos['Nodo Sul'] = nodoSul(date);
        pos['Lilith'] = lilith(date);
        pos['Quíron'] = quiron(date);
        return pos;
    }

    // Calcular aspectos
    function calcularAspectos(posicoes) {
        const aspectos = [];
        const corpos = Object.keys(posicoes);
        
        for (let i = 0; i < corpos.length; i++) {
            for (let j = i + 1; j < corpos.length; j++) {
                const corpo1 = corpos[i];
                const corpo2 = corpos[j];
                const pos1 = posicoes[corpo1].grauAbsoluto;
                const pos2 = posicoes[corpo2].grauAbsoluto;
                
                let diferenca = Math.abs(pos1 - pos2);
                if (diferenca > 180) diferenca = 360 - diferenca;
                
                for (const [nomeAspecto, aspecto] of Object.entries(ASPECTOS)) {
                    if (Math.abs(diferenca - aspecto.angulo) <= aspecto.orbe) {
                        aspectos.push({
                            corpo1: corpo1,
                            corpo2: corpo2,
                            aspecto: nomeAspecto,
                            simbolo: aspecto.simbolo,
                            orbe: Math.abs(diferenca - aspecto.angulo).toFixed(2)
                        });
                    }
                }
            }
        }
        
        return aspectos;
    }

    // Calcular dignidade
    function calcularDignidade(planeta, signo) {
        const dig = DIGNIDADES[planeta];
        if (!dig) return 'Peregrino';
        
        if (dig.domicilio && dig.domicilio.includes(signo)) return 'Domicílio';
        if (dig.exaltacao && dig.exaltacao.includes(signo)) return 'Exaltação';
        if (dig.exilio && dig.exilio.includes(signo)) return 'Exílio';
        if (dig.queda && dig.queda.includes(signo)) return 'Queda';
        
        return 'Peregrino';
    }

    // Nascer/pôr do Sol com precisão NOAA
    function calcularNascerPorSol(date, latitude, longitude) {
        const JD = julianDay(date);
        const T = (JD - 2451545.0) / 36525.0;
        
        // Posição do Sol
        const sol = posicaoSol(date);
        const lambda = rad(sol.longitude);
        
        // Obliquidade da eclíptica
        const epsilon = rad(23.439291 - 0.0130042 * T);
        
        // Declinação do Sol
        const delta = Math.asin(Math.sin(epsilon) * Math.sin(lambda));
        
        // Ângulo horário
        const lat = rad(latitude);
        const h0 = rad(-0.833); // Altitude padrão
        
        const H = Math.acos((Math.sin(h0) - Math.sin(lat) * Math.sin(delta)) / 
                           (Math.cos(lat) * Math.cos(delta)));
        
        // Tempo sideral de Greenwich
        const theta0 = norm360(280.46061837 + 360.98564736629 * (JD - 2451545.0));
        
        // Nascer e pôr
        const nascerH = (theta0 - deg(H) - longitude) / 15;
        const porH = (theta0 + deg(H) - longitude) / 15;
        
        // Converter para horas locais
        const nascer = new Date(date);
        nascer.setHours(Math.floor(nascerH), (nascerH % 1) * 60, 0, 0);
        
        const por = new Date(date);
        por.setHours(Math.floor(porH), (porH % 1) * 60, 0, 0);
        
        return { nascer, por };
    }

    // Horas Planetárias precisas
    function horasPlanetarias(date, latitude, longitude) {
        const { nascer, por } = calcularNascerPorSol(date, latitude, longitude);
        
        const duracaoDia = (por.getTime() - nascer.getTime()) / (1000 * 60 * 60);
        const duracaoNoite = 24 - duracaoDia;
        
        const horaDia = duracaoDia / 12;
        const horaNoite = duracaoNoite / 12;
        
        const planetasDia = ['Sol', 'Vênus', 'Mercúrio', 'Lua', 'Saturno', 'Júpiter', 'Marte'];
        const planetasNoite = ['Lua', 'Saturno', 'Júpiter', 'Marte', 'Sol', 'Vênus', 'Mercúrio'];
        
        const diaSemana = date.getDay();
        const inicioSeq = (diaSemana + 6) % 7; // Ajuste para começar no domingo = 0
        
        const horas = [];
        
        // Horas do dia
        for (let i = 0; i < 12; i++) {
            const planeta = planetasDia[(inicioSeq + i) % 7];
            const inicio = new Date(nascer.getTime() + i * horaDia * 60 * 60 * 1000);
            const fim = new Date(nascer.getTime() + (i + 1) * horaDia * 60 * 60 * 1000);
            
            horas.push({
                planeta,
                simbolo: SIMBOLOS_PLANETAS[planeta],
                inicio,
                fim,
                periodo: 'Dia'
            });
        }
        
        // Horas da noite
        for (let i = 0; i < 12; i++) {
            const planeta = planetasNoite[(inicioSeq + i) % 7];
            const inicio = new Date(por.getTime() + i * horaNoite * 60 * 60 * 1000);
            const fim = new Date(por.getTime() + (i + 1) * horaNoite * 60 * 60 * 1000);
            
            horas.push({
                planeta,
                simbolo: SIMBOLOS_PLANETAS[planeta],
                inicio,
                fim,
                periodo: 'Noite'
            });
        }
        
        return horas;
    }

    // Efemérides completas
    function calcularEfemeridesCompletas(date, latitude = -23.5505, longitude = -46.6333) {
        const posicoes = calcularTodasPosicoes(date);
        const aspectos = calcularAspectos(posicoes);
        const fase = faseLunar(date);
        const horas = horasPlanetarias(date, latitude, longitude);
        const dignidades = {};
        
        for (const [k, v] of Object.entries(posicoes)) {
            if (DIGNIDADES[k]) dignidades[k] = calcularDignidade(k, v.signo);
        }
        
        return {
            data: date,
            diaJuliano: julianDay(date),
            coordenadas: { latitude, longitude },
            posicoesPlanetarias: posicoes,
            aspectos,
            faseLunar: fase,
            horasPlanetarias: horas,
            dignidades,
            proximosEclipses: [] // Removido placeholder impreciso
        };
    }

    // Formatação
    function formatarPosicao(p) {
        const g = Math.floor(p.grauNoSigno);
        const m = Math.floor((p.grauNoSigno - g) * 60);
        const s = Math.floor((((p.grauNoSigno - g) * 60) - m) * 60);
        return `${p.simbolo} ${p.signo} ${g}°${m}'${s}"`;
    }

    // Hora planetária atual
    function obterHoraPlanetariaAtual(date, lat, lon) {
        const h = horasPlanetarias(date, lat, lon);
        const t = date.getTime();
        for (const x of h) {
            if (t >= x.inicio.getTime() && t < x.fim.getTime()) return x;
        }
        return null;
    }

    // API pública
    return {
        // Constantes expostas
        SIGNOS,
        SIMBOLOS_PLANETAS,
        
        // Tempo
        calcularDiaJuliano: julianDay,
        calcularSeculosJ2000: (JD) => (JD - 2451545.0) / 36525.0,
        
        // Posições
        calcularPosicaoSol: posicaoSol,
        calcularPosicaoLua: posicaoLua,
        calcularNodoNorte: nodoNorte,
        calcularNodoSul: nodoSul,
        calcularLilith: lilith,
        calcularTodasPosicoes,
        
        // Horas
        calcularHorasPlanetarias: horasPlanetarias,
        obterHoraPlanetariaAtual,
        
        // Aspectos e dignidades
        ASPECTOS,
        calcularAspectos,
        calcularDignidade,
        
        // Fase lunar
        calcularFaseLunar: faseLunar,
        
        // Efemérides
        calcularEfemeridesCompletas,
        
        // Utils
        formatarPosicao,
        
        // Nascer/pôr do Sol
        calcularNascerPorSol
    };
})();

// Exportar para uso global
if (typeof window !== 'undefined') {
    window.EfemeridesAurora = EfemeridesAurora;
}

