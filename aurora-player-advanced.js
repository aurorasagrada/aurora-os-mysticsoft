// === AURORA PLAYER AVANÇADO ===
class AuroraPlayerAdvanced {
    constructor() {
        this.currentTrack = 0;
        this.isPlaying = false;
        this.isPaused = false;
        this.volume = 0.7;
        this.currentTime = 0;
        this.duration = 180; // 3 minutos simulado
        this.shuffle = false;
        this.repeat = false;
        this.crossfade = false;
        this.currentSkin = 'classic';
        this.visualizerActive = true;
        this.equalizerActive = false;
        
        // Playlist expandida
        this.playlist = [
            { title: 'Stellar Dreams', artist: 'Aurora Mystica', duration: 180, genre: 'Ambient' },
            { title: 'Moonlight Serenade', artist: 'Celestial Voices', duration: 240, genre: 'New Age' },
            { title: 'Crystal Meditation', artist: 'Sacred Sounds', duration: 300, genre: 'Meditation' },
            { title: 'Witch\'s Brew', artist: 'Mystic Rhythms', duration: 210, genre: 'Dark Ambient' },
            { title: 'Aurora Borealis', artist: 'Northern Lights', duration: 270, genre: 'Cinematic' },
            { title: 'Sacred Geometry', artist: 'Quantum Healing', duration: 195, genre: 'Healing' },
            { title: 'Dragon\'s Flight', artist: 'Epic Soundscapes', duration: 320, genre: 'Epic' },
            { title: 'Forest Whispers', artist: 'Nature\'s Voice', duration: 225, genre: 'Nature' }
        ];

        // Skins/Máscaras expandidas
        this.skins = {
            classic: {
                name: '🌟 Clássica Aurora',
                background: 'radial-gradient(circle at center, #3e0a29 0%, #0b1836 70%, #f0aa53 100%)',
                accent: '#f0aa53',
                text: '#f2eaff'
            },
            mystic: {
                name: '🔮 Orbe Místico',
                background: 'elliptical-gradient(ellipse at center, #f0aa53 0%, #3e0a29 50%, #0b1836 100%)',
                accent: '#b2d1b1',
                text: '#f2eaff'
            },
            portal: {
                name: '⭐ Portal Celestial',
                background: 'linear-gradient(45deg, #0b1836 0%, #3e0a29 50%, #f0aa53 100%)',
                accent: '#0b1836',
                text: '#f0aa53'
            },
            witch: {
                name: '🧙‍♀️ Caldeirão da Bruxa',
                background: 'radial-gradient(circle at bottom, #b2d1b1 0%, #3e0a29 60%, #0b1836 100%)',
                accent: '#3e0a29',
                text: '#b2d1b1'
            },
            cosmic: {
                name: '🌌 Cosmos Infinito',
                background: 'conic-gradient(from 0deg, #0b1836, #3e0a29, #f0aa53, #b2d1b1, #0b1836)',
                accent: '#f0aa53',
                text: '#f2eaff'
            },
            aurora: {
                name: '🌈 Aurora Boreal',
                background: 'linear-gradient(90deg, #b2d1b1 0%, #f0aa53 25%, #3e0a29 50%, #0b1836 75%, #b2d1b1 100%)',
                accent: '#f0aa53',
                text: '#f2eaff'
            }
        };

        // Configurações do equalizador
        this.eqBands = [
            { freq: '60Hz', gain: 0 },
            { freq: '170Hz', gain: 0 },
            { freq: '310Hz', gain: 0 },
            { freq: '600Hz', gain: 0 },
            { freq: '1kHz', gain: 0 },
            { freq: '3kHz', gain: 0 },
            { freq: '6kHz', gain: 0 },
            { freq: '12kHz', gain: 0 },
            { freq: '14kHz', gain: 0 },
            { freq: '16kHz', gain: 0 }
        ];

        this.init();
    }

    init() {
        this.loadSettings();
        this.createAdvancedPlayer();
        this.setupEventListeners();
        this.startVisualization();
        this.applySkin(this.currentSkin);
    }

    createAdvancedPlayer() {
        // Remover player existente se houver
        const existingPlayer = document.getElementById('aurora-player-window');
        if (existingPlayer) existingPlayer.remove();

        const playerWindow = document.createElement('div');
        playerWindow.id = 'aurora-player-window';
        playerWindow.className = 'window aurora-player-window';
        playerWindow.innerHTML = `
            <div class="window-header">
                <div class="window-title">
                    <span>🎵</span>
                    <span>Aurora Player v2.0</span>
                </div>
                <div class="window-controls">
                    <button class="window-control minimize" onclick="auroraPlayerAdvanced.minimize()">−</button>
                    <button class="window-control maximize" onclick="auroraPlayerAdvanced.maximize()">□</button>
                    <button class="window-control close" onclick="auroraPlayerAdvanced.close()">×</button>
                </div>
            </div>
            <div class="window-content">
                <div class="player-container">
                    <!-- Seletor de Skin -->
                    <div class="skin-selector">
                        <label>Máscara:</label>
                        <select id="skin-selector" onchange="auroraPlayerAdvanced.changeSkin(this.value)">
                            ${Object.entries(this.skins).map(([key, skin]) => 
                                `<option value="${key}" ${key === this.currentSkin ? 'selected' : ''}>${skin.name}</option>`
                            ).join('')}
                        </select>
                    </div>

                    <!-- Área principal com máscara -->
                    <div class="player-mask" id="player-mask">
                        <!-- Display da música atual -->
                        <div class="track-display">
                            <div class="track-title" id="track-title">${this.playlist[this.currentTrack].title}</div>
                            <div class="track-artist" id="track-artist">${this.playlist[this.currentTrack].artist}</div>
                            <div class="track-genre" id="track-genre">${this.playlist[this.currentTrack].genre}</div>
                        </div>

                        <!-- Visualizador -->
                        <div class="visualizer-container">
                            <canvas id="visualizer-canvas" width="300" height="120"></canvas>
                            <div class="visualizer-overlay">
                                <div class="time-display">
                                    <span id="current-time">0:00</span>
                                    <span>/</span>
                                    <span id="total-time">3:00</span>
                                </div>
                            </div>
                        </div>

                        <!-- Barra de progresso -->
                        <div class="progress-container">
                            <input type="range" id="progress-bar" min="0" max="100" value="0" 
                                   onchange="auroraPlayerAdvanced.seek(this.value)">
                        </div>

                        <!-- Controles principais -->
                        <div class="main-controls">
                            <button class="control-btn" id="prev-btn" onclick="auroraPlayerAdvanced.previousTrack()">⏮</button>
                            <button class="control-btn play-pause" id="play-pause-btn" onclick="auroraPlayerAdvanced.togglePlay()">▶</button>
                            <button class="control-btn" id="next-btn" onclick="auroraPlayerAdvanced.nextTrack()">⏭</button>
                            <button class="control-btn ${this.shuffle ? 'active' : ''}" id="shuffle-btn" onclick="auroraPlayerAdvanced.toggleShuffle()">🔀</button>
                            <button class="control-btn ${this.repeat ? 'active' : ''}" id="repeat-btn" onclick="auroraPlayerAdvanced.toggleRepeat()">🔁</button>
                        </div>

                        <!-- Controles de volume -->
                        <div class="volume-controls">
                            <span>🔊</span>
                            <input type="range" id="volume-slider" min="0" max="100" value="${this.volume * 100}" 
                                   onchange="auroraPlayerAdvanced.setVolume(this.value)">
                            <span id="volume-display">${Math.round(this.volume * 100)}%</span>
                        </div>
                    </div>

                    <!-- Controles avançados -->
                    <div class="advanced-controls">
                        <button class="advanced-btn ${this.equalizerActive ? 'active' : ''}" id="eq-btn" onclick="auroraPlayerAdvanced.toggleEqualizer()">🎛️ EQ</button>
                        <button class="advanced-btn ${this.visualizerActive ? 'active' : ''}" id="vis-btn" onclick="auroraPlayerAdvanced.toggleVisualizer()">📊 VIS</button>
                        <button class="advanced-btn ${this.crossfade ? 'active' : ''}" id="crossfade-btn" onclick="auroraPlayerAdvanced.toggleCrossfade()">🌊 FADE</button>
                        <button class="advanced-btn" id="playlist-btn" onclick="auroraPlayerAdvanced.togglePlaylist()">📜 LIST</button>
                    </div>

                    <!-- Equalizador (oculto por padrão) -->
                    <div class="equalizer-panel" id="equalizer-panel" style="display: none;">
                        <h4>🎛️ Equalizador</h4>
                        <div class="eq-controls">
                            ${this.eqBands.map((band, index) => `
                                <div class="eq-band">
                                    <input type="range" class="eq-slider" min="-12" max="12" value="${band.gain}" 
                                           data-band="${index}" onchange="auroraPlayerAdvanced.adjustEQ(${index}, this.value)">
                                    <label>${band.freq}</label>
                                </div>
                            `).join('')}
                        </div>
                        <div class="eq-presets">
                            <button onclick="auroraPlayerAdvanced.applyEQPreset('flat')">Flat</button>
                            <button onclick="auroraPlayerAdvanced.applyEQPreset('rock')">Rock</button>
                            <button onclick="auroraPlayerAdvanced.applyEQPreset('jazz')">Jazz</button>
                            <button onclick="auroraPlayerAdvanced.applyEQPreset('classical')">Classical</button>
                            <button onclick="auroraPlayerAdvanced.applyEQPreset('electronic')">Electronic</button>
                        </div>
                    </div>

                    <!-- Playlist (oculta por padrão) -->
                    <div class="playlist-panel" id="playlist-panel" style="display: none;">
                        <h4>📜 Playlist Mística</h4>
                        <div class="playlist-controls">
                            <button onclick="auroraPlayerAdvanced.clearPlaylist()">🗑️ Limpar</button>
                            <button onclick="auroraPlayerAdvanced.savePlaylist()">💾 Salvar</button>
                            <button onclick="auroraPlayerAdvanced.loadPlaylist()">📁 Carregar</button>
                            <button onclick="auroraPlayerAdvanced.shufflePlaylist()">🔀 Embaralhar</button>
                        </div>
                        <div class="playlist-items" id="playlist-items">
                            ${this.generatePlaylistHTML()}
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(playerWindow);
    }

    generatePlaylistHTML() {
        return this.playlist.map((track, index) => `
            <div class="playlist-item ${index === this.currentTrack ? 'active' : ''}" 
                 data-index="${index}" onclick="auroraPlayerAdvanced.selectTrack(${index})">
                <div class="track-info">
                    <div class="track-title">${track.title}</div>
                    <div class="track-details">${track.artist} • ${track.genre} • ${this.formatTime(track.duration)}</div>
                </div>
                <div class="track-actions">
                    <button onclick="auroraPlayerAdvanced.removeTrack(${index}); event.stopPropagation();">🗑️</button>
                </div>
            </div>
        `).join('');
    }

    setupEventListeners() {
        // Arrastar janela
        this.makeDraggable();
        
        // Atalhos de teclado
        document.addEventListener('keydown', (e) => {
            if (this.isWindowActive()) {
                switch(e.code) {
                    case 'Space':
                        e.preventDefault();
                        this.togglePlay();
                        break;
                    case 'ArrowRight':
                        this.nextTrack();
                        break;
                    case 'ArrowLeft':
                        this.previousTrack();
                        break;
                    case 'ArrowUp':
                        this.setVolume(Math.min(100, this.volume * 100 + 5));
                        break;
                    case 'ArrowDown':
                        this.setVolume(Math.max(0, this.volume * 100 - 5));
                        break;
                }
            }
        });

        // Auto-save configurações
        setInterval(() => this.saveSettings(), 30000);
    }

    makeDraggable() {
        const playerWindow = document.getElementById('aurora-player-window');
        const header = playerWindow.querySelector('.window-header');
        let isDragging = false;
        let currentX;
        let currentY;
        let initialX;
        let initialY;
        let xOffset = 0;
        let yOffset = 0;

        header.addEventListener('mousedown', (e) => {
            if (e.target.closest('.window-controls')) return;
            
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
            isDragging = true;
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                e.preventDefault();
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
                xOffset = currentX;
                yOffset = currentY;
                
                playerWindow.style.transform = `translate(${currentX}px, ${currentY}px)`;
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
    }

    startVisualization() {
        const canvas = document.getElementById('visualizer-canvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const bars = 64;
        let animationId;

        const animate = () => {
            if (!this.visualizerActive) {
                animationId = requestAnimationFrame(animate);
                return;
            }

            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const barWidth = canvas.width / bars;
            
            for (let i = 0; i < bars; i++) {
                let barHeight;
                
                if (this.isPlaying) {
                    // Simulação de dados de áudio baseada no tempo
                    const time = Date.now() * 0.001;
                    const frequency = (i + 1) * 0.1;
                    barHeight = (Math.sin(time * frequency) * 0.5 + 0.5) * canvas.height * 0.8;
                    
                    // Adicionar variação baseada na música
                    barHeight *= (0.3 + Math.random() * 0.7);
                } else {
                    barHeight = 2;
                }

                // Gradiente baseado na skin atual
                const skin = this.skins[this.currentSkin];
                const gradient = ctx.createLinearGradient(0, canvas.height, 0, 0);
                gradient.addColorStop(0, skin.accent + '80');
                gradient.addColorStop(1, skin.accent);
                
                ctx.fillStyle = gradient;
                ctx.fillRect(i * barWidth, canvas.height - barHeight, barWidth - 1, barHeight);
            }

            animationId = requestAnimationFrame(animate);
        };

        animate();
    }

    togglePlay() {
        this.isPlaying = !this.isPlaying;
        const playPauseBtn = document.getElementById('play-pause-btn');
        
        if (this.isPlaying) {
            playPauseBtn.textContent = '⏸';
            this.startPlayback();
            
            // Som de play
            if (typeof auroraSounds !== 'undefined' && auroraSounds) {
                auroraSounds.play('success');
            }
        } else {
            playPauseBtn.textContent = '▶';
            this.pausePlayback();
            
            // Som de pause
            if (typeof auroraSounds !== 'undefined' && auroraSounds) {
                auroraSounds.play('click');
            }
        }

        this.updateDisplay();
    }

    startPlayback() {
        if (this.playbackInterval) clearInterval(this.playbackInterval);
        
        this.playbackInterval = setInterval(() => {
            if (this.isPlaying && !this.isPaused) {
                this.currentTime += 1;
                
                if (this.currentTime >= this.duration) {
                    if (this.repeat) {
                        this.currentTime = 0;
                    } else {
                        this.nextTrack();
                    }
                }
                
                this.updateDisplay();
            }
        }, 1000);
    }

    pausePlayback() {
        if (this.playbackInterval) {
            clearInterval(this.playbackInterval);
            this.playbackInterval = null;
        }
    }

    nextTrack() {
        if (this.shuffle) {
            this.currentTrack = Math.floor(Math.random() * this.playlist.length);
        } else {
            this.currentTrack = (this.currentTrack + 1) % this.playlist.length;
        }
        
        this.currentTime = 0;
        this.duration = this.playlist[this.currentTrack].duration;
        this.updateTrackDisplay();
        
        // Som de mudança de faixa
        if (typeof auroraSounds !== 'undefined' && auroraSounds) {
            auroraSounds.play('notify');
        }
    }

    previousTrack() {
        if (this.currentTime > 3) {
            this.currentTime = 0;
        } else {
            this.currentTrack = this.currentTrack === 0 ? this.playlist.length - 1 : this.currentTrack - 1;
            this.currentTime = 0;
            this.duration = this.playlist[this.currentTrack].duration;
        }
        
        this.updateTrackDisplay();
        
        // Som de mudança de faixa
        if (typeof auroraSounds !== 'undefined' && auroraSounds) {
            auroraSounds.play('notify');
        }
    }

    selectTrack(index) {
        this.currentTrack = index;
        this.currentTime = 0;
        this.duration = this.playlist[this.currentTrack].duration;
        this.updateTrackDisplay();
        this.updatePlaylistDisplay();
        
        // Som de seleção
        if (typeof auroraSounds !== 'undefined' && auroraSounds) {
            auroraSounds.play('click');
        }
    }

    toggleShuffle() {
        this.shuffle = !this.shuffle;
        const shuffleBtn = document.getElementById('shuffle-btn');
        shuffleBtn.classList.toggle('active', this.shuffle);
        
        // Som de toggle
        if (typeof auroraSounds !== 'undefined' && auroraSounds) {
            auroraSounds.play('click');
        }
    }

    toggleRepeat() {
        this.repeat = !this.repeat;
        const repeatBtn = document.getElementById('repeat-btn');
        repeatBtn.classList.toggle('active', this.repeat);
        
        // Som de toggle
        if (typeof auroraSounds !== 'undefined' && auroraSounds) {
            auroraSounds.play('click');
        }
    }

    toggleCrossfade() {
        this.crossfade = !this.crossfade;
        const crossfadeBtn = document.getElementById('crossfade-btn');
        crossfadeBtn.classList.toggle('active', this.crossfade);
        
        // Som de toggle
        if (typeof auroraSounds !== 'undefined' && auroraSounds) {
            auroraSounds.play('click');
        }
    }

    setVolume(value) {
        this.volume = value / 100;
        const volumeDisplay = document.getElementById('volume-display');
        if (volumeDisplay) {
            volumeDisplay.textContent = Math.round(value) + '%';
        }
        
        // Som de ajuste de volume
        if (typeof auroraSounds !== 'undefined' && auroraSounds) {
            auroraSounds.play('click');
        }
    }

    seek(value) {
        this.currentTime = (value / 100) * this.duration;
        this.updateDisplay();
        
        // Som de seek
        if (typeof auroraSounds !== 'undefined' && auroraSounds) {
            auroraSounds.play('click');
        }
    }

    changeSkin(skinKey) {
        this.currentSkin = skinKey;
        this.applySkin(skinKey);
        
        // Som de mudança de skin
        if (typeof auroraSounds !== 'undefined' && auroraSounds) {
            auroraSounds.play('success');
        }
    }

    applySkin(skinKey) {
        const skin = this.skins[skinKey];
        const playerMask = document.getElementById('player-mask');
        
        if (playerMask && skin) {
            playerMask.style.background = skin.background;
            playerMask.style.setProperty('--accent-color', skin.accent);
            playerMask.style.setProperty('--text-color', skin.text);
        }
    }

    toggleEqualizer() {
        this.equalizerActive = !this.equalizerActive;
        const eqPanel = document.getElementById('equalizer-panel');
        const eqBtn = document.getElementById('eq-btn');
        
        eqPanel.style.display = this.equalizerActive ? 'block' : 'none';
        eqBtn.classList.toggle('active', this.equalizerActive);
        
        // Som de toggle
        if (typeof auroraSounds !== 'undefined' && auroraSounds) {
            auroraSounds.play('click');
        }
    }

    toggleVisualizer() {
        this.visualizerActive = !this.visualizerActive;
        const visBtn = document.getElementById('vis-btn');
        visBtn.classList.toggle('active', this.visualizerActive);
        
        // Som de toggle
        if (typeof auroraSounds !== 'undefined' && auroraSounds) {
            auroraSounds.play('click');
        }
    }

    togglePlaylist() {
        const playlistPanel = document.getElementById('playlist-panel');
        const isVisible = playlistPanel.style.display === 'block';
        
        playlistPanel.style.display = isVisible ? 'none' : 'block';
        
        if (!isVisible) {
            this.updatePlaylistDisplay();
        }
        
        // Som de toggle
        if (typeof auroraSounds !== 'undefined' && auroraSounds) {
            auroraSounds.play('click');
        }
    }

    adjustEQ(bandIndex, value) {
        this.eqBands[bandIndex].gain = parseFloat(value);
        
        // Som de ajuste
        if (typeof auroraSounds !== 'undefined' && auroraSounds) {
            auroraSounds.play('click');
        }
    }

    applyEQPreset(presetName) {
        const presets = {
            flat: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            rock: [3, 2, -1, -2, 1, 2, 3, 4, 4, 3],
            jazz: [2, 1, 0, 1, 2, 2, 1, 0, 1, 2],
            classical: [3, 2, 1, 0, -1, -1, 0, 1, 2, 3],
            electronic: [4, 3, 1, 0, -1, 1, 2, 3, 4, 4]
        };

        const preset = presets[presetName];
        if (preset) {
            preset.forEach((gain, index) => {
                this.eqBands[index].gain = gain;
                const slider = document.querySelector(`[data-band="${index}"]`);
                if (slider) slider.value = gain;
            });
            
            // Som de preset
            if (typeof auroraSounds !== 'undefined' && auroraSounds) {
                auroraSounds.play('success');
            }
        }
    }

    updateDisplay() {
        // Atualizar tempo
        const currentTimeEl = document.getElementById('current-time');
        const progressBar = document.getElementById('progress-bar');
        
        if (currentTimeEl) {
            currentTimeEl.textContent = this.formatTime(this.currentTime);
        }
        
        if (progressBar) {
            progressBar.value = (this.currentTime / this.duration) * 100;
        }
    }

    updateTrackDisplay() {
        const track = this.playlist[this.currentTrack];
        
        const titleEl = document.getElementById('track-title');
        const artistEl = document.getElementById('track-artist');
        const genreEl = document.getElementById('track-genre');
        const totalTimeEl = document.getElementById('total-time');
        
        if (titleEl) titleEl.textContent = track.title;
        if (artistEl) artistEl.textContent = track.artist;
        if (genreEl) genreEl.textContent = track.genre;
        if (totalTimeEl) totalTimeEl.textContent = this.formatTime(track.duration);
    }

    updatePlaylistDisplay() {
        const playlistItems = document.getElementById('playlist-items');
        if (playlistItems) {
            playlistItems.innerHTML = this.generatePlaylistHTML();
        }
    }

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    saveSettings() {
        const settings = {
            volume: this.volume,
            shuffle: this.shuffle,
            repeat: this.repeat,
            crossfade: this.crossfade,
            currentSkin: this.currentSkin,
            visualizerActive: this.visualizerActive,
            equalizerActive: this.equalizerActive,
            eqBands: this.eqBands,
            playlist: this.playlist
        };
        
        localStorage.setItem('aurora-player-settings', JSON.stringify(settings));
    }

    loadSettings() {
        const saved = localStorage.getItem('aurora-player-settings');
        if (saved) {
            const settings = JSON.parse(saved);
            Object.assign(this, settings);
        }
    }

    savePlaylist() {
        const playlistData = JSON.stringify(this.playlist);
        const blob = new Blob([playlistData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = 'aurora-playlist.json';
        a.click();
        
        URL.revokeObjectURL(url);
        
        // Som de save
        if (typeof auroraSounds !== 'undefined' && auroraSounds) {
            auroraSounds.play('success');
        }
    }

    loadPlaylist() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        const playlist = JSON.parse(e.target.result);
                        this.playlist = playlist;
                        this.updatePlaylistDisplay();
                        
                        // Som de load
                        if (typeof auroraSounds !== 'undefined' && auroraSounds) {
                            auroraSounds.play('success');
                        }
                    } catch (error) {
                        console.error('Erro ao carregar playlist:', error);
                        
                        // Som de erro
                        if (typeof auroraSounds !== 'undefined' && auroraSounds) {
                            auroraSounds.play('error');
                        }
                    }
                };
                reader.readAsText(file);
            }
        };
        
        input.click();
    }

    clearPlaylist() {
        if (confirm('Tem certeza que deseja limpar a playlist?')) {
            this.playlist = [];
            this.currentTrack = 0;
            this.updatePlaylistDisplay();
            
            // Som de clear
            if (typeof auroraSounds !== 'undefined' && auroraSounds) {
                auroraSounds.play('delete');
            }
        }
    }

    shufflePlaylist() {
        for (let i = this.playlist.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.playlist[i], this.playlist[j]] = [this.playlist[j], this.playlist[i]];
        }
        
        this.currentTrack = 0;
        this.updatePlaylistDisplay();
        this.updateTrackDisplay();
        
        // Som de shuffle
        if (typeof auroraSounds !== 'undefined' && auroraSounds) {
            auroraSounds.play('success');
        }
    }

    removeTrack(index) {
        if (this.playlist.length > 1) {
            this.playlist.splice(index, 1);
            
            if (this.currentTrack >= index && this.currentTrack > 0) {
                this.currentTrack--;
            }
            
            this.updatePlaylistDisplay();
            this.updateTrackDisplay();
            
            // Som de remove
            if (typeof auroraSounds !== 'undefined' && auroraSounds) {
                auroraSounds.play('delete');
            }
        }
    }

    minimize() {
        const playerWindow = document.getElementById('aurora-player-window');
        playerWindow.style.display = 'none';
        
        // Som de minimize
        if (typeof auroraSounds !== 'undefined' && auroraSounds) {
            auroraSounds.play('click');
        }
    }

    maximize() {
        const playerWindow = document.getElementById('aurora-player-window');
        playerWindow.classList.toggle('maximized');
        
        // Som de maximize
        if (typeof auroraSounds !== 'undefined' && auroraSounds) {
            auroraSounds.play('click');
        }
    }

    close() {
        const playerWindow = document.getElementById('aurora-player-window');
        playerWindow.style.display = 'none';
        
        this.pausePlayback();
        this.saveSettings();
        
        // Som de close
        if (typeof auroraSounds !== 'undefined' && auroraSounds) {
            auroraSounds.play('click');
        }
    }

    show() {
        const playerWindow = document.getElementById('aurora-player-window');
        playerWindow.style.display = 'block';
        playerWindow.style.left = '50%';
        playerWindow.style.top = '50%';
        playerWindow.style.transform = 'translate(-50%, -50%)';
        playerWindow.style.zIndex = '1000';
        
        // Som de abertura
        if (typeof auroraSounds !== 'undefined' && auroraSounds) {
            auroraSounds.play('success');
        }
    }

    isWindowActive() {
        const playerWindow = document.getElementById('aurora-player-window');
        return playerWindow && playerWindow.style.display !== 'none';
    }
}

// Variável global para acesso
let auroraPlayerAdvanced = null;

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        auroraPlayerAdvanced = new AuroraPlayerAdvanced();
    }, 1500);
});

