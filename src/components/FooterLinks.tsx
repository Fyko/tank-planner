import { openUrl } from "../lib/utils";

export function FooterLinks() {
  const discord = import.meta.env.VITE_DISCORD_URL;
  const github = import.meta.env.VITE_GITHUB_URL;
  const support = import.meta.env.VITE_SPONSOR_URL;

  return (
    <>
      <a
		onClick={() => openUrl(discord)}
        className="font-normal text-sm text-gray-500 dark:text-gray-400 hover:underline hover:text-gray-500 hover:dark:text-gray-400"
      >
        Discord
      </a>
      <a
		onClick={() => openUrl(github)}
        className="font-normal text-sm text-gray-500 dark:text-gray-400 hover:underline hover:text-gray-500 hover:dark:text-gray-400"
      >
        Github
      </a>
      <a
		onClick={() => openUrl(support)}
        className="font-normal text-sm text-gray-500 dark:text-gray-400 hover:underline hover:text-gray-500 hover:dark:text-gray-400"
      >
        Support
      </a>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        &copy; 2024, Fyko
      </div>
    </>
  );
}
