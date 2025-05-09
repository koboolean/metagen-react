import Title from "../comp/Title.tsx";
import Motion from "../comp/Motion.tsx";
import MainPage from "../comp/MainPage.tsx";

export default function ProjectSetting() {

    return <Motion id={"project"}>
        <MainPage>
            <Title title={"프로젝트 관리"}/>

        </MainPage>
    </Motion>
}
