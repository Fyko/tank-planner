import { getLocalStorage } from './storage.js';

export const chunk = <T>(a: T[], size: number) =>
	Array.from(new Array(Math.ceil(a.length / size)), (_, i) => a.slice(i * size, i * size + size));

export function loadFuelTankLevel() {
	const maxLevel = fuelTankCapacities.length - 1;
	const s = getLocalStorage(FUEL_TANK_LEVEL_LOCALSTORAGE_KEY);
	if (s === undefined) {
		return maxLevel;
	}
	let parsed;
	try {
		parsed = parseInt(s);
	} catch (err) {
		console.warn(`${FUEL_TANK_LEVEL_LOCALSTORAGE_KEY}: ${s}: ${err}`);
		return maxLevel;
	}
	if (typeof parsed !== 'number' || !(parsed >= 0 && parsed <= maxLevel)) {
		console.warn(`${FUEL_TANK_LEVEL_LOCALSTORAGE_KEY}: ${s}: invalid level`);
		return maxLevel;
	}

	return parsed;
}

export function loadCounts(): number[] {
	const defaultCounts = missions.map(() => 0);
	const s = getLocalStorage(COUNTS_LOCALSTORAGE_KEY);
	if (s === undefined) {
		return defaultCounts;
	}
	let parsed;
	try {
		parsed = JSON.parse(s);
	} catch (err) {
		console.warn(`${COUNTS_LOCALSTORAGE_KEY}: ${s}: ${err}`);
		return defaultCounts;
	}
	if (!Array.isArray(parsed)) {
		console.warn(`${COUNTS_LOCALSTORAGE_KEY}: ${s}: not an array`);
		return defaultCounts;
	}
	if (parsed.length !== missions.length) {
		console.warn(`${COUNTS_LOCALSTORAGE_KEY}: ${s}: unexpected length`);
		return defaultCounts;
	}
	for (const el of parsed) {
		if (typeof el !== 'number' || !Number.isFinite(el) || el < 0) {
			console.warn(`${COUNTS_LOCALSTORAGE_KEY}: ${s}: element not number`);
			return defaultCounts;
		}
	}
	return parsed;
}

export function durationTypeLaunchPoints(durationType: 0 | 1 | 2 | number) {
	switch (durationType) {
		case 0:
			return 1.0;
		case 1:
			return 1.4;
		case 2:
			return 1.8;
		default:
			return 0;
	}
}

export function durationTypeFgClass(durationType: 0 | 1 | 2 | number) {
	switch (durationType) {
		case 0:
			return 'text-blue-500';
		case 1:
			return 'text-purple-500';
		case 2:
			return 'text-yellow-500';
		default:
			return '';
	}
}

enum Eggs {
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
	{ egg: Eggs.Edible, name: 'Edible', icon: '/eggs/egg_edible.png' },
	{ egg: Eggs.Superfood, name: 'Superfood', icon: '/eggs/egg_superfood.png' },
	{ egg: Eggs.Medical, name: 'Medical', icon: '/eggs/egg_medical2.png' },
	{ egg: Eggs.RocketFuel, name: 'Rocket Fuel', icon: '/eggs/egg_rocketfuel.png' },
	{ egg: Eggs.SuperMaterial, name: 'Super Material', icon: '/eggs/egg_supermaterial.png' },
	{ egg: Eggs.Fusion, name: 'Fusion', icon: '/eggs/egg_fusion.png' },
	{ egg: Eggs.Quantum, name: 'Quantum', icon: '/eggs/egg_quantum.png' },
	{ egg: Eggs.Immortality, name: 'Immortality', icon: '/eggs/egg_immortality.png' },
	{ egg: Eggs.Tachyon, name: 'Tachyon', icon: '/eggs/egg_tachyon.png' },
	{ egg: Eggs.Graviton, name: 'Graviton', icon: '/eggs/egg_graviton.png' },
	{ egg: Eggs.Dilithium, name: 'Dilithium', icon: '/eggs/egg_dilithium.png' },
	{ egg: Eggs.Prodigy, name: 'Prodigy', icon: '/eggs/egg_prodigy.png' },
	{ egg: Eggs.Terraform, name: 'Terraform', icon: '/eggs/egg_terraform.png' },
	{ egg: Eggs.Antimatter, name: 'Antimatter', icon: '/eggs/egg_antimatter.png' },
	{ egg: Eggs.DarkMatter, name: 'Dark Matter', icon: '/eggs/egg_darkmatter.png' },
	{ egg: Eggs.Ai, name: 'Ai', icon: '/eggs/egg_ai.png' },
	{ egg: Eggs.Nebula, name: 'Nebula', icon: '/eggs/egg_vision.png' },
	{ egg: Eggs.Enlightenment, name: 'Universe', icon: '/eggs/egg_universe.png' },
	{ egg: Eggs.Enlightenment, name: 'Enlightenment', icon: '/eggs/egg_enlightenment.png' }
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
	{ ship: Ships.ChickenOne, name: 'Chicken One', icon: '/ships/chicken_one.png' },
	{ ship: Ships.ChickenNine, name: 'Chicken Nine', icon: '/ships/chicken_nine.png' },
	{ ship: Ships.ChickenHeavy, name: 'Chicken Heavy', icon: '/ships/chicken_heavy.png' },
	{ ship: Ships.BCR, name: 'BCR', icon: '/ships/bcr.png' },
	{ ship: Ships.QuintillionChicken, name: 'Quintillion Chicken', icon: '/ships/quintillion_chicken.png' },
	{ ship: Ships.CornishHenCorvette, name: 'Cornish-Hen Corvette', icon: '/ships/cornish-hen_corvette.png' },
	{ ship: Ships.Galeggtica, name: 'Galeggtica', icon: '/ships/galeggtica.png' },
	{ ship: Ships.Defihent, name: 'Defihent', icon: '/ships/defihent.png' },
	{ ship: Ships.Voyegger, name: 'Voyegger', icon: '/ships/voyegger.png' },
	{ ship: Ships.Henerprise, name: 'Henerprise', icon: '/ships/henerprise.png' },
	{ ship: Ships.AtreggiesHenliner, name: 'Atreggies Henliner', icon: '/eggs/egg_unknown.png' },
];

export const missions = [
	{
		id: 'chicken-one-short',
		ship: Ships.ChickenOne,
		durationType: 0,
		name: 'Chicken One, Short',
		fuels: [{ egg: Eggs.RocketFuel, amount: 2000000 }],
	},
	{
		id: 'chicken-one-standard',
		ship: Ships.ChickenOne,
		durationType: 1,
		name: 'Chicken One, Standard',
		fuels: [{ egg: Eggs.RocketFuel, amount: 3000000 }],
	},
	{
		id: 'chicken-one-extended',
		ship: Ships.ChickenOne,
		durationType: 2,
		name: 'Chicken One, Extended',
		fuels: [{ egg: Eggs.RocketFuel, amount: 10000000 }],
	},
	{
		id: 'chicken-nine-short',
		ship: Ships.ChickenNine,
		durationType: 0,
		name: 'Chicken Nine, Short',
		fuels: [{ egg: Eggs.RocketFuel, amount: 10000000 }],
	},
	{
		id: 'chicken-nine-standard',
		ship: Ships.ChickenNine,
		durationType: 1,
		name: 'Chicken Nine, Standard',
		fuels: [{ egg: Eggs.RocketFuel, amount: 15000000 }],
	},
	{
		id: 'chicken-nine-extended',
		ship: Ships.ChickenNine,
		durationType: 2,
		name: 'Chicken Nine, Extended',
		fuels: [{ egg: Eggs.RocketFuel, amount: 25000000 }],
	},
	{
		id: 'chicken-heavy-short',
		ship: Ships.ChickenHeavy,
		durationType: 0,
		name: 'Chicken Heavy, Short',
		fuels: [{ egg: Eggs.RocketFuel, amount: 100000000 }],
	},
	{
		id: 'chicken-heavy-standard',
		ship: Ships.ChickenHeavy,
		durationType: 1,
		name: 'Chicken Heavy, Standard',
		fuels: [
			{ egg: Eggs.RocketFuel, amount: 50000000 },
			{ egg: Eggs.Fusion, amount: 5000000 },
		],
	},
	{
		id: 'chicken-heavy-extended',
		ship: Ships.ChickenHeavy,
		durationType: 2,
		name: 'Chicken Heavy, Extended',
		fuels: [
			{ egg: Eggs.RocketFuel, amount: 75000000 },
			{ egg: Eggs.Fusion, amount: 25000000 },
		],
	},
	{
		id: 'bcr-short',
		ship: Ships.BCR,
		durationType: 0,
		name: 'BCR, Short',
		fuels: [
			{ egg: Eggs.RocketFuel, amount: 250000000 },
			{ egg: Eggs.Fusion, amount: 50000000 },
		],
	},
	{
		id: 'bcr-standard',
		ship: Ships.BCR,
		durationType: 1,
		name: 'BCR, Standard',
		fuels: [
			{ egg: Eggs.RocketFuel, amount: 400000000 },
			{ egg: Eggs.Fusion, amount: 75000000 },
		],
	},
	{
		id: 'bcr-extended',
		ship: Ships.BCR,
		durationType: 2,
		name: 'BCR, Extended',
		fuels: [
			{ egg: 2, amount: 5000000 },
			{ egg: Eggs.RocketFuel, amount: 300000000 },
			{ egg: Eggs.Fusion, amount: 100000000 },
		],
	},
	{
		id: 'quintillion-chicken-short',
		ship: Ships.QuintillionChicken,
		durationType: 0,
		name: 'Quintillion Chicken, Short',
		fuels: [
			{ egg: Eggs.Fusion, amount: 5000000000 },
			{ egg: Eggs.Graviton, amount: 1000000000 },
		],
	},
	{
		id: 'quintillion-chicken-standard',
		ship: Ships.QuintillionChicken,
		durationType: 1,
		name: 'Quintillion Chicken, Standard',
		fuels: [
			{ egg: Eggs.Fusion, amount: 7000000000 },
			{ egg: Eggs.Graviton, amount: 5000000000 },
		],
	},
	{
		id: 'quintillion-chicken-extended',
		ship: Ships.QuintillionChicken,
		durationType: 2,
		name: 'Quintillion Chicken, Extended',
		fuels: [
			{ egg: 2, amount: 10000000 },
			{ egg: Eggs.Fusion, amount: 10000000000 },
			{ egg: Eggs.Graviton, amount: 15000000000 },
		],
	},
	{
		id: 'cornish-hen-corvette-short',
		ship: Ships.CornishHenCorvette,
		durationType: 0,
		name: 'Cornish-Hen Corvette, Short',
		fuels: [
			{ egg: Eggs.Fusion, amount: 15000000000 },
			{ egg: Eggs.Graviton, amount: 2000000000 },
		],
	},
	{
		id: 'cornish-hen-corvette-standard',
		ship: Ships.CornishHenCorvette,
		durationType: 1,
		name: 'Cornish-Hen Corvette, Standard',
		fuels: [
			{ egg: Eggs.Fusion, amount: 20000000000 },
			{ egg: Eggs.Graviton, amount: 3000000000 },
		],
	},
	{
		id: 'cornish-hen-corvette-extended',
		ship: Ships.CornishHenCorvette,
		durationType: 2,
		name: 'Cornish-Hen Corvette, Extended',
		fuels: [
			{ egg: 2, amount: 500000000 },
			{ egg: Eggs.Fusion, amount: 25000000000 },
			{ egg: Eggs.Graviton, amount: 5000000000 },
		],
	},
	{
		id: 'galeggtica-short',
		ship: Ships.Galeggtica,
		durationType: 0,
		name: 'Galeggtica, Short',
		fuels: [
			{ egg: Eggs.Fusion, amount: 50000000000 },
			{ egg: Eggs.Graviton, amount: 10000000000 },
		],
	},
	{
		id: 'galeggtica-standard',
		ship: Ships.Galeggtica,
		durationType: 1,
		name: 'Galeggtica, Standard',
		fuels: [
			{ egg: Eggs.Fusion, amount: 75000000000 },
			{ egg: Eggs.Graviton, amount: 25000000000 },
		],
	},
	{
		id: 'galeggtica-extended',
		ship: Ships.Galeggtica,
		durationType: 2,
		name: 'Galeggtica, Extended',
		fuels: [
			{ egg: Eggs.Fusion, amount: 100000000000 },
			{ egg: Eggs.Graviton, amount: 50000000000 },
			{ egg: Eggs.Antimatter, amount: 1000000000 },
		],
	},
	{
		id: 'defihent-short',
		ship: Ships.Defihent,
		durationType: 0,
		name: 'Defihent, Short',
		fuels: [
			{ egg: Eggs.Dilithium, amount: 200000000000 },
			{ egg: Eggs.Antimatter, amount: 50000000000 },
		],
	},
	{
		id: 'defihent-standard',
		ship: Ships.Defihent,
		durationType: 1,
		name: 'Defihent, Standard',
		fuels: [
			{ egg: Eggs.Dilithium, amount: 250000000000 },
			{ egg: Eggs.Antimatter, amount: 150000000000 },
		],
	},
	{
		id: 'defihent-extended',
		ship: Ships.Defihent,
		durationType: 2,
		name: 'Defihent, Extended',
		fuels: [
			{ egg: Eggs.Tachyon, amount: 25000000000 },
			{ egg: Eggs.Dilithium, amount: 250000000000 },
			{ egg: Eggs.Antimatter, amount: 250000000000 },
		],
	},
	{
		id: 'voyegger-short',
		ship: Ships.Voyegger,
		durationType: 0,
		name: 'Voyegger, Short',
		fuels: [
			{ egg: Eggs.Dilithium, amount: 1000000000000 },
			{ egg: Eggs.Antimatter, amount: 1000000000000 },
		],
	},
	{
		id: 'voyegger-standard',
		ship: Ships.Voyegger,
		durationType: 1,
		name: 'Voyegger, Standard',
		fuels: [
			{ egg: Eggs.Dilithium, amount: 1500000000000 },
			{ egg: Eggs.Antimatter, amount: 1500000000000 },
		],
	},
	{
		id: 'voyegger-extended',
		ship: Ships.Voyegger,
		durationType: 2,
		name: 'Voyegger, Extended',
		fuels: [
			{ egg: Eggs.Tachyon, amount: 100000000000 },
			{ egg: Eggs.Dilithium, amount: 2000000000000 },
			{ egg: Eggs.Antimatter, amount: 2000000000000 },
		],
	},
	{
		id: 'henerprise-short',
		ship: Ships.Henerprise,
		durationType: 0,
		name: 'Henerprise, Short',
		fuels: [
			{ egg: Eggs.Dilithium, amount: 2000000000000 },
			{ egg: Eggs.Antimatter, amount: 2000000000000 },
		],
	},
	{
		id: 'henerprise-standard',
		ship: Ships.Henerprise,
		durationType: 1,
		name: 'Henerprise, Standard',
		fuels: [
			{ egg: Eggs.Dilithium, amount: 3000000000000 },
			{ egg: Eggs.Antimatter, amount: 3000000000000 },
			{ egg: Eggs.DarkMatter, amount: 3000000000000 },
		],
	},
	{
		id: 'henerprise-extended',
		ship: Ships.Henerprise,
		durationType: 2,
		name: 'Henerprise, Extended',
		fuels: [
			{ egg: Eggs.Tachyon, amount: 1000000000000 },
			{ egg: Eggs.Dilithium, amount: 3000000000000 },
			{ egg: Eggs.Antimatter, amount: 3000000000000 },
			{ egg: Eggs.DarkMatter, amount: 3000000000000 },
		],
	},
	{
		id: 'atreggies-henliner-short',
		ship: Ships.AtreggiesHenliner,
		durationType: 0,
		name: 'Atreggies Henliner, Short',
		fuels: [
			{ egg: Eggs.Dilithium, amount: 4000000000000 },
			{ egg: Eggs.Antimatter, amount: 4000000000000 },
			{ egg: Eggs.DarkMatter, amount: 3000000000000 },
		],
	},
	{
		id: 'atreggies-henliner-standard',
		ship: Ships.AtreggiesHenliner,
		durationType: 1,
		name: 'Atreggies Henliner, Standard',
		fuels: [
			{ egg: Eggs.Dilithium, amount: 6000000000000 },
			{ egg: Eggs.Antimatter, amount: 6000000000000 },
			{ egg: Eggs.DarkMatter, amount: 4000000000000 },
		],
	},
	{
		id: 'atreggies-henliner-extended',
		ship: Ships.AtreggiesHenliner,
		durationType: 2,
		name: 'Atreggies Henliner, Extended',
		fuels: [
			{ egg: Eggs.Tachyon, amount: 2000000000000 },
			{ egg: Eggs.Dilithium, amount: 6000000000000 },
			{ egg: Eggs.Antimatter, amount: 6000000000000 },
			{ egg: Eggs.DarkMatter, amount: 6000000000000 },
		],
	},
];

export const fuelTankCapacities = [2e9, 200e9, 10e12, 100e12, 200e12, 300e12, 400e12, 500e12] as const;

export const FUEL_TANK_LEVEL_LOCALSTORAGE_KEY = 'fuelTankLevel' as const;
export const COUNTS_LOCALSTORAGE_KEY = 'counts' as const;
