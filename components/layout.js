import Link from "next/link";
import Image from "next/image";

import logo from "../public/images/icon.png";

export default function Layout({ children }) {
  return(
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
      <header className="mx-4 mb-8 py-4 font-medium">
        <div className="container mx-auto max-w-4xl flex justify-between">
          <Link href="/">
            <Image width="40" height="40" src={logo} />
          </Link>
          <nav className="my-auto space-x-12">
            <Link href="/">
              Home
            </Link>
            <Link href="/gallery">
              Gallery
            </Link>
            <Link href="/projects">
              Projects
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto max-w-4xl flex-1">{children}</main>
      <footer className="mx-4 mb-8 font-medium text-slate-400">
        <div className='container mx-auto flex justify-between max-w-4xl'>
            <Link className="hover:underline" href="https://github.com/quasicraft">Github</Link>
            &copy; 2023 Quasicraft
        </div>
      </footer>
    </div>
  );
}
