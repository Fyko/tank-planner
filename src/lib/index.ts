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

export const eggs = [
	{ egg: 1, name: 'Edible', icon: '/eggs/egg_edible.png' },
	{ egg: 2, name: 'Superfood', icon: '/eggs/egg_superfood.png' },
	{ egg: 3, name: 'Medical', icon: '/eggs/egg_medical2.png' },
	{ egg: 4, name: 'Rocket Fuel', icon: '/eggs/egg_rocketfuel.png' },
	{ egg: 5, name: 'Super Material', icon: '/eggs/egg_supermaterial.png' },
	{ egg: 6, name: 'Fusion', icon: '/eggs/egg_fusion.png' },
	{ egg: 7, name: 'Quantum', icon: '/eggs/egg_quantum.png' },
	{ egg: 8, name: 'Immortality', icon: '/eggs/egg_immortality.png' },
	{ egg: 9, name: 'Tachyon', icon: '/eggs/egg_tachyon.png' },
	{ egg: 10, name: 'Graviton', icon: '/eggs/egg_graviton.png' },
	{ egg: 11, name: 'Dilithium', icon: '/eggs/egg_dilithium.png' },
	{ egg: 12, name: 'Prodigy', icon: '/eggs/egg_prodigy.png' },
	{ egg: 13, name: 'Terraform', icon: '/eggs/egg_terraform.png' },
	{ egg: 14, name: 'Antimatter', icon: '/eggs/egg_antimatter.png' },
	{ egg: 15, name: 'Dark Matter', icon: '/eggs/egg_darkmatter.png' },
	{ egg: 16, name: 'Ai', icon: '/eggs/egg_ai.png' },
	{ egg: 17, name: 'Nebula', icon: '/eggs/egg_vision.png' },
	{ egg: 18, name: 'Universe', icon: '/eggs/egg_universe.png' },
	{ egg: 19, name: 'Enlightenment', icon: '/eggs/egg_enlightenment.png' }
];

export const ships = [
	{ ship: 0, name: 'Chicken One', icon: '/ships/chicken_one.png' },
	{ ship: 1, name: 'Chicken Nine', icon: '/ships/chicken_nine.png' },
	{ ship: 2, name: 'Chicken Heavy', icon: '/ships/chicken_heavy.png' },
	{ ship: 3, name: 'BCR', icon: '/ships/bcr.png' },
	{ ship: 4, name: 'Quintillion Chicken', icon: '/ships/quintillion_chicken.png' },
	{ ship: 5, name: 'Cornish-Hen Corvette', icon: '/ships/cornish-hen_corvette.png' },
	{ ship: 6, name: 'Galeggtica', icon: '/ships/galeggtica.png' },
	{ ship: 7, name: 'Defihent', icon: '/ships/defihent.png' },
	{ ship: 8, name: 'Voyegger', icon: '/ships/voyegger.png' },
	{ ship: 9, name: 'Henerprise', icon: '/ships/henerprise.png' },
];

export const missions = [
	{
		id: 'chicken-one-short',
		ship: 0,
		durationType: 0,
		name: 'Chicken One, Short',
		fuels: [{ egg: 4, amount: 2000000 }],
	},
	{
		id: 'chicken-one-standard',
		ship: 0,
		durationType: 1,
		name: 'Chicken One, Standard',
		fuels: [{ egg: 4, amount: 3000000 }],
	},
	{
		id: 'chicken-one-extended',
		ship: 0,
		durationType: 2,
		name: 'Chicken One, Extended',
		fuels: [{ egg: 4, amount: 10000000 }],
	},
	{
		id: 'chicken-nine-short',
		ship: 1,
		durationType: 0,
		name: 'Chicken Nine, Short',
		fuels: [{ egg: 4, amount: 10000000 }],
	},
	{
		id: 'chicken-nine-standard',
		ship: 1,
		durationType: 1,
		name: 'Chicken Nine, Standard',
		fuels: [{ egg: 4, amount: 15000000 }],
	},
	{
		id: 'chicken-nine-extended',
		ship: 1,
		durationType: 2,
		name: 'Chicken Nine, Extended',
		fuels: [{ egg: 4, amount: 25000000 }],
	},
	{
		id: 'chicken-heavy-short',
		ship: 2,
		durationType: 0,
		name: 'Chicken Heavy, Short',
		fuels: [{ egg: 4, amount: 100000000 }],
	},
	{
		id: 'chicken-heavy-standard',
		ship: 2,
		durationType: 1,
		name: 'Chicken Heavy, Standard',
		fuels: [
			{ egg: 4, amount: 50000000 },
			{ egg: 6, amount: 5000000 },
		],
	},
	{
		id: 'chicken-heavy-extended',
		ship: 2,
		durationType: 2,
		name: 'Chicken Heavy, Extended',
		fuels: [
			{ egg: 4, amount: 75000000 },
			{ egg: 6, amount: 25000000 },
		],
	},
	{
		id: 'bcr-short',
		ship: 3,
		durationType: 0,
		name: 'BCR, Short',
		fuels: [
			{ egg: 4, amount: 250000000 },
			{ egg: 6, amount: 50000000 },
		],
	},
	{
		id: 'bcr-standard',
		ship: 3,
		durationType: 1,
		name: 'BCR, Standard',
		fuels: [
			{ egg: 4, amount: 400000000 },
			{ egg: 6, amount: 75000000 },
		],
	},
	{
		id: 'bcr-extended',
		ship: 3,
		durationType: 2,
		name: 'BCR, Extended',
		fuels: [
			{ egg: 2, amount: 5000000 },
			{ egg: 4, amount: 300000000 },
			{ egg: 6, amount: 100000000 },
		],
	},
	{
		id: 'quintillion-chicken-short',
		ship: 4,
		durationType: 0,
		name: 'Quintillion Chicken, Short',
		fuels: [
			{ egg: 6, amount: 5000000000 },
			{ egg: 10, amount: 1000000000 },
		],
	},
	{
		id: 'quintillion-chicken-standard',
		ship: 4,
		durationType: 1,
		name: 'Quintillion Chicken, Standard',
		fuels: [
			{ egg: 6, amount: 7000000000 },
			{ egg: 10, amount: 5000000000 },
		],
	},
	{
		id: 'quintillion-chicken-extended',
		ship: 4,
		durationType: 2,
		name: 'Quintillion Chicken, Extended',
		fuels: [
			{ egg: 2, amount: 10000000 },
			{ egg: 6, amount: 10000000000 },
			{ egg: 10, amount: 15000000000 },
		],
	},
	{
		id: 'cornish-hen-corvette-short',
		ship: 5,
		durationType: 0,
		name: 'Cornish-Hen Corvette, Short',
		fuels: [
			{ egg: 6, amount: 15000000000 },
			{ egg: 10, amount: 2000000000 },
		],
	},
	{
		id: 'cornish-hen-corvette-standard',
		ship: 5,
		durationType: 1,
		name: 'Cornish-Hen Corvette, Standard',
		fuels: [
			{ egg: 6, amount: 20000000000 },
			{ egg: 10, amount: 3000000000 },
		],
	},
	{
		id: 'cornish-hen-corvette-extended',
		ship: 5,
		durationType: 2,
		name: 'Cornish-Hen Corvette, Extended',
		fuels: [
			{ egg: 2, amount: 500000000 },
			{ egg: 6, amount: 25000000000 },
			{ egg: 10, amount: 5000000000 },
		],
	},
	{
		id: 'galeggtica-short',
		ship: 6,
		durationType: 0,
		name: 'Galeggtica, Short',
		fuels: [
			{ egg: 6, amount: 50000000000 },
			{ egg: 10, amount: 10000000000 },
		],
	},
	{
		id: 'galeggtica-standard',
		ship: 6,
		durationType: 1,
		name: 'Galeggtica, Standard',
		fuels: [
			{ egg: 6, amount: 75000000000 },
			{ egg: 10, amount: 25000000000 },
		],
	},
	{
		id: 'galeggtica-extended',
		ship: 6,
		durationType: 2,
		name: 'Galeggtica, Extended',
		fuels: [
			{ egg: 6, amount: 100000000000 },
			{ egg: 10, amount: 50000000000 },
			{ egg: 14, amount: 1000000000 },
		],
	},
	{
		id: 'defihent-short',
		ship: 7,
		durationType: 0,
		name: 'Defihent, Short',
		fuels: [
			{ egg: 11, amount: 200000000000 },
			{ egg: 14, amount: 50000000000 },
		],
	},
	{
		id: 'defihent-standard',
		ship: 7,
		durationType: 1,
		name: 'Defihent, Standard',
		fuels: [
			{ egg: 11, amount: 250000000000 },
			{ egg: 14, amount: 150000000000 },
		],
	},
	{
		id: 'defihent-extended',
		ship: 7,
		durationType: 2,
		name: 'Defihent, Extended',
		fuels: [
			{ egg: 9, amount: 25000000000 },
			{ egg: 11, amount: 250000000000 },
			{ egg: 14, amount: 250000000000 },
		],
	},
	{
		id: 'voyegger-short',
		ship: 8,
		durationType: 0,
		name: 'Voyegger, Short',
		fuels: [
			{ egg: 11, amount: 1000000000000 },
			{ egg: 14, amount: 1000000000000 },
		],
	},
	{
		id: 'voyegger-standard',
		ship: 8,
		durationType: 1,
		name: 'Voyegger, Standard',
		fuels: [
			{ egg: 11, amount: 1500000000000 },
			{ egg: 14, amount: 1500000000000 },
		],
	},
	{
		id: 'voyegger-extended',
		ship: 8,
		durationType: 2,
		name: 'Voyegger, Extended',
		fuels: [
			{ egg: 9, amount: 100000000000 },
			{ egg: 11, amount: 2000000000000 },
			{ egg: 14, amount: 2000000000000 },
		],
	},
	{
		id: 'henerprise-short',
		ship: 9,
		durationType: 0,
		name: 'Henerprise, Short',
		fuels: [
			{ egg: 11, amount: 2000000000000 },
			{ egg: 14, amount: 2000000000000 },
		],
	},
	{
		id: 'henerprise-standard',
		ship: 9,
		durationType: 1,
		name: 'Henerprise, Standard',
		fuels: [
			{ egg: 11, amount: 3000000000000 },
			{ egg: 14, amount: 3000000000000 },
			{ egg: 15, amount: 3000000000000 },
		],
	},
	{
		id: 'henerprise-extended',
		ship: 9,
		durationType: 2,
		name: 'Henerprise, Extended',
		fuels: [
			{ egg: 9, amount: 1000000000000 },
			{ egg: 11, amount: 3000000000000 },
			{ egg: 14, amount: 3000000000000 },
			{ egg: 15, amount: 3000000000000 },
		],
	},
];

export const fuelTankCapacities = [2e9, 200e9, 10e12, 100e12] as const;

export const FUEL_TANK_LEVEL_LOCALSTORAGE_KEY = 'fuelTankLevel' as const;
export const COUNTS_LOCALSTORAGE_KEY = 'counts' as const;
