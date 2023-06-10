Hi

See Demo using Deno Deploy and Deno KV --- https://github.com/JLarky/astro-deno-template/tree/deno-kv

Create project:

```bash
# be prepared to wait and press enter a few times
deno run -A npm:create-astro --template JLarky/astro-deno-template --git --no-install astro-deno --skip-houston astro-deno
cd astro-deno
```

Patch undici:

```bash
deno task build
# you will see an error
patch node_modules/.deno/undici@5.22.1/node_modules/undici/lib/fetch/index.js undici_5.22.1.patch
# and try again
deno task build
```

Build & preview:

```bash
deno task build
deno task preview
# open http://localhost:8085
```

Dev:

```bash
deno task dev
# open http://localhost:3000
```
