function sync() {}

const named = async () => 2;

// console.log(named())

named().then((it) => console.log(it));

async function asyncLearn() {
  const val = await named();
  console.log(val);
}
asyncLearn();
