import Title from "../comp/Title.tsx";
import Motion from "../comp/Motion.tsx";
import MainPage from "../comp/MainPage.tsx";

export default function ServerSetting() {

    return <Motion id={"server"}>
        <MainPage>
            <Title title={"서비스 시작하기"}/>

        </MainPage>
    </Motion>
}
