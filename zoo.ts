export class Zoo {
  cash: number;
  domestic: Animal[];
  carniAquatic: Animal[];
  herbiAquatic: Animal[];
  carniBird: Animal[];
  herbiBird: Animal[];
  domesticCage: number;
  wildCage: number;
  carniBirdCage: number;
  herbiBirdCage: number;
  carniAquarium: number;
  herbiAquarium: number;
  #wild: Animal[];
  get wild() {
    return this.#wild;
  }
  set wild(array: Animal[]) {
    if (array.length != 0) {
      this.#wild = array;
    }
  }
  catalog = (type: string) => {
    let typeCatalog = {
      wild: {
        num: this.wildCage,
        cage: this.wild,
      },
      domestic: {
        num: this.domesticCage,
        cage: this.domestic,
      },
      carniAquatic: {
        num: this.carniAquarium,
        cage: this.carniAquatic,
      },
      herbiAquatic: {
        num: this.herbiAquarium,
        cage: this.herbiAquatic,
      },
      carniBird: {
        num: this.carniBirdCage,
        cage: this.carniBird,
      },
      herbiBird: {
        num: this.herbiBirdCage,
        cage: this.herbiBird,
      },
    };
    return typeCatalog[type];
  };

  Animalsell(animal: Animal) {
    let animalCage = this.catalog(animal.type).cage;
    if (this.cash < animal.cost) {
      console.log("Zoo dont have enogh money");
      return;
    }
    if (animalCage.length == this.catalog(animal.type).num) {
      console.log("Not enogh storage");
      return;
    }
    animalCage[animalCage.length] = animal;
    this.cash - animal.cost;
    return animal.cost;

    // if (this.cash >= Animal.cost) {
    //   if (
    //     Animal.type == "wild" ||
    //     "domestic" ||
    //     "carniAquatic" ||
    //     "herbiAquatic" ||
    //     "carniBird" ||
    //     "herbiBird"
    //   ) {
    //     if (Animal.type == "domestic" && this.domesticCage != 0) {
    //       this.domestic[this.domestic.length] = Animal;
    //       this.domesticCage -= 1;
    //       this.cash - Animal.cost;
    //       return Animal.cost;
    //     } else if (Animal.type == "wild" && this.wildCage != 0) {
    //       this.wild[this.wild.length] = Animal;
    //       this.wildCage -= 1;
    //       this.cash - Animal.cost;
    //       return Animal.cost;
    //     } else if (Animal.type == "carniAquatic" && this.carniAquarium != 0) {
    //       this.carniAquatic[this.carniAquatic.length] = Animal;
    //       this.carniAquarium -= 1;
    //       this.cash - Animal.cost;
    //       return Animal.cost;
    //     } else if (Animal.type == "herbiAquatic" && this.herbiAquarium != 0) {
    //       this.herbiAquatic[this.herbiAquatic.length] = Animal;
    //       this.herbiAquarium -= 1;
    //       this.cash - Animal.cost;
    //       return Animal.cost;
    //     } else if (Animal.type == "carniBird" && this.carniBirdCage != 0) {
    //       this.carniBird[this.carniBird.length] = Animal;
    //       this.carniBirdCage -= 1;
    //       this.cash - Animal.cost;
    //       return Animal.cost;
    //     } else if (Animal.type == "herbiBird" && this.herbiBirdCage != 0) {
    //       this.herbiBird[this.herbiBird.length] = Animal;
    //       this.herbiBirdCage -= 1;
    //       this.cash - Animal.cost;
    //       return Animal.cost;
    //     } else {
    //       console.log("not enough cages in zoo ");
    //     }
    //   } else {
    //     console.log("the zoo can't support the Animal type");
    //   }
    // } else {
    //   console.log("zoo does not have enough money");
    // }
  }

  findAnimal(cage: Animal[], name: string) {
    return cage.find((curr) => curr.name == name);
  }

  AnimalBuy(name: string, pocket: pocket) {
    let animal: Animal | undefined = this.findAnimal(
      [
        ...this.domestic,
        ...this.wild,
        ...this.herbiAquatic,
        ...this.carniAquatic,
        ...this.herbiBird,
        ...this.carniBird,
      ],
      name
    );
    if (!(animal instanceof Animal)) {
      return;
    }
    if (pocket.cash <= animal.cost) {
      console.log("you dont have enogh money");
      return;
    }
    let cageList = this.catalog(animal.type);
    cageList.cage = cageList.cage.filter(
      (accu: { name: string }) => accu.name != animal.name
    );
    pocket.cash = pocket.cash - animal.cost;
    // if (animal.type == "domestic") {
    //   this.domestic = this.domestic.filter((accu) => accu.name != animal.name);
    //   this.domesticCage += 1;
    //   pocket.cash = pocket.cash - animal.cost;
    // } else {
    //   console.log("the zoo can't support the animal type");
    // }
    return animal;
  }
  constructor({
    cash,
    domesticCage,
    wildCage,
    carniAquarium,
    herbiAquarium,
    carniBirdCage,
    herbiBirdCage,
  }: {
    cash: number;
    domesticCage: number;
    wildCage: number;
    carniBirdCage: number;
    herbiBirdCage: number;
    carniAquarium: number;
    herbiAquarium: number;
  }) {
    this.cash = cash;
    this.domesticCage = domesticCage;
    this.wildCage = wildCage;
    this.carniBirdCage = carniBirdCage;
    this.herbiBirdCage = herbiBirdCage;
    this.carniAquarium = carniAquarium;
    this.herbiAquarium = herbiAquarium;
    this.domestic = [];
    this.wild = [];
    this.herbiAquatic = [];
    this.carniAquatic = [];
    this.herbiBird = [];
    this.carniBird = [];
  }
}

export class Animal {
  name: string;
  type: string;
  cost: number;
  constructor({
    name,
    type,
    cost,
  }: {
    name: string;
    type: string;
    cost: number;
  }) {
    this.name = name;
    this.type = type;
    this.cost = cost;
  }
}
export class pocket {
  cash: number;
  constructor(cash: number) {
    this.cash = cash;
  }
}
