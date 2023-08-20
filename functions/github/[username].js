export async function onRequest(context) {
    const { request } = context;
    const url = new URL(request.url);

    const username = url.pathname.split("/").toReversed()[0];
    
    let Data = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
            "User-Agent": "curl/8.2.1"
        }
    });
    if (Data.status === 304 || Data.status === 200) {
        return await fetch((await Data.json()).avatar_url);
    } else if (Data.status === 404) {
        return new Response("404 Not Found, This ID is not exist.", {
            status: 404
        })
    } else {
        return new Response("What the fuck", {
            status: 500
        })
    }

}