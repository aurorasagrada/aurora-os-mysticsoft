# 🎬 Video Player Místico • Aurora OS

## Visão Geral

O **Video Player Místico** é um reprodutor de vídeo integrado ao Aurora OS que combina a estética nostálgica do Windows ME com as cores místicas da Aurora Sagrada. Oferece reprodução completa de vídeos com controles avançados, gerenciamento de playlists e integração total com o sistema de arquivos.

## Características Principais

### 🎨 Interface Windows ME Autêntica

- **Estética Retro Completa**: Design fiel ao Windows ME com bordas chanfradas, botões 3D e cores clássicas
- **Cores Aurora Sagrada**: Integração das cores místicas (#3e0a29, #f0aa53, #0b1836, #b2d1b1, #f2eaff)
- **Elementos Visuais**: Barras de progresso estilo Windows, scrollbars clássicas, ícones pixelados

### 📹 Reprodução de Vídeo

- **Formatos Suportados**: MP4, WebM, OGG, AVI, MOV
- **Controles Completos**: Play/Pause, Stop, Próximo, Anterior, Retroceder, Avançar
- **Barra de Progresso**: Clique para navegar, visualização de buffer
- **Informações em Overlay**: Título, resolução, duração e tamanho do arquivo

### 🎛️ Controles Avançados

#### Controles de Reprodução
- **Play/Pause** (▶/⏸): Inicia ou pausa a reprodução
- **Stop** (⏹): Para a reprodução e volta ao início
- **Retroceder** (⏪): Volta 10 segundos
- **Avançar** (⏩): Avança 10 segundos
- **Anterior** (⏮): Vai para o vídeo anterior na playlist
- **Próximo** (⏭): Vai para o próximo vídeo na playlist

#### Controles de Visualização
- **Repetir** (🔁): Ativa/desativa repetição do vídeo atual
- **Playlist** (📋): Mostra/oculta a playlist
- **Tela Cheia** (⛶): Ativa/desativa modo tela cheia

#### Controles de Áudio e Velocidade
- **Volume**: Controle deslizante de 0-100%
- **Mudo** (🔇/🔊): Ativa/desativa áudio
- **Velocidade**: 0.25x, 0.5x, 0.75x, 1x, 1.25x, 1.5x, 2x

### 📋 Gerenciamento de Playlist

#### Funcionalidades
- **Adicionar Vídeos**: Arraste do File Explorer ou adicione manualmente
- **Remover Vídeos**: Botão individual em cada item
- **Limpar Playlist**: Remove todos os vídeos de uma vez
- **Carregar Pasta**: Importa todos os vídeos da pasta "Meus Vídeos"
- **Persistência**: Playlist salva automaticamente no LocalStorage

#### Interface da Playlist
- **Contador de Vídeos**: Mostra quantidade total na playlist
- **Item Ativo**: Destaque visual do vídeo em reprodução
- **Informações**: Nome, tamanho e duração de cada vídeo
- **Navegação**: Clique em qualquer item para reproduzir

### ⌨️ Atalhos de Teclado

| Tecla | Ação |
|-------|------|
| `Space` | Play/Pause |
| `S` | Stop |
| `←` | Retroceder 10s |
| `→` | Avançar 10s |
| `Ctrl + ←` | Vídeo anterior |
| `Ctrl + →` | Próximo vídeo |
| `L` | Ativar/desativar repetição |
| `P` | Mostrar/ocultar playlist |
| `F` | Tela cheia |
| `M` | Mudo |

### 📊 Barra de Status

Exibe informações em tempo real:
- **Status Atual**: Reproduzindo, Pausado, Parado, etc.
- **Formato do Vídeo**: MP4, WebM, etc.
- **Resolução**: Largura x Altura (ex: 1920x1080)
- **Contador de Playlist**: Quantidade de vídeos

## Integração com o Sistema

### 🔗 File System API

O Video Player utiliza a `filesystem-api.js` para:
- Carregar vídeos do sistema de arquivos
- Listar vídeos da pasta "Meus Vídeos"
- Salvar e recuperar playlists
- Gerenciar metadados dos arquivos

### 📡 Comunicação PostMessage

#### Mensagens Recebidas

```javascript
// Abrir vídeo do File Explorer
{
    type: 'OPEN_VIDEO',
    file: {
        id: 'file_123',
        name: 'video.mp4',
        content: 'blob:...',
        extension: '.mp4',
        size: 1048576
    }
}

// Adicionar à playlist
{
    type: 'ADD_TO_PLAYLIST',
    file: { /* mesmo formato */ }
}
```

#### Mensagens Enviadas

```javascript
// Notificar abertura de vídeo
window.parent.postMessage({
    action: 'videoOpened',
    fileName: 'video.mp4'
}, '*');
```

### 🗂️ Integração com File Explorer

O File Explorer reconhece extensões de vídeo e abre automaticamente no Video Player:

```javascript
// No explorador-arquivos.html
function viewVideo(file) {
    window.parent.postMessage({
        action: 'openApp',
        app: 'video-player',
        fileData: {
            action: 'playVideo',
            fileId: file.id,
            fileName: file.name,
            content: file.content,
            extension: file.extension,
            size: file.size
        }
    }, '*');
}
```

## Estrutura de Código

### Classes Principais

#### VideoPlayerMistico

Classe principal que gerencia toda a funcionalidade do player:

```javascript
class VideoPlayerMistico {
    constructor() {
        this.video = document.getElementById('videoElement');
        this.playlist = [];
        this.currentIndex = -1;
        this.isLooping = false;
        this.isPlaylistVisible = false;
        
        this.initElements();
        this.initEventListeners();
        this.initMessageListener();
        this.loadPlaylistFromStorage();
    }
    
    // Métodos principais
    openVideo(file)           // Abre um vídeo
    loadVideo(file)           // Carrega vídeo no player
    togglePlayPause()         // Play/Pause
    stop()                    // Para reprodução
    playPrevious()            // Vídeo anterior
    playNext()                // Próximo vídeo
    seek(event)               // Navega na timeline
    setVolume(value)          // Ajusta volume
    setSpeed(value)           // Ajusta velocidade
    toggleLoop()              // Ativa/desativa repetição
    toggleFullscreen()        // Tela cheia
    
    // Gerenciamento de playlist
    addToPlaylist(file)       // Adiciona vídeo
    removeFromPlaylist(index) // Remove vídeo
    clearPlaylist()           // Limpa playlist
    loadFromFolder()          // Carrega pasta
    renderPlaylist()          // Renderiza UI
    
    // Utilitários
    formatTime(seconds)       // Formata tempo (00:00)
    updateMetadata(file)      // Atualiza informações
    enableControls()          // Habilita botões
    disableControls()         // Desabilita botões
}
```

### Elementos HTML Principais

```html
<!-- Display de Vídeo -->
<div class="video-display">
    <video class="video-element" id="videoElement"></video>
    <div class="video-overlay">
        <div class="video-info">
            <div class="video-title">Título</div>
            <div class="video-metadata">Metadados</div>
        </div>
    </div>
</div>

<!-- Barra de Progresso -->
<div class="progress-section">
    <div class="progress-bar-container">
        <div class="progress-buffer"></div>
        <div class="progress-bar"></div>
    </div>
    <div class="time-display">
        <span id="currentTime">00:00</span>
        <span id="totalTime">00:00</span>
    </div>
</div>

<!-- Controles -->
<div class="player-controls">
    <button class="control-btn" id="prevBtn">⏮</button>
    <button class="control-btn" id="rewindBtn">⏪</button>
    <button class="control-btn" id="playPauseBtn">▶</button>
    <button class="control-btn" id="forwardBtn">⏩</button>
    <button class="control-btn" id="nextBtn">⏭</button>
    <button class="control-btn" id="stopBtn">⏹</button>
    <button class="control-btn" id="loopBtn">🔁</button>
    <button class="control-btn" id="playlistBtn">📋</button>
    <button class="control-btn" id="fullscreenBtn">⛶</button>
</div>

<!-- Volume e Velocidade -->
<div class="bottom-controls">
    <div class="volume-section">
        <span class="volume-icon">🔊</span>
        <input type="range" class="volume-slider" min="0" max="100" value="100">
        <span class="volume-label">100%</span>
    </div>
    <div class="speed-section">
        <span class="speed-label">Velocidade:</span>
        <select class="speed-select">
            <option value="0.25">0.25x</option>
            <option value="0.5">0.5x</option>
            <option value="0.75">0.75x</option>
            <option value="1" selected>1x</option>
            <option value="1.25">1.25x</option>
            <option value="1.5">1.5x</option>
            <option value="2">2x</option>
        </select>
    </div>
</div>

<!-- Playlist -->
<div class="playlist-section">
    <div class="playlist-header">
        <span>📼 Playlist de Vídeos</span>
        <div class="playlist-actions">
            <button>📁 Carregar Pasta</button>
            <button>🗑 Limpar</button>
        </div>
    </div>
    <div id="playlistItems">
        <!-- Items dinâmicos -->
    </div>
</div>

<!-- Barra de Status -->
<div class="status-bar">
    <div class="status-item">
        <span id="statusText">Pronto</span>
    </div>
    <div class="status-item">
        <span id="videoFormat">-</span>
        <span id="videoResolution">-</span>
        <span id="playlistStatus">0 vídeos</span>
    </div>
</div>
```

## Estilo Visual

### Cores Principais

```css
/* Cores Aurora Sagrada */
--vinho: #3e0a29;
--verde-claro: #b2d1b1;
--azul-escuro: #0b1836;
--dourado: #f0aa53;
--pergaminho: #f2eaff;

/* Cores Windows ME */
--cinza-claro: #c0c0c0;
--cinza-escuro: #808080;
--branco: #ffffff;
--preto: #000000;
```

### Elementos Estilizados

#### Botões Windows ME
```css
.control-btn {
    border: 2px outset #fff;
    background: #c0c0c0;
}

.control-btn:active {
    border: 2px inset #808080;
}

.control-btn.active {
    background: #0a246a;
    color: #f0aa53;
    border: 2px inset #808080;
}
```

#### Barra de Progresso
```css
.progress-bar-container {
    background: #fff;
    border: 2px inset #808080;
}

.progress-bar {
    background: linear-gradient(to right, #0a246a, #1084d0);
}
```

#### Scrollbar Clássica
```css
::-webkit-scrollbar {
    width: 16px;
    height: 16px;
}

::-webkit-scrollbar-track {
    background: #c0c0c0;
}

::-webkit-scrollbar-thumb {
    background: #c0c0c0;
    border: 2px outset #fff;
}
```

## Armazenamento Local

### Estrutura de Dados

```javascript
// Playlist salva no LocalStorage
localStorage.setItem('videoPlayer_playlist', JSON.stringify([
    {
        id: 'file_123',
        name: 'video.mp4',
        type: 'video/mp4',
        extension: '.mp4',
        content: 'blob:...',
        size: 1048576,
        created: '2024-01-01T00:00:00.000Z',
        modified: '2024-01-01T00:00:00.000Z',
        folder: 'my-videos'
    }
]));

// Índice do vídeo atual
localStorage.setItem('videoPlayer_currentIndex', '0');
```

## Funcionalidades Futuras

### 🎯 Planejadas

1. **Legendas**: Suporte a arquivos SRT/VTT
2. **Thumbnails**: Geração automática de miniaturas
3. **Marcadores**: Adicionar marcadores na timeline
4. **Captura de Tela**: Salvar frames como imagem
5. **Equalização**: Controles de áudio avançados
6. **Picture-in-Picture**: Modo janela flutuante
7. **Streaming**: Suporte a URLs de vídeo online
8. **Filtros**: Efeitos visuais (brilho, contraste, saturação)

### 🔮 Recursos Místicos

1. **Análise Cromática**: Detectar cores dominantes do vídeo
2. **Sincronização Planetária**: Sugestões baseadas em hora planetária
3. **Playlist Intuitiva**: Organização automática por "energia"
4. **Visualizador Místico**: Efeitos visuais sincronizados

## Compatibilidade

### Navegadores Suportados
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Formatos de Vídeo
| Formato | Extensão | Suporte |
|---------|----------|---------|
| MP4 | .mp4 | ✅ Universal |
| WebM | .webm | ✅ Universal |
| OGG | .ogg | ✅ Firefox/Chrome |
| AVI | .avi | ⚠️ Limitado |
| MOV | .mov | ⚠️ Safari |

### Limitações
- **Tamanho**: Limitado pelo LocalStorage (10MB)
- **Codecs**: Dependente do navegador
- **DRM**: Não suporta conteúdo protegido

## Troubleshooting

### Vídeo não carrega
1. Verificar formato suportado
2. Verificar tamanho do arquivo
3. Limpar cache do navegador
4. Verificar console para erros

### Áudio não funciona
1. Verificar se não está mudo
2. Verificar volume do sistema
3. Verificar codec de áudio
4. Testar em outro navegador

### Playlist não salva
1. Verificar espaço no LocalStorage
2. Limpar dados antigos
3. Verificar permissões do navegador

## Desenvolvimento

### Estrutura de Arquivos
```
aurora-os-mysticsoft/
├── apps/
│   ├── video-player-mistico.html    # Player principal
│   ├── filesystem-api.js             # API compartilhada
│   ├── explorador-arquivos.html      # File Explorer
│   └── VIDEO-PLAYER-MISTICO-DOC.md   # Esta documentação
```

### Dependências
- **filesystem-api.js**: API de sistema de arquivos
- **HTML5 Video API**: Reprodução nativa
- **LocalStorage API**: Persistência de dados
- **PostMessage API**: Comunicação entre janelas

### Como Integrar

1. **Incluir no HTML principal**:
```html
<iframe src="apps/video-player-mistico.html" id="videoPlayerFrame"></iframe>
```

2. **Enviar vídeo para reprodução**:
```javascript
const frame = document.getElementById('videoPlayerFrame');
frame.contentWindow.postMessage({
    type: 'OPEN_VIDEO',
    file: videoFile
}, '*');
```

3. **Receber notificações**:
```javascript
window.addEventListener('message', (event) => {
    if (event.data.action === 'videoOpened') {
        console.log('Vídeo aberto:', event.data.fileName);
    }
});
```

## Créditos

**Desenvolvido por**: MysticSoft  
**Design**: Aurora Sagrada  
**Inspiração**: Windows Media Player (Windows ME)  
**Versão**: 1.0.0  
**Data**: Outubro 2025

---

✨ **Aurora OS** • *Onde a tecnologia encontra a mística*
