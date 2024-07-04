"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";
import { UploadBtn } from "./UploadBtn";


function Navbar(){
    return(
      <nav className="flex items-center justify-between w-full p-4 text-xl font-semibold border-b">
        <div>Gallery</div>
        <div className="flex flex-row gap-4 items-center">
            <SignedOut>
                <SignInButton />
            </SignedOut>

            <SignedIn>
                <UploadBtn />
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    )
  }
export default Navbar;