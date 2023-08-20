
<h1 style="text-align: center">Icon-Proxy</h1>

<p style="text-align: center">Proxy Telegram, Github, Gavatar or even more user icon all-in-one!</p>

<p style="text-align: center">Using Cloudflare Pages Function.</p>

# Usage 

1. GitHub

   Request `https://example.org/github/[username]` !

2. Gavatar

   Request `https://example.org/gavatar/[email]` ! 

   > **NOTE**
   >
   > Please **DO NOT** hash your email, we'll do it for you.
   >
   > The Size query string is supported (1~2048 pixels), example below:
   >
   > `https://example.org/gavatar/[email]?s=512`
   
3. Telegram

   Request `https://example.org/telegram/[username]` !

   > **NOTE**
   >
   > We only support: username = `xxxxxxx`(`@xxxxxxx` without `@`). 
   >
   > if the user mark their PFP not public, this service simply won't works.

4. QQ

   Request `https://example.org/qq/[qq num id]` !

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
