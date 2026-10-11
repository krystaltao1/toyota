# Toyota

A Toyota Landing page to reflect real-world software thinking, cleanly structured and designed to be scalable and maintainable.

## Tech

- **React 19 + TypeScript**
- **Vite**
- **Tailwind CSS v4 + tailwind-variants**
- **Eslint + Prettier**

## Getting Started

Requires **Node >= 22.17.1**

### Installation

#### Clone the repository

```bash
git clone https://github.com/krystaltao1/toyota.git
cd toyota
```

#### Install dependencies

Node >= 22.17.1 is required. If you do not have it, install it with [nvm](https://github.com/nvm-sh/nvm) (the repo ships an `.nvmrc`, so `nvm install` picks the right version):

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
nvm install
nvm use
node -v            # v22.17.1 or newer
```

Then install the project dependencies:

```bash
npm install
```

#### Run the development server

```bash
npm run dev
```

Open http://localhost:5173.

## Future Improvements

- Improve UI consistency by replacing mixed font-size units (px, em, Tailwind classes) and colour formats (hex codes, named colours) with Tailwind’s theme scale, and confirming these values with the designer.
- Improve UX by adding hover states and animations to give clearer interaction feedback.
