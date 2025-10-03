// ═══════════════════════════════════════════════════════════
// 📁 AURORA OS - FILE SYSTEM API
// API compartilhada para todas as aplicações
// ═══════════════════════════════════════════════════════════

const AuroraFileSystem = {
    
    // Inicializar sistema de arquivos
    init: function() {
        const stored = localStorage.getItem('auroraOS_fileSystem');
        if (!stored) {
            this.createDefaultStructure();
        }
    },
    
    // Criar estrutura padrão
    createDefaultStructure: function() {
        const defaultFS = {
            folders: {
                "root": {
                    id: "root",
                    name: "Meu Computador",
                    parent: null,
                    children: ["my-documents", "trash"],
                    files: [],
                    special: true,
                    created: new Date().toISOString()
                },
                "my-documents": {
                    id: "my-documents",
                    name: "Meus Documentos",
                    parent: "root",
                    children: ["my-pictures", "my-music", "my-videos", "my-docs"],
                    files: [],
                    special: true,
                    created: new Date().toISOString()
                },
                "my-pictures": {
                    id: "my-pictures",
                    name: "Minhas Imagens",
                    parent: "my-documents",
                    children: [],
                    files: [],
                    special: true,
                    created: new Date().toISOString()
                },
                "my-music": {
                    id: "my-music",
                    name: "Minhas Músicas",
                    parent: "my-documents",
                    children: [],
                    files: [],
                    special: true,
                    created: new Date().toISOString()
                },
                "my-videos": {
                    id: "my-videos",
                    name: "Meus Vídeos",
                    parent: "my-documents",
                    children: [],
                    files: [],
                    special: true,
                    created: new Date().toISOString()
                },
                "my-docs": {
                    id: "my-docs",
                    name: "Documentos",
                    parent: "my-documents",
                    children: [],
                    files: [],
                    special: true,
                    created: new Date().toISOString()
                },
                "trash": {
                    id: "trash",
                    name: "Lixeira",
                    parent: "root",
                    children: [],
                    files: [],
                    special: true,
                    created: new Date().toISOString()
                }
            },
            files: {},
            settings: {
                viewMode: 'icons',
                sortBy: 'name',
                sortOrder: 'asc'
            }
        };
        
        localStorage.setItem('auroraOS_fileSystem', JSON.stringify(defaultFS));
    },
    
    // Salvar arquivo
    saveFile: function(fileData) {
        const fs = this.getFileSystem();
        const fileId = fileData.id || this.generateId();
        
        const file = {
            id: fileId,
            name: fileData.name,
            type: fileData.type || 'text/plain',
            extension: this.getExtension(fileData.name),
            content: fileData.content,
            size: new Blob([fileData.content]).size,
            created: fileData.created || new Date().toISOString(),
            modified: new Date().toISOString(),
            folder: fileData.folder || 'my-docs',
            thumbnail: fileData.thumbnail || null
        };
        
        fs.files[fileId] = file;
        
        // Adicionar à pasta
        if (!fs.folders[file.folder].files.includes(fileId)) {
            fs.folders[file.folder].files.push(fileId);
        }
        
        this.saveFileSystem(fs);
        return fileId;
    },
    
    // Carregar arquivo
    loadFile: function(fileId) {
        const fs = this.getFileSystem();
        return fs.files[fileId] || null;
    },
    
    // Atualizar arquivo
    updateFile: function(fileId, content) {
        const fs = this.getFileSystem();
        if (fs.files[fileId]) {
            fs.files[fileId].content = content;
            fs.files[fileId].modified = new Date().toISOString();
            fs.files[fileId].size = new Blob([content]).size;
            this.saveFileSystem(fs);
            return true;
        }
        return false;
    },
    
    // Listar arquivos de uma pasta
    listFiles: function(folderId, filterExtensions = null) {
        const fs = this.getFileSystem();
        const folder = fs.folders[folderId];
        if (!folder) return [];
        
        let files = folder.files.map(fileId => fs.files[fileId]).filter(f => f);
        
        // Filtrar por extensão se especificado
        if (filterExtensions) {
            files = files.filter(f => filterExtensions.includes(f.extension.toLowerCase()));
        }
        
        return files;
    },
    
    // Listar pastas
    listFolders: function() {
        const fs = this.getFileSystem();
        return Object.values(fs.folders);
    },
    
    // Excluir arquivo (mover para lixeira)
    deleteFile: function(fileId) {
        const fs = this.getFileSystem();
        const file = fs.files[fileId];
        if (!file) return false;
        
        // Remover da pasta atual
        const folder = fs.folders[file.folder];
        const index = folder.files.indexOf(fileId);
        if (index > -1) {
            folder.files.splice(index, 1);
        }
        
        // Mover para lixeira
        file.folder = 'trash';
        file.deletedDate = new Date().toISOString();
        fs.folders.trash.files.push(fileId);
        
        this.saveFileSystem(fs);
        return true;
    },
    
    // Restaurar arquivo da lixeira
    restoreFile: function(fileId, targetFolder = 'my-docs') {
        const fs = this.getFileSystem();
        const file = fs.files[fileId];
        if (!file || file.folder !== 'trash') return false;
        
        // Remover da lixeira
        const trashIndex = fs.folders.trash.files.indexOf(fileId);
        if (trashIndex > -1) {
            fs.folders.trash.files.splice(trashIndex, 1);
        }
        
        // Adicionar à pasta destino
        file.folder = targetFolder;
        delete file.deletedDate;
        fs.folders[targetFolder].files.push(fileId);
        
        this.saveFileSystem(fs);
        return true;
    },
    
    // Buscar arquivos
    searchFiles: function(query, folderId = null) {
        const fs = this.getFileSystem();
        let allFiles = Object.values(fs.files);
        
        // Filtrar por pasta se especificado
        if (folderId) {
            allFiles = allFiles.filter(f => f.folder === folderId);
        }
        
        // Buscar por nome
        query = query.toLowerCase();
        return allFiles.filter(f => f.name.toLowerCase().includes(query));
    },
    
    // Obter caminho completo
    getPath: function(folderId) {
        const fs = this.getFileSystem();
        const parts = [];
        let current = folderId;
        
        while (current) {
            const folder = fs.folders[current];
            if (!folder) break;
            parts.unshift(folder.name);
            current = folder.parent;
        }
        
        return parts.join(' \\ ');
    },
    
    // Utilitários
    getFileSystem: function() {
        return JSON.parse(localStorage.getItem('auroraOS_fileSystem'));
    },
    
    saveFileSystem: function(fs) {
        localStorage.setItem('auroraOS_fileSystem', JSON.stringify(fs));
    },
    
    generateId: function() {
        return 'file_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    },
    
    getExtension: function(filename) {
        const parts = filename.split('.');
        return parts.length > 1 ? '.' + parts.pop() : '';
    },
    
    formatSize: function(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    }
};

// Inicializar ao carregar
if (typeof window !== 'undefined') {
    AuroraFileSystem.init();
}
