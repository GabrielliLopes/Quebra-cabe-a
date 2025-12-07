# Quebra-Cabeça - Agência de Publicidade

Site institucional moderno e interativo da Agência Quebra-Cabeça, desenvolvido com React.js e Styled Components.

## 🚀 Como executar o projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Navegue até a pasta do projeto:
```bash
cd "react-quebra-cabeca"
```

2. Instale as dependências:
```bash
npm install
```

### Executando o projeto

Para rodar o projeto em modo de desenvolvimento:

```bash
npm start
```

O projeto será aberto automaticamente no navegador em `http://localhost:3000`

### Build para produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `build/`.

## 📁 Estrutura do Projeto

```
react-quebra-cabeca/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header/          # Navegação principal com scroll spy
│   │   ├── Hero/            # Seção inicial com puzzle interativo
│   │   ├── Puzzle/          # Componente de puzzle drag & drop
│   │   ├── About/           # Sobre a agência com contadores animados
│   │   ├── Services/        # Serviços oferecidos
│   │   ├── Portfolio/       # Portfólio hierárquico com categorias
│   │   ├── Contact/         # Formulário de contato integrado
│   │   └── Footer/          # Rodapé com informações e links sociais
│   ├── pages/
│   │   ├── CategoryPage.js  # Página de categorias do portfólio
│   │   └── ClientGallery.js # Galeria de projetos por cliente
│   ├── GlobalStyles.js      # Estilos globais da aplicação
│   ├── App.js               # Componente principal com rotas
│   ├── index.js             # Entry point
│   └── index.css
├── .env                     # Variáveis de ambiente (hot reload)
├── package.json
└── README.md
```

## 🎯 Funcionalidades

### Página Principal
- ✅ **Header responsivo** com navegação suave entre seções
- ✅ **Hero com puzzle interativo** (drag & drop, 4 colunas x 3 linhas)
- ✅ **Seção Sobre** com contadores animados (anos de experiência, clientes, projetos)
- ✅ **Serviços** com cards animados ao scroll
- ✅ **Portfólio hierárquico** com 4 categorias principais
- ✅ **Formulário de contato** com validação customizada e integração Formspree
- ✅ **Footer** com informações e links sociais

### Sistema de Portfólio (3 Níveis)

#### Nível 1 - Categorias Principais
- Branding
- Gestão de Mídias
- Comunicação Integrada
- Vídeos

#### Nível 2 - Clientes por Categoria
Cada categoria possui 4 clientes famosos com projetos relacionados:
- **Branding**: Nike, Apple, Coca-Cola, McDonald's
- **Gestão de Mídias**: Samsung, Netflix, Amazon, Spotify
- **Comunicação Integrada**: Microsoft, Google, Facebook, Tesla
- **Vídeos**: Sony, Disney, HBO, Warner

#### Nível 3 - Galeria de Projetos
Cada cliente possui uma galeria com 6 imagens de projetos realizados

### Recursos Especiais
- 🔄 **Navegação inteligente** - Volta para a seção de portfólio ao retornar da navegação
- 📱 **Mobile-first** - Textos sempre visíveis em dispositivos móveis
- 🎨 **Animações suaves** - Transições e efeitos ao scroll
- ⚡ **Hot reload** - Atualização automática durante desenvolvimento (Windows)
- 📧 **Formulário inteligente** - Requer nome, mensagem e pelo menos um meio de contato (email OU telefone)

## 🛠️ Tecnologias

- **React** 18.2.0 - Biblioteca JavaScript para interfaces
- **React Router DOM** 7.10.1 - Roteamento e navegação entre páginas
- **Styled Components** 6.1.1 - CSS-in-JS para estilização
- **React Scripts** 5.0.1 - Scripts e configurações do Create React App
- **Formspree** - Integração para envio de emails do formulário
- **Unsplash** - Imagens de alta qualidade para o portfólio

## 🎨 Design

### Paleta de Cores
- **Primária**: #ff7200 (Laranja vibrante)
- **Secundária**: #dec8a5 (Bege suave)
- **Escura**: #1e1d1d (Cinza escuro)
- **Branco**: #ffffff

### Tipografia
- Font family: 'Inter', sans-serif
- Weights: 400, 500, 600, 700, 900

## 📱 Responsividade

O projeto é totalmente responsivo e otimizado para:
- **Desktop**: 1400px+ (experiência completa com hover effects)
- **Tablet**: 768px - 968px (layout adaptado)
- **Mobile**: até 640px (navegação simplificada, textos fixos)

### Breakpoints
```css
@media (max-width: 968px)  // Tablet
@media (max-width: 640px)  // Mobile
```

## ⚙️ Configurações

### Hot Reload (Windows)
O projeto está configurado com `CHOKIDAR_USEPOLLING=true` no arquivo `.env` para garantir atualização automática no Windows.


### Validação do Formulário
- **Nome**: Obrigatório
- **Mensagem**: Obrigatória
- **Email/Telefone**: Pelo menos um dos dois deve ser preenchido

## 🚢 Deploy

### Netlify (Recomendado)
1. Faça o build: `npm run build`
2. Arraste a pasta `build/` para o Netlify
3. Configure as variáveis de ambiente se necessário

### Vercel
```bash
npm install -g vercel
vercel
```

## 📧 Contato

Para mais informações sobre a Agência Quebra-Cabeça:
- **Email**: qccomunica@gmail.com
- **Telefone**: (16) 99641-5690
- **Horário**: Segunda a Sexta, 8h30 às 18h

## 📝 Licença

Este projeto é propriedade da Agência Quebra-Cabeça. Todos os direitos reservados.
