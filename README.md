# Project Details

Design Link [here](https://xd.adobe.com/view/d3f6bc45-8898-46dd-98b0-eca621fdf489-86a5/screen/4182f975-3940-411f-88d2-54fc724560cf/specs/)

## Features for Wicaksana:

- 404 page on error.vue

- Come up with a simple page transitions

### Homepage:

- Menu section:

- Tabs on top to toggle menu section.
  - Using Nuxt Slider is okay if wanted.
  - Section must have some form of animation between menu sections.
  - Using HeadlessUI tabs not okay: Because we are unable to add animation when switching tabs.
  - Layout of each section must be exact
  - Follow responsiveness

### Gallery

- Explore button takes the user to the beginning of the image gallery
- Images must use v-if statement. (Nuxt-content already installed)
- Opening images have lighhouse effect. can click next: (Maybe Nuxt swiper can help?)

---

# Two Moons Style guide and Developer Standards

### Animations

- All content that is entering or leaving the page must be animated:
  - Eg: with v-if or v-show
  - Eg:. headless.ui tabs component is not permitted.

### Nuxt Modules

- Always ask lead developer if you think installing a npm package would benefit the project.

### Tailwind CSS

- Must be pixel perfect following the XD design (Allowance of 10px)
- <body> tag will have body text color.
    - Use currentColor value as often as possible. eg: border-current, bg-current
- Read the tailwind.config.js (Use colors specified there)
  - Colors blue-500 and red-500 will not work. As custom colors will be set up

---

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
