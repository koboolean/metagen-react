import Title from "../comp/Title.tsx";
import Motion from "../comp/Motion.tsx";
import MainPage from "../comp/MainPage.tsx";

export default function ProdSetting() {

    return <Motion id={"prod"}>
        <MainPage>
            <Title title={"운영 관리"}/>

        </MainPage>
    </Motion>
}
