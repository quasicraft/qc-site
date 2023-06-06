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
          content="Website for Quasicraft wwith all the info on the server" 
        />
        <meta 
          name="og:image" 
          content="../public/images/social-image.png" 
        />
      </Head>
      <div className="mx-8">Hello, world!</div>
    </>
  );
}
