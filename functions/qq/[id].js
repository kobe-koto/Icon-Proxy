export async function onRequest (context) {
    const { request } = context;
    const url = new URL(request.url);

    const id = url.pathname.split("/").toReversed()[0].toLowerCase();
    return await fetch(`https://q1.qlogo.cn/g?b=qq&s=640&nk=${id}`)
}