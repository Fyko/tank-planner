import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Results from "./components/Results";
import { COUNTS_LOCALSTORAGE_KEY, eggs, loadCounts, missions } from "./lib";
import { setLocalStorage } from "./lib/storage";

function App() {
  const [counts, setCounts] = useState(loadCounts());
  const clear = () => setCounts(missions.map(() => 0));
  useEffect(() => {
    setLocalStorage(COUNTS_LOCALSTORAGE_KEY, JSON.stringify(counts));
  }, [counts]);

  const fuels = useMemo(() => {
    const fuelAmount = new Map(eggs.map((egg) => [egg.egg, 0]));
    for (const [mission_idx, mission] of missions.entries()) {
      const count = Math.floor(counts[mission_idx]);
      for (const { egg, amount } of mission.fuels) {
        fuelAmount.set(egg, fuelAmount.get(egg)! + amount * count);
      }
    }

    return eggs
      .map(({ egg, name, icon }) => {
        return { egg, name, icon, amount: fuelAmount.get(egg)! };
      })
      .filter(({ amount }) => amount > 0);
  }, [counts]);

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
      <Header />
      <main className="overflow-x-auto">
        <Results fuels={fuels} onClear={clear} />
        <div className="flex flex-col items-center">
          <Inputs counts={counts} setCounts={setCounts} />
        </div>
      </main>
    </div>
  );
}

export default App;
