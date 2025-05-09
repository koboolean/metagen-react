import ScrollMain from "../comp/ScrollMain.tsx";
import Scroll from "../comp/Scroll.tsx";
import ScrollSub from "../comp/ScrollSub.tsx";
import Motion from "../comp/Motion.tsx";
import Title from "../comp/Title.tsx";

export default function ServerSetting() {

    const child = [
        {
            to : "window",
            title : "Window"
        },
        {
            to : "mac",
            title : "Mac"
        },
        {
            to : "linux",
            title : "Linux"
        }
    ]

    return (
        <ScrollMain>
            <Scroll child={child}/>

            <ScrollSub>
                <Motion id={"window"}>
                    <Title title={"서비스 시작하기"}/>
                    <h2 className="text-2xl font-semibold mb-4">Window</h2>

                    <div className="mb-8">
                        <p>TEST</p>
                    </div>
                </Motion>

                <Motion id={"mac"}>
                    <h2 className="text-2xl font-semibold mb-4">Mac</h2>

                    <div className="mb-8">
                        <p>TEST</p>
                    </div>
                </Motion>

                <Motion id={"linux"}>
                    <h2 className="text-2xl font-semibold mb-4">Linux</h2>
                    <div className="mb-8">
                        <p>TEST</p>
                    </div>
                </Motion>

            </ScrollSub>
        </ScrollMain>
    );
}
