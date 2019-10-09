console.log(Deno.args);

let filename = Deno.args[1];

const main = async () => {
  let f = await Deno.open(filename);
  console.log(f);
};

main();
