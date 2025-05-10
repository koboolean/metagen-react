import ScrollMain from "../comp/ScrollMain.tsx";
import Scroll from "../comp/Scroll.tsx";
import ScrollSub from "../comp/ScrollSub.tsx";
import Motion from "../comp/Motion.tsx";
import Title from "../comp/Title.tsx";

export default function ServerSetting() {

    const child = [
        {
            to: "user",
            title: "사용자관리"
        },
        {
            to: "signup",
            title: "회원가입"
        },
        {
            to: "signin",
            title: "로그인"
        }
    ]

    return (
        <ScrollMain>
            <Scroll child={child}/>

            <ScrollSub>
                <Motion id={"user"}>
                    <Title title={"사용자관리"}/>
                    <div className="text-gray-700 space-y-6">
                        <h3 className="text-xl font-semibold">권한 목록</h3>

                        <div className="border border-gray-300 rounded-md p-4 text-sm text-gray-700">
                            💡 MetaGen 시스템에서는 다음과 같은 사용자 권한을 제공합니다.
                            <br /><br />
                            <pre className="bg-gray-100 rounded-md p-4 font-mono text-sm leading-relaxed overflow-x-auto">
<code>{`ROLE_ADMIN         > 관리자
ROLE_MANAGER       > 매니저
ROLE_DBA           > DBA
ROLE_USER          > 일반 사용자
ROLE_VIEWER        > 조회 전용 사용자
ROLE_NOT_APPROVE   > 권한 미승인 사용자`}</code>
    </pre>
                        </div>

                        <h3 className="text-xl font-semibold mt-8">사용자 관리 접근 권한</h3>
                        <p>
                            <b>ROLE_ADMIN</b> 권한을 가진 계정만 사용자 관리 화면에 접근할 수 있습니다.
                            <br />
                            권한 관리 외에도 <b>인가 관리</b> 화면을 통해 사용자별 세부 권한을 설정할 수 있습니다.
                        </p>

                        <h3 className="text-xl font-semibold">권한 변경 방법</h3>
                        <p>그리드에서 권한을 선택하고 아래 절차를 따라 수정할 수 있습니다:</p>
                        <ol className="list-decimal list-inside space-y-1 pl-4">
                            <li>변경할 사용자의 권한 셀을 클릭합니다.</li>
                            <li>목록에서 새로운 권한을 선택합니다.</li>
                            <li><b>저장</b> 버튼을 눌러 변경을 완료합니다.</li>
                        </ol>

                        <h3 className="text-xl font-semibold">비밀번호 초기화</h3>
                        <p>
                            초기화할 사용자를 선택한 뒤 <b>비밀번호 초기화</b> 버튼을 클릭하면, 해당 사용자의 비밀번호가
                            아이디와 동일한 값으로 초기화됩니다.
                        </p>
                        <p className="text-sm text-gray-500">
                            ※ 초기화된 사용자는 로그인 시 비밀번호 변경이 요구됩니다.
                        </p>
                    </div>
                </Motion>

                <Motion id={"signup"}>
                    <Title title={"회원가입"} />

                    <div className="text-gray-700 space-y-8">

                        {/* 조건 안내 */}
                        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold mb-2 text-blue-800">회원가입 조건</h3>
                            <ul className="list-disc list-inside space-y-1 text-sm text-blue-900">
                                <li><span className="font-medium">아이디</span>는 최소 <span className="font-bold">6자 이상</span>이어야 합니다.</li>
                                <li>
                                    <span className="font-medium">비밀번호</span>는 최소 <span className="font-bold">8자 이상</span>이며,
                                    <span className="text-blue-700 font-bold"> 대문자</span> 및
                                    <span className="text-blue-700 font-bold"> 특수문자</span>를 포함해야 합니다.
                                </li>
                            </ul>
                        </div>

                        {/* 이미지 1 */}
                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/account/account_setting_1.png" alt="회원가입 첫 단계 예시" className="w-full object-cover" />
                        </div>

                        {/* 절차 안내 */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">회원가입 절차</h3>
                            <p>
                                프로젝트를 선택한 후 <span className="font-semibold">[회원가입]</span> 버튼을 클릭하여 가입을 진행합니다.
                            </p>
                            <p>
                                가입 후, <strong>프로젝트 관리자</strong>가 해당 사용자를 프로젝트 멤버로 추가할 수 있습니다.
                                한 명의 사용자는 <span className="font-medium">여러 프로젝트에 참여</span>할 수 있습니다.
                            </p>
                        </div>

                        {/* 이미지 2 */}
                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/account/account_setting_2.png" alt="프로젝트에 사용자 추가 예시" className="w-full object-cover" />
                        </div>

                        {/* 권한 안내 */}
                        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold mb-2 text-yellow-800">초기 권한 안내</h3>
                            <p className="text-sm text-yellow-900">
                                회원가입 직후에는 기본적으로
                                <code className="bg-white border border-gray-300 rounded px-2 py-0.5 ml-1 text-xs text-gray-800">ROLE_NOT_APPROVE</code>
                                권한으로 로그인됩니다.
                            </p>
                            <p className="text-sm text-yellow-900 mt-2">
                                이후 <span className="font-semibold">프로젝트 관리자</span>가
                                사용자 관리 화면을 통해 권한을
                                <code className="bg-white border border-gray-300 rounded px-2 py-0.5 mx-1 text-xs text-gray-800">ROLE_VIEWER</code> 또는
                                <code className="bg-white border border-gray-300 rounded px-2 py-0.5 text-xs text-gray-800">ROLE_USER</code>로 변경해 작업 권한을 부여할 수 있습니다.
                            </p>
                        </div>

                    </div>
                </Motion>

                <Motion id={"signin"}>
                    <Title title={"로그인"} />

                    <div className="text-gray-700 space-y-10">

                        {/* 단일 프로젝트 로그인 */}
                        <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-6 space-y-4">
                            <h3 className="text-lg font-semibold text-indigo-700">단일 프로젝트 로그인</h3>

                            <p className="text-sm">
                                사용자가 <span className="font-medium text-gray-800">하나의 프로젝트</span>에만 소속된 경우,
                                로그인 시 <span className="text-indigo-600 font-semibold">확인(Confirm) 팝업</span>이 표시됩니다.
                                <br />
                                <span className="font-medium text-gray-800">[확인]</span> 버튼을 선택하면 해당 프로젝트로 자동 로그인됩니다.
                            </p>

                            <div className="rounded-md overflow-hidden shadow border border-gray-200">
                                <img src="/images/account/account_setting_3.png" alt="단일 프로젝트 로그인 예시" className="w-full object-cover" />
                            </div>
                        </div>

                        {/* 다중 프로젝트 선택 */}
                        <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-6 space-y-4">
                            <h3 className="text-lg font-semibold text-indigo-700">다중 프로젝트 선택</h3>

                            <p className="text-sm">
                                <span className="font-medium text-gray-800">두 개 이상의 프로젝트</span>에 소속된 사용자의 경우,
                                로그인 시 <span className="text-indigo-600 font-semibold">프로젝트 선택 팝업</span>이 나타납니다.
                            </p>

                            <p className="text-sm">
                                목록에서 원하는 프로젝트를 선택하면 해당 프로젝트로 로그인됩니다.
                            </p>

                            <div className="rounded-md overflow-hidden shadow border border-gray-200">
                                <img src="/images/account/account_setting_4.png" alt="다중 프로젝트 선택 팝업 예시" className="w-full object-cover" />
                            </div>
                        </div>

                        {/* 로그인 후 세션 및 접근 제한 */}
                        <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-6 space-y-4">
                            <h3 className="text-lg font-semibold text-indigo-700">로그인 이후 동작</h3>

                            <p className="text-sm">
                                로그인 이후, <span className="font-medium text-gray-800">오른쪽 상단</span>에 현재 선택된 프로젝트명이 표시되며,
                                <span className="font-medium">세션 정보</span>에도 해당 프로젝트가 반영됩니다.
                            </p>

                            <p className="text-sm">
                                <span className="text-red-600 font-semibold">※ 공지사항을 제외한</span> 모든 기능은
                                선택한 프로젝트 범위 내에서만 접근할 수 있으며, 다른 프로젝트에는 접근이 제한됩니다.
                            </p>

                            <div className="rounded-md overflow-hidden shadow border border-gray-200">
                                <img src="/images/account/account_setting_5.png" alt="로그인 이후 프로젝트 표시 예시" className="w-full object-cover" />
                            </div>
                        </div>
                    </div>
                </Motion>


            </ScrollSub>
        </ScrollMain>
    )
        ;
}
