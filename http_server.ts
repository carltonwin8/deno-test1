import { serve } from "https://deno.land/std/http/server.ts";

let hello = new TextEncoder().encode("hi\n");

async function main() {
  let s = serve(":8000");
  console.log(s);

  for await (let req of s) {
    console.log("got a req");
    req.respond({ body: hello });
  }
}

main();
