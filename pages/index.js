import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getSortedProjectsData } from "@/lib/projects";
import styles from "../components/projects.module.css";

export default function Home({ recentProjects }) {
  return(
    <>
      <Head>
        <title>Quasicraft</title>
        <meta 
          name="description" 
          content="The website of the quasicraft server, we try to make the coolest and best-looking redstone contraptions out there." 
          key="desc" 
        />
        <meta 
          name="og:title" 
          content="Quasicraft" 
        />
        <meta 
          name="og:description" 
          content="The website of the quasicraft server, we try to make the coolest and best-looking redstone contraptions out there." 
        />
        <meta 
          name="og:image" 
          content="https://raw.githubusercontent.com/quasicraft/qc-site/807e5f317fde561d0e26c52b12d9f09bef762bd2/public/images/social-image.png" 
        />
        <meta 
          name="robots" 
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
      </Head>
      <div className="mx-8 mb-4">
        <div id="about" className="mb-8">
          <h1 className="text-3xl font-bold mb-4">About</h1>
          <p className="text-slate-300 max-w-3xl mx-auto">
            On the quasicraft server, our goal is to build highly efficient minecraft farms and decorate them as nice as possible. Quasicraft is semi-vanilla, with some tweaks from mods  and datapacks. Currently there are just two players, but we have managed to accomplish a lot. Check out the <Link className="text-white underline" href="/gallery">gallery</Link> if you want to see some screenshots, or check out the <Link className="text-white underline" href="/#server-configuration">server configuration</Link> for more information on mods and specs
          </p>
        </div>
        <div id="recent-projects" className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Recent projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentProjects.map(({ id, status, title }) => (
              <div key={id} className="border-2 border-slate-800 rounded-xl flex flex-col">
                <Link href={`/projects/${id}`}><h1 className="px-4 pt-4 pb-2">{title}</h1></Link>
                <h2 color_code={status} className={styles.status}>{status}</h2>
              </div>
            ))}
          </div>
        </div>
        <h1 id="server-configuration" className="text-3xl font-bold mb-4">Server configuration</h1>
        <div id="specs" className="mb-4 prose prose-slate dark:prose-invert max-w-3xl mx-auto">
          <p>
            Our main survival server running a few mods and datapacks to make the game more enjoyable: <br />
            <ul>
              <li><Link href="https://github.com/gnembon/fabric-carpet">Carpet Mod</Link></li>
              <li><Link href="https://github.com/gnembon/carpet-extra">Carpet Extra</Link></li>
              <li><Link href="https://modrinth.com/mod/lithium">Lithium</Link></li>
              <li><Link href="https://modrinth.com/mod/no-chat-reports">No Chat Reports</Link></li>
              <li><Link href="https://www.curseforge.com/minecraft/mc-mods/servux">Servux</Link></li>
              <li><Link href="https://modrinth.com/mod/syncmatica">Syncmatica</Link></li>
              <li><Link href="https://modrinth.com/mod/view-distance-fix">View Distance Fix</Link></li>
            </ul>

            Most of the mods aren't configured, just installed. On carpet we have enabled four rules:
            <ul>
              <li>commandPlayer</li>
              <li>ctrlQCraftingFix</li>
              <li>commandProfile</li>
              <li>accurateBlockPlacement</li>
            </ul>

            We also have an in-house developed mod, called <Link href="https://modrinth.com/mod/simple-survival-tweaks">Simple Survival Tweaks</Link>, which does the following:
            <ul>
              <li>No 'too expensive' warning which prevents having a lot of enchants on a single item.</li>
              <li>No enderman griefing, except pumpkins and melons for farming purposes.</li>
              <li>Make the debug stick functional in survival.</li>
              <li>Cheap renaming, which allows renaming items to always cost 1 level.</li>
              <li>No xp penalty, which removes the 7 level cap for dropped xp on death, and instead drops 50% of your xp.</li>
            </ul>

            Last, we run the Track Statistics datapack from <Link href="https://vanillatweaks.net/picker/datapacks/">Vanillatweaks</Link> to track some statistics for bragging rights.

            We run two minecraft servers on our server pc. One creative server, which runs a somewhat old backup, and the main Quasicraft survival server. The server pc is specced out as following:
            <ul>
              <li>Ryzen 3 3200G</li>
              <li>16GB G.Skill Aegis 3000 MT/s</li>
              <li>Asrock B450M-HDV R4.0</li>
              <li>Be Quiet! Pure Rock 2 Black</li>
              <li>Patriot Memory P300 M.2</li>
            </ul>
            Everything is packed into a Fractal Design Focus 2 black solid.
          </p>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  const recentProjects = allProjectsData.slice(0, 3);
  return {
    props: {
      recentProjects,
    },
  };
}
