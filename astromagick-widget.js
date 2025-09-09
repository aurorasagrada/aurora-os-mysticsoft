// === ASTROMÁGICK WIDGET - MINIATURA PARA MYSTICSOFT ===
// Versão compacta do webapp AstroMágick integrada ao sistema
// Integração com efemérides completas e base de dados lunar
// ========================================================

class AstroMagickWidget {
    constructor() {
        this.isVisible = false;
        this.currentDate = new Date();
        this.efemerides = window.EfemeridesCompletas || this.initEfemeridesBasicas();
        this.guiaLunar = window.BaseDadosGuiaLunar || this.initGuiaLunarBasico();
        this.init();
    }

    init() {
        this.createWidget();
        this.updateData();
        this.startAutoUpdate();
    }

    // === FALLBACK PARA DADOS BÁSICOS ===
    initEfemeridesBasicas() {
        return {
            CONSTANTES: {
                GRAUS_POR_SIGNO: 30,
                SIGNOS: ['Áries', 'Touro', 'Gêmeos', 'Câncer', 'Leão', 'Virgem', 
                        'Libra', 'Escorpião', 'Sagitário', 'Capricórnio', 'Aquário', 'Peixes'],
                PLANETAS: ['Sol', 'Lua', 'Mercúrio', 'Vênus', 'Marte', 'Júpiter', 'Saturno'],
                FASES_LUNARES: ['Nova', 'Crescente', 'Cheia', 'Minguante'],
                EPOCH_J2000: 2451545.0
            },

            calcularPosicaoSol(data) {
                const diasDesdeEpoch = this.calcularDiasDesdeEpoch(data);
                const longitudeMedia = 280.46646 + (0.98564736 * diasDesdeEpoch);
                const anomaliaMedia = 357.52911 + (0.98560028 * diasDesdeEpoch);
                
                const centro = 1.914602 * Math.sin(this.grausParaRadianos(anomaliaMedia));
                const longitudeVerdadeira = longitudeMedia + centro;
                
                return this.normalizarGraus(longitudeVerdadeira);
            },

            calcularFaseLunar(data) {
                const diasDesdeEpoch = this.calcularDiasDesdeEpoch(data);
                const longitudeLua = 218.3164477 + (13.17639648 * diasDesdeEpoch);
                const longitudeSol = this.calcularPosicaoSol(data);
                
                const diferenca = this.normalizarGraus(longitudeLua - longitudeSol);
                
                if (diferenca < 45 || diferenca > 315) return 'Nova';
                if (diferenca >= 45 && diferenca < 135) return 'Crescente';
                if (diferenca >= 135 && diferenca < 225) return 'Cheia';
                return 'Minguante';
            },

            // Cálculo do signo solar
            calcularSignoSolar(data) {
                const posicaoSol = this.calcularPosicaoSol(data);
                const indiceSigno = Math.floor(posicaoSol / 30);
                return this.CONSTANTES.SIGNOS[indiceSigno];
            },

            // Utilitários
            calcularDiasDesdeEpoch(data) {
                const epoch = new Date(2000, 0, 1, 12, 0, 0); // J2000.0
                return (data.getTime() - epoch.getTime()) / (1000 * 60 * 60 * 24);
            },

            grausParaRadianos(graus) {
                return graus * Math.PI / 180;
            },

            normalizarGraus(graus) {
                while (graus < 0) graus += 360;
                while (graus >= 360) graus -= 360;
                return graus;
            }
        };
    }

    // === DADOS REDUZIDOS DAS DEUSAS ===
    initDeusas() {
        // Base reduzida com deusas principais para cada mês
        return {
            1: { // Janeiro
                1: { nome: "Brigid", elemento: "Fogo", dominio: "Forja, Poesia, Cura", cores: ["Vermelho", "Dourado"] },
                15: { nome: "Ísis", elemento: "Água", dominio: "Magia, Mistérios", cores: ["Azul", "Prateado"] },
                31: { nome: "Hécate", elemento: "Terra", dominio: "Magia, Encruzilhadas", cores: ["Negro", "Roxo"] }
            },
            2: { // Fevereiro
                1: { nome: "Imbolc", elemento: "Fogo", dominio: "Purificação, Luz", cores: ["Branco", "Dourado"] },
                14: { nome: "Afrodite", elemento: "Água", dominio: "Amor, Beleza", cores: ["Rosa", "Verde"] },
                28: { nome: "Perséfone", elemento: "Terra", dominio: "Renovação, Mistérios", cores: ["Verde", "Roxo"] }
            },
            3: { // Março
                1: { nome: "Atena", elemento: "Ar", dominio: "Sabedoria, Guerra", cores: ["Azul", "Dourado"] },
                20: { nome: "Ostara", elemento: "Terra", dominio: "Equinócio, Fertilidade", cores: ["Verde", "Amarelo"] },
                31: { nome: "Artemis", elemento: "Lua", dominio: "Caça, Lua", cores: ["Prateado", "Verde"] }
            },
            4: { // Abril
                1: { nome: "Flora", elemento: "Terra", dominio: "Flores, Primavera", cores: ["Rosa", "Verde"] },
                15: { nome: "Freya", elemento: "Ar", dominio: "Amor, Guerra", cores: ["Dourado", "Vermelho"] },
                30: { nome: "Beltane", elemento: "Fogo", dominio: "Fertilidade, Paixão", cores: ["Vermelho", "Verde"] }
            },
            5: { // Maio
                1: { nome: "Maia", elemento: "Terra", dominio: "Crescimento, Nutrição", cores: ["Verde", "Marrom"] },
                15: { nome: "Tara", elemento: "Água", dominio: "Compaixão, Proteção", cores: ["Verde", "Branco"] },
                31: { nome: "Diana", elemento: "Lua", dominio: "Caça, Proteção", cores: ["Prateado", "Verde"] }
            },
            6: { // Junho
                1: { nome: "Juno", elemento: "Ar", dominio: "Casamento, Proteção", cores: ["Azul", "Branco"] },
                21: { nome: "Litha", elemento: "Fogo", dominio: "Solstício, Poder", cores: ["Dourado", "Vermelho"] },
                30: { nome: "Saraswati", elemento: "Água", dominio: "Conhecimento, Artes", cores: ["Branco", "Azul"] }
            },
            7: { // Julho
                1: { nome: "Cerridwen", elemento: "Água", dominio: "Transformação, Caldeirão", cores: ["Negro", "Prateado"] },
                15: { nome: "Sekhmet", elemento: "Fogo", dominio: "Poder, Cura", cores: ["Vermelho", "Dourado"] },
                31: { nome: "Lughnasadh", elemento: "Terra", dominio: "Colheita, Sacrifício", cores: ["Dourado", "Marrom"] }
            },
            8: { // Agosto
                1: { nome: "Lammas", elemento: "Terra", dominio: "Primeira Colheita", cores: ["Dourado", "Marrom"] },
                15: { nome: "Hestia", elemento: "Fogo", dominio: "Lar, Lareira", cores: ["Vermelho", "Laranja"] },
                31: { nome: "Gaia", elemento: "Terra", dominio: "Terra Mãe", cores: ["Verde", "Marrom"] }
            },
            9: { // Setembro
                1: { nome: "Deméter", elemento: "Terra", dominio: "Colheita, Grãos", cores: ["Dourado", "Verde"] },
                22: { nome: "Mabon", elemento: "Ar", dominio: "Equinócio, Equilíbrio", cores: ["Laranja", "Vermelho"] },
                30: { nome: "Kali", elemento: "Fogo", dominio: "Destruição, Renovação", cores: ["Negro", "Vermelho"] }
            },
            10: { // Outubro
                1: { nome: "Morrigan", elemento: "Ar", dominio: "Guerra, Profecia", cores: ["Negro", "Vermelho"] },
                15: { nome: "Hécate", elemento: "Terra", dominio: "Magia, Encruzilhadas", cores: ["Negro", "Roxo"] },
                31: { nome: "Samhain", elemento: "Espírito", dominio: "Ancestrais, Véu", cores: ["Negro", "Laranja"] }
            },
            11: { // Novembro
                1: { nome: "Cailleach", elemento: "Ar", dominio: "Inverno, Anciã", cores: ["Azul", "Branco"] },
                15: { nome: "Skadi", elemento: "Terra", dominio: "Inverno, Caça", cores: ["Branco", "Azul"] },
                30: { nome: "Hel", elemento: "Terra", dominio: "Morte, Renascimento", cores: ["Negro", "Branco"] }
            },
            12: { // Dezembro
                1: { nome: "Frau Holle", elemento: "Ar", dominio: "Inverno, Neve", cores: ["Branco", "Azul"] },
                21: { nome: "Yule", elemento: "Fogo", dominio: "Solstício, Renascimento", cores: ["Verde", "Vermelho"] },
                31: { nome: "Janus", elemento: "Espírito", dominio: "Transições, Portais", cores: ["Dourado", "Prateado"] }
            }
        };
    }

    // === DADOS BÁSICOS DO GUIA LUNAR ===
    initGuiaLunarBasico() {
        return {
            fases: {
                'Nova': {
                    energia: 'Início, Intenções, Plantio de Sementes',
                    rituais: ['Definir intenções', 'Limpeza energética', 'Novos projetos'],
                    cristais: ['Obsidiana', 'Hematita', 'Turmalina Negra'],
                    cores: ['Negro', 'Azul Escuro', 'Roxo Profundo']
                },
                'Crescente': {
                    energia: 'Crescimento, Ação, Manifestação',
                    rituais: ['Feitiços de atração', 'Crescimento pessoal', 'Abundância'],
                    cristais: ['Quartzo Verde', 'Aventurina', 'Citrino'],
                    cores: ['Verde', 'Dourado', 'Amarelo']
                },
                'Cheia': {
                    energia: 'Plenitude, Poder Máximo, Realização',
                    rituais: ['Carregamento de cristais', 'Feitiços poderosos', 'Gratidão'],
                    cristais: ['Quartzo Branco', 'Selenita', 'Pedra da Lua'],
                    cores: ['Branco', 'Prateado', 'Azul Claro']
                },
                'Minguante': {
                    energia: 'Liberação, Banimento, Limpeza',
                    rituais: ['Banimento', 'Limpeza', 'Liberação de vícios'],
                    cristais: ['Ametista', 'Fluorita', 'Labradorita'],
                    cores: ['Roxo', 'Azul', 'Cinza']
                }
            },
            
            signos: {
                'Áries': { elemento: 'Fogo', qualidade: 'Cardeal', regente: 'Marte' },
                'Touro': { elemento: 'Terra', qualidade: 'Fixo', regente: 'Vênus' },
                'Gêmeos': { elemento: 'Ar', qualidade: 'Mutável', regente: 'Mercúrio' },
                'Câncer': { elemento: 'Água', qualidade: 'Cardeal', regente: 'Lua' },
                'Leão': { elemento: 'Fogo', qualidade: 'Fixo', regente: 'Sol' },
                'Virgem': { elemento: 'Terra', qualidade: 'Mutável', regente: 'Mercúrio' },
                'Libra': { elemento: 'Ar', qualidade: 'Cardeal', regente: 'Vênus' },
                'Escorpião': { elemento: 'Água', qualidade: 'Fixo', regente: 'Marte' },
                'Sagitário': { elemento: 'Fogo', qualidade: 'Mutável', regente: 'Júpiter' },
                'Capricórnio': { elemento: 'Terra', qualidade: 'Cardeal', regente: 'Saturno' },
                'Aquário': { elemento: 'Ar', qualidade: 'Fixo', regente: 'Saturno' },
                'Peixes': { elemento: 'Água', qualidade: 'Mutável', regente: 'Júpiter' }
            }
        };
    }

    // === CRIAÇÃO DO WIDGET ===
    createWidget() {
        // Criar janela do AstroMágick
        const windowHTML = `
            <div id="astromagick-window" class="window" style="display: none; width: 400px; height: 500px; left: 300px; top: 150px;">
                <div class="window-header">
                    <span class="window-title">🌙 AstroMágick</span>
                    <div class="window-controls">
                        <button class="window-btn minimize" onclick="astroMagick.minimize()">_</button>
                        <button class="window-btn close" onclick="astroMagick.close()">×</button>
                    </div>
                </div>
                <div class="window-content" style="padding: 15px; background: linear-gradient(135deg, #0b1836 0%, #3e0a29 100%); color: #f2eaff;">
                    
                    <!-- Header com data atual -->
                    <div class="astro-header" style="text-align: center; margin-bottom: 20px; padding: 10px; background: rgba(240,170,83,0.1); border-radius: 8px; border: 1px solid #f0aa53;">
                        <h3 style="color: #f0aa53; margin: 0; font-size: 16px;" id="astro-date">Carregando...</h3>
                        <p style="margin: 5px 0 0 0; font-size: 12px; opacity: 0.8;" id="astro-weekday">...</p>
                    </div>

                    <!-- Deusa do Dia -->
                    <div class="deusa-section" style="margin-bottom: 20px; padding: 15px; background: rgba(178,209,177,0.1); border-radius: 8px; border: 1px solid #b2d1b1;">
                        <h4 style="color: #b2d1b1; margin: 0 0 10px 0; font-size: 14px;">🌟 Deusa do Dia</h4>
                        <div id="deusa-info">
                            <p style="margin: 0; font-weight: bold; color: #f0aa53;" id="deusa-nome">Carregando...</p>
                            <p style="margin: 5px 0; font-size: 12px;" id="deusa-dominio">...</p>
                            <div style="display: flex; gap: 5px; margin-top: 8px;" id="deusa-cores"></div>
                        </div>
                    </div>

                    <!-- Informações Astrológicas -->
                    <div class="astro-section" style="margin-bottom: 20px; padding: 15px; background: rgba(62,10,41,0.3); border-radius: 8px; border: 1px solid #3e0a29;">
                        <h4 style="color: #f0aa53; margin: 0 0 10px 0; font-size: 14px;">🌙 Informações Astrológicas</h4>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 12px;">
                            <div>
                                <strong style="color: #b2d1b1;">Signo Solar:</strong>
                                <p style="margin: 2px 0;" id="signo-solar">...</p>
                            </div>
                            <div>
                                <strong style="color: #b2d1b1;">Fase Lunar:</strong>
                                <p style="margin: 2px 0;" id="fase-lunar">...</p>
                            </div>
                            <div>
                                <strong style="color: #b2d1b1;">Elemento:</strong>
                                <p style="margin: 2px 0;" id="elemento-dia">...</p>
                            </div>
                            <div>
                                <strong style="color: #b2d1b1;">Energia:</strong>
                                <p style="margin: 2px 0;" id="energia-dia">...</p>
                            </div>
                        </div>
                    </div>

                    <!-- Conselho do Dia -->
                    <div class="conselho-section" style="margin-bottom: 15px; padding: 15px; background: rgba(11,24,54,0.5); border-radius: 8px; border: 1px solid #0b1836;">
                        <h4 style="color: #f0aa53; margin: 0 0 10px 0; font-size: 14px;">✨ Conselho Místico</h4>
                        <p style="margin: 0; font-size: 12px; line-height: 1.4; font-style: italic;" id="conselho-dia">Carregando sabedoria ancestral...</p>
                    </div>

                    <!-- Botões de Ação -->
                    <div class="astro-actions" style="display: flex; gap: 10px; justify-content: center;">
                        <button class="btn btn-small" onclick="astroMagick.abrirWebappCompleto()" style="background: linear-gradient(to bottom, #b2d1b1, #8db08c); color: #000; border: 1px outset #b2d1b1; padding: 8px 12px; font-size: 11px; cursor: pointer;">
                            🔮 Webapp Completo
                        </button>
                        <button class="btn btn-small" onclick="astroMagick.atualizarDados()" style="background: linear-gradient(to bottom, #f0aa53, #d4941f); color: #000; border: 1px outset #f0aa53; padding: 8px 12px; font-size: 11px; cursor: pointer;">
                            🔄 Atualizar
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Adicionar ao DOM
        document.body.insertAdjacentHTML('beforeend', windowHTML);
    }

    // === ATUALIZAÇÃO DE DADOS ===
    updateData() {
        const agora = new Date();
        
        // Atualizar data
        document.getElementById('astro-date').textContent = agora.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
        
        document.getElementById('astro-weekday').textContent = agora.toLocaleDateString('pt-BR', {
            weekday: 'long'
        });

        // Obter deusa do dia
        const deusa = this.obterDeusaDoDia(agora);
        this.atualizarDeusa(deusa);

        // Calcular informações astrológicas
        const signoSolar = this.efemerides.calcularSignoSolar(agora);
        const faseLunar = this.efemerides.calcularFaseLunar(agora);
        
        document.getElementById('signo-solar').textContent = signoSolar;
        document.getElementById('fase-lunar').textContent = faseLunar;
        document.getElementById('elemento-dia').textContent = deusa.elemento;
        document.getElementById('energia-dia').textContent = this.calcularEnergiaDia(faseLunar);

        // Gerar conselho do dia
        const conselho = this.gerarConselhoDia(deusa, signoSolar, faseLunar);
        document.getElementById('conselho-dia').textContent = conselho;
    }

    obterDeusaDoDia(data) {
        const mes = data.getMonth() + 1;
        const dia = data.getDate();
        
        const deusasDoMes = this.deusas[mes];
        if (!deusasDoMes) return this.deusas[1][1]; // Fallback
        
        // Encontrar a deusa mais próxima do dia atual
        const diasDisponiveis = Object.keys(deusasDoMes).map(Number).sort((a, b) => a - b);
        let deusaEscolhida = deusasDoMes[diasDisponiveis[0]];
        
        for (let diaDisponivel of diasDisponiveis) {
            if (dia >= diaDisponivel) {
                deusaEscolhida = deusasDoMes[diaDisponivel];
            } else {
                break;
            }
        }
        
        return deusaEscolhida;
    }

    atualizarDeusa(deusa) {
        document.getElementById('deusa-nome').textContent = deusa.nome;
        document.getElementById('deusa-dominio').textContent = deusa.dominio;
        
        // Atualizar cores
        const coresContainer = document.getElementById('deusa-cores');
        coresContainer.innerHTML = '';
        
        deusa.cores.forEach(cor => {
            const corDiv = document.createElement('div');
            corDiv.style.cssText = `
                width: 20px; 
                height: 20px; 
                border-radius: 50%; 
                background: ${this.corParaHex(cor)}; 
                border: 2px solid #f0aa53;
                display: inline-block;
            `;
            corDiv.title = cor;
            coresContainer.appendChild(corDiv);
        });
    }

    calcularEnergiaDia(faseLunar) {
        const energias = {
            'Nova': 'Renovação',
            'Crescente': 'Expansão',
            'Cheia': 'Manifestação',
            'Minguante': 'Liberação'
        };
        return energias[faseLunar] || 'Transformação';
    }

    gerarConselhoDia(deusa, signo, fase) {
        const conselhos = [
            `A energia de ${deusa.nome} te convida a focar em ${deusa.dominio.split(',')[0].toLowerCase()}.`,
            `Com a Lua ${fase.toLowerCase()}, é momento de ${this.calcularEnergiaDia(fase).toLowerCase()}.`,
            `O Sol em ${signo} favorece ações relacionadas ao elemento ${deusa.elemento.toLowerCase()}.`,
            `${deusa.nome} sussurra: "Honre tua natureza ${deusa.elemento.toLowerCase()} hoje."`
        ];
        
        return conselhos[Math.floor(Math.random() * conselhos.length)];
    }

    corParaHex(nomeCor) {
        const cores = {
            'Vermelho': '#dc143c', 'Dourado': '#ffd700', 'Azul': '#4169e1',
            'Prateado': '#c0c0c0', 'Verde': '#32cd32', 'Negro': '#2f2f2f',
            'Roxo': '#8a2be2', 'Branco': '#ffffff', 'Rosa': '#ff69b4',
            'Amarelo': '#ffff00', 'Laranja': '#ff8c00', 'Marrom': '#8b4513'
        };
        return cores[nomeCor] || '#f0aa53';
    }

    // === CONTROLES DO WIDGET ===
    show() {
        const window = document.getElementById('astromagick-window');
        if (window) {
            window.style.display = 'block';
            this.isVisible = true;
            this.updateData();
            
            // Som de abertura
            if (window.auroraSounds) {
                auroraSounds.play('notify');
            }
        }
    }

    close() {
        const window = document.getElementById('astromagick-window');
        if (window) {
            window.style.display = 'none';
            this.isVisible = false;
            
            // Som de fechamento
            if (window.auroraSounds) {
                auroraSounds.play('click');
            }
        }
    }

    minimize() {
        this.close(); // Por simplicidade, minimizar = fechar
    }

    atualizarDados() {
        this.updateData();
        
        // Notificação de atualização
        if (window.notificationManager) {
            notificationManager.show("🌙 AstroMágick", "Dados atualizados com sucesso!", 'success');
        }
        
        // Som de confirmação
        if (window.auroraSounds) {
            auroraSounds.play('success');
        }
    }

    abrirWebappCompleto() {
        // Abrir o webapp completo em nova aba
        window.open('https://seu-webapp-astromagick.com', '_blank');
        
        // Notificação
        if (window.notificationManager) {
            notificationManager.show("🔮 AstroMágick", "Abrindo webapp completo...", 'info');
        }
    }

    // === AUTO-UPDATE ===
    startAutoUpdate() {
        // Atualizar a cada hora
        setInterval(() => {
            if (this.isVisible) {
                this.updateData();
            }
        }, 3600000); // 1 hora

        // Atualizar à meia-noite
        const agora = new Date();
        const meiaNoite = new Date(agora);
        meiaNoite.setHours(24, 0, 0, 0);
        
        const tempoParaMeiaNoite = meiaNoite.getTime() - agora.getTime();
        
        setTimeout(() => {
            this.updateData();
            // Configurar atualização diária
            setInterval(() => {
                this.updateData();
            }, 86400000); // 24 horas
        }, tempoParaMeiaNoite);
    }
}

// === INICIALIZAÇÃO GLOBAL ===
let astroMagick;

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    astroMagick = new AstroMagickWidget();
    console.log('🌙 AstroMágick Widget inicializado');
});

// Exportar para uso global
window.AstroMagickWidget = AstroMagickWidget;

