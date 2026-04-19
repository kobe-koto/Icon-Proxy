import UnifiedImageResponseFactory from "@internal/UnifiedImageResponseFactory.js";

export const onRequest: PagesFunction<Env> = async (context) => {
    const { request, params } = context;
    const size = new URL(request.url).searchParams.get("s") || "80";
    const SHA256Email = params.hash as string;
    return await UnifiedImageResponseFactory.Create(`https://gravatar.com/avatar/${SHA256Email}?s=${size}`);
}
