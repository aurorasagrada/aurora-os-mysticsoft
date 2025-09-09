// === SISTEMA DE PAPEL DE PAREDE MYSTICSOFT ===
class WallpaperManager {
    constructor() {
        this.currentWallpaper = localStorage.getItem('mysticsoft-wallpaper') || 'cosmic';
        this.wallpapers = {
            cosmic: {
                name: '🌌 Cósmico',
                style: 'radial-gradient(circle at center, #1a0b2e 0%, #16213e 50%, #0f3460 100%)'
            },
            mystical: {
                name: '🔮 Místico', 
                style: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            },
            aurora: {
                name: '🌟 Aurora Sagrada',
                style: 'linear-gradient(45deg, #3e0a29 0%, #0b1836 50%, #f0aa53 100%)'
            },
            forest: {
                name: '🌲 Floresta Mística',
                style: 'linear-gradient(180deg, #b2d1b1 0%, #3e0a29 50%, #0b1836 100%)'
            },
            sunset: {
                name: '🌅 Pôr do Sol',
                style: 'linear-gradient(to bottom, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)'
            },
            ocean: {
                name: '🌊 Oceano Profundo',
                style: 'linear-gradient(to bottom, #0b1836 0%, #1e3c72 50%, #2a5298 100%)'
            }
        };
        this.init();
    }

    init() {
        this.createContextMenu();
        this.createWallpaperWindow();
        this.setupEventListeners();
        this.applyWallpaper(this.currentWallpaper);
    }

    createContextMenu() {
        // Remover menu existente se houver
        const existingMenu = document.getElementById('context-menu');
        if (existingMenu) existingMenu.remove();

        const contextMenu = document.createElement('div');
        contextMenu.id = 'context-menu';
        contextMenu.className = 'context-menu';
        contextMenu.innerHTML = `
            <div class="context-menu-item" data-action="wallpaper">
                <span>🖼️</span>
                <span>Papel de Parede</span>
            </div>
            <div class="context-menu-separator"></div>
            <div class="context-menu-item" data-action="refresh">
                <span>🔄</span>
                <span>Atualizar</span>
            </div>
            <div class="context-menu-item" data-action="properties">
                <span>⚙️</span>
                <span>Propriedades</span>
            </div>
        `;
        document.body.appendChild(contextMenu);
    }

    createWallpaperWindow() {
        // Remover janela existente se houver
        const existingWindow = document.getElementById('wallpaper-window');
        if (existingWindow) existingWindow.remove();

        const wallpaperWindow = document.createElement('div');
        wallpaperWindow.id = 'wallpaper-window';
        wallpaperWindow.className = 'window wallpaper-window';
        wallpaperWindow.innerHTML = `
            <div class="window-header">
                <div class="window-title">
                    <span>🖼️</span>
                    <span>Propriedades de Vídeo</span>
                </div>
                <div class="window-controls">
                    <button class="window-control" onclick="wallpaperManager.closeWindow()">×</button>
                </div>
            </div>
            <div class="window-content">
                <div class="wallpaper-content">
                    <h3>📜 Galeria de Papéis de Parede</h3>
                    <div class="wallpaper-gallery" id="wallpaper-gallery">
                        ${this.generateGalleryHTML()}
                    </div>
                    
                    <div class="wallpaper-upload">
                        <h4>📁 Imagem Personalizada</h4>
                        <input type="file" id="wallpaper-upload" accept="image/*" style="display: none;">
                        <button class="upload-btn" onclick="document.getElementById('wallpaper-upload').click()">
                            📁 Carregar Imagem
                        </button>
                    </div>
                    
                    <div class="wallpaper-actions">
                        <button class="apply-btn" onclick="wallpaperManager.applySelected()">
                            ✨ Aplicar
                        </button>
                        <button class="cancel-btn" onclick="wallpaperManager.closeWindow()">
                            ❌ Cancelar
                        </button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(wallpaperWindow);
    }

    generateGalleryHTML() {
        return Object.entries(this.wallpapers).map(([key, wallpaper]) => `
            <div class="wallpaper-item ${key === this.currentWallpaper ? 'selected' : ''}" 
                 data-wallpaper="${key}" 
                 onclick="wallpaperManager.selectWallpaper('${key}')">
                <div class="wallpaper-preview" style="background: ${wallpaper.style}"></div>
                <div class="wallpaper-name">${wallpaper.name}</div>
            </div>
        `).join('');
    }

    setupEventListeners() {
        // Clique direito no desktop
        document.getElementById('desktop').addEventListener('contextmenu', (e) => {
            e.preventDefault();
            this.showContextMenu(e.clientX, e.clientY);
        });

        // Clique fora do menu para fechar
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.context-menu')) {
                this.hideContextMenu();
            }
        });

        // Itens do menu de contexto
        document.addEventListener('click', (e) => {
            const menuItem = e.target.closest('.context-menu-item');
            if (menuItem) {
                const action = menuItem.dataset.action;
                this.handleContextAction(action);
            }
        });

        // Upload de arquivo
        document.addEventListener('change', (e) => {
            if (e.target.id === 'wallpaper-upload') {
                this.handleFileUpload(e.target.files[0]);
            }
        });
    }

    showContextMenu(x, y) {
        const contextMenu = document.getElementById('context-menu');
        contextMenu.style.display = 'block';
        contextMenu.style.left = x + 'px';
        contextMenu.style.top = y + 'px';

        // Som de clique
        if (typeof auroraSounds !== 'undefined' && auroraSounds) {
            auroraSounds.play('click');
        }
    }

    hideContextMenu() {
        const contextMenu = document.getElementById('context-menu');
        contextMenu.style.display = 'none';
    }

    handleContextAction(action) {
        this.hideContextMenu();
        
        switch(action) {
            case 'wallpaper':
                this.openWallpaperWindow();
                break;
            case 'refresh':
                location.reload();
                break;
            case 'properties':
                this.showSystemProperties();
                break;
        }
    }

    openWallpaperWindow() {
        const wallpaperWindow = document.getElementById('wallpaper-window');
        wallpaperWindow.style.display = 'block';
        wallpaperWindow.style.left = '50%';
        wallpaperWindow.style.top = '50%';
        wallpaperWindow.style.transform = 'translate(-50%, -50%)';
        wallpaperWindow.style.zIndex = '1000';

        // Som de abertura
        if (typeof auroraSounds !== 'undefined' && auroraSounds) {
            auroraSounds.play('success');
        }

        // Atualizar galeria
        const gallery = document.getElementById('wallpaper-gallery');
        gallery.innerHTML = this.generateGalleryHTML();
    }

    closeWindow() {
        const wallpaperWindow = document.getElementById('wallpaper-window');
        wallpaperWindow.style.display = 'none';

        // Som de fechamento
        if (typeof auroraSounds !== 'undefined' && auroraSounds) {
            auroraSounds.play('click');
        }
    }

    selectWallpaper(wallpaperKey) {
        // Remover seleção anterior
        document.querySelectorAll('.wallpaper-item').forEach(item => {
            item.classList.remove('selected');
        });

        // Adicionar seleção atual
        const selectedItem = document.querySelector(`[data-wallpaper="${wallpaperKey}"]`);
        if (selectedItem) {
            selectedItem.classList.add('selected');
        }

        this.selectedWallpaper = wallpaperKey;

        // Som de seleção
        if (typeof auroraSounds !== 'undefined' && auroraSounds) {
            auroraSounds.play('click');
        }
    }

    applySelected() {
        if (this.selectedWallpaper) {
            this.applyWallpaper(this.selectedWallpaper);
            this.currentWallpaper = this.selectedWallpaper;
            localStorage.setItem('mysticsoft-wallpaper', this.currentWallpaper);
            
            // Som de sucesso
            if (typeof auroraSounds !== 'undefined' && auroraSounds) {
                auroraSounds.play('success');
            }

            // Notificação
            if (typeof auroraOS !== 'undefined' && auroraOS) {
                const wallpaperName = this.wallpapers[this.selectedWallpaper].name;
                auroraOS.showNotification('🖼️ Papel de Parede', `${wallpaperName} aplicado com sucesso!`, 'success');
            }

            this.closeWindow();
        }
    }

    applyWallpaper(wallpaperKey) {
        const wallpaper = this.wallpapers[wallpaperKey];
        if (wallpaper) {
            const desktop = document.getElementById('desktop');
            if (wallpaper.image) {
                desktop.style.background = `url(${wallpaper.image}) center/cover`;
            } else {
                desktop.style.background = wallpaper.style;
            }
        }
    }

    handleFileUpload(file) {
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const customKey = 'custom_' + Date.now();
                this.wallpapers[customKey] = {
                    name: '📁 ' + file.name,
                    image: e.target.result
                };

                // Adicionar à galeria
                const gallery = document.getElementById('wallpaper-gallery');
                const customItem = document.createElement('div');
                customItem.className = 'wallpaper-item';
                customItem.dataset.wallpaper = customKey;
                customItem.onclick = () => this.selectWallpaper(customKey);
                customItem.innerHTML = `
                    <div class="wallpaper-preview" style="background-image: url(${e.target.result}); background-size: cover; background-position: center;"></div>
                    <div class="wallpaper-name">${this.wallpapers[customKey].name}</div>
                `;
                gallery.appendChild(customItem);

                // Som de upload
                if (typeof auroraSounds !== 'undefined' && auroraSounds) {
                    auroraSounds.play('success');
                }

                // Notificação
                if (typeof auroraOS !== 'undefined' && auroraOS) {
                    auroraOS.showNotification('📁 Upload', 'Imagem carregada com sucesso!', 'success');
                }
            };
            reader.readAsDataURL(file);
        }
    }

    showSystemProperties() {
        if (typeof auroraOS !== 'undefined' && auroraOS) {
            auroraOS.showNotification('⚙️ Propriedades do Sistema', 
                'MysticSoft v1.0\nSistema Operacional Mágico\nDesenvolvido pela Aurora Sagrada', 'info');
        }
    }
}

// CSS para o sistema de papel de parede
const wallpaperCSS = `
    .context-menu {
        position: fixed;
        background: #c0c0c0;
        border: 2px outset #c0c0c0;
        padding: 2px;
        display: none;
        z-index: 10000;
        font-family: 'MS Sans Serif', sans-serif;
        font-size: 11px;
        min-width: 150px;
        box-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .context-menu-item {
        display: flex;
        align-items: center;
        padding: 4px 8px;
        cursor: pointer;
        gap: 8px;
    }

    .context-menu-item:hover {
        background: #0078d4;
        color: white;
    }

    .context-menu-separator {
        height: 1px;
        background: #808080;
        margin: 2px 0;
        border-top: 1px solid #ffffff;
    }

    .wallpaper-window {
        position: fixed;
        width: 480px;
        height: 400px;
        background: #c0c0c0;
        border: 2px outset #c0c0c0;
        display: none;
        z-index: 1000;
    }

    .wallpaper-content {
        padding: 16px;
        height: calc(100% - 32px);
        overflow-y: auto;
    }

    .wallpaper-gallery {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
        margin: 12px 0;
    }

    .wallpaper-item {
        text-align: center;
        cursor: pointer;
        padding: 8px;
        border: 2px inset #c0c0c0;
        background: #c0c0c0;
    }

    .wallpaper-item:hover {
        border: 2px outset #c0c0c0;
    }

    .wallpaper-item.selected {
        border: 2px inset #0078d4;
        background: #e6f3ff;
    }

    .wallpaper-preview {
        width: 80px;
        height: 60px;
        margin: 0 auto 8px;
        border: 1px solid #808080;
        border-radius: 2px;
    }

    .wallpaper-name {
        font-size: 10px;
        font-family: 'MS Sans Serif', sans-serif;
    }

    .wallpaper-upload {
        margin: 16px 0;
        padding: 12px;
        border: 1px inset #c0c0c0;
        background: #f0f0f0;
    }

    .upload-btn, .apply-btn, .cancel-btn {
        padding: 6px 12px;
        font-family: 'MS Sans Serif', sans-serif;
        font-size: 11px;
        border: 2px outset #c0c0c0;
        background: #c0c0c0;
        cursor: pointer;
        margin-right: 8px;
    }

    .upload-btn:hover, .apply-btn:hover, .cancel-btn:hover {
        border: 2px inset #c0c0c0;
    }

    .apply-btn {
        background: #90ee90;
    }

    .cancel-btn {
        background: #ffb6c1;
    }

    .wallpaper-actions {
        text-align: center;
        margin-top: 16px;
        padding-top: 12px;
        border-top: 1px solid #808080;
    }
`;

// Adicionar CSS ao documento
const wallpaperStyleSheet = document.createElement('style');
wallpaperStyleSheet.textContent = wallpaperCSS;
document.head.appendChild(wallpaperStyleSheet);

