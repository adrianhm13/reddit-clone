import { Button } from "../Button/Button";
import { AsideContent, AsideMain, AsideTitle } from "./Aside.style";
import { useState } from "react";
import ModalPost from '../Modals/ModalPost/ModalPost'


export function AsideCategory({category}) {
    const [modalPostShow, setModalPostShow] = useState(false)
    const date = category.createdAt.toDate().toDateString()

    return(
        <AsideMain>
            <AsideTitle>
                <h2>About the community</h2>
            </AsideTitle>
            <AsideContent>
                <h5>We welcome you to {category.title}</h5>
                <div><p>{category.countUsers}</p><p>Members</p></div>
                <hr/>
                <p><i className="fas fa-birthday-cake"></i> {date}</p>
                <Button onClick={() => {setModalPostShow(true)}}>Publish</Button>
                <hr/>
            </AsideContent>
            {modalPostShow && <ModalPost setModalPostShow={setModalPostShow} category={category}/>}
        </AsideMain>
    )
}

