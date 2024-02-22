export async function onRequest (context) {
    const { request, params } = context;
    const size = new URL(request.url).searchParams.get("s"),
          SHA256Email = params.hash;
    return await fetch(`https://gravatar.com/avatar/${SHA256Email}?s=${size}`)
}