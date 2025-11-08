
<h1 style="text-align: center">Icon-Proxy</h1>

<p style="text-align: center">Icon-Proxy provides a simple way to fetch a specified user’s icon from various platforms through Cloudflare Pages Functions.</p>

# Usage 

1. GitHub

   Requires a `GITHUB_TOKEN` environment variable.

   Request `https://example.org/icon/github/[username]` !

2. Gavatar

   Request `https://example.org/icon/gavatar/[email]` ! 

   > **NOTE**
   >
   > Please **DO NOT** hash your email, we'll do it for you.
   >
   > If you still want to hash your email, please use `https://example.org/icon/hashed-gavatar/[hashed-email]`
   >
   > The Size query string is supported (1~2048 pixels), example below:
   >
   > `https://example.org/icon/gavatar/[email]?s=512`
   
3. Telegram

   Request `https://example.org/icon/telegram/[username]` !

   > **NOTE**
   >
   > We only support: username = `xxxxxxx`(`@xxxxxxx` without `@`). 
   >
   > if the user mark their PFP not public, this service simply won't works.

4. QQ

   Request `https://example.org/icon/qq/[qq num id]` !

   > **Warning**
   >
   > Only use it when necessary, considering speed.

# Deploy

## TL;DR

Deploy this project like any normal pages project.

## Fancy version

1. 🍴 Fork this project,

2. 🏃 Open your **Cloudflare Dashboard** and navigator to **Workers & Pages**,

3. 🔥 Click **Create application** (and connect to GitHub if you haven't done it before), navigator to **Pages**, then select the repo you just forked,

4. 🚀 Hit the **Begin Setup**, scroll as fast as you can and press the **Save and Deploy** Button,

   (The Build command is `pnpm install`, the default may works, but specifying it is better.)

5. ✨ You're all set!

# Thanks to 

[emn178/js-sha256](ehttps://github.com/emn178/js-sha256) - used to hash email address in Gavatar
