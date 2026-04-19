import UnifiedImageResponseFactory from "../../internal/UnifiedImageResponseFactory.js";

export const onRequest: PagesFunction = async (context) => {
    const { id } = context.params;
    return await UnifiedImageResponseFactory.Create(`https://q1.qlogo.cn/g?b=qq&s=640&nk=${id}`);
}
