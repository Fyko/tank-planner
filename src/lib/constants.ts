export enum Eggs {
  Edible = 1,
  Superfood = 2,
  Medical = 3,
  RocketFuel = 4,
  SuperMaterial = 5,
  Fusion = 6,
  Quantum = 7,
  Immortality = 8,
  Tachyon = 9,
  Graviton = 10,
  Dilithium = 11,
  Prodigy = 12,
  Terraform = 13,
  Antimatter = 14,
  DarkMatter = 15,
  Ai = 16,
  Nebula = 17,
  Universe = 18,
  Enlightenment = 19,
}

export const eggs = [
  { egg: Eggs.Edible, name: "Edible", icon: "/eggs/egg_edible.png" },
  { egg: Eggs.Superfood, name: "Superfood", icon: "/eggs/egg_superfood.png" },
  { egg: Eggs.Medical, name: "Medical", icon: "/eggs/egg_medical2.png" },
  {
    egg: Eggs.RocketFuel,
    name: "Rocket Fuel",
    icon: "/eggs/egg_rocketfuel.png",
  },
  {
    egg: Eggs.SuperMaterial,
    name: "Super Material",
    icon: "/eggs/egg_supermaterial.png",
  },
  { egg: Eggs.Fusion, name: "Fusion", icon: "/eggs/egg_fusion.png" },
  { egg: Eggs.Quantum, name: "Quantum", icon: "/eggs/egg_quantum.png" },
  {
    egg: Eggs.Immortality,
    name: "Immortality",
    icon: "/eggs/egg_immortality.png",
  },
  { egg: Eggs.Tachyon, name: "Tachyon", icon: "/eggs/egg_tachyon.png" },
  { egg: Eggs.Graviton, name: "Graviton", icon: "/eggs/egg_graviton.png" },
  { egg: Eggs.Dilithium, name: "Dilithium", icon: "/eggs/egg_dilithium.png" },
  { egg: Eggs.Prodigy, name: "Prodigy", icon: "/eggs/egg_prodigy.png" },
  { egg: Eggs.Terraform, name: "Terraform", icon: "/eggs/egg_terraform.png" },
  {
    egg: Eggs.Antimatter,
    name: "Antimatter",
    icon: "/eggs/egg_antimatter.png",
  },
  {
    egg: Eggs.DarkMatter,
    name: "Dark Matter",
    icon: "/eggs/egg_darkmatter.png",
  },
  { egg: Eggs.Ai, name: "Ai", icon: "/eggs/egg_ai.png" },
  { egg: Eggs.Nebula, name: "Nebula", icon: "/eggs/egg_vision.png" },
  { egg: Eggs.Enlightenment, name: "Universe", icon: "/eggs/egg_universe.png" },
  {
    egg: Eggs.Enlightenment,
    name: "Enlightenment",
    icon: "/eggs/egg_enlightenment.png",
  },
];

export enum Ships {
  ChickenOne = 0,
  ChickenNine = 1,
  ChickenHeavy = 2,
  BCR = 3,
  QuintillionChicken = 4,
  CornishHenCorvette = 5,
  Galeggtica = 6,
  Defihent = 7,
  Voyegger = 8,
  Henerprise = 9,
  AtreggiesHenliner = 10,
}

export const ships = [
  {
    ship: Ships.ChickenOne,
    name: "Chicken One",
    icon: "/ships/chicken_one.png",
  },
  {
    ship: Ships.ChickenNine,
    name: "Chicken Nine",
    icon: "/ships/chicken_nine.png",
  },
  {
    ship: Ships.ChickenHeavy,
    name: "Chicken Heavy",
    icon: "/ships/chicken_heavy.png",
  },
  { ship: Ships.BCR, name: "BCR", icon: "/ships/bcr.png" },
  {
    ship: Ships.QuintillionChicken,
    name: "Quintillion Chicken",
    icon: "/ships/quintillion_chicken.png",
  },
  {
    ship: Ships.CornishHenCorvette,
    name: "Cornish-Hen Corvette",
    icon: "/ships/cornish-hen_corvette.png",
  },
  { ship: Ships.Galeggtica, name: "Galeggtica", icon: "/ships/galeggtica.png" },
  { ship: Ships.Defihent, name: "Defihent", icon: "/ships/defihent.png" },
  { ship: Ships.Voyegger, name: "Voyegger", icon: "/ships/voyegger.png" },
  { ship: Ships.Henerprise, name: "Henerprise", icon: "/ships/henerprise.png" },
  {
    ship: Ships.AtreggiesHenliner,
    name: "Atreggies Henliner",
    icon: "/ships/atreggies_henliner.png",
  },
];

export const missions = [
  {
    id: "chicken-one-short",
    ship: Ships.ChickenOne,
    durationType: 0,
    name: "Chicken One, Short",
    fuels: [{ egg: Eggs.RocketFuel, amount: 2_000_000 }],
  },
  {
    id: "chicken-one-standard",
    ship: Ships.ChickenOne,
    durationType: 1,
    name: "Chicken One, Standard",
    fuels: [{ egg: Eggs.RocketFuel, amount: 3_000_000 }],
  },
  {
    id: "chicken-one-extended",
    ship: Ships.ChickenOne,
    durationType: 2,
    name: "Chicken One, Extended",
    fuels: [{ egg: Eggs.RocketFuel, amount: 10_000_000 }],
  },
  {
    id: "chicken-nine-short",
    ship: Ships.ChickenNine,
    durationType: 0,
    name: "Chicken Nine, Short",
    fuels: [{ egg: Eggs.RocketFuel, amount: 10_000_000 }],
  },
  {
    id: "chicken-nine-standard",
    ship: Ships.ChickenNine,
    durationType: 1,
    name: "Chicken Nine, Standard",
    fuels: [{ egg: Eggs.RocketFuel, amount: 15_000_000 }],
  },
  {
    id: "chicken-nine-extended",
    ship: Ships.ChickenNine,
    durationType: 2,
    name: "Chicken Nine, Extended",
    fuels: [{ egg: Eggs.RocketFuel, amount: 25_000_000 }],
  },
  {
    id: "chicken-heavy-short",
    ship: Ships.ChickenHeavy,
    durationType: 0,
    name: "Chicken Heavy, Short",
    fuels: [{ egg: Eggs.RocketFuel, amount: 100_000_000 }],
  },
  {
    id: "chicken-heavy-standard",
    ship: Ships.ChickenHeavy,
    durationType: 1,
    name: "Chicken Heavy, Standard",
    fuels: [
      { egg: Eggs.RocketFuel, amount: 50_000_000 },
      { egg: Eggs.Fusion, amount: 5_000_000 },
    ],
  },
  {
    id: "chicken-heavy-extended",
    ship: Ships.ChickenHeavy,
    durationType: 2,
    name: "Chicken Heavy, Extended",
    fuels: [
      { egg: Eggs.RocketFuel, amount: 75_000_000 },
      { egg: Eggs.Fusion, amount: 25_000_000 },
    ],
  },
  {
    id: "bcr-short",
    ship: Ships.BCR,
    durationType: 0,
    name: "BCR, Short",
    fuels: [
      { egg: Eggs.RocketFuel, amount: 250_000_000 },
      { egg: Eggs.Fusion, amount: 50_000_000 },
    ],
  },
  {
    id: "bcr-standard",
    ship: Ships.BCR,
    durationType: 1,
    name: "BCR, Standard",
    fuels: [
      { egg: Eggs.RocketFuel, amount: 400_000_000 },
      { egg: Eggs.Fusion, amount: 75_000_000 },
    ],
  },
  {
    id: "bcr-extended",
    ship: Ships.BCR,
    durationType: 2,
    name: "BCR, Extended",
    fuels: [
      { egg: 2, amount: 5_000_000 },
      { egg: Eggs.RocketFuel, amount: 300_000_000 },
      { egg: Eggs.Fusion, amount: 100_000_000 },
    ],
  },
  {
    id: "quintillion-chicken-short",
    ship: Ships.QuintillionChicken,
    durationType: 0,
    name: "Quintillion Chicken, Short",
    fuels: [
      { egg: Eggs.Fusion, amount: 5_000_000_000 },
      { egg: Eggs.Graviton, amount: 1_000_000_000 },
    ],
  },
  {
    id: "quintillion-chicken-standard",
    ship: Ships.QuintillionChicken,
    durationType: 1,
    name: "Quintillion Chicken, Standard",
    fuels: [
      { egg: Eggs.Fusion, amount: 7_000_000_000 },
      { egg: Eggs.Graviton, amount: 5_000_000_000 },
    ],
  },
  {
    id: "quintillion-chicken-extended",
    ship: Ships.QuintillionChicken,
    durationType: 2,
    name: "Quintillion Chicken, Extended",
    fuels: [
      { egg: 2, amount: 10_000_000 },
      { egg: Eggs.Fusion, amount: 10_000_000_000 },
      { egg: Eggs.Graviton, amount: 15_000_000_000 },
    ],
  },
  {
    id: "cornish-hen-corvette-short",
    ship: Ships.CornishHenCorvette,
    durationType: 0,
    name: "Cornish-Hen Corvette, Short",
    fuels: [
      { egg: Eggs.Fusion, amount: 15_000_000_000 },
      { egg: Eggs.Graviton, amount: 2_000_000_000 },
    ],
  },
  {
    id: "cornish-hen-corvette-standard",
    ship: Ships.CornishHenCorvette,
    durationType: 1,
    name: "Cornish-Hen Corvette, Standard",
    fuels: [
      { egg: Eggs.Fusion, amount: 20_000_000_000 },
      { egg: Eggs.Graviton, amount: 3_000_000_000 },
    ],
  },
  {
    id: "cornish-hen-corvette-extended",
    ship: Ships.CornishHenCorvette,
    durationType: 2,
    name: "Cornish-Hen Corvette, Extended",
    fuels: [
      { egg: 2, amount: 500_000_000 },
      { egg: Eggs.Fusion, amount: 25_000_000_000 },
      { egg: Eggs.Graviton, amount: 5_000_000_000 },
    ],
  },
  {
    id: "galeggtica-short",
    ship: Ships.Galeggtica,
    durationType: 0,
    name: "Galeggtica, Short",
    fuels: [
      { egg: Eggs.Fusion, amount: 50_000_000_000 },
      { egg: Eggs.Graviton, amount: 10_000_000_000 },
    ],
  },
  {
    id: "galeggtica-standard",
    ship: Ships.Galeggtica,
    durationType: 1,
    name: "Galeggtica, Standard",
    fuels: [
      { egg: Eggs.Fusion, amount: 75_000_000_000 },
      { egg: Eggs.Graviton, amount: 25_000_000_000 },
    ],
  },
  {
    id: "galeggtica-extended",
    ship: Ships.Galeggtica,
    durationType: 2,
    name: "Galeggtica, Extended",
    fuels: [
      { egg: Eggs.Fusion, amount: 100_000_000_000 },
      { egg: Eggs.Graviton, amount: 50_000_000_000 },
      { egg: Eggs.Antimatter, amount: 1_000_000_000 },
    ],
  },
  {
    id: "defihent-short",
    ship: Ships.Defihent,
    durationType: 0,
    name: "Defihent, Short",
    fuels: [
      { egg: Eggs.Dilithium, amount: 200_000_000_000 },
      { egg: Eggs.Antimatter, amount: 50_000_000_000 },
    ],
  },
  {
    id: "defihent-standard",
    ship: Ships.Defihent,
    durationType: 1,
    name: "Defihent, Standard",
    fuels: [
      { egg: Eggs.Dilithium, amount: 250_000_000_000 },
      { egg: Eggs.Antimatter, amount: 150_000_000_000 },
    ],
  },
  {
    id: "defihent-extended",
    ship: Ships.Defihent,
    durationType: 2,
    name: "Defihent, Extended",
    fuels: [
      { egg: Eggs.Tachyon, amount: 25_000_000_000 },
      { egg: Eggs.Dilithium, amount: 250_000_000_000 },
      { egg: Eggs.Antimatter, amount: 250_000_000_000 },
    ],
  },
  {
    id: "voyegger-short",
    ship: Ships.Voyegger,
    durationType: 0,
    name: "Voyegger, Short",
    fuels: [
      { egg: Eggs.Dilithium, amount: 1_000_000_000_000 },
      { egg: Eggs.Antimatter, amount: 1_000_000_000_000 },
    ],
  },
  {
    id: "voyegger-standard",
    ship: Ships.Voyegger,
    durationType: 1,
    name: "Voyegger, Standard",
    fuels: [
      { egg: Eggs.Dilithium, amount: 1_500_000_000_000 },
      { egg: Eggs.Antimatter, amount: 1_500_000_000_000 },
    ],
  },
  {
    id: "voyegger-extended",
    ship: Ships.Voyegger,
    durationType: 2,
    name: "Voyegger, Extended",
    fuels: [
      { egg: Eggs.Tachyon, amount: 100_000_000_000 },
      { egg: Eggs.Dilithium, amount: 2_000_000_000_000 },
      { egg: Eggs.Antimatter, amount: 2_000_000_000_000 },
    ],
  },
  {
    id: "henerprise-short",
    ship: Ships.Henerprise,
    durationType: 0,
    name: "Henerprise, Short",
    fuels: [
      { egg: Eggs.Dilithium, amount: 2_000_000_000_000 },
      { egg: Eggs.Antimatter, amount: 2_000_000_000_000 },
    ],
  },
  {
    id: "henerprise-standard",
    ship: Ships.Henerprise,
    durationType: 1,
    name: "Henerprise, Standard",
    fuels: [
      { egg: Eggs.Dilithium, amount: 3_000_000_000_000 },
      { egg: Eggs.Antimatter, amount: 3_000_000_000_000 },
      { egg: Eggs.DarkMatter, amount: 3_000_000_000_000 },
    ],
  },
  {
    id: "henerprise-extended",
    ship: Ships.Henerprise,
    durationType: 2,
    name: "Henerprise, Extended",
    fuels: [
      { egg: Eggs.Tachyon, amount: 1_000_000_000_000 },
      { egg: Eggs.Dilithium, amount: 3_000_000_000_000 },
      { egg: Eggs.Antimatter, amount: 3_000_000_000_000 },
      { egg: Eggs.DarkMatter, amount: 3_000_000_000_000 },
    ],
  },
  {
    id: "atreggies-henliner-short",
    ship: Ships.AtreggiesHenliner,
    durationType: 0,
    name: "Atreggies Henliner, Short",
    fuels: [
      { egg: Eggs.Dilithium, amount: 4_000_000_000_000 },
      { egg: Eggs.Antimatter, amount: 4_000_000_000_000 },
      { egg: Eggs.DarkMatter, amount: 3_000_000_000_000 },
    ],
  },
  {
    id: "atreggies-henliner-standard",
    ship: Ships.AtreggiesHenliner,
    durationType: 1,
    name: "Atreggies Henliner, Standard",
    fuels: [
      { egg: Eggs.Dilithium, amount: 6_000_000_000_000 },
      { egg: Eggs.Antimatter, amount: 6_000_000_000_000 },
      { egg: Eggs.DarkMatter, amount: 4_000_000_000_000 },
    ],
  },
  {
    id: "atreggies-henliner-extended",
    ship: Ships.AtreggiesHenliner,
    durationType: 2,
    name: "Atreggies Henliner, Extended",
    fuels: [
      { egg: Eggs.Tachyon, amount: 2_000_000_000_000 },
      { egg: Eggs.Dilithium, amount: 6_000_000_000_000 },
      { egg: Eggs.Antimatter, amount: 6_000_000_000_000 },
      { egg: Eggs.DarkMatter, amount: 6_000_000_000_000 },
    ],
  },
];

export const fuelTankCapacities = [
  2e9, 200e9, 10e12, 100e12, 200e12, 300e12, 400e12, 500e12,
] as const;

export const FUEL_TANK_LEVEL_LOCALSTORAGE_KEY = "fuelTankLevel" as const;
export const COUNTS_LOCALSTORAGE_KEY = "counts" as const;
