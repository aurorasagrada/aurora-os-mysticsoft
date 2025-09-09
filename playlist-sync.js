// === SISTEMA DE SINCRONIZAÇÃO DE PLAYLIST ===
class PlaylistSync {
    constructor() {
        this.syncInterval = 30000; // 30 segundos
        this.lastSync = 0;
        this.isOnline = navigator.onLine;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.startPeriodicSync();
        this.loadCachedPlaylist();
    }

    setupEventListeners() {
        // Listen for online/offline events
        window.addEventListener('online', () => {
            this.isOnline = true;
            this.syncPlaylist();
        });

        window.addEventListener('offline', () => {
            this.isOnline = false;
        });

        // Listen for playlist updates from admin panel
        window.addEventListener('playlistUpdated', (event) => {
            this.handlePlaylistUpdate(event.detail.playlist);
        });

        // Listen for storage changes (cross-tab sync)
        window.addEventListener('storage', (event) => {
            if (event.key === 'aurora-global-playlist') {
                this.handleStorageChange(event.newValue);
            }
        });
    }

    startPeriodicSync() {
        setInterval(() => {
            if (this.isOnline && Date.now() - this.lastSync > this.syncInterval) {
                this.syncPlaylist();
            }
        }, this.syncInterval);
    }

    async syncPlaylist() {
        try {
            this.lastSync = Date.now();
            
            // In production, this would fetch from your backend API
            // For now, we'll use localStorage as the "server"
            const serverPlaylist = this.getServerPlaylist();
            const localPlaylist = this.getLocalPlaylist();
            
            if (this.hasPlaylistChanged(serverPlaylist, localPlaylist)) {
                this.updateLocalPlaylist(serverPlaylist);
                this.notifyPlaylistUpdate(serverPlaylist);
            }
            
        } catch (error) {
            console.error('Erro na sincronização da playlist:', error);
        }
    }

    getServerPlaylist() {
        // Simulate server response
        // In production, this would be an API call
        const stored = localStorage.getItem('aurora-global-playlist');
        return stored ? JSON.parse(stored) : [];
    }

    getLocalPlaylist() {
        const stored = localStorage.getItem('aurora-player-playlist');
        return stored ? JSON.parse(stored) : [];
    }

    hasPlaylistChanged(serverPlaylist, localPlaylist) {
        if (serverPlaylist.length !== localPlaylist.length) {
            return true;
        }
        
        return serverPlaylist.some((track, index) => {
            const localTrack = localPlaylist[index];
            return !localTrack || 
                   track.id !== localTrack.id ||
                   track.title !== localTrack.title ||
                   track.artist !== localTrack.artist;
        });
    }

    updateLocalPlaylist(newPlaylist) {
        localStorage.setItem('aurora-player-playlist', JSON.stringify(newPlaylist));
        
        // Update Aurora Player if it exists
        if (window.auroraPlayerAdvanced) {
            window.auroraPlayerAdvanced.playlist = newPlaylist;
            window.auroraPlayerAdvanced.updatePlaylistDisplay();
            window.auroraPlayerAdvanced.updateTrackDisplay();
        }
    }

    notifyPlaylistUpdate(playlist) {
        // Show notification to user
        if (typeof showNotification === 'function') {
            showNotification(
                "🎵 Playlist Atualizada", 
                `${playlist.length} faixas disponíveis`, 
                'info'
            );
        }

        // Trigger custom event for other components
        const event = new CustomEvent('playlistSynced', {
            detail: { playlist, timestamp: Date.now() }
        });
        window.dispatchEvent(event);
    }

    handlePlaylistUpdate(playlist) {
        // Called when admin panel updates playlist
        this.updateLocalPlaylist(playlist);
        
        // In production, send to backend
        this.sendToServer(playlist);
    }

    handleStorageChange(newValue) {
        if (newValue) {
            const playlist = JSON.parse(newValue);
            this.notifyPlaylistUpdate(playlist);
        }
    }

    async sendToServer(playlist) {
        // In production, this would send to your backend API
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // For now, just update localStorage
            localStorage.setItem('aurora-global-playlist', JSON.stringify(playlist));
            
            console.log('Playlist enviada para o servidor:', playlist.length, 'faixas');
        } catch (error) {
            console.error('Erro ao enviar playlist para o servidor:', error);
        }
    }

    loadCachedPlaylist() {
        const cachedPlaylist = this.getLocalPlaylist();
        if (cachedPlaylist.length === 0) {
            // Load default playlist if no cached version
            this.loadDefaultPlaylist();
        }
    }

    loadDefaultPlaylist() {
        const defaultPlaylist = [
            { 
                title: 'Stellar Dreams', 
                artist: 'Aurora Mystica', 
                duration: 180, 
                genre: 'Ambient',
                id: 1,
                addedDate: new Date().toISOString()
            },
            { 
                title: 'Moonlight Serenade', 
                artist: 'Celestial Voices', 
                duration: 240, 
                genre: 'New Age',
                id: 2,
                addedDate: new Date().toISOString()
            },
            { 
                title: 'Crystal Meditation', 
                artist: 'Sacred Sounds', 
                duration: 300, 
                genre: 'Meditation',
                id: 3,
                addedDate: new Date().toISOString()
            },
            { 
                title: 'Witch\'s Brew', 
                artist: 'Mystic Rhythms', 
                duration: 210, 
                genre: 'Dark Ambient',
                id: 4,
                addedDate: new Date().toISOString()
            },
            { 
                title: 'Aurora Borealis', 
                artist: 'Northern Lights', 
                duration: 270, 
                genre: 'Cinematic',
                id: 5,
                addedDate: new Date().toISOString()
            },
            { 
                title: 'Sacred Geometry', 
                artist: 'Quantum Healing', 
                duration: 195, 
                genre: 'Healing',
                id: 6,
                addedDate: new Date().toISOString()
            }
        ];

        this.updateLocalPlaylist(defaultPlaylist);
    }

    // Manual sync trigger
    forcSync() {
        this.syncPlaylist();
    }

    // Get sync status
    getSyncStatus() {
        return {
            isOnline: this.isOnline,
            lastSync: this.lastSync,
            nextSync: this.lastSync + this.syncInterval
        };
    }
}

// === PLAYLIST MANAGER PARA AURORA PLAYER ===
class PlaylistManager {
    constructor() {
        this.playlist = [];
        this.currentTrack = 0;
        this.sync = new PlaylistSync();
        this.init();
    }

    init() {
        this.loadPlaylist();
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Listen for playlist sync events
        window.addEventListener('playlistSynced', (event) => {
            this.playlist = event.detail.playlist;
            this.updatePlayerPlaylist();
        });
    }

    loadPlaylist() {
        const stored = localStorage.getItem('aurora-player-playlist');
        if (stored) {
            this.playlist = JSON.parse(stored);
        } else {
            // Load from global playlist
            const global = localStorage.getItem('aurora-global-playlist');
            if (global) {
                this.playlist = JSON.parse(global);
                this.savePlaylist();
            }
        }
    }

    savePlaylist() {
        localStorage.setItem('aurora-player-playlist', JSON.stringify(this.playlist));
    }

    updatePlayerPlaylist() {
        // Update Aurora Player Advanced if it exists
        if (window.auroraPlayerAdvanced) {
            window.auroraPlayerAdvanced.playlist = this.playlist;
            window.auroraPlayerAdvanced.updatePlaylistDisplay();
            
            // If current track is out of bounds, reset to first track
            if (window.auroraPlayerAdvanced.currentTrack >= this.playlist.length) {
                window.auroraPlayerAdvanced.currentTrack = 0;
                window.auroraPlayerAdvanced.updateTrackDisplay();
            }
        }

        this.savePlaylist();
    }

    addTrack(track) {
        this.playlist.push(track);
        this.updatePlayerPlaylist();
    }

    removeTrack(index) {
        if (index >= 0 && index < this.playlist.length) {
            this.playlist.splice(index, 1);
            this.updatePlayerPlaylist();
        }
    }

    getTrack(index) {
        return this.playlist[index] || null;
    }

    getPlaylist() {
        return [...this.playlist];
    }

    shufflePlaylist() {
        for (let i = this.playlist.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.playlist[i], this.playlist[j]] = [this.playlist[j], this.playlist[i]];
        }
        this.updatePlayerPlaylist();
    }

    sortPlaylist(sortBy = 'title') {
        this.playlist.sort((a, b) => {
            switch(sortBy) {
                case 'title':
                    return a.title.localeCompare(b.title);
                case 'artist':
                    return a.artist.localeCompare(b.artist);
                case 'genre':
                    return a.genre.localeCompare(b.genre);
                case 'duration':
                    return a.duration - b.duration;
                case 'date':
                    return new Date(a.addedDate) - new Date(b.addedDate);
                default:
                    return 0;
            }
        });
        this.updatePlayerPlaylist();
    }

    searchTracks(query) {
        const searchTerm = query.toLowerCase();
        return this.playlist.filter(track => 
            track.title.toLowerCase().includes(searchTerm) ||
            track.artist.toLowerCase().includes(searchTerm) ||
            track.genre.toLowerCase().includes(searchTerm)
        );
    }

    getTracksByGenre(genre) {
        return this.playlist.filter(track => 
            track.genre.toLowerCase() === genre.toLowerCase()
        );
    }

    getTracksByArtist(artist) {
        return this.playlist.filter(track => 
            track.artist.toLowerCase() === artist.toLowerCase()
        );
    }

    getTotalDuration() {
        return this.playlist.reduce((total, track) => total + track.duration, 0);
    }

    getGenres() {
        return [...new Set(this.playlist.map(track => track.genre))];
    }

    getArtists() {
        return [...new Set(this.playlist.map(track => track.artist))];
    }

    // Export playlist in various formats
    exportPlaylist(format = 'json') {
        switch(format) {
            case 'json':
                return JSON.stringify(this.playlist, null, 2);
            case 'm3u':
                return this.generateM3U();
            case 'pls':
                return this.generatePLS();
            default:
                return JSON.stringify(this.playlist, null, 2);
        }
    }

    generateM3U() {
        let m3u = '#EXTM3U\n';
        this.playlist.forEach(track => {
            m3u += `#EXTINF:${track.duration},${track.artist} - ${track.title}\n`;
            m3u += `${track.url || track.title}\n`;
        });
        return m3u;
    }

    generatePLS() {
        let pls = '[playlist]\n';
        this.playlist.forEach((track, index) => {
            pls += `File${index + 1}=${track.url || track.title}\n`;
            pls += `Title${index + 1}=${track.artist} - ${track.title}\n`;
            pls += `Length${index + 1}=${track.duration}\n`;
        });
        pls += `NumberOfEntries=${this.playlist.length}\n`;
        pls += 'Version=2\n';
        return pls;
    }
}

// Global instances
let playlistSync;
let playlistManager;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize playlist management
    playlistManager = new PlaylistManager();
    
    // Initialize sync system
    playlistSync = new PlaylistSync();
    
    console.log('🎵 Sistema de sincronização de playlist inicializado');
});

// Global functions for external access
window.PlaylistManager = PlaylistManager;
window.PlaylistSync = PlaylistSync;

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PlaylistManager, PlaylistSync };
}

