# DogsInfos 🐶

DogsInfos é um site que apresenta informações sobre diferentes raças de cachorros, o projeto foi feito em Next.js, React.js, Typescript e Tailwind no front-end, e o Node.js no back-end para criar a api com o deploy na Render.
Atualmente é possível visualizar 30 raças com opções de filtragem e ordenação além de uma página única para visualizar dados sobre um cachorro em específico.

## 💻 Tecnologias Utilizadas
- **Next.js** (framework)
- **React.js** (biblioteca)
- **Typescript** (linguagem de programação)
- **Tailwind.css** (estilização)
- **Shadnc** (componentes prontos)
- **Lucide.dev** (ícones)
- **Zustand** (gerenciamento de estado)

## 💻 Como Rodar o Projeto

### 1. Clone o repositório
```bash
git clone https://github.com/guilhermep3/dogsinfos.git
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure o uso dos dados localmente

Para rodar o projeto sem a API externa:

1. Localize onde está sendo feito o `fetch` com `process.env.NEXT_PUBLIC_API_LINK!`.
2. Substitua essa chamada por:
```ts
fetch('/dogsData.json')
```

Isso permite usar os dados locais contidos no arquivo `dogsData.json`.

### 4. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

---

## 👨‍💻 Desenvolvedor

Projeto desenvolvido por [Guilherme Pereira](https://github.com/guilhermep3)