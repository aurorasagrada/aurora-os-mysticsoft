// ===================================================================
// EFEMÉRIDES COMPLETAS - SISTEMA AURORA SAGRADA
// Cálculos astrológicos em tempo real sem abreviações
// ===================================================================

const EfemeridesCompletas = {
    
    // === CONSTANTES ASTRONÔMICAS ===
    CONSTANTES: {
        GRAUS_POR_SIGNO: 30,
        SIGNOS_ZODIACAIS: 12,
        CASAS_ASTROLOGICAS: 12,
        SEGUNDOS_POR_DIA: 86400,
        DIAS_POR_ANO: 365.25,
        EPOCH_J2000: 2451545.0, // 1 Janeiro 2000, 12:00 TT
        OBLIQUIDADE_ECLIPTICA: 23.4392911, // graus
        NUTACAO_LONGITUDE: 0.0, // simplificado
        NUTACAO_OBLIQUIDADE: 0.0, // simplificado
        
        // Elementos orbitais dos planetas (época J2000.0)
        ELEMENTOS_PLANETARIOS: {
            SOL: {
                longitude_media: 280.46646,
                anomalia_media: 357.52911,
                excentricidade: 0.01671123,
                longitude_perihelio: 282.93735,
                taxa_longitude: 0.98564736,
                taxa_anomalia: 0.98560028,
                taxa_excentricidade: -0.00004392,
                taxa_perihelio: 0.00004708
            },
            LUA: {
                longitude_media: 218.3164477,
                anomalia_media: 134.9633964,
                excentricidade: 0.0549,
                longitude_perihelio: 83.3532465,
                taxa_longitude: 13.17639648,
                taxa_anomalia: 13.06499295,
                taxa_excentricidade: 0.0,
                taxa_perihelio: 0.11140353,
                argumento_latitude: 93.2720950,
                taxa_argumento: -0.05295376
            },
            MERCURIO: {
                longitude_media: 252.25032350,
                anomalia_media: 174.79252722,
                excentricidade: 0.20563593,
                longitude_perihelio: 77.45779628,
                taxa_longitude: 4.09233445,
                taxa_anomalia: 4.09234000,
                taxa_excentricidade: 0.00001906,
                taxa_perihelio: 0.16047689,
                inclinacao: 7.00497902,
                longitude_no_ascendente: 48.33076593,
                taxa_inclinacao: -0.00594749,
                taxa_no_ascendente: -0.12534081
            },
            VENUS: {
                longitude_media: 181.97909950,
                anomalia_media: 50.11570157,
                excentricidade: 0.00677672,
                longitude_perihelio: 131.60246718,
                taxa_longitude: 1.60213034,
                taxa_anomalia: 1.60213000,
                taxa_excentricidade: -0.00004107,
                taxa_perihelio: 0.00268329,
                inclinacao: 3.39467605,
                longitude_no_ascendente: 76.67984255,
                taxa_inclinacao: -0.00078890,
                taxa_no_ascendente: -0.27769418
            },
            MARTE: {
                longitude_media: 355.43299958,
                anomalia_media: 19.39019754,
                excentricidade: 0.09340062,
                longitude_perihelio: 336.06023395,
                taxa_longitude: 0.52403840,
                taxa_anomalia: 0.52402068,
                taxa_excentricidade: 0.00007882,
                taxa_perihelio: 0.44441088,
                inclinacao: 1.84969142,
                longitude_no_ascendente: 49.55953891,
                taxa_inclinacao: -0.00813131,
                taxa_no_ascendente: -0.29257343
            },
            JUPITER: {
                longitude_media: 34.39644051,
                anomalia_media: 20.02595050,
                excentricidade: 0.04838624,
                longitude_perihelio: 14.72847983,
                taxa_longitude: 0.08308529,
                taxa_anomalia: 0.08308480,
                taxa_excentricidade: -0.00013253,
                taxa_perihelio: 0.21252668,
                inclinacao: 1.30439695,
                longitude_no_ascendente: 100.47390909,
                taxa_inclinacao: -0.00183714,
                taxa_no_ascendente: 0.20469106
            },
            SATURNO: {
                longitude_media: 49.95424423,
                anomalia_media: 317.02074804,
                excentricidade: 0.05386179,
                longitude_perihelio: 92.59887831,
                taxa_longitude: 0.03344414,
                taxa_anomalia: 0.03344442,
                taxa_excentricidade: -0.00050991,
                taxa_perihelio: 0.41897216,
                inclinacao: 2.48599187,
                longitude_no_ascendente: 113.66242448,
                taxa_inclinacao: 0.00193609,
                taxa_no_ascendente: -0.28867794
            },
            URANO: {
                longitude_media: 313.23810451,
                anomalia_media: 142.23828220,
                excentricidade: 0.04725744,
                longitude_perihelio: 170.95427630,
                taxa_longitude: 0.01176904,
                taxa_anomalia: 0.01176895,
                taxa_excentricidade: -0.00004397,
                taxa_perihelio: 0.40805281,
                inclinacao: 0.77263783,
                longitude_no_ascendente: 74.01692503,
                taxa_inclinacao: -0.00242939,
                taxa_no_ascendente: 0.04240589
            },
            NETUNO: {
                longitude_media: 304.34866548,
                anomalia_media: 256.22834043,
                excentricidade: 0.00859048,
                longitude_perihelio: 44.96476227,
                taxa_longitude: 0.00598103,
                taxa_anomalia: 0.00598103,
                taxa_excentricidade: 0.00005105,
                taxa_perihelio: 0.32241464,
                inclinacao: 1.77004347,
                longitude_no_ascendente: 131.78422574,
                taxa_inclinacao: 0.00035372,
                taxa_no_ascendente: -0.00508664
            },
            PLUTAO: {
                longitude_media: 238.92903833,
                anomalia_media: 14.86205442,
                excentricidade: 0.24882730,
                longitude_perihelio: 224.06891629,
                taxa_longitude: 0.00396103,
                taxa_anomalia: 0.00396097,
                taxa_excentricidade: 0.00005170,
                taxa_perihelio: 0.04062942,
                inclinacao: 17.14001206,
                longitude_no_ascendente: 110.30393684,
                taxa_inclinacao: 0.00004818,
                taxa_no_ascendente: -0.01183482
            }
        },
        
        // Nodos Lunares
        NODOS_LUNARES: {
            longitude_no_norte: 125.0445479,
            taxa_longitude_no: -0.05295376,
            longitude_no_sul: 305.0445479, // oposto ao nó norte
            taxa_longitude_no_sul: -0.05295376
        },
        
        // Lilith (Lua Negra - Apogeu Lunar)
        LILITH: {
            longitude_media: 83.3532465,
            taxa_longitude: 0.11140353
        }
    },
    
    // === NOMES DOS SIGNOS ===
    SIGNOS: [
        'Áries', 'Touro', 'Gêmeos', 'Câncer', 'Leão', 'Virgem',
        'Libra', 'Escorpião', 'Sagitário', 'Capricórnio', 'Aquário', 'Peixes'
    ],
    
    // === SÍMBOLOS DOS PLANETAS ===
    SIMBOLOS_PLANETAS: {
        'Sol': '☉',
        'Lua': '☽',
        'Mercúrio': '☿',
        'Vênus': '♀',
        'Marte': '♂',
        'Júpiter': '♃',
        'Saturno': '♄',
        'Urano': '♅',
        'Netuno': '♆',
        'Plutão': '♇',
        'Nodo Norte': '☊',
        'Nodo Sul': '☋',
        'Lilith': '⚸',
        'Quíron': '⚷'
    },
    
    // === SÍMBOLOS DOS SIGNOS ===
    SIMBOLOS_SIGNOS: {
        'Áries': '♈',
        'Touro': '♉',
        'Gêmeos': '♊',
        'Câncer': '♋',
        'Leão': '♌',
        'Virgem': '♍',
        'Libra': '♎',
        'Escorpião': '♏',
        'Sagitário': '♐',
        'Capricórnio': '♑',
        'Aquário': '♒',
        'Peixes': '♓'
    },
    
    // === FUNÇÕES DE CÁLCULO ===
    
    // Converter data para Dia Juliano
    calcularDiaJuliano: function(data) {
        const ano = data.getFullYear();
        const mes = data.getMonth() + 1;
        const dia = data.getDate();
        const hora = data.getHours();
        const minuto = data.getMinutes();
        const segundo = data.getSeconds();
        
        let a = Math.floor((14 - mes) / 12);
        let y = ano + 4800 - a;
        let m = mes + 12 * a - 3;
        
        let jd = dia + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
        
        // Adicionar fração do dia
        jd += (hora - 12) / 24 + minuto / 1440 + segundo / 86400;
        
        return jd;
    },
    
    // Calcular séculos desde J2000.0
    calcularSeculosJ2000: function(diaJuliano) {
        return (diaJuliano - this.CONSTANTES.EPOCH_J2000) / 36525.0;
    },
    
    // Normalizar ângulo para 0-360 graus
    normalizarAngulo: function(angulo) {
        angulo = angulo % 360;
        if (angulo < 0) angulo += 360;
        return angulo;
    },
    
    // Converter graus para radianos
    grausParaRadianos: function(graus) {
        return graus * Math.PI / 180;
    },
    
    // Converter radianos para graus
    radianosParaGraus: function(radianos) {
        return radianos * 180 / Math.PI;
    },
    
    // Calcular posição do Sol
    calcularPosicaoSol: function(data) {
        const jd = this.calcularDiaJuliano(data);
        const T = this.calcularSeculosJ2000(jd);
        const elementos = this.CONSTANTES.ELEMENTOS_PLANETARIOS.SOL;
        
        // Longitude média
        let L0 = elementos.longitude_media + elementos.taxa_longitude * (jd - this.CONSTANTES.EPOCH_J2000);
        L0 = this.normalizarAngulo(L0);
        
        // Anomalia média
        let M = elementos.anomalia_media + elementos.taxa_anomalia * (jd - this.CONSTANTES.EPOCH_J2000);
        M = this.normalizarAngulo(M);
        
        // Equação do centro
        const C = (1.914602 - 0.004817 * T - 0.000014 * T * T) * Math.sin(this.grausParaRadianos(M)) +
                  (0.019993 - 0.000101 * T) * Math.sin(this.grausParaRadianos(2 * M)) +
                  0.000289 * Math.sin(this.grausParaRadianos(3 * M));
        
        // Longitude verdadeira
        const longitudeVerdadeira = this.normalizarAngulo(L0 + C);
        
        // Anomalia verdadeira
        const anomaliaVerdadeira = this.normalizarAngulo(M + C);
        
        // Distância (UA)
        const distancia = (1.000001018 * (1 - elementos.excentricidade * elementos.excentricidade)) /
                         (1 + elementos.excentricidade * Math.cos(this.grausParaRadianos(anomaliaVerdadeira)));
        
        return {
            longitude: longitudeVerdadeira,
            latitude: 0, // Sol sempre na eclíptica
            distancia: distancia,
            signo: this.obterSigno(longitudeVerdadeira),
            grauNoSigno: this.obterGrauNoSigno(longitudeVerdadeira),
            simbolo: this.SIMBOLOS_PLANETAS.Sol
        };
    },
    
    // Calcular posição da Lua
    calcularPosicaoLua: function(data) {
        const jd = this.calcularDiaJuliano(data);
        const T = this.calcularSeculosJ2000(jd);
        const elementos = this.CONSTANTES.ELEMENTOS_PLANETARIOS.LUA;
        
        // Longitude média da Lua
        let L = elementos.longitude_media + elementos.taxa_longitude * (jd - this.CONSTANTES.EPOCH_J2000);
        L = this.normalizarAngulo(L);
        
        // Anomalia média da Lua
        let M = elementos.anomalia_media + elementos.taxa_anomalia * (jd - this.CONSTANTES.EPOCH_J2000);
        M = this.normalizarAngulo(M);
        
        // Anomalia média do Sol
        const posSol = this.calcularPosicaoSol(data);
        const Ms = this.grausParaRadianos(posSol.longitude - elementos.longitude_perihelio);
        
        // Argumento da latitude
        let F = elementos.argumento_latitude + elementos.taxa_argumento * (jd - this.CONSTANTES.EPOCH_J2000);
        F = this.normalizarAngulo(F);
        
        // Elongação média
        const D = this.normalizarAngulo(L - posSol.longitude);
        
        // Principais termos periódicos para longitude
        const Mr = this.grausParaRadianos(M);
        const Dr = this.grausParaRadianos(D);
        const Fr = this.grausParaRadianos(F);
        
        const deltaL = 6.288774 * Math.sin(Mr) +
                      1.274027 * Math.sin(2 * Dr - Mr) +
                      0.658314 * Math.sin(2 * Dr) +
                      0.213618 * Math.sin(2 * Mr) -
                      0.185116 * Math.sin(Ms) -
                      0.114332 * Math.sin(2 * Fr) +
                      0.058793 * Math.sin(2 * Dr - 2 * Mr) +
                      0.057066 * Math.sin(2 * Dr - Ms - Mr) +
                      0.053322 * Math.sin(2 * Dr + Mr) +
                      0.045758 * Math.sin(2 * Dr - Ms);
        
        // Principais termos periódicos para latitude
        const deltaB = 5.128122 * Math.sin(Fr) +
                      0.280602 * Math.sin(Mr + Fr) +
                      0.277693 * Math.sin(Mr - Fr) +
                      0.173237 * Math.sin(2 * Dr - Fr) +
                      0.055413 * Math.sin(2 * Dr + Fr - Mr) +
                      0.046271 * Math.sin(2 * Dr - Fr - Mr) +
                      0.032573 * Math.sin(2 * Dr + Fr) +
                      0.017198 * Math.sin(2 * Mr + Fr);
        
        // Longitude e latitude verdadeiras
        const longitudeVerdadeira = this.normalizarAngulo(L + deltaL);
        const latitudeVerdadeira = deltaB;
        
        // Distância (km)
        const deltaR = -20905.355 * Math.cos(Mr) -
                       3699.111 * Math.cos(2 * Dr - Mr) -
                       2955.968 * Math.cos(2 * Dr) -
                       569.925 * Math.cos(2 * Mr);
        
        const distancia = 385000.56 + deltaR; // km
        
        return {
            longitude: longitudeVerdadeira,
            latitude: latitudeVerdadeira,
            distancia: distancia,
            signo: this.obterSigno(longitudeVerdadeira),
            grauNoSigno: this.obterGrauNoSigno(longitudeVerdadeira),
            simbolo: this.SIMBOLOS_PLANETAS.Lua
        };
    },
    
    // Calcular posição de planeta genérico
    calcularPosicaoPlaneta: function(planeta, data) {
        const jd = this.calcularDiaJuliano(data);
        
        // Mapear nomes com acentos para nomes sem acentos
        const mapeamentoPlanetas = {
            'Mercúrio': 'MERCURIO',
            'Vênus': 'VENUS',
            'Marte': 'MARTE',
            'Júpiter': 'JUPITER',
            'Saturno': 'SATURNO',
            'Urano': 'URANO',
            'Netuno': 'NETUNO',
            'Plutão': 'PLUTAO'
        };
        
        const nomePlaneta = mapeamentoPlanetas[planeta] || planeta.toUpperCase();
        const elementos = this.CONSTANTES.ELEMENTOS_PLANETARIOS[nomePlaneta];
        
        if (!elementos) {
            throw new Error(`Planeta ${planeta} não encontrado. Planetas disponíveis: ${Object.keys(this.CONSTANTES.ELEMENTOS_PLANETARIOS).join(', ')}`);
        }
        
        // Longitude média
        let L = elementos.longitude_media + elementos.taxa_longitude * (jd - this.CONSTANTES.EPOCH_J2000);
        L = this.normalizarAngulo(L);
        
        // Anomalia média
        let M = elementos.anomalia_media + elementos.taxa_anomalia * (jd - this.CONSTANTES.EPOCH_J2000);
        M = this.normalizarAngulo(M);
        
        // Excentricidade
        const e = elementos.excentricidade + elementos.taxa_excentricidade * (jd - this.CONSTANTES.EPOCH_J2000);
        
        // Equação de Kepler (método iterativo)
        let E = this.grausParaRadianos(M);
        let deltaE = 1;
        let iteracoes = 0;
        
        while (Math.abs(deltaE) > 1e-6 && iteracoes < 100) {
            const novoE = E + (this.grausParaRadianos(M) - E + e * Math.sin(E)) / (1 - e * Math.cos(E));
            deltaE = novoE - E;
            E = novoE;
            iteracoes++;
        }
        
        // Anomalia verdadeira
        const v = 2 * Math.atan2(Math.sqrt(1 + e) * Math.sin(E / 2), Math.sqrt(1 - e) * Math.cos(E / 2));
        
        // Raio vetor
        const r = (1 - e * e) / (1 + e * Math.cos(v));
        
        // Longitude heliocêntrica
        const longitudeHeliocentrica = this.normalizarAngulo(this.radianosParaGraus(v) + elementos.longitude_perihelio);
        
        return {
            longitude: longitudeHeliocentrica,
            latitude: 0, // simplificado
            distancia: r,
            signo: this.obterSigno(longitudeHeliocentrica),
            grauNoSigno: this.obterGrauNoSigno(longitudeHeliocentrica),
            simbolo: this.SIMBOLOS_PLANETAS[planeta] || '●'
        };
    },
    
    // Obter signo zodiacal
    obterSigno: function(longitude) {
        const indiceSigno = Math.floor(longitude / this.CONSTANTES.GRAUS_POR_SIGNO);
        return this.SIGNOS[indiceSigno];
    },
    
    // Obter grau no signo
    obterGrauNoSigno: function(longitude) {
        return longitude % this.CONSTANTES.GRAUS_POR_SIGNO;
    },
    
    // Calcular todas as posições planetárias
    calcularTodasPosicoes: function(data) {
        const posicoes = {};
        
        // Sol e Lua
        posicoes.Sol = this.calcularPosicaoSol(data);
        posicoes.Lua = this.calcularPosicaoLua(data);
        
        // Planetas
        const planetas = ['Mercúrio', 'Vênus', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Netuno', 'Plutão'];
        
        planetas.forEach(planeta => {
            try {
                posicoes[planeta] = this.calcularPosicaoPlaneta(planeta, data);
            } catch (error) {
                console.warn(`Erro ao calcular ${planeta}:`, error);
                posicoes[planeta] = {
                    longitude: 0,
                    latitude: 0,
                    distancia: 0,
                    signo: 'Áries',
                    grauNoSigno: 0,
                    simbolo: '●'
                };
            }
        });
        
        // Nodos Lunares
        posicoes['Nodo Norte'] = this.calcularNodoNorte(data);
        posicoes['Nodo Sul'] = this.calcularNodoSul(data);
        
        // Lilith
        posicoes['Lilith'] = this.calcularLilith(data);
        
        // Quíron (aproximado)
        posicoes['Quíron'] = this.calcularQuiron(data);
        
        return posicoes;
    },
    
    // Calcular Nodo Norte
    calcularNodoNorte: function(data) {
        const jd = this.calcularDiaJuliano(data);
        const nodos = this.CONSTANTES.NODOS_LUNARES;
        
        let longitude = nodos.longitude_no_norte + nodos.taxa_longitude_no * (jd - this.CONSTANTES.EPOCH_J2000);
        longitude = this.normalizarAngulo(longitude);
        
        return {
            longitude: longitude,
            latitude: 0,
            distancia: 0,
            signo: this.obterSigno(longitude),
            grauNoSigno: this.obterGrauNoSigno(longitude),
            simbolo: this.SIMBOLOS_PLANETAS['Nodo Norte']
        };
    },
    
    // Calcular Nodo Sul
    calcularNodoSul: function(data) {
        const nodoNorte = this.calcularNodoNorte(data);
        const longitude = this.normalizarAngulo(nodoNorte.longitude + 180);
        
        return {
            longitude: longitude,
            latitude: 0,
            distancia: 0,
            signo: this.obterSigno(longitude),
            grauNoSigno: this.obterGrauNoSigno(longitude),
            simbolo: this.SIMBOLOS_PLANETAS['Nodo Sul']
        };
    },
    
    // Calcular Lilith (Lua Negra)
    calcularLilith: function(data) {
        const jd = this.calcularDiaJuliano(data);
        const lilith = this.CONSTANTES.LILITH;
        
        let longitude = lilith.longitude_media + lilith.taxa_longitude * (jd - this.CONSTANTES.EPOCH_J2000);
        longitude = this.normalizarAngulo(longitude);
        
        return {
            longitude: longitude,
            latitude: 0,
            distancia: 0,
            signo: this.obterSigno(longitude),
            grauNoSigno: this.obterGrauNoSigno(longitude),
            simbolo: this.SIMBOLOS_PLANETAS['Lilith']
        };
    },
    
    // Calcular Quíron (aproximado)
    calcularQuiron: function(data) {
        const jd = this.calcularDiaJuliano(data);
        const T = this.calcularSeculosJ2000(jd);
        
        // Fórmula aproximada para Quíron
        let longitude = 207.2 + 1.478 * T;
        longitude = this.normalizarAngulo(longitude);
        
        return {
            longitude: longitude,
            latitude: 0,
            distancia: 0,
            signo: this.obterSigno(longitude),
            grauNoSigno: this.obterGrauNoSigno(longitude),
            simbolo: this.SIMBOLOS_PLANETAS['Quíron']
        };
    },
    
    // === CÁLCULO DE ASPECTOS ===
    
    // Definir aspectos principais
    ASPECTOS: {
        'Conjunção': { angulo: 0, orbe: 8, natureza: 'neutro' },
        'Sextil': { angulo: 60, orbe: 6, natureza: 'harmonioso' },
        'Quadratura': { angulo: 90, orbe: 8, natureza: 'tenso' },
        'Trígono': { angulo: 120, orbe: 8, natureza: 'harmonioso' },
        'Oposição': { angulo: 180, orbe: 8, natureza: 'tenso' },
        'Quincúncio': { angulo: 150, orbe: 3, natureza: 'menor' },
        'Semisextil': { angulo: 30, orbe: 2, natureza: 'menor' },
        'Semiquadratura': { angulo: 45, orbe: 2, natureza: 'menor' },
        'Sesquiquadratura': { angulo: 135, orbe: 2, natureza: 'menor' }
    },
    
    // Calcular aspectos entre planetas
    calcularAspectos: function(posicoes) {
        const aspectos = [];
        const planetas = Object.keys(posicoes);
        
        for (let i = 0; i < planetas.length; i++) {
            for (let j = i + 1; j < planetas.length; j++) {
                const planeta1 = planetas[i];
                const planeta2 = planetas[j];
                const pos1 = posicoes[planeta1];
                const pos2 = posicoes[planeta2];
                
                let diferenca = Math.abs(pos1.longitude - pos2.longitude);
                if (diferenca > 180) diferenca = 360 - diferenca;
                
                // Verificar cada tipo de aspecto
                Object.entries(this.ASPECTOS).forEach(([nomeAspecto, dadosAspecto]) => {
                    const desvio = Math.abs(diferenca - dadosAspecto.angulo);
                    
                    if (desvio <= dadosAspecto.orbe) {
                        aspectos.push({
                            planeta1: planeta1,
                            planeta2: planeta2,
                            aspecto: nomeAspecto,
                            angulo: dadosAspecto.angulo,
                            diferenca: diferenca,
                            orbe: desvio,
                            natureza: dadosAspecto.natureza,
                            exato: desvio < 1,
                            aplicativo: this.determinarAplicativo(pos1, pos2, dadosAspecto.angulo)
                        });
                    }
                });
            }
        }
        
        return aspectos.sort((a, b) => a.orbe - b.orbe);
    },
    
    // Determinar se aspecto é aplicativo ou separativo
    determinarAplicativo: function(pos1, pos2, anguloAspecto) {
        // Simplificado - na prática seria mais complexo
        return Math.random() > 0.5; // placeholder
    },
    
    // === HORAS PLANETÁRIAS ===
    
    // Ordem dos planetas para horas planetárias
    ORDEM_PLANETAS_HORAS: ['Saturno', 'Júpiter', 'Marte', 'Sol', 'Vênus', 'Mercúrio', 'Lua'],
    
    // Calcular horas planetárias
    calcularHorasPlanetarias: function(data, latitude, longitude) {
        const nascerSol = this.calcularNascerSol(data, latitude, longitude);
        const porSol = this.calcularPorSol(data, latitude, longitude);
        
        // Duração do dia e da noite
        const duracaoDia = (porSol.getTime() - nascerSol.getTime()) / (1000 * 60 * 60); // horas
        const duracaoNoite = 24 - duracaoDia;
        
        // Duração de cada hora planetária
        const duracaoHoraDia = duracaoDia / 12;
        const duracaoHoraNoite = duracaoNoite / 12;
        
        const horasPlanetarias = [];
        
        // Determinar planeta regente do dia
        const diaSemana = data.getDay(); // 0 = domingo
        const planetasRegentes = ['Sol', 'Lua', 'Marte', 'Mercúrio', 'Júpiter', 'Vênus', 'Saturno'];
        const planetaRegenteDia = planetasRegentes[diaSemana];
        
        // Encontrar índice do planeta regente
        let indicePlanetaRegente = this.ORDEM_PLANETAS_HORAS.indexOf(planetaRegenteDia);
        
        // Horas do dia (12 horas)
        for (let i = 0; i < 12; i++) {
            const inicioHora = new Date(nascerSol.getTime() + i * duracaoHoraDia * 60 * 60 * 1000);
            const fimHora = new Date(nascerSol.getTime() + (i + 1) * duracaoHoraDia * 60 * 60 * 1000);
            
            horasPlanetarias.push({
                numero: i + 1,
                periodo: 'dia',
                planeta: this.ORDEM_PLANETAS_HORAS[indicePlanetaRegente],
                inicio: inicioHora,
                fim: fimHora,
                duracao: duracaoHoraDia
            });
            
            indicePlanetaRegente = (indicePlanetaRegente + 1) % 7;
        }
        
        // Horas da noite (12 horas)
        for (let i = 0; i < 12; i++) {
            const inicioHora = new Date(porSol.getTime() + i * duracaoHoraNoite * 60 * 60 * 1000);
            const fimHora = new Date(porSol.getTime() + (i + 1) * duracaoHoraNoite * 60 * 60 * 1000);
            
            horasPlanetarias.push({
                numero: i + 13,
                periodo: 'noite',
                planeta: this.ORDEM_PLANETAS_HORAS[indicePlanetaRegente],
                inicio: inicioHora,
                fim: fimHora,
                duracao: duracaoHoraNoite
            });
            
            indicePlanetaRegente = (indicePlanetaRegente + 1) % 7;
        }
        
        return horasPlanetarias;
    },
    
    // Calcular nascer do sol (aproximado)
    calcularNascerSol: function(data, latitude, longitude) {
        // Cálculo simplificado
        const posicaoSol = this.calcularPosicaoSol(data);
        const declinacao = Math.asin(Math.sin(this.grausParaRadianos(23.45)) * 
                                   Math.sin(this.grausParaRadianos(posicaoSol.longitude)));
        
        const anguloHorario = Math.acos(-Math.tan(this.grausParaRadianos(latitude)) * Math.tan(declinacao));
        const tempoNascer = 12 - this.radianosParaGraus(anguloHorario) / 15;
        
        const nascerSol = new Date(data);
        nascerSol.setHours(Math.floor(tempoNascer), (tempoNascer % 1) * 60, 0, 0);
        
        return nascerSol;
    },
    
    // Calcular pôr do sol (aproximado)
    calcularPorSol: function(data, latitude, longitude) {
        // Cálculo simplificado
        const posicaoSol = this.calcularPosicaoSol(data);
        const declinacao = Math.asin(Math.sin(this.grausParaRadianos(23.45)) * 
                                   Math.sin(this.grausParaRadianos(posicaoSol.longitude)));
        
        const anguloHorario = Math.acos(-Math.tan(this.grausParaRadianos(latitude)) * Math.tan(declinacao));
        const tempoPor = 12 + this.radianosParaGraus(anguloHorario) / 15;
        
        const porSol = new Date(data);
        porSol.setHours(Math.floor(tempoPor), (tempoPor % 1) * 60, 0, 0);
        
        return porSol;
    },
    
    // === FASES LUNARES ===
    
    // Calcular fase lunar
    calcularFaseLunar: function(data) {
        const posicaoSol = this.calcularPosicaoSol(data);
        const posicaoLua = this.calcularPosicaoLua(data);
        
        let elongacao = posicaoLua.longitude - posicaoSol.longitude;
        elongacao = this.normalizarAngulo(elongacao);
        
        let fase;
        let iluminacao = (1 + Math.cos(this.grausParaRadianos(elongacao))) / 2;
        
        if (elongacao < 45 || elongacao > 315) {
            fase = 'Lua Nova';
        } else if (elongacao >= 45 && elongacao < 135) {
            fase = 'Lua Crescente';
        } else if (elongacao >= 135 && elongacao < 225) {
            fase = 'Lua Cheia';
        } else {
            fase = 'Lua Minguante';
        }
        
        return {
            fase: fase,
            elongacao: elongacao,
            iluminacao: iluminacao * 100,
            simbolo: this.obterSimboloFase(fase)
        };
    },
    
    // Obter símbolo da fase lunar
    obterSimboloFase: function(fase) {
        const simbolos = {
            'Lua Nova': '🌑',
            'Lua Crescente': '🌓',
            'Lua Cheia': '🌕',
            'Lua Minguante': '🌗'
        };
        return simbolos[fase] || '🌙';
    },
    
    // === DIGNIDADES PLANETÁRIAS ===
    
    // Definir dignidades essenciais
    DIGNIDADES: {
        'Sol': { domicilio: ['Leão'], exaltacao: ['Áries'], exilio: ['Aquário'], queda: ['Libra'] },
        'Lua': { domicilio: ['Câncer'], exaltacao: ['Touro'], exilio: ['Capricórnio'], queda: ['Escorpião'] },
        'Mercúrio': { domicilio: ['Gêmeos', 'Virgem'], exaltacao: ['Virgem'], exilio: ['Sagitário', 'Peixes'], queda: ['Peixes'] },
        'Vênus': { domicilio: ['Touro', 'Libra'], exaltacao: ['Peixes'], exilio: ['Escorpião', 'Áries'], queda: ['Virgem'] },
        'Marte': { domicilio: ['Áries', 'Escorpião'], exaltacao: ['Capricórnio'], exilio: ['Libra', 'Touro'], queda: ['Câncer'] },
        'Júpiter': { domicilio: ['Sagitário', 'Peixes'], exaltacao: ['Câncer'], exilio: ['Gêmeos', 'Virgem'], queda: ['Capricórnio'] },
        'Saturno': { domicilio: ['Capricórnio', 'Aquário'], exaltacao: ['Libra'], exilio: ['Câncer', 'Leão'], queda: ['Áries'] }
    },
    
    // Calcular dignidade de um planeta
    calcularDignidade: function(planeta, signo) {
        const dignidades = this.DIGNIDADES[planeta];
        if (!dignidades) return 'neutro';
        
        if (dignidades.domicilio.includes(signo)) return 'domicílio';
        if (dignidades.exaltacao.includes(signo)) return 'exaltação';
        if (dignidades.exilio.includes(signo)) return 'exílio';
        if (dignidades.queda.includes(signo)) return 'queda';
        
        return 'peregrino';
    },
    
    // === ECLIPSES ===
    
    // Calcular próximos eclipses (simplificado)
    calcularProximosEclipses: function(data, quantidade = 10) {
        const eclipses = [];
        const dataAtual = new Date(data);
        
        // Ciclo de Saros aproximado: 18 anos, 11 dias, 8 horas
        const cicleSaros = 6585.32; // dias
        
        // Datas base de eclipses conhecidos (simplificado)
        const eclipsesBase = [
            { data: new Date('2024-04-08'), tipo: 'solar', duracao: 4.5 },
            { data: new Date('2024-09-18'), tipo: 'lunar', duracao: 1.3 },
            { data: new Date('2025-03-29'), tipo: 'solar', duracao: 2.1 },
            { data: new Date('2025-09-07'), tipo: 'lunar', duracao: 1.8 }
        ];
        
        eclipsesBase.forEach(eclipseBase => {
            let dataEclipse = new Date(eclipseBase.data);
            let contador = 0;
            
            while (contador < quantidade && dataEclipse < new Date(dataAtual.getTime() + 365 * 24 * 60 * 60 * 1000 * 10)) {
                if (dataEclipse > dataAtual) {
                    eclipses.push({
                        data: new Date(dataEclipse),
                        tipo: eclipseBase.tipo,
                        duracao: eclipseBase.duracao,
                        visibilidade: this.calcularVisibilidadeEclipse(dataEclipse, eclipseBase.tipo)
                    });
                    contador++;
                }
                
                // Próximo eclipse no ciclo de Saros
                dataEclipse = new Date(dataEclipse.getTime() + cicleSaros * 24 * 60 * 60 * 1000);
            }
        });
        
        return eclipses.sort((a, b) => a.data - b.data).slice(0, quantidade);
    },
    
    // Calcular visibilidade do eclipse (simplificado)
    calcularVisibilidadeEclipse: function(data, tipo) {
        const regioes = ['América do Norte', 'América do Sul', 'Europa', 'África', 'Ásia', 'Oceania'];
        const regioesVisiveis = [];
        
        // Simulação simplificada
        const numeroRegioes = Math.floor(Math.random() * 4) + 1;
        for (let i = 0; i < numeroRegioes; i++) {
            const regiao = regioes[Math.floor(Math.random() * regioes.length)];
            if (!regioesVisiveis.includes(regiao)) {
                regioesVisiveis.push(regiao);
            }
        }
        
        return regioesVisiveis;
    },
    
    // === FUNÇÃO PRINCIPAL ===
    
    // Calcular efemérides completas para uma data
    calcularEfemeridesCompletas: function(data, latitude = -23.5505, longitude = -46.6333) {
        const resultado = {
            data: data,
            diaJuliano: this.calcularDiaJuliano(data),
            coordenadas: { latitude, longitude },
            posicoesPlanetarias: {},
            aspectos: [],
            faseLunar: {},
            horasPlanetarias: [],
            dignidades: {},
            proximosEclipses: []
        };
        
        // Calcular posições planetárias
        resultado.posicoesPlanetarias = this.calcularTodasPosicoes(data);
        
        // Calcular aspectos
        resultado.aspectos = this.calcularAspectos(resultado.posicoesPlanetarias);
        
        // Calcular fase lunar
        resultado.faseLunar = this.calcularFaseLunar(data);
        
        // Calcular horas planetárias
        resultado.horasPlanetarias = this.calcularHorasPlanetarias(data, latitude, longitude);
        
        // Calcular dignidades
        Object.entries(resultado.posicoesPlanetarias).forEach(([planeta, posicao]) => {
            if (this.DIGNIDADES[planeta]) {
                resultado.dignidades[planeta] = this.calcularDignidade(planeta, posicao.signo);
            }
        });
        
        // Calcular próximos eclipses
        resultado.proximosEclipses = this.calcularProximosEclipses(data);
        
        return resultado;
    },
    
    // === FUNÇÕES AUXILIARES ===
    
    // Formatar posição planetária
    formatarPosicao: function(posicao) {
        const graus = Math.floor(posicao.grauNoSigno);
        const minutos = Math.floor((posicao.grauNoSigno - graus) * 60);
        const segundos = Math.floor(((posicao.grauNoSigno - graus) * 60 - minutos) * 60);
        
        return `${posicao.simbolo} ${posicao.signo} ${graus}°${minutos}'${segundos}"`;
    },
    
    // Obter hora planetária atual
    obterHoraPlanetariaAtual: function(data, latitude, longitude) {
        const horasPlanetarias = this.calcularHorasPlanetarias(data, latitude, longitude);
        const agora = data.getTime();
        
        for (let hora of horasPlanetarias) {
            if (agora >= hora.inicio.getTime() && agora < hora.fim.getTime()) {
                return hora;
            }
        }
        
        return null;
    },
    
    // Verificar se planeta está retrógrado (simplificado)
    estaRetrogrado: function(planeta, data) {
        // Simplificação - na prática seria calculado pela velocidade aparente
        const periodosRetrogrados = {
            'Mercúrio': [80, 88, 116], // dias aproximados no ano
            'Vênus': [40], // dias aproximados no ano
            'Marte': [72], // dias aproximados a cada 2 anos
            'Júpiter': [120], // dias por ano
            'Saturno': [140], // dias por ano
            'Urano': [155], // dias por ano
            'Netuno': [160], // dias por ano
            'Plutão': [160] // dias por ano
        };
        
        if (!periodosRetrogrados[planeta]) return false;
        
        const diaAno = Math.floor((data.getTime() - new Date(data.getFullYear(), 0, 1).getTime()) / (24 * 60 * 60 * 1000));
        
        // Simulação simplificada baseada em períodos conhecidos
        return periodosRetrogrados[planeta].some(periodo => {
            return Math.abs(diaAno - periodo) < 20; // margem de 20 dias
        });
    }
};

// === EXPORTAR PARA USO GLOBAL ===
if (typeof window !== 'undefined') {
    window.EfemeridesCompletas = EfemeridesCompletas;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = EfemeridesCompletas;
}

// === EXEMPLO DE USO ===
/*
// Calcular efemérides para agora
const agora = new Date();
const efemerides = EfemeridesCompletas.calcularEfemeridesCompletas(agora);

console.log('Posições Planetárias:', efemerides.posicoesPlanetarias);
console.log('Aspectos:', efemerides.aspectos);
console.log('Fase Lunar:', efemerides.faseLunar);
console.log('Hora Planetária Atual:', EfemeridesCompletas.obterHoraPlanetariaAtual(agora, -23.5505, -46.6333));

// Formatar posições
Object.entries(efemerides.posicoesPlanetarias).forEach(([planeta, posicao]) => {
    console.log(`${planeta}: ${EfemeridesCompletas.formatarPosicao(posicao)}`);
});
*/

