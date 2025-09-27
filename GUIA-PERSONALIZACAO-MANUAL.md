# 🎯 Guia de Personalização Manual - Aurora OS

Este guia explica como personalizar manualmente os ícones e links do Aurora OS diretamente no código.

## 📍 Localização da Configuração

Abra o arquivo `aurora-os-enhanced.html` e procure pela seção:

```javascript
// ========================================
// 🎯 CONFIGURAÇÃO MANUAL DE SITES E ÍCONES
// ========================================
```

## 🔧 Como Adicionar Novos Sites/Aplicativos

### 1. Estrutura Básica

Cada site/aplicativo segue esta estrutura:

```javascript
{ 
    id: 'identificador-unico', 
    name: 'Nome que aparece no sistema', 
    url: 'https://seusite.com', 
    icon: '🌐', // ou 'meu-icone.png'
    premium: false // ou true
}
```

### 2. Campos Obrigatórios

| Campo | Descrição | Exemplo |
|-------|-----------|---------|
| `id` | Identificador único (letras minúsculas, números, hífens) | `'meu-site'` |
| `name` | Nome exibido no sistema | `'Meu Site Pessoal'` |
| `url` | Link do site ou aplicativo | `'https://meusite.com'` |
| `icon` | Ícone (emoji ou arquivo de imagem) | `'🌐'` ou `'icone.png'` |
| `premium` | Se aparece na seção premium (dourada) | `true` ou `false` |

## 🎨 Configuração de Ícones

### Opção 1: Emojis
Use emojis diretamente no código:

```javascript
icon: '🌐'  // Emoji de globo
icon: '📧'  // Emoji de email
icon: '🎮'  // Emoji de game
icon: '📱'  // Emoji de celular
```

### Opção 2: Imagens Personalizadas
1. Coloque sua imagem na pasta do projeto
2. Use o nome do arquivo:

```javascript
icon: 'meu-icone.png'
icon: 'logo-empresa.png'
icon: 'app-icon.png'
```

**Especificações recomendadas para imagens:**
- Formato: PNG com transparência
- Tamanho: 64x64 pixels
- Estilo: Pixel art (opcional, mas combina com a estética)

## 📂 Seções do Menu

### Aplicativos Básicos (`premium: false`)
Aparecem na parte superior do menu Iniciar com fundo normal.

### Aplicativos Premium (`premium: true`)
Aparecem na seção dourada do menu Iniciar, separados por uma linha.

## 🌐 Tipos de Links Suportados

### Sites Normais
```javascript
url: 'https://google.com'
url: 'https://youtube.com'
url: 'https://meusite.com.br'
```

### Aplicativo Local de Arquivos
```javascript
url: 'local://files'  // Abre o gerenciador de arquivos interno
```

## 📝 Exemplos Práticos

### Exemplo 1: Site Pessoal Básico
```javascript
{ 
    id: 'meu-blog', 
    name: 'Meu Blog', 
    url: 'https://meublog.com', 
    icon: '📝', 
    premium: false 
}
```

### Exemplo 2: Aplicativo Premium com Ícone Personalizado
```javascript
{ 
    id: 'minha-loja', 
    name: 'Minha Loja Online', 
    url: 'https://minhaloja.com', 
    icon: 'loja-icon.png', 
    premium: true 
}
```

### Exemplo 3: Rede Social
```javascript
{ 
    id: 'instagram', 
    name: 'Instagram', 
    url: 'https://instagram.com', 
    icon: '📷', 
    premium: false 
}
```

## 🔄 Como Aplicar as Mudanças

1. **Edite o arquivo**: Abra `aurora-os-enhanced.html` em um editor de texto
2. **Localize a seção**: Procure por `sitesConfig = [`
3. **Adicione seus sites**: Insira novos objetos na array seguindo os exemplos
4. **Salve o arquivo**: Salve as alterações
5. **Recarregue o navegador**: Atualize a página para ver as mudanças

## ⚠️ Dicas Importantes

### Sintaxe JavaScript
- **Vírgulas**: Sempre coloque vírgula após cada objeto (exceto o último)
- **Aspas**: Use aspas simples `'` ou duplas `"` consistentemente
- **IDs únicos**: Cada `id` deve ser diferente dos outros

### Exemplo de Sintaxe Correta
```javascript
const sitesConfig = [
    { 
        id: 'site1', 
        name: 'Site 1', 
        url: 'https://site1.com', 
        icon: '🌐', 
        premium: false 
    },  // ← Vírgula aqui
    { 
        id: 'site2', 
        name: 'Site 2', 
        url: 'https://site2.com', 
        icon: '📱', 
        premium: true 
    }   // ← Sem vírgula no último item
];
```

## 🎯 Localização no Código

Procure por esta seção no arquivo `aurora-os-enhanced.html`:

```javascript
// ==========================================
// ➕ ADICIONE SEUS PRÓPRIOS SITES AQUI:
// ==========================================
```

Adicione seus novos sites logo após os comentários de exemplo.

## 🚀 Resultado

Após adicionar seus sites, eles aparecerão:
- **No desktop**: Como ícones clicáveis
- **No menu Iniciar**: Organizados por seção (básico/premium)
- **Com funcionalidade completa**: Abrindo em janelas do sistema

Agora você tem controle total sobre os aplicativos e sites disponíveis no seu Aurora OS!
