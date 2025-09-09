// === BARRA DE TAREFAS WINDOWS ME APRIMORADA ===
class TaskbarManager {
    constructor() {
        this.openApps = new Map();
        this.systemTrayItems = new Map();
        this.init();
    }

    init() {
        this.createEnhancedTaskbar();
        this.setupSystemTray();
        this.setupStartMenu();
        this.updateClock();
        setInterval(() => this.updateClock(), 1000);
    }

    createEnhancedTaskbar() {
        const taskbar = document.getElementById('taskbar');
        if (!taskbar) return;

        // Aplicar estilos Windows ME autênticos
        taskbar.innerHTML = `
            <!-- Botão Iniciar -->
            <button class="start-button" id="start-button">
                <span class="start-icon">🌟</span>
                <span class="start-text">Iniciar</span>
            </button>

            <!-- Separador -->
            <div class="taskbar-separator"></div>

            <!-- Área de aplicativos abertos -->
            <div class="taskbar-apps" id="taskbar-apps">
                <!-- Apps abertos aparecerão aqui -->
            </div>

            <!-- Separador da bandeja -->
            <div class="taskbar-separator"></div>

            <!-- Bandeja do sistema -->
            <div class="system-tray" id="system-tray">
                <!-- Indicador planetário -->
                <div class="tray-item" id="planetary-indicator" title="Hora Planetária">
                    <span id="planetary-symbol">☉</span>
                </div>

                <!-- AFAST! -->
                <div class="tray-item" id="afast-tray" title="AFAST! Guardiã Mística">
                    <img src="assets/icons/Afast!.png" alt="AFAST!" style="width: 16px; height: 16px;">
                </div>

                <!-- Volume -->
                <div class="tray-item" id="volume-tray" title="Volume">
                    <span>🔊</span>
                </div>

                <!-- Rede -->
                <div class="tray-item" id="network-tray" title="Conexão de Rede">
                    <span>📶</span>
                </div>
            </div>

            <!-- Separador do relógio -->
            <div class="taskbar-separator"></div>

            <!-- Relógio -->
            <div class="taskbar-clock" id="taskbar-clock">
                <div class="clock-time" id="clock-time">00:00</div>
            </div>
        `;

        this.setupTaskbarEvents();
    }

    setupTaskbarEvents() {
        // Botão Iniciar
        const startButton = document.getElementById('start-button');
        startButton.addEventListener('click', () => {
            if (typeof auroraSounds !== 'undefined' && auroraSounds) {
                auroraSounds.play('click');
            }
            this.toggleStartMenu();
        });

        // Indicador planetário
        const planetaryIndicator = document.getElementById('planetary-indicator');
        planetaryIndicator.addEventListener('click', () => {
            if (typeof auroraSounds !== 'undefined' && auroraSounds) {
                auroraSounds.play('click');
            }
            this.showPlanetaryStatus();
        });

        // AFAST! na bandeja
        const afastTray = document.getElementById('afast-tray');
        afastTray.addEventListener('click', () => {
            if (typeof auroraSounds !== 'undefined' && auroraSounds) {
                auroraSounds.play('shield');
            }
            this.showAFASTStatus();
        });

        // Volume
        const volumeTray = document.getElementById('volume-tray');
        volumeTray.addEventListener('click', () => {
            if (typeof auroraSounds !== 'undefined' && auroraSounds) {
                auroraSounds.play('click');
            }
            this.showVolumeControl();
        });

        // Relógio
        const clock = document.getElementById('taskbar-clock');
        clock.addEventListener('click', () => {
            if (typeof auroraSounds !== 'undefined' && auroraSounds) {
                auroraSounds.play('click');
            }
            this.showCalendar();
        });
    }

    setupSystemTray() {
        // Configurar itens da bandeja do sistema
        this.systemTrayItems.set('planetary', {
            element: document.getElementById('planetary-indicator'),
            tooltip: 'Hora Planetária Ativa'
        });

        this.systemTrayItems.set('afast', {
            element: document.getElementById('afast-tray'),
            tooltip: 'AFAST! Guardiã Mística - Sistema Protegido'
        });

        this.systemTrayItems.set('volume', {
            element: document.getElementById('volume-tray'),
            tooltip: 'Volume: 70%'
        });

        this.systemTrayItems.set('network', {
            element: document.getElementById('network-tray'),
            tooltip: 'Conexão de Rede: Conectado'
        });
    }

    setupStartMenu() {
        // Criar menu iniciar se não existir
        let startMenu = document.getElementById('start-menu');
        if (!startMenu) {
            startMenu = document.createElement('div');
            startMenu.id = 'start-menu';
            startMenu.className = 'start-menu';
            document.body.appendChild(startMenu);
        }

        startMenu.innerHTML = `
            <div class="start-menu-sidebar">
                <div class="start-menu-logo">
                    <img src="assets/icons/MysticSoft.png" alt="MysticSoft" style="width: 24px; height: 24px;">
                    <span>MYSTICSOFT</span>
                </div>
            </div>
            <div class="start-menu-content">
                <div class="start-menu-section">
                    <div class="start-menu-item" data-app="aurora-player">
                        <span>🎵</span>
                        <span>Aurora Player</span>
                    </div>
                    <div class="start-menu-item" data-app="afast">
                        <span>🛡️</span>
                        <span>AFAST! Guardiã</span>
                    </div>
                    <div class="start-menu-item" data-app="witch-tv">
                        <span>📺</span>
                        <span>Witch.TV</span>
                    </div>
                    <div class="start-menu-item" data-app="grimorio">
                        <span>📜</span>
                        <span>Grimório</span>
                    </div>
                </div>
                <div class="start-menu-separator"></div>
                <div class="start-menu-section">
                    <div class="start-menu-item" data-action="settings">
                        <span>⚙️</span>
                        <span>Configurações</span>
                    </div>
                    <div class="start-menu-item" data-action="help">
                        <span>❓</span>
                        <span>Ajuda</span>
                    </div>
                </div>
                <div class="start-menu-separator"></div>
                <div class="start-menu-section">
                    <div class="start-menu-item" data-action="shutdown">
                        <span>🌙</span>
                        <span>Desligar</span>
                    </div>
                </div>
            </div>
        `;

        // Eventos do menu iniciar
        startMenu.addEventListener('click', (e) => {
            const menuItem = e.target.closest('.start-menu-item');
            if (menuItem) {
                const app = menuItem.dataset.app;
                const action = menuItem.dataset.action;
                
                if (app) {
                    this.launchApp(app);
                } else if (action) {
                    this.handleStartMenuAction(action);
                }
                
                this.hideStartMenu();
            }
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.start-menu') && !e.target.closest('.start-button')) {
                this.hideStartMenu();
            }
        });
    }

    toggleStartMenu() {
        const startMenu = document.getElementById('start-menu');
        const isVisible = startMenu.style.display === 'block';
        
        if (isVisible) {
            this.hideStartMenu();
        } else {
            this.showStartMenu();
        }
    }

    showStartMenu() {
        const startMenu = document.getElementById('start-menu');
        const startButton = document.getElementById('start-button');
        
        startMenu.style.display = 'block';
        startButton.classList.add('pressed');
        
        // Posicionar menu
        const rect = startButton.getBoundingClientRect();
        startMenu.style.left = rect.left + 'px';
        startMenu.style.bottom = (window.innerHeight - rect.top) + 'px';
    }

    hideStartMenu() {
        const startMenu = document.getElementById('start-menu');
        const startButton = document.getElementById('start-button');
        
        startMenu.style.display = 'none';
        startButton.classList.remove('pressed');
    }

    launchApp(appName) {
        if (typeof auroraOS !== 'undefined' && auroraOS) {
            auroraOS.openApp(appName);
        }
        
        // Adicionar à barra de tarefas
        this.addAppToTaskbar(appName);
    }

    addAppToTaskbar(appName) {
        const taskbarApps = document.getElementById('taskbar-apps');
        
        // Verificar se já existe
        if (this.openApps.has(appName)) return;
        
        const appButton = document.createElement('button');
        appButton.className = 'taskbar-app';
        appButton.dataset.app = appName;
        
        const appNames = {
            'aurora-player': '🎵 Aurora Player',
            'afast': '🛡️ AFAST!',
            'witch-tv': '📺 Witch.TV',
            'grimorio': '📜 Grimório'
        };
        
        appButton.textContent = appNames[appName] || appName;
        appButton.addEventListener('click', () => {
            if (typeof auroraSounds !== 'undefined' && auroraSounds) {
                auroraSounds.play('click');
            }
            this.focusApp(appName);
        });
        
        taskbarApps.appendChild(appButton);
        this.openApps.set(appName, appButton);
    }

    removeAppFromTaskbar(appName) {
        const appButton = this.openApps.get(appName);
        if (appButton && appButton.parentNode) {
            appButton.parentNode.removeChild(appButton);
            this.openApps.delete(appName);
        }
    }

    focusApp(appName) {
        // Implementar foco no app
        console.log(`Focando app: ${appName}`);
    }

    handleStartMenuAction(action) {
        switch(action) {
            case 'settings':
                this.showSettings();
                break;
            case 'help':
                this.showHelp();
                break;
            case 'shutdown':
                this.shutdown();
                break;
        }
    }

    showSettings() {
        if (typeof auroraOS !== 'undefined' && auroraOS) {
            auroraOS.showNotification('⚙️ Configurações', 'Painel de configurações em desenvolvimento', 'info');
        }
    }

    showHelp() {
        if (typeof auroraOS !== 'undefined' && auroraOS) {
            auroraOS.showNotification('❓ Ajuda', 'MysticSoft v1.0 - Sistema Operacional Mágico\nDesenvolvido pela Aurora Sagrada', 'info');
        }
    }

    shutdown() {
        if (typeof auroraSounds !== 'undefined' && auroraSounds) {
            auroraSounds.play('shutdown');
        }
        
        if (typeof auroraOS !== 'undefined' && auroraOS) {
            auroraOS.showNotification('🌙 Desligando', 'O sistema será encerrado em breve...', 'warning');
        }
        
        setTimeout(() => {
            document.body.style.background = '#000';
            document.body.innerHTML = '<div style="color: #fff; text-align: center; padding-top: 200px; font-family: Arial;">🌙 MysticSoft encerrado com segurança</div>';
        }, 3000);
    }

    updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('pt-BR', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        const clockElement = document.getElementById('clock-time');
        if (clockElement) {
            clockElement.textContent = timeString;
        }
    }

    showPlanetaryStatus() {
        if (typeof astrologicalSystem !== 'undefined' && astrologicalSystem) {
            const status = astrologicalSystem.getPlanetaryStatus();
            if (typeof auroraOS !== 'undefined' && auroraOS) {
                auroraOS.showNotification(
                    `${status.planet.symbol} ${status.planet.name}`,
                    `Proteção: ${status.protection}\nStatus: ${status.status}`,
                    'info'
                );
            }
        }
    }

    showAFASTStatus() {
        if (typeof auroraOS !== 'undefined' && auroraOS) {
            auroraOS.showNotification(
                '🛡️ AFAST! Guardiã Mística',
                'Sistema protegido e funcionando normalmente\nÚltima verificação: Agora',
                'afast'
            );
        }
    }

    showVolumeControl() {
        if (typeof auroraOS !== 'undefined' && auroraOS) {
            auroraOS.showNotification('🔊 Volume', 'Volume atual: 70%\nClique para ajustar', 'info');
        }
    }

    showCalendar() {
        const now = new Date();
        const dateString = now.toLocaleDateString('pt-BR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        if (typeof auroraOS !== 'undefined' && auroraOS) {
            auroraOS.showNotification('📅 Data e Hora', dateString, 'info');
        }
    }
}

// CSS para a barra de tarefas aprimorada
const taskbarCSS = `
    #taskbar {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 28px;
        background: linear-gradient(to bottom, #dfdfdf 0%, #c0c0c0 50%, #a0a0a0 100%);
        border-top: 1px solid #ffffff;
        border-bottom: 1px solid #808080;
        display: flex;
        align-items: center;
        font-family: 'MS Sans Serif', sans-serif;
        font-size: 11px;
        z-index: 1000;
        box-shadow: inset 0 1px 0 #ffffff, inset 0 -1px 0 #808080;
    }

    .start-button {
        height: 22px;
        padding: 2px 8px;
        margin: 2px;
        background: linear-gradient(to bottom, #7fb069 0%, #8fc079 50%, #5a8a4a 100%);
        border: 1px outset #c0c0c0;
        color: white;
        font-weight: bold;
        font-family: 'MS Sans Serif', sans-serif;
        font-size: 11px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 4px;
        text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
    }

    .start-button:hover {
        background: linear-gradient(to bottom, #8fc079 0%, #7fb069 50%, #5a8a4a 100%);
    }

    .start-button.pressed {
        border: 1px inset #c0c0c0;
        background: linear-gradient(to bottom, #5a8a4a 0%, #7fb069 50%, #8fc079 100%);
    }

    .start-icon {
        font-size: 12px;
    }

    .taskbar-separator {
        width: 2px;
        height: 20px;
        margin: 0 2px;
        background: linear-gradient(to right, #808080 0%, #808080 1px, #ffffff 1px, #ffffff 2px);
    }

    .taskbar-apps {
        flex: 1;
        display: flex;
        align-items: center;
        gap: 2px;
        overflow: hidden;
    }

    .taskbar-app {
        height: 20px;
        padding: 2px 8px;
        background: linear-gradient(to bottom, #dfdfdf 0%, #c0c0c0 50%, #a0a0a0 100%);
        border: 1px outset #c0c0c0;
        font-family: 'MS Sans Serif', sans-serif;
        font-size: 11px;
        cursor: pointer;
        max-width: 160px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .taskbar-app:hover {
        border: 1px inset #c0c0c0;
    }

    .taskbar-app.active {
        border: 1px inset #c0c0c0;
        background: linear-gradient(to bottom, #a0a0a0 0%, #c0c0c0 50%, #dfdfdf 100%);
    }

    .system-tray {
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 0 4px;
    }

    .tray-item {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: 1px solid transparent;
        font-size: 12px;
    }

    .tray-item:hover {
        border: 1px outset #c0c0c0;
        background: #e0e0e0;
    }

    #planetary-indicator {
        animation: planet-glow 3s ease-in-out infinite;
        color: #FFD700;
        text-shadow: 0 0 4px currentColor;
    }

    @keyframes planet-glow {
        0%, 100% { opacity: 0.8; }
        50% { opacity: 1; }
    }

    .taskbar-clock {
        width: 46px;
        height: 22px;
        margin: 2px;
        background: #c0c0c0;
        border: 1px inset #c0c0c0;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-family: 'MS Sans Serif', sans-serif;
        font-size: 11px;
    }

    .taskbar-clock:hover {
        background: #e0e0e0;
    }

    .start-menu {
        position: fixed;
        width: 200px;
        background: #c0c0c0;
        border: 2px outset #c0c0c0;
        display: none;
        z-index: 10000;
        box-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .start-menu-sidebar {
        background: linear-gradient(to bottom, #0078d4 0%, #106ebe 100%);
        color: white;
        padding: 8px;
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: bold;
        font-size: 12px;
    }

    .start-menu-content {
        padding: 4px 0;
    }

    .start-menu-item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 4px 16px;
        cursor: pointer;
        font-family: 'MS Sans Serif', sans-serif;
        font-size: 11px;
    }

    .start-menu-item:hover {
        background: #0078d4;
        color: white;
    }

    .start-menu-separator {
        height: 1px;
        background: #808080;
        margin: 2px 8px;
        border-top: 1px solid #ffffff;
    }
`;

// Adicionar CSS ao documento
const taskbarStyleSheet = document.createElement('style');
taskbarStyleSheet.textContent = taskbarCSS;
document.head.appendChild(taskbarStyleSheet);

