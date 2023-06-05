import Image from "next/image";
import Link from "next/link";

export default function Gallery() {

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

  const buildURL = imagePath => `https://ik.imagekit.io/quasicraft/tr:w-1280,h-720/${imagePath}.png`

  return(
    <div className="grid grid-cols-1 md:grid-cols-2 mx-8 pb-2">
      {images.map(image => (
        <div key={image} className="relative overflow-hidden flex flex-col rounded-xl m-2">
          <Image src={buildURL(image)} width={1280} height={720} />
        </div>
      ))}
    </div>
  );
}
