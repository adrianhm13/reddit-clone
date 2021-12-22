import { SectionMain, SectionVotes, Votes, SectionPost, PostCreation } from "./Section.style";

export default function Section() {
    return (
        <SectionMain>
            <SectionVotes>
                <Votes><p>Up</p><p>Down</p></Votes>
            </SectionVotes>
            <SectionPost>
                <PostCreation>
                    <img src ="https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png" alt="test"></img>
                    <h6>r/Example</h6>
                    <p>Published by lalala</p>
                    <p>9 hours ago</p>
                </PostCreation>
            </SectionPost>
        </SectionMain>
    )
}
