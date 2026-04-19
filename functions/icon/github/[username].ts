import UnifiedImageResponseFactory from "@internal/UnifiedImageResponseFactory.js";

export const onRequest: PagesFunction<Env> = async (context) => {
    const { username } = context.params;
    const URL = `https://github.com/${username}.png`;
    return await UnifiedImageResponseFactory.Create(URL);
}
