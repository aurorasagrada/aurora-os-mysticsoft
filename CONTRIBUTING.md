# 🤝 Contribuindo para o Aurora OS • MysticSoft

Obrigado por seu interesse em contribuir! Este documento fornece diretrizes para contribuições.

## 🌟 Como Contribuir

### 1. Fork e Clone
```bash
# Fork o repositório no GitHub
# Clone seu fork
git clone https://github.com/SEU_USUARIO/aurora-os-mysticsoft.git
cd aurora-os-mysticsoft
```

### 2. Crie uma Branch
```bash
# Crie uma branch para sua feature
git checkout -b feature/nova-funcionalidade

# Ou para correção de bug
git checkout -b fix/correcao-bug
```

### 3. Desenvolva
- Mantenha o código limpo e comentado
- Siga as convenções de nomenclatura existentes
- Teste suas mudanças em diferentes navegadores

### 4. Commit
```bash
# Adicione suas mudanças
git add .

# Commit com mensagem descritiva
git commit -m "feat: adiciona nova funcionalidade X"
```

### 5. Push e Pull Request
```bash
# Push para seu fork
git push origin feature/nova-funcionalidade

# Abra um Pull Request no GitHub
```

## 📋 Diretrizes de Código

### JavaScript
- Use ES6+ features
- Mantenha funções pequenas e focadas
- Comente código complexo
- Use nomes descritivos para variáveis

```javascript
// ✅ Bom
class AuroraPlayer {
    constructor() {
        this.isPlaying = false;
        this.currentTrack = 0;
    }
    
    togglePlay() {
        this.isPlaying = !this.isPlaying;
        this.updateUI();
    }
}

// ❌ Evite
var p = false;
function t() { p = !p; }
```

### CSS
- Use variáveis CSS para cores
- Mantenha seletores específicos
- Organize por componentes

```css
/* ✅ Bom */
.aurora-player {
    background: var(--vinho);
    border: 2px solid var(--dourado);
}

.aurora-player__button {
    color: var(--pergaminho);
}

/* ❌ Evite */
div { background: #3e0a29; }
```

### HTML
- Use HTML5 semântico
- Adicione atributos de acessibilidade
- Mantenha estrutura limpa

```html
<!-- ✅ Bom -->
<button class="control-button" aria-label="Reproduzir música">
    <span class="icon">▶</span>
</button>

<!-- ❌ Evite -->
<div onclick="play()">▶</div>
```

## 🎨 Padrões de Design

### Cores
Use sempre as variáveis da paleta Aurora Sagrada:
- `--vinho: #3e0a29` - Elementos principais
- `--verde: #b2d1b1` - Detalhes suaves
- `--azul: #0b1836` - Fundos e contrastes
- `--dourado: #f0aa53` - Destaques e bordas
- `--pergaminho: #f2eaff` - Textos e conteúdo

### Tipografia
- **Títulos**: Times New Roman
- **Interface**: Segoe UI
- **Código**: Monospace

### Componentes
- Mantenha estética Windows ME
- Use bordas 3D (outset/inset)
- Adicione efeitos hover sutis
- Preserve proporções dos ícones (64x64)

## 🐛 Reportando Bugs

### Template de Issue
```markdown
**Descrição do Bug**
Descrição clara do que está acontecendo.

**Passos para Reproduzir**
1. Vá para '...'
2. Clique em '...'
3. Veja o erro

**Comportamento Esperado**
O que deveria acontecer.

**Screenshots**
Se aplicável, adicione screenshots.

**Ambiente**
- OS: [Windows/Mac/Linux]
- Navegador: [Chrome/Firefox/Safari]
- Versão: [versão do navegador]
```

## ✨ Sugerindo Features

### Template de Feature Request
```markdown
**Descrição da Feature**
Descrição clara da funcionalidade desejada.

**Problema que Resolve**
Que problema esta feature resolveria?

**Solução Proposta**
Como você imagina que funcionaria?

**Alternativas Consideradas**
Outras abordagens que você pensou?

**Contexto Adicional**
Qualquer outra informação relevante.
```

## 🎯 Áreas de Contribuição

### 🔧 Desenvolvimento
- Novos aplicativos místicos
- Melhorias na interface
- Otimizações de performance
- Correções de bugs

### 🎨 Design
- Novos ícones pixel art
- Máscaras para o Aurora Player
- Temas alternativos
- Animações e efeitos

### 📚 Documentação
- Melhorias no README
- Tutoriais de uso
- Documentação de API
- Tradução para outros idiomas

### 🧪 Testes
- Testes em diferentes navegadores
- Testes de acessibilidade
- Testes de performance
- Relatórios de bugs

## 🏷️ Convenções de Commit

Use o padrão [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `docs:` - Mudanças na documentação
- `style:` - Mudanças de formatação
- `refactor:` - Refatoração de código
- `test:` - Adição de testes
- `chore:` - Tarefas de manutenção

### Exemplos
```bash
feat: adiciona sistema de temas personalizados
fix: corrige bug no visualizador do Aurora Player
docs: atualiza README com instruções de instalação
style: ajusta espaçamento dos ícones do desktop
refactor: reorganiza estrutura de classes JavaScript
test: adiciona testes para sistema de notificações
chore: atualiza dependências do projeto
```

## 🎭 Código de Conduta

### Nossos Valores
- **Respeito**: Trate todos com cortesia
- **Inclusão**: Bem-vindos desenvolvedores de todos os níveis
- **Colaboração**: Trabalhe junto para melhorar o projeto
- **Aprendizado**: Compartilhe conhecimento

### Comportamentos Esperados
- Use linguagem acolhedora e inclusiva
- Respeite diferentes pontos de vista
- Aceite críticas construtivas
- Foque no que é melhor para a comunidade

### Comportamentos Inaceitáveis
- Linguagem ou imagens ofensivas
- Ataques pessoais ou políticos
- Assédio público ou privado
- Publicar informações privadas sem permissão

## 📞 Contato

- **Issues**: Use o sistema de issues do GitHub
- **Discussões**: Use as discussões do GitHub
- **Email**: contato@aurorasagrada.com
- **Discord**: Aurora Sagrada Community

## 🙏 Reconhecimentos

Todos os contribuidores serão reconhecidos no README e releases.

---

*"A magia acontece quando mentes criativas se unem"* ✨🔮✨

