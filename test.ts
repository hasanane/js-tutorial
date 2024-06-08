import { Animal, Zoo, pocket } from "./zoo";

var zoo = new Zoo({
  wildCage: 1,
  domesticCage: 1,
  herbiAquarium: 1,
  carniAquarium: 1,
  herbiBirdCage: 1,
  carniBirdCage: 1,
  cash: 1000,
});
var sparrow = new Animal({ name: "hasan", type: "herbiBird", cost: 1200 });

zoo.Animalsell(sparrow);

zoo.#wild = [];
console.log(zoo.readfunction());
