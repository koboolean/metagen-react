import ScrollMain from "../comp/ScrollMain.tsx";
import Scroll from "../comp/Scroll.tsx";
import ScrollSub from "../comp/ScrollSub.tsx";
import Motion from "../comp/Motion.tsx";
import Title from "../comp/Title.tsx";

export default function ProjectSetting() {
    const child = [
        { to: "manage", title: "프로젝트 관리" },
        { to: "register", title: "프로젝트 등록" },
        { to: "manager", title: "관리자 위임" },
        { to: "member", title: "멤버 관리" },
    ];

    return (
        <ScrollMain>
            <Scroll child={child} />

            <ScrollSub>
                {/* 프로젝트 관리 */}
                <Motion id="manage">
                    <Title title="프로젝트 관리" />
                    <div className="text-gray-700 space-y-6 text-base leading-relaxed">

                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/project/project_manage.png" alt="프로젝트 관리 화면 예시" className="w-full object-cover" />
                        </div>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>상단 <strong>[프로젝트 선택]</strong> 드롭다운에서 특정 프로젝트를 선택해 관리할 수 있습니다.</li>
                            <li>해당 기능은 <strong>프로젝트 관리자</strong> 권한이 있는 계정만 접근 가능합니다.</li>
                            <li><strong>[삭제]</strong> 버튼을 통해 프로젝트를 제거할 수 있습니다.</li>
                            <li className="text-red-600 font-medium">
                                단, <u>프로젝트가 비활성화 상태일 경우 삭제할 수 없습니다.</u><br/>
                                삭제를 원할 경우 먼저 <strong>프로젝트를 활성화</strong>한 뒤 다시 시도해 주세요.
                            </li>
                        </ul>
                    </div>
                </Motion>

                {/* 프로젝트 등록 */}
                <Motion id="register">
                    <Title title="프로젝트 등록" />
                    <div className="text-gray-700 space-y-6 text-base leading-relaxed">

                        <p>
                            MetaGen에서는 <strong>관리자 계정</strong>을 통해 프로젝트 등록, 삭제, 설정 변경이 가능합니다.
                        </p>

                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/project/project_register.png" alt="프로젝트 등록 팝업 예시" className="w-full object-cover" />
                        </div>

                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>프로젝트 명</strong>을 입력하고 아래 3가지 항목을 설정합니다.</li>
                            <li><strong>활성화 여부</strong>: 체크 해제 시 해당 프로젝트는 접근이 불가능해집니다.</li>
                            <li>
                                <strong>사용자 자동 승인 여부</strong>:
                                <ul className="list-disc pl-6">
                                    <li>체크 시, 회원가입 후 프로젝트 접근이 자동 승인됩니다.</li>
                                    <li>체크 해제 시, 관리자가 [승인], [승인취소] 버튼을 통해 직접 승인 여부를 설정해야 합니다.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>데이터 사전 약어 사용 여부</strong>:
                                <ul className="list-disc pl-6">
                                    <li>체크 시, 용어에 등록된 약어 기반으로 메소드/함수가 생성됩니다.</li>
                                    <li>선택하지 않을 경우 용어 그대로 생성됩니다.</li>
                                    <li>단, 특정 용어에 수동으로 약어가 설정된 경우 이 설정과 관계없이 약어가 적용됩니다.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </Motion>

                {/* 프로젝트 관리자 위임 */}
                <Motion id="manager">
                    <Title title="관리자 위임" />
                    <div className="text-gray-700 space-y-6 text-base leading-relaxed">

                        <p>
                            등록된 프로젝트는 언제든지 <strong>다른 사용자에게 관리자 권한을 위임</strong>할 수 있습니다.
                        </p>

                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/project/project_modify.png" alt="프로젝트 수정 팝업 예시" className="w-full object-cover" />
                        </div>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>기본적으로 프로젝트 생성자는 <code>admin</code> 계정입니다.</li>
                            <li>이후 관리자 항목을 변경함으로써 다른 사용자에게 위임이 가능합니다.</li>
                            <li>매니저도 다른 사용자에게 관리자 권한을 넘길 수 있어 유연한 권한 위임이 가능합니다.</li>
                        </ul>
                    </div>
                </Motion>

                {/* 프로젝트 멤버 관리 */}
                <Motion id="member">
                    <Title title="멤버 관리" />
                    <div className="text-gray-700 space-y-6 text-base leading-relaxed">

                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/project/project_member_add.png" alt="프로젝트 멤버 추가 팝업" className="w-full object-cover" />
                        </div>

                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>[추가]</strong> 버튼을 클릭하면, 현재 프로젝트에 포함되지 않은 사용자 계정이 표시됩니다.</li>
                            <li>선택 후 <strong>[저장]</strong>을 누르면 해당 사용자가 프로젝트 멤버로 등록됩니다.</li>
                            <li>기존 멤버는 체크박스로 선택 후 <strong>[삭제]</strong> 버튼을 클릭하여 일괄 삭제할 수 있습니다.</li>
                            <li>삭제 시 해당 사용자는 해당 프로젝트에 더 이상 접근할 수 없습니다.</li>
                        </ul>
                    </div>
                </Motion>

            </ScrollSub>
        </ScrollMain>
    );
}
