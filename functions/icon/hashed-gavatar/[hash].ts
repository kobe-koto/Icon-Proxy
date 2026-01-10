export const onRequest: PagesFunction = async (context) => {
    const { request, params } = context;
    const size = new URL(request.url).searchParams.get("s") || "80";
    const SHA256Email = params.hash as string;
    return await fetch(`https://gravatar.com/avatar/${SHA256Email}?s=${size}`);
}
