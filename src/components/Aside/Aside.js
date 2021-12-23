import { AsideContent, AsideMain, AsideTitle } from "./Aside.style";

export function AsideHome() {
    return (
        <AsideMain></AsideMain>
    )
}

export function AsideCategory({category}) {
    const date = category.createdAt.toDate().toDateString()
    console.log(date)
    return(
        <AsideMain>
            <AsideTitle>
                <h2>About the community</h2>
            </AsideTitle>
            <AsideContent>
                <h5>We welcome you to {category.title}</h5>
                <hr/>
                <p>Created: {date} by: {category.createdBy.username}</p>
            </AsideContent>
        </AsideMain>
    )
}

