Hey, please read the original readme

https://github.com/JLarky/astro-deno-template

Regular stuff as before:

- `deno task dev` to start dev server
- `deno task build` to build
- `deno task preview` to preview the build

## Deploy to Deno Deploy

#### Set access token

https://dash.deno.com/account#access-tokens

```bash
export DENO_DEPLOY_TOKEN="ddp_..."
```

#### Install deployctl

```bash
deno install --allow-read --allow-write --allow-env --allow-net --allow-run --no-check -r -f https://deno.land/x/deploy/deployctl.ts
```

#### Create a new project

https://dash.deno.com/new Click on `get started with an empty project using deployctl`

Replace the project name `astro-in-deno` in `deno.jsonc` with the name of your project.

#### Deploy

```bash
deno task build
deno task deploy
```
