import type { Dispatch, SetStateAction } from "react";
import { chunk, missions, ships } from "../lib";

const borders: Record<(typeof missions)[number]["durationType"], string> = {
  0: "border-blue-500 focus:border-blue-400 focus:outline-blue-400 focus-within:border-blue-400 focus-within:outline-blue-400",
  1: "border-purple-500 focus:border-purple-400 focus:outline-purple-400 focus-within:border-purple-400 focus-within:outline-purple-400",
  2: "border-orange-400 focus:border-orange-400 focus:outline-orange-400 focus-within:border-orange-400 focus-within:outline-orange-400",
};

function ShipName({ ship }: { readonly ship: (typeof ships)[number] }) {
  return (
    <td>
      <div className="flex items-center gap-3">
        <div className="avatar">
          <div className="w-12 h-12">
            <img className="" src={ship.icon} />
          </div>
        </div>
        <div>
          <div className="text-lg">{ship.name}</div>
        </div>
      </div>
    </td>
  );
}

export default function Inputs({
  counts,
  setCounts,
}: {
  readonly counts: number[];
  readonly setCounts: Dispatch<SetStateAction<number[]>>;
}) {
  return (
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
          const title = <ShipName ship={ship} />;

          const mappedMissions = missions.map((mission, mission_idx) => {
            const mission_index = ship_index * 3 + mission_idx;

            return (
              <td className="text-center items-center justify-center">
                <input
                  type="text"
                  value={counts[mission_index]}
                  onChange={(event) => {
                    const newCounts = [...counts];
                    newCounts[mission_index] = Number.parseFloat(
                      event.target.value || "0",
                    );
                    setCounts(newCounts);
                  }}
                  className={`input input-bordered text-center input-md w-[50px] px-0 ${
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
  );
}
