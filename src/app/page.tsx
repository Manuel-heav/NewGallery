import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images(){ 
  const images = await getMyImages();

  return(
    <div className="flex flex-wrap gap-4 justify-center">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col">
          <Link href={`/img/${image.id}`}>
            <Image src={image.url} style={{objectFit: "contain"}} alt={image.name} width={480} height={480}/>
          </Link>
            <div>{image.name}</div>
        </div>
      ))}
    </div>
  )
}

export default async function HomePage() {


  return (
    <main>
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">
          Please Sign In
        </div>
      </SignedOut>

      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
