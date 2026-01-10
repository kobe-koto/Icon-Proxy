export const onRequest: PagesFunction<Env> = async (context) => {
    const { username } = context.params;
    const requestHeaders = new Headers({
        "User-Agent": "curl/8.4.0",
        "Accept": "application/json",
        "Authorization": `Bearer ${context.env.GITHUB_TOKEN}`
    })

    let Data = await fetch(`https://api.github.com/users/${username}`, {
        headers: requestHeaders
    });
    if (Data.status === 304 || Data.status === 200) {
        const data = await Data.json() as { avatar_url: string };
        return await fetch(data.avatar_url);
    } else if (Data.status === 404) {
        return new Response("404 Not Found, This ID is not exist.", {
            status: 404
        })
    } else {
        console.log(await Data.text());
        return new Response("500 Internal Error, What the fxxk.", {
            status: 500
        })
    }
}
