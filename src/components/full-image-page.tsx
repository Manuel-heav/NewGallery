import { clerkClient } from "@clerk/nextjs/server"
import { deleteImage, getImage } from "~/server/queries"
import { Button } from "./ui/button"

export default async function FullPageImageView(props: {id: number}) {
    const idAsNumber = Number(props.id);
    if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");
    const image = await getImage(props.id)

    const uploaderInfo = await clerkClient.users.getUser(image.userId)
    return (
        <div className="flex w-full min-w-0 h-full">
            <div className="flex-shrink flex justify-center items-center">
                <img src={image.url} className="w-96 object-contain" />
            </div>
            <div className="w-48 flex-shrink-0 flex flex-col border-l">
                <div className="text-lg border-b text-center p-2">{image.name}</div>

                <div className="flex flex-col p-2">
                    <span>Uploaded By:</span>
                    <span>{uploaderInfo.fullName}</span>
                </div>

                <div className="flex flex-col p-2">
                    <span>Created On:</span>
                    <span>{new Date(image.createdAt).toLocaleString()}</span>
                </div>

                <div className="flex flex-col p-2">
                    <form action={async () => {
                        "use server";
                        await deleteImage(idAsNumber);
                    }}>
                        <Button type="submit" variant="destructive">Delete</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}