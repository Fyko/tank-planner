import { Eraser, WarningCircle } from "@phosphor-icons/react";
import type { MouseEventHandler } from "react";
import { useEffect, useMemo, useState } from "react";
import type { Eggs } from "../lib";
import {
  FUEL_TANK_LEVEL_LOCALSTORAGE_KEY,
  fuelTankCapacities,
  loadFuelTankLevel,
} from "../lib";
import { setLocalStorage } from "../lib/storage";
import { formatEIValue } from "../lib/units";

/// The Results heading component. This includes the fuel tank level selector and the fuel progress bar
/// as well as a reset button
export default function Results({
  fuels,
  onClear,
}: {
  readonly fuels: {
    amount: number;
    egg: Eggs;
    icon: string;
    name: string;
  }[];
  readonly onClear: MouseEventHandler<HTMLButtonElement>;
}) {
  const [fuelTankLevel, setFuelTankLevel] = useState(loadFuelTankLevel());
  useEffect(() => {
    setLocalStorage(FUEL_TANK_LEVEL_LOCALSTORAGE_KEY, fuelTankLevel.toString());
  }, [fuelTankLevel]);
  const fuelTankCapacity = useMemo(
    () => fuelTankCapacities[fuelTankLevel],
    [fuelTankLevel],
  );

  const totalFuel = useMemo(
    () => fuels.reduce((sum, { amount }) => sum + amount, 0),
    [fuels],
  );
  const fuelTankPercentage = useMemo(
    () => (totalFuel / fuelTankCapacity) * 100,
    [totalFuel, fuelTankCapacity],
  );
  const fuelTankOverCapacity = useMemo(
    () => totalFuel >= fuelTankCapacity,
    [totalFuel, fuelTankCapacity],
  );

  return (
    <div className="flex items-center justify-center px-6 py-4 gap-x-5">
      <div className="grid grid-flow-col gap-x-4">
        <label className="form-control w-full max-w-xs mt-[-30px]">
          <div className="label pt-0">
            <span className="label-text">Tank Size</span>
          </div>
          <select
            className="select select-bordered select-md"
            value={fuelTankLevel}
            onChange={({ target: { value } }) =>
              setFuelTankLevel(Number.parseInt(value, 10))
            }
          >
            {fuelTankCapacities.map((capacity, capacity_idx) => {
              return (
                <option value={capacity_idx}>
                  {formatEIValue(capacity, { trim: true })}
                </option>
              );
            })}
          </select>
        </label>
      </div>
      <div className="w-full lg:max-w-sm max-w-xs mx-2">
        <label>
          <div className="label pt-0">
            <span className="label-text">Needed Fuel</span>
            <span
              className="label-text-alt tooltip tooltip-bottom"
              data-tip="Note that fueling in-game is imprecise; a mission could actually take slightly more or less fuel (usually by a fraction of an egg) than advertised. Therefore you should always have a little surplus of each fuel when planning your tank. A precisely planned tank — e.g. a full 100T tank for 10 extended Henerprises — is pointless and will likely leave you disappointed."
            >
              <WarningCircle className="w-5 h-5" />
            </span>
          </div>
          <div className="text-gray-600 dark:text-gray-400 text-lg flex flex-wrap justify-between">
            {(fuels.length
              ? fuels
              : [
                  {
                    egg: 100,
                    name: "Unknown",
                    icon: "/eggs/egg_unknown.png",
                    amount: 0,
                  },
                ]
            ).map((fuel) => {
              return (
                <div
                  className="flex items-center justify-between tooltip w-[fit-content]"
                  data-tip={fuel.name}
                >
                  <div className="flex items-center">
                    <img
                      alt={fuel.name}
                      className="rounded-md object-cover"
                      height="32"
                      src={fuel.icon}
                      width="32"
                      title={fuel.name}
                    />
                    <span>{formatEIValue(fuel.amount, { trim: true })}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <label>
            <div>
              <progress
                className={`progress ${
                  fuelTankOverCapacity ? "progress-error" : "progress-success"
                } w-full`}
                value={fuelTankPercentage}
                max="100"
              />
            </div>
            <div className="label pt-0">
              <span className="label-text-alt">
                {fuelTankPercentage.toFixed(2)}%
              </span>
              <span className="label-text-alt">
                {formatEIValue(totalFuel, { trim: true })}/
                {formatEIValue(fuelTankCapacity, { trim: true })}
              </span>
            </div>
          </label>
        </label>
      </div>
      <button
        onClick={onClear}
        className="btn md:btn-md btn-sm dark:bg-blue-600 dark:text-white rounded-md shadow-md hover:bg-blue-800"
        type="reset"
      >
        <Eraser className="lg:h-6 lg:w-6 h-4 w-4" />
        <span className="text-md font-semibold md:visible invisible">
          Reset
        </span>
      </button>
    </div>
  );
}
