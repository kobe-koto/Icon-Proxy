import UnifiedImageResponseFactory from "@internal/UnifiedImageResponseFactory.js";
import { sha256 } from "js-sha256";

export const onRequest: PagesFunction = async (context) => {
    const { request, params } = context;
    const size = new URL(request.url).searchParams.get("s") || "80";
    const email = params.email as string;
    const SHA256Email = sha256(email.toLowerCase().trim());
    return await UnifiedImageResponseFactory.Create(`https://gravatar.com/avatar/${SHA256Email}?s=${size}`);
}
