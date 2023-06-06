import "photoswipe/dist/photoswipe.css"
import { Gallery, Item } from "react-photoswipe-gallery";
import Head from "next/head";

export default function photoGallery() {

  const images = [
    "mob-switch",
    "storage-corner-left",
    "iron-farm",
    "storage-front",
    "nether-tunnelbore",
    "villager-smithy",
    "storage-corner-right",
    "nether-mobswitch",
    "froglight-farm",
    "small-witch-farm"
  ]

  return(
    <>
      <Head>
        <title>Quasicraft - Gallery</title>
        <meta 
          name="description" 
          content="Check out our gallery, with  amazing high-quality shots of all the beautiful builds on the quasicraft server." 
          key="desc" 
        />
        <meta 
          name="og:title" 
          content="Quasicraft - Gallery" 
        />
        <meta 
          name="og:description" 
          content="Check out our gallery, with  amazing high-quality shots of all the beautiful builds on the quasicraft server." 
        />
        <meta 
          name="og:image" 
          content="https://raw.githubusercontent.com/quasicraft/qc-site/807e5f317fde561d0e26c52b12d9f09bef762bd2/public/images/social-image.png" 
        />
      </Head>
      <Gallery>
        <div className="relative grid grid-cols-1 md:grid-cols-2 mx-8 mb-4">
          {images.map(image => (
            <div className="overflow-hidden rounded-2xl m-2">
              <Item original={`https://ik.imagekit.io/quasicraft/${image}.png`} thumbnail={`https://ik.imagekit.io/quasicraft/tr:w-850,h-480/${image}.png`} width="1280" height="720">
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} src={`https://ik.imagekit.io/quasicraft/tr:w-850,h-480/${image}.png`} />
                )}
              </Item>
            </div>
          ))}
        </div>
      </Gallery>
    </>
  );
}
