export default class UnifiedImageResponseFactory {
    private static readonly requestHeaders = new Headers({
        "User-Agent": "curl/8.4.0",
        "Accept": "application/json, image/*, */*",
    })
    static async Create(URL: URL | string, HeadersOverride?: HeadersInit): Promise<Response> {
        const headers = new Headers(HeadersOverride);
        for (const [key, value] of this.requestHeaders.entries()) {
            if (!headers.has(key)) {
                headers.set(key, value);
            }
        }
        const response = await fetch(URL, { headers });
        if (response.status === 304 || response.status === 200) {
            return response;
        } else if (response.status === 404) {
            return new Response(`404 Not Found.`, {
                status: 404,
                headers: {
                    "Content-Type": "text/plain",
                }
            })
        } else {
            return new Response(`500 Internal Server Error, original response code: ${response.status}.`, {
                status: 500,
                headers: {
                    "Content-Type": "text/plain",
                }
            })
        }
    }
}