import { serve } from "https://deno.land/std@0.136.0/http/server.ts";

async function server(request: Request): Promise<Response> {
  const rd = (await Deno.open("./index.html")).readable.getReader();

  for (;;) {
    const r = await rd.read();
    console.log(r);
    if (r.done) break;
  }

  return new Response(null);
}

await serve(server);
