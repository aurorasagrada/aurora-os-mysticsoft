# 🎬 Guia Rápido - Video Player Místico

## Introdução

O **Video Player Místico** é um reprodutor de vídeo completo integrado ao Aurora OS. Com design inspirado no Windows ME e as cores místicas da Aurora Sagrada, oferece uma experiência nostálgica e funcional para reprodução de vídeos.

## Como Começar

### Abrindo o Video Player

O Video Player pode ser acessado de três formas principais:

**1. Pelo File Explorer** (Recomendado)
- Abra o Explorador de Arquivos
- Navegue até a pasta "Meus Vídeos"
- Dê duplo clique em qualquer arquivo de vídeo (.mp4, .webm, .ogg, etc.)
- O vídeo abrirá automaticamente no Video Player

**2. Pelo Menu Iniciar**
- Clique no botão "Iniciar" na taskbar
- Selecione "Video Player Místico"
- O player abrirá vazio, pronto para receber vídeos

**3. Por Arrastar e Soltar**
- Arraste um arquivo de vídeo do seu computador
- Solte sobre o ícone do Video Player
- O vídeo será adicionado e começará a reproduzir

## Interface Principal

### Área de Vídeo

A área central exibe o vídeo em reprodução. Quando você passa o mouse sobre ela, aparece um **overlay** com informações do vídeo atual, incluindo título, resolução, duração e tamanho do arquivo.

**Dica**: Clique diretamente na área de vídeo para pausar ou retomar a reprodução rapidamente.

### Barra de Progresso

Logo abaixo do vídeo, a barra de progresso mostra o andamento da reprodução. A barra possui duas camadas: uma mais clara indicando o **buffer** (quanto já foi carregado) e outra mais escura mostrando o **progresso atual**.

**Como usar**: Clique em qualquer ponto da barra para pular para aquele momento do vídeo. O tempo atual e o tempo total são exibidos abaixo da barra.

### Controles de Reprodução

Os botões de controle estão organizados de forma intuitiva:

**Navegação na Playlist**
- **⏮ Anterior**: Volta para o vídeo anterior na playlist (ou use `Ctrl + ←`)
- **⏭ Próximo**: Avança para o próximo vídeo (ou use `Ctrl + →`)

**Controle de Tempo**
- **⏪ Retroceder**: Volta 10 segundos no vídeo (ou use `←`)
- **▶/⏸ Play/Pause**: Inicia ou pausa a reprodução (ou use `Espaço`)
- **⏩ Avançar**: Avança 10 segundos no vídeo (ou use `→`)

**Controles Especiais**
- **⏹ Stop**: Para completamente a reprodução e volta ao início (ou use `S`)
- **🔁 Repetir**: Ativa ou desativa a repetição do vídeo atual (ou use `L`)
- **📋 Playlist**: Mostra ou oculta a lista de vídeos (ou use `P`)
- **⛶ Tela Cheia**: Ativa o modo tela cheia (ou use `F`)

### Volume e Velocidade

Na parte inferior, você encontra controles adicionais:

**Volume**
- Use o **slider** para ajustar o volume de 0% a 100%
- Clique no **ícone de volume** (🔊) para ativar ou desativar o mudo (ou use `M`)
- O ícone muda conforme o nível: 🔇 (mudo), 🔉 (baixo), 🔊 (alto)

**Velocidade de Reprodução**
- Selecione no dropdown a velocidade desejada
- Opções disponíveis: 0.25x, 0.5x, 0.75x, **1x** (normal), 1.25x, 1.5x, 2x
- Útil para assistir vídeos mais rápido ou em câmera lenta

## Gerenciando a Playlist

### Visualizando a Playlist

Clique no botão **📋 Playlist** para expandir a lista de vídeos. A playlist mostra todos os vídeos carregados, com o vídeo atual destacado em azul escuro com texto dourado.

Cada item da playlist exibe:
- **Nome do arquivo**
- **Tamanho do arquivo**
- **Duração** (quando disponível)
- **Botão de remover** (✕)

### Adicionando Vídeos

Existem várias formas de adicionar vídeos à playlist:

**Do File Explorer**
- Navegue até "Meus Vídeos" no Explorador
- Dê duplo clique no vídeo desejado
- O vídeo será adicionado automaticamente

**Carregar Pasta Completa**
- Clique em **📁 Carregar Pasta** no cabeçalho da playlist
- Todos os vídeos da pasta "Meus Vídeos" serão importados de uma vez

**Upload Direto**
- Abra o File Explorer
- Clique em **📤 Upload**
- Selecione os vídeos do seu computador
- Os vídeos serão salvos em "Meus Vídeos" e adicionados à playlist

### Removendo Vídeos

Para remover um vídeo específico da playlist:
- Localize o vídeo na lista
- Clique no botão **✕** à direita do item
- O vídeo será removido (mas não excluído do sistema de arquivos)

Para limpar toda a playlist de uma vez:
- Clique em **🗑 Limpar** no cabeçalho da playlist
- Confirme a ação
- Todos os vídeos serão removidos da playlist

### Reproduzindo da Playlist

Para reproduzir qualquer vídeo da playlist:
- Clique diretamente no item desejado
- O vídeo começará a reproduzir imediatamente
- O item ficará destacado como ativo

## Atalhos de Teclado

O Video Player oferece controle total via teclado para uma experiência mais ágil:

### Reprodução Básica
- **Espaço**: Play/Pause
- **S**: Stop (para e volta ao início)
- **←**: Retroceder 10 segundos
- **→**: Avançar 10 segundos

### Navegação
- **Ctrl + ←**: Vídeo anterior
- **Ctrl + →**: Próximo vídeo

### Controles Especiais
- **L**: Ativar/desativar repetição
- **P**: Mostrar/ocultar playlist
- **F**: Tela cheia
- **M**: Mudo

**Dica**: Os atalhos funcionam em qualquer lugar da janela, exceto quando você está digitando em um campo de texto.

## Barra de Status

Na parte inferior da janela, a barra de status exibe informações em tempo real:

**Lado Esquerdo**
- Status atual: "Reproduzindo", "Pausado", "Parado", etc.

**Lado Direito**
- **Formato**: Tipo do arquivo (MP4, WebM, etc.)
- **Resolução**: Dimensões do vídeo (ex: 1920x1080)
- **Contador**: Quantidade de vídeos na playlist

## Formatos Suportados

O Video Player suporta os formatos mais comuns de vídeo:

### Totalmente Suportados
- **MP4** (.mp4) - Recomendado, suporte universal
- **WebM** (.webm) - Excelente para web, alta qualidade
- **OGG** (.ogg) - Formato livre, boa compatibilidade

### Suporte Limitado
- **AVI** (.avi) - Depende do codec usado
- **MOV** (.mov) - Melhor suporte no Safari

**Nota**: O suporte a formatos depende do navegador utilizado. Para melhor compatibilidade, recomendamos usar arquivos MP4 com codec H.264.

## Dicas e Truques

### Reprodução Contínua

Quando você tem vários vídeos na playlist, o player automaticamente avança para o próximo vídeo ao terminar o atual. Se você quiser repetir apenas um vídeo específico, ative o modo **🔁 Repetir**.

### Modo Tela Cheia

Para uma experiência imersiva, use o modo tela cheia:
- Clique no botão **⛶** ou pressione **F**
- O vídeo ocupará toda a tela
- Mova o mouse para revelar os controles
- Pressione **Esc** ou **F** novamente para sair

### Navegação Rápida

Use os atalhos **←** e **→** para navegar rapidamente pelo vídeo em incrementos de 10 segundos. Para pulos maiores, clique diretamente na barra de progresso.

### Velocidade Personalizada

Assistindo tutoriais ou palestras? Aumente a velocidade para 1.25x ou 1.5x para economizar tempo. Analisando detalhes? Use 0.5x ou 0.25x para câmera lenta.

### Organização

Mantenha seus vídeos organizados na pasta "Meus Vídeos" do File Explorer. Use subpastas para categorizar (ex: "Tutoriais", "Filmes", "Clipes") - embora a funcionalidade de subpastas esteja planejada para versões futuras.

## Persistência de Dados

O Video Player salva automaticamente sua playlist no navegador. Isso significa que:
- Ao fechar e reabrir o player, sua playlist estará intacta
- O último vídeo reproduzido será lembrado
- As configurações de volume e velocidade são mantidas

**Importante**: Os dados são salvos no LocalStorage do navegador. Se você limpar os dados do navegador, a playlist será perdida.

## Solução de Problemas

### O vídeo não carrega

**Possíveis causas e soluções**:
- **Formato não suportado**: Verifique se o formato é compatível (MP4, WebM, OGG)
- **Arquivo muito grande**: O LocalStorage tem limite de ~10MB
- **Arquivo corrompido**: Tente abrir o vídeo em outro player para verificar
- **Codec incompatível**: Converta o vídeo para MP4 com codec H.264

### O áudio não funciona

**Verifique**:
- Se o player não está no mudo (ícone 🔇)
- Se o volume do player não está em 0%
- Se o volume do sistema está adequado
- Se o navegador tem permissão para reproduzir áudio

### A playlist não salva

**Possíveis causas**:
- LocalStorage cheio: Limpe dados antigos ou use vídeos menores
- Navegação privada: O LocalStorage pode não funcionar em modo anônimo
- Permissões do navegador: Verifique as configurações de armazenamento

### Vídeo travando ou lento

**Soluções**:
- Reduza a qualidade/resolução do vídeo
- Feche outras abas do navegador
- Verifique a conexão se for streaming
- Atualize o navegador para a versão mais recente

## Recursos Futuros

O Video Player está em constante evolução. Recursos planejados incluem:

**Versão 1.1**
- Suporte a legendas (arquivos SRT/VTT)
- Geração automática de thumbnails
- Marcadores personalizados na timeline
- Captura de screenshots

**Versão 1.2**
- Streaming de URLs online
- Filtros visuais (brilho, contraste, saturação)
- Equalização de áudio avançada
- Picture-in-Picture

**Versão 2.0**
- Editor de vídeo básico
- Conversão entre formatos
- Extração de áudio
- Criação de GIFs animados

## Conclusão

O Video Player Místico oferece uma experiência completa e nostálgica de reprodução de vídeos, combinando a estética clássica do Windows ME com funcionalidades modernas. Explore todos os recursos, experimente os atalhos de teclado e aproveite seus vídeos com estilo místico!

Para informações técnicas detalhadas, consulte o arquivo **VIDEO-PLAYER-MISTICO-DOC.md**.

---

✨ **Aurora OS** • *Onde a tecnologia encontra a mística*

**Desenvolvido por**: MysticSoft Technologies  
**Para**: Aurora Sagrada  
**Versão**: 1.0.0
