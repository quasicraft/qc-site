import "photoswipe/dist/photoswipe.css"
import { Gallery, Item } from "react-photoswipe-gallery";

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
  );
}
