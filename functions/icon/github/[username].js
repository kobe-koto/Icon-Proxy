export async function onRequest(context) {
    const { username } = context.params;
    
    let Data = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
            "User-Agent": "curl/8.4.0"
        }
    });
    if (Data.status === 304 || Data.status === 200) {
        return await fetch((await Data.json()).avatar_url);
    } else if (Data.status === 404) {
        return new Response("404 Not Found, This ID is not exist.", {
            status: 404
        })
    } else {
        return new Response("500 Internal Error, What the fxxk.", {
            status: 500
        })
    }

}