import Head from "next/head";

export default function Home() {
  return(
    <>
      <Head>
        <title>Quasicraft - Home</title>
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
      </Head>
      <div className="mx-8">Hello, world!</div>
    </>
  );
}
