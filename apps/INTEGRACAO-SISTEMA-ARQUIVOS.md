# 📁 Integração do Sistema de Arquivos - Aurora OS

## 🎯 Visão Geral

O Aurora OS agora possui um **sistema de arquivos virtual completo** integrado entre todas as aplicações. Arquivos salvos no Bloco de Notas aparecem no Explorador, músicas adicionadas podem ser tocadas no Media Player, e tudo é persistente usando LocalStorage.

## 🗄️ Arquitetura do Sistema

### Componentes

1. **filesystem-api.js** - API compartilhada (núcleo do sistema)
2. **Explorador de Arquivos** - Gerenciador visual de arquivos
3. **Bloco de Notas Esotérico** - Editor de texto integrado
4. **Media Player Místico** - Reprodutor de áudio integrado
5. **Video Player Místico** - Reprodutor de vídeo integrado

### Estrutura de Pastas

```
Meu Computador/
├── Meus Documentos/
│   ├── Minhas Imagens/      (fotos, PNG, JPG, GIF)
│   ├── Minhas Músicas/      (MP3, WAV, OGG)
│   ├── Meus Vídeos/         (MP4, AVI, MKV)
│   └── Documentos/          (TXT, HTML, RTF, MD)
└── Lixeira/                 (arquivos excluídos)
```

## 💾 Como Funciona

### 1. Salvar Arquivo no Bloco de Notas

**Fluxo:**
1. Usuário escreve no Bloco de Notas
2. Clica em "Arquivo → Salvar" ou "Salvar Como"
3. Digite o nome do arquivo
4. Arquivo é salvo no LocalStorage via `AuroraFileSystem.saveFile()`
5. Arquivo aparece automaticamente no Explorador na pasta "Documentos"

**Código:**
```javascript
// No Bloco de Notas
const fileId = AuroraFileSystem.saveFile({
    name: filename,
    content: content,
    type: 'text/html',
    folder: 'my-docs'
});
```

### 2. Abrir Arquivo do Explorador

**Fluxo:**
1. Usuário navega no Explorador de Arquivos
2. Duplo clique em um arquivo .txt/.html/.md
3. Explorador detecta o tipo e envia mensagem via `postMessage`
4. Bloco de Notas recebe a mensagem e carrega o conteúdo

**Código:**
```javascript
// No Explorador
window.parent.postMessage({
    action: 'openApp',
    app: 'bloco-notas',
    fileData: {
        action: 'openFile',
        fileId: file.id,
        fileName: file.name,
        content: file.content
    }
}, '*');

// No Bloco de Notas
window.addEventListener('message', function(event) {
    if (event.data.action === 'openFile') {
        document.getElementById('editor').innerHTML = event.data.content;
        currentFileId = event.data.fileId;
        currentFileName = event.data.fileName;
    }
});
```

### 3. Adicionar Música ao Media Player

**Fluxo:**
1. Usuário faz upload de MP3 no Explorador (pasta "Minhas Músicas")
2. Duplo clique no arquivo MP3
3. Explorador envia mensagem para o Media Player
4. Media Player adiciona à playlist e começa a tocar

**Código:**
```javascript
// No Explorador
window.parent.postMessage({
    action: 'openApp',
    app: 'media-player',
    fileData: {
        action: 'playAudio',
        fileName: file.name,
        content: file.content // URL ou Base64
    }
}, '*');

// No Media Player
window.addEventListener('message', function(event) {
    if (event.data.action === 'playAudio') {
        playlist.push({
            title: event.data.fileName,
            url: event.data.content
        });
        playTrack();
    }
});
```

### 4. Reproduzir Vídeo no Video Player

**Fluxo:**
1. Usuário faz upload de MP4/WebM no Explorador (pasta "Meus Vídeos")
2. Duplo clique no arquivo de vídeo
3. Explorador envia mensagem para o Video Player
4. Video Player carrega o vídeo e inicia reprodução

**Código:**
```javascript
// No Explorador
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

// No Video Player
window.addEventListener('message', function(event) {
    if (event.data.type === 'OPEN_VIDEO') {
        videoPlayer.openVideo(event.data.file);
    } else if (event.data.type === 'ADD_TO_PLAYLIST') {
        videoPlayer.addToPlaylist(event.data.file);
    }
});
```

### 5. Upload de Arquivos

**Tipos Suportados:**
- **Documentos:** .txt, .html, .rtf, .md, .doc
- **Imagens:** .jpg, .png, .gif, .bmp
- **Áudio:** .mp3, .wav, .ogg, .m4a
- **Vídeo:** .mp4, .avi, .mkv, .webm

**Como Fazer Upload:**
1. Abra o Explorador de Arquivos
2. Navegue até a pasta desejada
3. Clique no botão "📤 Upload"
4. Selecione os arquivos
5. Arquivos são convertidos para Base64 e salvos no LocalStorage

**Código:**
```javascript
function handleFileUpload(files) {
    Array.from(files).forEach(file => {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const fileData = {
                name: file.name,
                type: file.type,
                content: e.target.result, // Base64
                folder: currentFolder
            };
            
            AuroraFileSystem.saveFile(fileData);
            refreshView();
        };
        
        // Ler como Data URL (Base64)
        reader.readAsDataURL(file);
    });
}
```

## 🔧 API do Sistema de Arquivos

### Métodos Principais

```javascript
// Salvar arquivo
const fileId = AuroraFileSystem.saveFile({
    name: 'documento.txt',
    content: 'Conteúdo...',
    type: 'text/plain',
    folder: 'my-docs'
});

// Carregar arquivo
const file = AuroraFileSystem.loadFile(fileId);

// Atualizar arquivo
AuroraFileSystem.updateFile(fileId, novoConteudo);

// Listar arquivos de uma pasta
const files = AuroraFileSystem.listFiles('my-docs', ['.txt', '.html']);

// Excluir arquivo (move para lixeira)
AuroraFileSystem.deleteFile(fileId);

// Restaurar da lixeira
AuroraFileSystem.restoreFile(fileId, 'my-docs');

// Buscar arquivos
const results = AuroraFileSystem.searchFiles('ritual');

// Obter caminho completo
const path = AuroraFileSystem.getPath('my-docs');
// Retorna: "Meu Computador \ Meus Documentos \ Documentos"
```

### Estrutura de Arquivo

```javascript
{
    id: "file_1696348800000_abc123",
    name: "ritual-lua-cheia.txt",
    type: "text/plain",
    extension: ".txt",
    content: "Conteúdo do arquivo...",
    size: 1024, // bytes
    created: "2025-10-03T14:30:00.000Z",
    modified: "2025-10-03T15:45:00.000Z",
    folder: "my-docs",
    thumbnail: null // Para imagens
}
```

## 🎨 Personalização de Ícones

No Explorador de Arquivos, você pode personalizar os ícones colando seus links:

```javascript
const folderIcons = {
    "root": "SEU_LINK_AQUI",              // Meu Computador
    "my-documents": "SEU_LINK_AQUI",      // Meus Documentos
    "my-pictures": "SEU_LINK_AQUI",       // Minhas Imagens
    "my-music": "SEU_LINK_AQUI",          // Minhas Músicas
    "my-videos": "SEU_LINK_AQUI",         // Meus Vídeos
    "my-docs": "SEU_LINK_AQUI",           // Documentos
    "trash": "SEU_LINK_AQUI",             // Lixeira (vazia)
    "trash-full": "SEU_LINK_AQUI",        // Lixeira (cheia)
    "folder": "SEU_LINK_AQUI"             // Pasta genérica
};

const fileIcons = {
    '.jpg': "SEU_LINK_AQUI",
    '.mp3': "SEU_LINK_AQUI",
    '.txt': "SEU_LINK_AQUI",
    'default': "SEU_LINK_AQUI"
};
```

## 💡 Recursos Avançados

### 1. Backup e Restauração

```javascript
// Exportar tudo
function exportAllFiles() {
    const fs = AuroraFileSystem.getFileSystem();
    const json = JSON.stringify(fs, null, 2);
    
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'aurora-os-backup.json';
    a.click();
}

// Importar backup
function importBackup(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const fs = JSON.parse(e.target.result);
        localStorage.setItem('auroraOS_fileSystem', JSON.stringify(fs));
        location.reload();
    };
    reader.readAsText(file);
}
```

### 2. Thumbnails para Imagens

```javascript
function generateThumbnail(imageFile) {
    const img = new Image();
    img.onload = function() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = 48;
        canvas.height = 48;
        
        ctx.drawImage(img, 0, 0, 48, 48);
        
        const thumbnail = canvas.toDataURL('image/jpeg', 0.7);
        
        AuroraFileSystem.updateFile(fileId, {
            ...file,
            thumbnail: thumbnail
        });
    };
    
    img.src = imageFile.content;
}
```

### 3. Limite de Armazenamento

```javascript
function checkStorageLimit() {
    const fs = localStorage.getItem('auroraOS_fileSystem');
    const sizeInBytes = new Blob([fs]).size;
    const sizeInMB = (sizeInBytes / (1024 * 1024)).toFixed(2);
    const limit = 10; // LocalStorage ~10MB
    
    const percentage = (sizeInMB / limit) * 100;
    
    if (percentage > 80) {
        alert(`⚠️ Armazenamento em ${percentage.toFixed(0)}%\n${sizeInMB}MB de ${limit}MB usados`);
    }
}
```

## 🚀 Integração com Aurora OS Principal

Para integrar no sistema principal (index.html):

### 1. Adicionar Ícones no Desktop

```javascript
const desktopIcons = [
    {
        id: 'explorador',
        name: 'Explorador de Arquivos',
        icon: '📁',
        url: 'apps/explorador-arquivos.html'
    },
    {
        id: 'bloco-notas',
        name: 'Bloco de Notas',
        icon: '📝',
        url: 'apps/bloco-notas-esoterico.html'
    },
    {
        id: 'media-player',
        name: 'Media Player',
        icon: '🎵',
        url: 'apps/media-player-mistico.html'
    }
];
```

### 2. Incluir API no index.html

```html
<script src="apps/filesystem-api.js"></script>
```

### 3. Gerenciar Mensagens entre Apps

```javascript
// No Aurora OS principal
window.addEventListener('message', function(event) {
    if (event.data.action === 'openApp') {
        const app = event.data.app;
        const fileData = event.data.fileData;
        
        // Abrir aplicação
        openWebsite(app, `apps/${app}.html`);
        
        // Enviar dados do arquivo para a aplicação
        setTimeout(() => {
            const iframe = document.querySelector(`iframe[src*="${app}"]`);
            if (iframe) {
                iframe.contentWindow.postMessage(fileData, '*');
            }
        }, 1000);
    }
});
```

## 📊 Estatísticas

- **Tamanho da API:** 8KB
- **Capacidade:** ~10MB (LocalStorage)
- **Arquivos suportados:** 15+ tipos
- **Pastas especiais:** 6
- **Aplicações integradas:** 4 (Bloco de Notas, Media Player, Video Player, File Explorer)

## ✅ Checklist de Implementação

- [x] API do sistema de arquivos (filesystem-api.js)
- [x] Explorador de Arquivos completo
- [x] Integração com Bloco de Notas (salvar/abrir)
- [x] Integração com Media Player (adicionar músicas)
- [x] Integração com Video Player (reproduzir vídeos)
- [x] Upload de arquivos (todos os tipos)
- [x] Visualizadores (imagens, vídeos)
- [x] Lixeira com restauração
- [x] Busca de arquivos
- [x] Menu de contexto (botão direito)
- [x] Persistência em LocalStorage
- [x] Gerenciamento de playlists (áudio e vídeo)
- [ ] Integração com Aurora OS principal (index.html)
- [ ] Backup/Restauração via UI
- [ ] Thumbnails automáticos para imagens e vídeos
- [ ] Indicador de espaço usado

## 🌟 Próximos Passos

1. Integrar no Aurora OS principal (index.html)
2. Adicionar ícones personalizados
3. Criar interface de backup/restauração
4. Implementar arrastar e soltar (drag & drop)
5. Adicionar mais visualizadores (PDF, etc.)

---

**Desenvolvido com 💜 e ✨ por MysticSoft Technologies**  
**Para Aurora Sagrada - Onde a tecnologia encontra o místico**
