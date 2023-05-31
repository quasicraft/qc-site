import Link from "next/link";
import Image from "next/image";

import logo from "../public/images/icon.png";

export default function Layout({ children }) {
  return(
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
      <header  className="mb-8 py-4">
        <div className="container mx-auto max-w-4xl flex justify-between">
          <Link href="/index">
            <Image width="48" height="48" src={logo} />
          </Link>
          <nav className="my-auto space-x-12">
            <Link href="/index">
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
      <main className="container">{children}</main>
    </div>
  );
}
