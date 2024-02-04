import {
  DiscordLogo,
  Eraser,
  HandHeart,
  WarningCircle,
} from "@phosphor-icons/react";
import { useEffect, useMemo, useState } from "react";
import {
  COUNTS_LOCALSTORAGE_KEY,
  FUEL_TANK_LEVEL_LOCALSTORAGE_KEY,
  chunk,
  eggs,
  fuelTankCapacities,
  loadCounts,
  loadFuelTankLevel,
  missions,
  ships,
} from "./lib";
import { setLocalStorage } from "./lib/storage";
import { formatEIValue } from "./lib/units";

function App() {
  const [fuelTankLevel, setFuelTankLevel] = useState(loadFuelTankLevel());
  useEffect(() => {
    setLocalStorage(FUEL_TANK_LEVEL_LOCALSTORAGE_KEY, fuelTankLevel.toString());
  }, [fuelTankLevel]);
  const fuelTankCapacity = useMemo(
    () => fuelTankCapacities[fuelTankLevel],
    [fuelTankLevel]
  );

  const [counts, setCounts] = useState(loadCounts());
  const clear = () => setCounts(missions.map(() => 0));
  useEffect(() => {
    setLocalStorage(COUNTS_LOCALSTORAGE_KEY, JSON.stringify(counts));
  }, [counts]);

  const fuels = useMemo(() => {
    const fuelAmount = new Map(eggs.map((egg) => [egg.egg, 0]));
    missions.forEach((mission, i) => {
      const count = Math.floor(counts[i]);
      for (const { egg, amount } of mission.fuels) {
        fuelAmount.set(egg, fuelAmount.get(egg)! + amount * count);
      }
    });

    return eggs
      .map(({ egg, name, icon }) => {
        return { egg, name, icon, amount: fuelAmount.get(egg)! };
      })
      .filter(({ amount }) => amount > 0);
  }, [counts]);

  const totalFuel = useMemo(
    () => fuels.reduce((sum, { amount }) => sum + amount, 0),
    [fuels]
  );
  const fuelTankPercentage = useMemo(
    () => (totalFuel / fuelTankCapacity) * 100,
    [totalFuel, fuelTankCapacity]
  );
  const fuelTankOverCapacity = useMemo(
    () => totalFuel >= fuelTankCapacity,
    [totalFuel, fuelTankCapacity]
  );

  // todo: implement this display
  // const _launchPoints = useMemo(() => {
  //   const lps = ships.map(() => 0);
  //   missions.forEach((mission, i) => {
  //     const count = Math.floor(counts[i]);
  //     lps[mission.ship] +=
  //       durationTypeLaunchPoints(mission.durationType) * count;
  //   });

  //   return lps;
  // }, [counts]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <header className="flex items-center justify-between px-6 py-4 border-b border-neutral-400 dark:border-neutral-600">
        <div className="flex items-center gap-2">
          <img
            alt="Logo"
            className="rounded-md object-cover"
            height="32"
            src="/large-tank.png"
            style={{
              aspectRatio: "32/32",
              objectFit: "cover",
            }}
            width="32"
          />
          <h1 className="text-xl font-semibold italic pretty">Tank Planner</h1>
        </div>
        <div className="grid grid-flow-col grid-cols-2 gap-3">
          <a href="#" target="_blank">
            <button className="btn btn-sm btn-ghost btn-square">
              <DiscordLogo className="h-6 w-6 text-[#7289DA]" />
              <span className="sr-only">Support</span>
            </button>
          </a>
          <a href="#" target="_blank">
            <button className="btn btn-sm btn-ghost btn-square">
              <HandHeart className="h-6 w-6" color="#db61a2" />
              <span className="sr-only">Sponsor</span>
            </button>
          </a>
        </div>
      </header>
      <main className="overflow-x-auto">
        <div className="flex align-top justify-between px-6 py-4">
          <div className="">
            <div className="grid grid-flow-col gap-x-4">
              <label className="form-control w-full max-w-xs">
                <div className="label pt-0">
                  <span className="label-text">Tank Size</span>
                </div>
                <select
                  className="select select-bordered lg:select-md select-xs"
                  value={fuelTankLevel}
                  onChange={(e) => setFuelTankLevel(parseInt(e.target.value))}
                >
                  {fuelTankCapacities.map((capacity, i) => {
                    return (
                      <option value={i}>
                        {formatEIValue(capacity, { trim: true })}
                      </option>
                    );
                  })}
                </select>
              </label>
            </div>
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
              <div className="grid md:grid-cols-5 grid-cols-2 text-gray-600 dark:text-gray-400 text-lg">
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
                      className="flex items-center justify-between tooltip"
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
                        <span>
                          {formatEIValue(fuel.amount, { trim: true })}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <label>
                <div>
                  <progress
                    className={`progress ${
                      fuelTankOverCapacity
                        ? "progress-error"
                        : "progress-success"
                    } w-full`}
                    value={fuelTankPercentage}
                    max="100"
                  ></progress>
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
          <div className="grid grid-flow-row grid-cols-1 space-x-2">
            <button
              onClick={clear}
              className="btn md:btn-md btn-sm dark:bg-blue-600 dark:text-white rounded-md shadow-md hover:bg-blue-800"
            >
              <Eraser className="lg:h-6 lg:w-6 h-4 w-4" />
              <span className="text-md font-semibold md:visible invisible">
                Reset
              </span>
            </button>
          </div>
        </div>
        {/* <div className="flex flex-col items-center">
          <div className="grid items-center md:grid-cols-3 grid-cols-1 gap-2 max-w-full">
            {missions.map((mission, i) => {
              const borders: Record<
                (typeof missions)[number]["durationType"],
                string
              > = {
                0: "border-blue-500 focus:border-blue-400 focus:outline-blue-400 focus-within:border-blue-400 focus-within:outline-blue-400",
                1: "border-purple-500 focus:border-purple-400 focus:outline-purple-400 focus-within:border-purple-400 focus-within:outline-purple-400",
                2: "border-orange-400 focus:border-orange-400 focus:outline-orange-400 focus-within:border-orange-400 focus-within:outline-orange-400",
              };

              return (
                <>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">{mission.name}</span>
                    </div>
                    <input
                      type="text"
                      value={counts[i]}
                      onChange={(e) => {
                        const newCounts = [...counts];
                        newCounts[i] = parseFloat(e.target.value || "0");
                        setCounts(newCounts);
                      }}
                      className={`input input-bordered input-md w-full max-w-[10rem] ${
                        borders[mission.durationType]
                      }`}
                    />
                  </label>
                </>
              );
            })}
          </div>
        </div> */}
        <div className="flex flex-col items-center">
          <table className="table table-lg items-center max-w-2xl">
            <thead className="text-center">
              <th>Name</th>
              <th>Short</th>
              <th>Standard</th>
              <th>Extended</th>
            </thead>
            <tbody>
              {chunk(missions, 3).map((missions, ship_index) => {
                const ship = ships.find((ship) => ship.ship === ship_index)!;
                const title = (
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="w-12 h-12">
                          <img className="" src={ship.icon} />
                        </div>
                      </div>
                      <div>
                        <div className="text-lg">
                          {ship.name}
                        </div>
                      </div>
                    </div>
                  </td>
                );

                const borders: Record<
                  (typeof missions)[number]["durationType"],
                  string
                > = {
                  0: "border-blue-500 focus:border-blue-400 focus:outline-blue-400 focus-within:border-blue-400 focus-within:outline-blue-400",
                  1: "border-purple-500 focus:border-purple-400 focus:outline-purple-400 focus-within:border-purple-400 focus-within:outline-purple-400",
                  2: "border-orange-400 focus:border-orange-400 focus:outline-orange-400 focus-within:border-orange-400 focus-within:outline-orange-400",
                };

                const mappedMissions = missions.map((mission, i) => {
                  const mission_index = ship_index * 3 + i;

                  return (
                    <td className="text-center">
                      <input
                        type="text"
                        value={counts[mission_index]}
                        onChange={(e) => {
                          const newCounts = [...counts];
                          newCounts[mission_index] = parseFloat(
                            e.target.value || "0"
                          );
                          setCounts(newCounts);
                        }}
                        className={`input input-bordered text-center input-md w-full max-w-[3rem] ${
                          borders[mission.durationType]
                        }`}
                      />
                    </td>
                  );
                });

                return (
                  <tr>
                    {title}
                    {mappedMissions}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default App;
