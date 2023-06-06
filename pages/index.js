import Head from "next/head";

export default function Home() {
  return(
    <>
      <Head>
        <title>Quasicraft - Home</title>
        <meta 
          name="description" 
          content="The website  for the Quasicraft server, with project overview and a gallery with all our projects." 
          key="desc" 
        />
        <meta 
          name="og:description" 
          content="Website for Quasicraft with all the info on the server" 
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
