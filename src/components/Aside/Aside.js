import { Button } from "../Button/Button";
import { AsideContent, AsideMain, AsideTitle } from "./Aside.style";
import { useState } from "react";
import ModalPost from '../Modals/ModalPost/ModalPost'


export function AsideCategory({category, user}) {
    const [modalPostShow, setModalPostShow] = useState(false)
    const date = category.createdAt.toDate().toDateString()

    const handleClick = () => {
        user ? setModalPostShow(true) : alert(`You've must be logged in`)
    }
    return(
        <AsideMain>
            <AsideTitle>
                <h2>About the community</h2>
            </AsideTitle>
            <AsideContent>
                <h5>We welcome you to {category.title}</h5>
                <div><p>{category.countUsers ? category.countUsers : 0}</p><p>Members</p></div>
                <hr/>
                <p><i className="fas fa-birthday-cake"></i> {date}</p>
                <Button onClick={() => {handleClick()}}>Publish</Button>
                <hr/>
            </AsideContent>
            {modalPostShow && <ModalPost setModalPostShow={setModalPostShow} category={category}/>}
        </AsideMain>
    )
}

