import { getImage } from "~/server/queries"

export default async function FullPageImageView(props: {id: number}) {
    const image = await getImage(props.id)
    return (
        <div className="flex w-full min-w-0 h-full">
            <div className="flex-shrink flex justify-center items-center">
                <img src={image.url} className="w-96 object-contain" />
            </div>
            <div className="w-48 flex-shrink-0 flex flex-col border-l">
                <div className="text-xl font-bold">{image.name}</div>
            </div>
        </div>
    )
}