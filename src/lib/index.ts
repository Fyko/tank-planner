import {
  COUNTS_LOCALSTORAGE_KEY,
  FUEL_TANK_LEVEL_LOCALSTORAGE_KEY,
  fuelTankCapacities,
  missions,
} from "./constants.js";
import { getLocalStorage } from "./storage.js";

export * from "./constants.js";

export const chunk = <Type>(a: Type[], size: number) =>
  Array.from(Array.from({ length: Math.ceil(a.length / size) }), (_, index) =>
    a.slice(index * size, index * size + size),
  );

export function loadFuelTankLevel() {
  const maxLevel = fuelTankCapacities.length - 1;
  const tankLevel = getLocalStorage(FUEL_TANK_LEVEL_LOCALSTORAGE_KEY)!;
  if (tankLevel === undefined) {
    return maxLevel;
  }

  let parsed;
  try {
    parsed = Number.parseInt(tankLevel, 10);
  } catch (error) {
    console.warn(`${FUEL_TANK_LEVEL_LOCALSTORAGE_KEY}: ${tankLevel}: ${error}`);
    return maxLevel;
  }

  if (typeof parsed !== "number" || !(parsed >= 0 && parsed <= maxLevel)) {
    console.warn(
      `${FUEL_TANK_LEVEL_LOCALSTORAGE_KEY}: ${tankLevel}: invalid level`,
    );
    return maxLevel;
  }

  return parsed;
}

export function loadCounts(): number[] {
  const defaultCounts = missions.map(() => 0);
  const counts = getLocalStorage(COUNTS_LOCALSTORAGE_KEY)!;
  if (counts === undefined) {
    return defaultCounts;
  }

  let parsed;
  try {
    parsed = JSON.parse(counts);
  } catch (error) {
    console.warn(`${COUNTS_LOCALSTORAGE_KEY}: ${counts}: ${error}`);
    return defaultCounts;
  }

  if (!Array.isArray(parsed)) {
    console.warn(`${COUNTS_LOCALSTORAGE_KEY}: ${counts}: not an array`);
    return defaultCounts;
  }

  if (parsed.length !== missions.length) {
    console.warn(`${COUNTS_LOCALSTORAGE_KEY}: ${counts}: unexpected length`);
    return defaultCounts;
  }

  for (const el of parsed) {
    if (typeof el !== "number" || !Number.isFinite(el) || el < 0) {
      console.warn(`${COUNTS_LOCALSTORAGE_KEY}: ${counts}: element not number`);
      return defaultCounts;
    }
  }

  return parsed;
}

export function durationTypeLaunchPoints(durationType: number | 0 | 1 | 2) {
  switch (durationType) {
    case 0:
      return 1;
    case 1:
      return 1.4;
    case 2:
      return 1.8;
    default:
      return 0;
  }
}

export function durationTypeFgClass(durationType: number | 0 | 1 | 2) {
  switch (durationType) {
    case 0:
      return "text-blue-500";
    case 1:
      return "text-purple-500";
    case 2:
      return "text-yellow-500";
    default:
      return "";
  }
}
