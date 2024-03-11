import { DiscordLogo, HandHeart } from "@phosphor-icons/react";

export default function Header() {
  return (
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
          <button className="btn btn-sm btn-ghost btn-square" type="button">
            <DiscordLogo className="h-6 w-6 text-[#7289DA]" />
            <span className="sr-only">Support</span>
          </button>
        </a>
        <a href="#" target="_blank">
          <button className="btn btn-sm btn-ghost btn-square" type="button">
            <HandHeart className="h-6 w-6" color="#db61a2" />
            <span className="sr-only">Sponsor</span>
          </button>
        </a>
      </div>
    </header>
  );
}
