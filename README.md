# Astro Deno Template

## First things first, you don't have to use this template.

First, install Deno 1.35 or later https://deno.com/

Then run:

```bash
deno run -A npm:create-astro --no-install astro-deno
cd astro-deno
deno task dev
```

Open http://localhost:3000

Let's explain what just happened.

First is that we are not using Node, because Deno has npm compatibility built in.

So when running `npm:create-astro` we are initializing our project using Deno. That's why we don't want to run `npm install` and passed `--no-install` flag. The parameter `astro-deno` could be omitted if you want to change the name of the project.

And now `deno task dev` will search for `dev` script in `package.json` and run it using Deno, you can also just run `deno run -A npm:astro dev` which is going to be exactly the same.

You can also use `deno task build && deno task preview` to build and preview your project because by default it's going to generate a static website.

## Why do you need this template then?

Well, again, you don't need it. For the most part, you can use standard Astro documentation, but use stuff like `deno run -A npm:astro add` instead of `npx astro add` and so on. There are some tricky parts, like dependency management if you want to use npm dependencies, or typescript issues if you want to use Deno APIs. So if you rely on some Deno stuff, like Deno.KV you would only be able to deploy your project to Deno Deploy (obviously). But keep in mind that because bundling happens in Vite, Vite doesn't understand how to use URL imports, so you won't be easily able to use Deno dependancies in your project.

## What is not working in Astro

This is not a complete list, just a few things that I've noticed:

- `deno run -A npm:astro check` doesn't work
- Tailwind and PostCSS in general

## How to use this template

Create project:

```bash
# be prepared to wait and press enter a few times
deno run -A npm:create-astro --template JLarky/astro-deno-template --no-install astro-deno
cd astro-deno
```

For the most part, this is going to be the same as the regular template, but here are the differences:

- you get `deno.jsonc` file with tasks for dev, build and preview so that you don't have to look at that warning anymore `Warning Currently only basic package.json scripts are supported. Programs like rimraf or cross-env will not work correctly. This will be fixed in an upcoming release.`
- deno-deploy adapter is already configured in `astro.config.mjs`

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

Deploy:

You have to use `deployctl` (https://github.com/denoland/deployctl) because Astro requires a build step, you can either do that locally after `deno task build` or you can use GitHub Actions to do that for you.

## See also

- Blog annoncment for Deno 1.35 https://deno.com/blog/v1.35
- using Deno.KV https://github.com/JLarky/astro-deno-template/tree/deno-kv
- https://github.com/JLarky/astro-lucia-deno-kv for a working example that shows us using npm dependencies and Deno.KV, including Deno types (see `import "lucia-auth";` in `astro.config.mjs` and `types` task in `deno.jsonc`)
- another Deno Deploy oriented Astro template, it doesn't use Deno locally yet, but should be a good inspiration https://github.com/Lightrix/astro-deno-deploy
