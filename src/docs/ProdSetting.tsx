import ScrollMain from "../comp/ScrollMain.tsx";
import Scroll from "../comp/Scroll.tsx";
import ScrollSub from "../comp/ScrollSub.tsx";
import Motion from "../comp/Motion.tsx";
import Title from "../comp/Title.tsx";

export default function ProdSetting() {

    const child = [
        {
            to: "notice",
            title: "공지사항"
        },
        {
            to: "log",
            title: "시스템 로그"
        }
    ];

    return (
        <ScrollMain>
            <Scroll child={child} />

            <ScrollSub>

                <Motion id={"notice"}>
                    <Title title={"공지사항"} />

                    <div className="text-gray-700 space-y-8 text-base leading-relaxed">

                        <p>MetaGen에서는 프로젝트별 공지사항을 등록 및 조회할 수 있는 기능을 제공합니다.</p>

                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/prod/notice_list.png" alt="공지사항 목록 예시" className="w-full object-cover" />
                        </div>

                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>프로젝트 선택</strong>을 통해 특정 프로젝트의 공지사항을 필터링할 수 있습니다.</li>
                            <li><strong>추가</strong> 버튼을 클릭하면 선택된 프로젝트로 공지사항을 등록할 수 있습니다.</li>
                            <li>공지사항은 <strong>제목, 작성자, 작성일, 확인 여부</strong> 등의 정보를 포함합니다.</li>
                            <li>체크박스를 선택한 뒤 <strong>삭제</strong> 버튼으로 여러 개의 공지사항을 일괄 삭제할 수 있습니다.</li>
                            <li>
                                그리드의 행(Row)을 클릭하면,
                                <ul className="list-disc pl-6">
                                    <li><strong>관리자</strong>는 수정 가능한 공지사항 편집 페이지로 이동하고,</li>
                                    <li><strong>일반 사용자</strong>는 상세 조회 전용 페이지로 이동합니다.</li>
                                </ul>
                            </li>
                        </ul>

                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/prod/notice_edit.png" alt="공지사항 수정 예시" className="w-full object-cover" />
                        </div>

                        <p>
                            수정 페이지에서는 <strong>편집</strong> 버튼을 눌러 제목과 내용을 수정할 수 있으며,
                            이후 <strong>저장</strong> 버튼으로 서버에 변경사항이 반영됩니다.
                        </p>

                        {/* ✅ 추가 설명: 일반 사용자 조회 화면 */}
                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/prod/notice_detail.png" alt="공지사항 조회 예시" className="w-full object-cover" />
                        </div>

                        <p>
                            일반 사용자가 공지사항을 조회할 경우, 왼쪽 상단에 <strong>공지사항 제목</strong>이 출력되며,
                            그 아래에는 해당 공지사항을 조회한 <strong>사용자 목록</strong>이 함께 표시됩니다.
                        </p>

                        <p>
                            본문에는 공지사항의 <strong>내용이 출력</strong>되며, 해당 내용을 읽기 전용으로 확인할 수 있습니다.
                        </p>

                    </div>
                </Motion>

                <Motion id={"log"}>
                    <Title title={"시스템 로그"} />

                    <div className="text-gray-700 space-y-6 text-base leading-relaxed">

                        <p>운영 이력을 파악할 수 있는 시스템 로그는 <strong>관리자 권한</strong>이 있는 사용자만 접근할 수 있습니다.</p>

                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/prod/system_log.png" alt="시스템 로그 화면 예시" className="w-full object-cover" />
                        </div>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>REST 방식으로 호출된 모든 API 요청 기록을 추적할 수 있습니다.</li>
                            <li>로그 항목에는 <strong>요청 시간, 요청자, HTTP 메서드, URL, 응답 상태</strong> 등이 포함됩니다.</li>
                            <li>운영 중 발생한 모든 이벤트를 투명하게 기록하며, 이상 행위나 오류 분석에 유용하게 활용됩니다.</li>
                        </ul>

                    </div>
                </Motion>

            </ScrollSub>
        </ScrollMain>
    );
}
