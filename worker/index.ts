interface AssetsBinding { fetch(request: Request): Promise<Response>; }
interface Env { ASSETS: AssetsBinding; }

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404 || request.method !== 'GET') return response;
    const url = new URL(request.url);
    url.pathname = '/index.html';
    url.search = '';
    return env.ASSETS.fetch(new Request(url.toString(), request));
  },
};

export default worker;