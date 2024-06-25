import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

function Navbar(){
    return(
      <nav className="flex items-center justify-between w-full p-4 text-xl font-semibold border-b">
        <div>Gallery</div>
        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>

            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    )
  }
export default Navbar;