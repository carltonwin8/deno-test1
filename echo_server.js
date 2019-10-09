const { listen, copy } = Deno;

let hello = new TextEncoder().encode("hi\n");

async function main() {
  let s = listen({ transport: "tcp", port: 8000 });
  console.log(s);

  while (true) {
    let socket = await s.accept();
    socket.write(hello);
    copy(socket, socket);
  }
}

main();
