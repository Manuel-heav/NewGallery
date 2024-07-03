import { Modal } from "./Modal";
import { getImage } from "~/server/queries";

export default async function PhotoModal({
    params: {id: photoId},
}: {
    params: {id: string};
}){
    const idAsNum = Number(photoId);
    if(Number.isNaN(idAsNum)) throw new Error("Invalid Id");
    const image = await getImage(idAsNum)
    return <Modal><img src={image.url} alt={image.name} className="w-96"/></Modal>
}