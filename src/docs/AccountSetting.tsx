import Title from "../comp/Title.tsx";
import Motion from "../comp/Motion.tsx";
import MainPage from "../comp/MainPage.tsx";

export default function AccountSetting(){

    return <>
        <Motion id={"account"}>
            <MainPage>
                <Title title={"계정 관리"}/>

            </MainPage>
        </Motion>
    </>
}
