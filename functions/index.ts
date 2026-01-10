export const onRequest: PagesFunction = async () => {
    return new Response(
        "This is a Icon-Proxy instance.\n\n" +
        "for full documentation, please visit https://github.com/kobe-koto/Icon-Proxy", {
            status: 200
        }
    );
}
