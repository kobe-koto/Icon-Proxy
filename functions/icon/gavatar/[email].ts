import { sha256 } from "js-sha256";
declare module "js-sha256";

export const onRequest: PagesFunction = async (context) => {
    const { request, params } = context;
    const size = new URL(request.url).searchParams.get("s");
    const email = params.email as string;
    const SHA256Email = sha256(email);
    return await fetch(`https://gravatar.com/avatar/${SHA256Email}?s=${size}`);
}
