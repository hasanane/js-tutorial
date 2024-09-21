import axios from "axios";
function callPokemon(pokemonName:string) {
  // const axios = require("axios")
  const pokemonApi = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  axios.get(pokemonApi).then((resp) => {
    // const numberApi = `https://numbersapi.com/${status}`
    // console.log(`the pokemon status is ${status}`);
    console.log(resp.data.stats[0])
    // axios.get(numberApi).then((resp)=>{console.log(`the fact about the number is that ${resp}`)})
  });
}
callPokemon("ditto")
// async function return5() {
//   return 5;
// }
// async function print5() {
//   return5().then((x)=>{console.log(x)})
// }
// print5();
