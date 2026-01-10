export const onRequest: PagesFunction = async (context) => {
    const { username } = context.params;
    if ((username as string).startsWith("@")) {
        return new Response("400 Bad Request, please remove the `@` at the start of username.", {
            status: 400
        })
    }
    let data = await fetch(`https://t.me/${username}`)
        .then(res => res.text())
    let TargetElement = data.match(/<img class="tgme_page_photo_image" src="[^]*"><\/a>/g)
    if (TargetElement !== null) {
        const match = TargetElement[0].match(/src="([^]*)"/);
        if (match) {
            return await fetch(match[1])
        }
    }

    return new Response("404 Not Found, this user may: a) not exist; b) don't have a (public) profile picture; c) frozen; etc.", {
        status: 404
    });
}
