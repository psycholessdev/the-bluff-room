# New Nx Repository

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Under Development ✨.

## Run project

### Dev mode

```bash
# NextJS (frontend)
npx nx dev frontend

# NestJS (backend)
npx nx serve backend
```

To run concurrently use two terminals:

```bash
# Terminal 1
npx nx dev frontend
# Terminal 2
npx nx serve backend
```

### Docker production build

...

### Other commands

```bash
# prettier (Check formatting)
npx nx format:check
# Format code
npx nx format:write <app>

# ESLint
npx nx lint <app>
# Run all lint
npx nx run-many --target=lint --all

# Build
npx nx build <app>
```
