# Learning Vue

A small Vue 3 app where I learn Vue one component at a time: each page shows one component.

Built with Vue 3, Vue Router, TypeScript and Vite. Linted with oxlint and ESLint, formatted with Prettier, tested with Vitest.

## Pages

| Page | Component |
| --- | --- |
| `/navbar` | `NavBar.vue` |
| `/segmented-control` | `SegmentedControl.vue` |

## Adding a page

1. Write the component in `src/components/`.
2. Add a view in `src/views/` that shows it.
3. Add a route in `src/router/index.ts` and an entry in `src/components/NavPanel.vue`, the app's navigation on the left.

## Setup

```sh
npm install
npm run dev        # dev server with hot reload
npm run build      # type-check and build for production
npm run test:unit  # unit tests (Vitest)
npm run lint       # oxlint + ESLint
npm run format     # Prettier
```
