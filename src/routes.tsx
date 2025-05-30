import {createBrowserRouter, Outlet} from 'react-router-dom';
import Header from "./layout/Header.tsx";
import Main from "./main/Main.tsx";
import UsedFeatures from "./about/UsedFeatures.tsx";

/*import Team from "./about/Team.tsx";
import View from "./about/View.tsx";*/

import SystemArchitecture from "./features/SystemArchitecture.tsx";
import Email from "./assets/Email.tsx";
import ServerSetting from "./docs/ServerSetting.tsx";
import AccountSetting from "./docs/AccountSetting.tsx";
import ProdSetting from "./docs/ProdSetting.tsx";
import ProjectSetting from "./docs/ProjectSetting.tsx";
import DataSetting from "./docs/DataSetting.tsx";
import DesignSetting from "./docs/DesignSetting.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Header />
                <div className={"pt-[64px]"}>
                    <Outlet />
                </div>
            </>
        ),
        children: [
            {
                index: true,
                element: <Main/>
            },
            {
                path: "about",
                children: [
                    /*{ path:"team", element: <Team/>},*/
                    { path:"used-features", element: <UsedFeatures/>},
                    { path:"system-architecture", element: <SystemArchitecture/>},
                    /*{ path:"view", element: <View/>},*/
                ]
            },
            {
                path: "docs",
                children: [
                    { path:"server-setting", element: <ServerSetting/>},
                    { path:"account-setting", element: <AccountSetting/>},
                    { path:"prod-setting", element: <ProdSetting/>},
                    { path:"project-setting", element: <ProjectSetting/>},
                    { path:"data-setting", element: <DataSetting/>},
                    { path:"design-setting", element: <DesignSetting/>},
                ]
            },
            {
                path: "contact",
                children: [
                    { path:"email", element: <Email/>}
                ]
            }
        ]
    },
]);
