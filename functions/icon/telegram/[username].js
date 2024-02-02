export async function onRequest (context) {
    const { username } = context.params;
    if (username.startsWith("@")) {
        return new Response("400 Bad Request, please remove the `@` at the start of username.", {
            status: 400
        })
    }
    let data = await fetch(`https://t.me/${username}`)
        .then(res => res.text())
    let TargetElement = data.match(/<img class="tgme_page_photo_image" src="[^]*"><\/a>/g)
    if (TargetElement !== null) {
        return await fetch(TargetElement[0].match(/src="([^]*)"/)[1])
    } else {
        return new Response("404 Not Found, this user may not exist or marked their PFP to non-public.", {
            status: 404
        })
    }
}