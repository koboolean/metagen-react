import Motion from "../comp/Motion.tsx";
import MainPage from "../comp/MainPage.tsx";

export default function View() {

    return <Motion id={"view"}>
        <MainPage>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">기능 시연</h1>


        </MainPage>
    </Motion>
}
