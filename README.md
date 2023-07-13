Hi

See Demo using Deno Deploy and Deno KV --- https://github.com/JLarky/astro-deno-template/tree/deno-kv

## Requires Deno 1.35

Create project:

```bash
# be prepared to wait and press enter a few times
deno run -A npm:create-astro --template JLarky/astro-deno-template --git --no-install astro-deno --skip-houston astro-deno
cd astro-deno
```

Dev:

```bash
deno task dev
# open http://localhost:3000
```

Build & preview:

```bash
deno task build
deno task preview
# open http://localhost:8085
```

Blog:

https://deno.com/blog/v1.35

Deploy to Deno Deploy:

WIP

See https://github.com/JLarky/astro-lucia-deno-kv for a working example
