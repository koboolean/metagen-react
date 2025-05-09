import Title from "../comp/Title.tsx";
import Motion from "../comp/Motion.tsx";
import MainPage from "../comp/MainPage.tsx";

export default function DataSetting() {

    return <Motion id={"data"}>
        <MainPage>
            <Title title={"데이터 관리"}/>


        </MainPage>
    </Motion>
}
