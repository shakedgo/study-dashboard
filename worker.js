export default { fetch() { return new Response("Cloudflare Access setup is pending.", {status:503, headers:{"Cache-Control":"no-store"}}); } };
