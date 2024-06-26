import { getImage } from "~/server/queries";

export default async function PhotoModal({
    params: {id: photoId},
}: {
    params: {id: string};
}){
    const idAsNum = parseInt(photoId);
    const image = await getImage(idAsNum)
    return <div><img src={image.url} alt={image.name} className="w-96"/></div>
}