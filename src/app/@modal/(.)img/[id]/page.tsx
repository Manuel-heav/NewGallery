import FullPageImageView from "~/components/full-image-page";
import { Modal } from "./Modal";

export default function PhotoModal({
    params: {id: photoId},
}: {
    params: {id: string};
}){
    const idAsNum = Number(photoId);
    if(Number.isNaN(idAsNum)) throw new Error("Invalid Id");
    return (
    <Modal>
        <FullPageImageView id={idAsNum} />
    </Modal>
    )
}