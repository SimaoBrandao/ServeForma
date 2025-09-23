# Serveforma - Landing Page Profissional

Este é um site profissional para a Serveforma, uma empresa angolana dedicada ao fornecimento de produtos e serviços essenciais para empresas e instituições em Angola.

## Informações do Projeto

- **Empresa**: Serveforma
- **Localização**: Luanda, Angola
- **Tipo de Projeto**: Landing Page Profissional
- **Idioma**: Português (Angola)
- **Tema de Cores**: Laranja (#ea580c) como cor principal da marca
- **Entry Point**: `src/main.tsx` (React application entry)
- **Build System**: Vite 7.0.0 (Fast development and build)
- **Styling System**: Tailwind CSS 3.4.17 (Atomic CSS framework)

## Áreas de Atuação da Serveforma

1. **Fornecimento de Produtos Gerais**: Material de escritório, informática, consumíveis, mobiliário e electrónica
2. **Serviços de Apoio Operacional**: Manutenção, electricidade, canalização, limpeza e logística
3. **Telecomunicações e IT**: Equipamentos de rede, suporte técnico, instalação de cabos, fibra óptica, UPS
4. **Infraestruturas Eléctricas**: Execução de projetos de eletrificação, redes de média e baixa tensão
5. **Licenciamento Técnico**: Apoio no processo de legalização de projetos elétricos e telecomunicações
6. **Eventos e Catering**: Fornecimento de refeições, coffee break e apoio em eventos corporativos
7. **Publicidade & Brindes**: Impressão, personalização de material, uniformes e brindes empresariais

## Informações de Contacto

- **Endereço**: Luanda, Angola, tala hadi rua F casa 52A, cazenga
- **Telefone**: +244 951 461 675 / 924 530 806
- **Email**: geral@serveforma.co.ao
- **Website**: www.serveforma.co.ao

## Missão, Visão e Valores

- **Missão**: Fornecer soluções completas em produtos e serviços com excelência e eficiência
- **Visão**: Ser referência em Angola como fornecedor de confiança e qualidade
- **Valores**: Compromisso, Qualidade, Inovação e Responsabilidade

## Arquitetura do Projeto

### Estrutura de Diretórios

```
project-root/
├── index.html              # Template HTML principal
├── package.json            # Dependências Node.js e scripts
├── YOUWARE.md             # Guia de desenvolvimento e documentação do projeto
├── vite.config.ts         # Configuração do Vite
├── tsconfig.json          # Configuração TypeScript
├── tailwind.config.js     # Configuração Tailwind CSS
└── src/                   # Diretório de código fonte
    ├── App.tsx            # Componente principal da aplicação
    ├── main.tsx           # Ponto de entrada da aplicação
    ├── index.css          # Estilos globais e imports do Tailwind CSS
    ├── components/        # Componentes reutilizáveis
    │   ├── Header.tsx     # Cabeçalho com navegação
    │   ├── HeroSection.tsx # Seção hero principal
    │   ├── FeaturesSection.tsx # Seção de áreas de atuação
    │   └── Footer.tsx     # Rodapé com informações de contacto
    └── assets/            # Recursos estáticos
```

## Tech Stack

### Framework Principal
- **React**: 18.3.1 - Biblioteca UI declarativa
- **TypeScript**: 5.8.3 - Superset JavaScript com tipos
- **Vite**: 7.0.0 - Ferramenta de build de próxima geração
- **Tailwind CSS**: 3.4.17 - Framework CSS atômico

### Roteamento e Gestão de Estado
- **React Router DOM**: 6.30.1 - Roteamento do lado do cliente
- **Zustand**: 4.4.7 - Gestão de estado leve

### UI e Animações
- **Lucide React**: Biblioteca de ícones
- **Framer Motion**: 11.0.8 - Biblioteca de animação

## Personalização Específica da Serveforma

### Design Visual
- **Cor Principal**: Laranja (#ea580c / orange-600) usado consistentemente em botões, ícones e destaques
- **Imagem de Fundo**: Skyline de Luanda para contextualização local
- **Tipografia**: Hierarquia clara com títulos em branco sobre fundo escuro

### Componentes Personalizados

#### Header
- Logo da empresa "Serveforma"
- Navegação em português: Início, Serviços, Sobre Nós, Contacto
- Botão CTA "Fale Connosco" em laranja

#### Hero Section
- Título principal "Serveforma"
- Descrição da missão da empresa
- Botões de ação: "Fale Connosco" e "Nossos Serviços"
- Valores da empresa: Compromisso, Inovação, Responsabilidade

#### Features Section (Serviços)
- Grid responsivo com 6 áreas de atuação
- Ícones representativos para cada serviço
- Cores consistentes com a identidade da marca

#### Footer
- Informações completas de contacto
- Descrição da empresa
- Missão da empresa destacada
- Endereço físico em Luanda

## Comandos de Desenvolvimento

- **Instalar dependências**: `npm install`
- **Construir projeto**: `npm run build`

## ⚠️ CRÍTICO: Não Modificar o Ponto de Entrada

**AVISO**: Este é um projeto Vite + React. **NUNCA** modifique esta linha crítica no `index.html`:

```html
<script type="module" src="/src/main.tsx"></script>
```

**Porquê**: Este é o ponto de entrada principal. Qualquer modificação causará falha completa da aplicação.

## Notas de Implementação

### Responsividade
- Design mobile-first implementado
- Grid adaptativo para diferentes tamanhos de tela
- Navegação mobile com menu hamburger

### Acessibilidade
- Etiquetas ARIA adequadas
- Contraste de cores apropriado
- Navegação por teclado suportada

### Performance
- Lazy loading de componentes
- Otimização de imagens
- Build otimizado para produção

### Contexto Cultural
- Conteúdo em português angolano
- Referências culturais e geográficas apropriadas
- Imagens representativas do contexto empresarial angolano