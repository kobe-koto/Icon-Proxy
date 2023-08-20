import { sha256 } from 'js-sha256';
export async function onRequest (context) {
    const { request } = context;
    const url = new URL(request.url);

    const email = url.pathname.split("/").toReversed()[0].toLowerCase();
    const SHA256Email = sha256(email)
    return await fetch(`https://gravatar.com/avatar/${SHA256Email}${url.search}`)
}