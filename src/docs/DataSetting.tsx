import ScrollMain from "../comp/ScrollMain.tsx";
import Scroll from "../comp/Scroll.tsx";
import ScrollSub from "../comp/ScrollSub.tsx";
import Motion from "../comp/Motion.tsx";
import Title from "../comp/Title.tsx";

export default function DataSetting() {
    const child = [
        { to: "overview", title: "개요" },
        { to: "domain", title: "도메인 관리" },
        { to: "word", title: "표준 단어 관리" },
        { to: "term", title: "표준 용어 관리" }
    ];

    return (
        <ScrollMain>
            <Scroll child={child} />

            <ScrollSub>

                {/* ✅ 데이터 사전 개요 Motion */}
                <Motion id="overview">
                    <Title title="데이터 사전 개요" />

                    <div className="text-gray-700 space-y-6 text-base leading-relaxed">
                        <p>
                            <strong>데이터 사전</strong>은 시스템 내 모든 데이터의 명명, 유형, 형식, 의미를 표준화하고 통제하기 위한 관리 도구입니다.
                            <br />
                            표준화된 도메인, 단어, 용어는 개발자 간 협업을 돕고 시스템 품질을 향상시키며, 향후 설계 자동화의 기초가 됩니다.
                        </p>

                        <div className="bg-blue-50 border border-blue-200 rounded-md p-4 text-sm text-blue-800">
                            📘 데이터 사전은 표준 정보 정의와 함께 테이블 설계의 기반으로 활용됩니다.
                        </div>

                        <ul className="list-disc pl-6 space-y-1">
                            <li>좌측 탭을 통해 <strong>표준 도메인</strong>, <strong>표준 단어</strong>, <strong>표준 용어</strong>를 각각 관리할 수 있습니다.</li>
                            <li>각 항목은 <strong>[추가], [승인], [승인취소], [삭제]</strong> 버튼으로 관리됩니다.</li>
                            <li>등록된 항목은 기본적으로 <strong>미승인 상태</strong>로 생성되며, 관리자 승인 후 실제 시스템 설계에 반영됩니다.</li>
                            <li>상단에는 템플릿 다운로드 / 등록 항목 다운로드 / 데이터사전 업로드 기능이 제공되어 <strong>일괄 관리</strong>도 지원합니다.</li>
                        </ul>

                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/data/dictionary_main.png" alt="데이터 사전 메인 화면" className="w-full object-cover" />
                        </div>

                        <p className="text-sm text-gray-600">
                            MetaGen의 데이터 사전은 단순 문서형이 아닌, 실제 테이블 설계 및 코드 생성과 연계되는 구조로 운영됩니다.
                        </p>
                    </div>
                </Motion>

                {/* ✅ 도메인 관리 Motion */}
                <Motion id="domain">
                    <Title title="데이터 사전 - 도메인 관리" />

                    <div className="text-gray-700 space-y-6 text-base leading-relaxed">
                        <p>
                            <strong>도메인</strong>은 데이터의 형식적 속성(VARCHAR, NUMBER 등)을 정의하고 재사용 가능한 단위로 설계됩니다.
                        </p>

                        <div className="bg-blue-50 border border-blue-200 rounded-md p-4 text-sm text-blue-800">
                            📘 도메인은 데이터의 타입, 길이, 단위, 형식 등의 정보를 표준화하여 여러 용어와 단어에 재사용할 수 있게 합니다.
                        </div>

                        <ul className="list-disc pl-6 space-y-1">
                            <li>오른쪽 상단의 <strong>[추가]</strong> 버튼을 클릭하여 도메인, 단어, 용어를 등록할 수 있습니다.</li>
                            <li>등록된 항목은 기본적으로 <strong>미승인 상태</strong>이며, 관리자가 선택 후 <strong>[승인]</strong> 또는 <strong>[승인취소]</strong> 처리를 할 수 있습니다.</li>
                        </ul>

                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/data/domain_main.png" alt="표준 도메인 목록 화면" className="w-full max-h-[600px] object-contain mx-auto" />
                        </div>

                        <h3 className="text-lg font-semibold text-indigo-700 mt-6">📘 도메인 등록</h3>
                        <p>도메인은 아래 입력 항목을 기준으로 등록됩니다.</p>

                        <div className="rounded-lg overflow-hidden">
                            <img src="/images/data/domain_register.png" alt="표준 도메인 등록 팝업 예시" className="w-full max-h-[700px] object-contain mx-auto" />
                        </div>

                        <ul className="list-disc pl-6 space-y-1 mt-4">
                            <li><strong>제정차수</strong>, <strong>데이터 길이</strong>, <strong>소수점 길이</strong> 등의 수치 정보를 입력합니다.</li>
                            <li><strong>표준도메인명</strong>, <strong>설명</strong>, <strong>그룹명</strong>, <strong>분류명</strong> 등 도메인의 논리적 속성을 정의합니다.</li>
                            <li><strong>데이터 타입</strong>은 VARCHAR, NUMBER 등으로 선택하며, 저장 형식/표현 형식/단위 등도 함께 설정합니다.</li>
                            <li><strong>허용값</strong>을 지정하면, 해당 도메인이 가지는 값의 유효성 제약을 설정할 수 있습니다.</li>
                        </ul>

                        <div className="bg-yellow-50 border border-yellow-300 rounded-md p-4 text-sm text-yellow-800">
                            ⚠️ 도메인 정보는 용어, 단어와 연결되어 있으므로 등록 후 신중한 검토가 필요합니다.
                        </div>
                    </div>
                </Motion>

                {/* ✅ 단어 관리 Motion */}
                <Motion id="word">
                    <Title title="데이터 사전 - 표준 단어 관리" />

                    <div className="text-gray-700 space-y-6 text-base leading-relaxed">
                        <div className="bg-blue-50 border border-blue-200 rounded-md p-4 text-sm text-blue-800">
                            ✅ 표준 단어는 데이터 구성의 <strong>기초 단위</strong>로, 용어 및 도메인 구조를 이루는 핵심 요소입니다.
                        </div>

                        <p>
                            표준 단어는 데이터 구성의 최소 단위로, 표준 용어와 도메인을 구성하기 위한 핵심 요소입니다.
                            <br />
                            등록된 표준 단어는 <strong>중복된 이름 없이 관리</strong>되며, 도메인과의 연결성을 기반으로 활용됩니다.
                        </p>

                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/data/word_main.png" alt="표준 단어 목록 화면" className="w-full max-h-[600px] object-contain mx-auto" />
                        </div>

                        <h3 className="text-lg font-semibold text-indigo-700">📝 단어 등록</h3>
                        <p>표준 단어 등록 시 아래 항목을 입력합니다.</p>

                        <div className="rounded-lg overflow-hidden">
                            <img src="/images/data/word_register.png" alt="표준 단어 등록 팝업 예시" className="w-full max-h-[700px] object-contain mx-auto" />
                        </div>

                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li><strong>표준단어명</strong>은 <span className="text-red-600 font-semibold">중복 불가</span>하며 고유해야 합니다.</li>
                            <li><strong>표준도메인분류명</strong>을 입력하면 해당 단어는 특정 도메인과 연결됩니다.</li>
                            <li>이 설정은 이후 표준 용어 생성 시, 도메인을 자동 연결하는 기준이 됩니다.</li>
                            <li><strong>약어 사용 여부</strong>를 통해 단어 대신 약어 형태로 출력되도록 지정할 수 있습니다.</li>
                            <li>
                                예를 들어 <strong>Internet Protocol</strong>이라는 단어가 있을 경우,
                                약어 사용 여부를 <code>TRUE</code>로 설정하면 표준 용어에서는 <code>IP</code>처럼 <strong>약어 형식</strong>으로 출력됩니다.
                            </li>
                            <li><strong>형식단어 여부</strong>는 해당 단어가 접두사/접미사로 사용될 수 있는지를 나타냅니다.</li>
                            <li>이름 동의어 및 금칙어 목록을 설정하면, 동일 개념의 유사어 관리 및 부적절한 용어 방지를 위한 기준으로 활용됩니다.</li>
                        </ul>

                        <div className="bg-yellow-50 border border-yellow-300 rounded-md p-4 text-sm text-yellow-800">
                            ⚠️ 표준 단어 등록 시, <strong>미승인 상태</strong>로 생성되며 용어와 연결된 일부 항목은 수정이 제한됩니다.
                        </div>

                        <h3 className="text-lg font-semibold text-indigo-700">✏️ 단어 수정</h3>
                        <p>표준 단어는 <strong>미승인 상태</strong>일 경우 일부 항목에 대해 수정이 가능합니다.</p>

                        <ul className="list-disc pl-6 space-y-1">
                            <li>수정 가능한 항목: <strong>설명</strong>, <strong>약어 사용 여부</strong>, <strong>형식단어 여부</strong>, <strong>금칙어 목록</strong></li>
                            <li>그 외 <strong>표준단어명, 도메인분류명, 영문명</strong> 등은 용어 및 도메인과 직접 연결되어 있으므로 <span className="text-red-600 font-semibold">수정이 제한</span>됩니다.</li>
                            <li>이러한 제한은 표준 용어 구조의 <strong>무결성 유지를 위한 설계</strong>입니다.</li>
                        </ul>

                        <p className="text-sm text-gray-600">
                            표준 단어는 승인 후 시스템 내 표준 용어 생성에 활용되며, 일괄 업로드 및 템플릿 다운로드 기능을 통해 효율적으로 관리할 수 있습니다.
                        </p>
                    </div>
                </Motion>

                {/* ✅ 표준 용어 관리 Motion */}
                <Motion id="term">
                    <Title title="데이터 사전 - 표준 용어 관리" />

                    <div className="text-gray-700 space-y-6 text-base leading-relaxed">
                        <div className="bg-blue-50 border border-blue-200 rounded-md p-4 text-sm text-blue-800">
                            ✅ 표준 용어는 <strong>도메인과 단어를 조합</strong>하여 최종 테이블 설계에 반영되는 <strong>핵심 단위</strong>입니다.
                        </div>

                        <p>
                            표준 용어는 도메인과 단어를 조합하여 실제 설계 요소로 활용되는 최종 단위입니다.
                        </p>

                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/data/dictionary_main.png" alt="표준 용어 목록 화면" className="w-full max-h-[600px] object-contain mx-auto" />
                        </div>

                        <h3 className="text-lg font-semibold text-indigo-700">🧩 표준 용어 등록 방식</h3>

                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/data/term_register.png" alt="표준 용어 등록 팝업 예시" className="w-full max-h-[700px] object-contain mx-auto" />
                        </div>

                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>추가 버튼 클릭 시 표준 용어 등록 창이 활성화됩니다.</li>
                            <li>직접 입력은 불가능하며, <strong>표준 용어명 오른쪽의 돋보기 버튼</strong>을 클릭해야 합니다.</li>
                            <li>입력창에서 띄어쓰기를 기준으로 용어를 분해하고, 등록된 표준 단어들을 자동 매칭합니다.</li>
                            <li>마지막 단어에는 <strong>등록된 도메인</strong>이 연결되어야만 표준 용어 등록이 가능합니다.</li>
                        </ul>

                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/data/term_popup.png" alt="표준 용어 상세 연결 팝업 예시" className="w-full max-h-[700px] object-contain mx-auto" />
                        </div>

                        <h3 className="text-lg font-semibold text-indigo-700">📎 표준 용어 등록 규칙</h3>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                하나의 <strong>표준 용어명</strong>은 동일한 <strong>데이터 타입 및 도메인</strong> 조합으로만 1건 등록이 가능합니다.
                            </li>
                            <li>
                                예를 들어 <code>사용_여부</code>라는 용어가 있을 때, <strong>char(1)</strong> 타입으로 구성된 도메인과 연결된 용어는 <strong>1개만</strong> 생성 가능합니다.
                            </li>
                            <li>
                                다만, <code>사용_여부</code>라는 이름을 가진 표준 용어라도 <strong>도메인 타입이 다르면</strong> (예: boolean) 별도로 등록 가능합니다.
                            </li>
                            <li>
                                이는 하나의 용어명이라도 <strong>실제 사용하는 데이터 구조가 다를 수 있음</strong>을 반영한 구조이며, 등록 시 자동으로 중복 여부를 검증합니다.
                            </li>
                        </ul>

                        <div className="bg-yellow-50 border border-yellow-300 rounded-md p-4 text-sm text-yellow-800">
                            ⚠️ 동일한 용어명이라도 <strong>같은 도메인 기준에서는 중복 생성이 불가능</strong>합니다. 용어-도메인 조합의 고유성을 유지하세요.
                        </div>

                        <p className="text-sm text-gray-600">
                            표준 용어는 도메인-단어 구조의 기반 위에 생성되며, 이후 실제 테이블 컬럼 정의와 연계되어 데이터 설계에 활용됩니다.
                        </p>
                    </div>
                </Motion>

                {/* ✅ 템플릿 및 업로드 Motion */}
                <Motion id="upload">
                    <Title title="데이터 사전 - 일괄 업로드 및 템플릿" />

                    <div className="text-gray-700 space-y-6 text-base leading-relaxed">
                        <p>
                            데이터 사전은 엑셀 기반으로 등록 항목을 <strong>일괄 업로드</strong>할 수 있도록 지원합니다.
                        </p>

                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/data/template_download.png" alt="템플릿 다운로드 팝업 예시" className="w-full max-h-[400px] object-contain mx-auto" />
                        </div>

                        <ul className="list-disc pl-6 space-y-1 mt-2">
                            <li><strong>공통표준용어 다운로드</strong>: 표준화된 용어 집합을 참고용으로 내려받습니다.</li>
                            <li><strong>템플릿 다운로드</strong>: 실제 등록에 사용할 수 있는 양식 파일을 내려받습니다.</li>
                        </ul>

                        <div className="bg-blue-50 border border-blue-200 rounded-md p-4 text-sm text-blue-800">
                            📎 다운로드한 템플릿 파일에 데이터를 입력한 후, <strong>데이터사전 업로드</strong> 버튼을 통해 일괄 업로드할 수 있습니다.
                        </div>

                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/data/upload_warning.png" alt="업로드 시 약어 알림 예시" className="w-full max-h-[300px] object-contain mx-auto" />
                        </div>

                        <div className="bg-yellow-50 border border-yellow-300 rounded-md p-4 text-sm text-yellow-800">
                            ⚠️ 업로드 시 <strong>표준단어 영문명에 띄어쓰기가 존재</strong>할 경우,
                            <span className="font-mono">약어 사용 여부</span>는 자동으로 <span className="font-mono">Y</span>로 처리됩니다.
                        </div>

                        <div className="bg-gray-100 border border-gray-300 rounded-md p-4 text-sm text-gray-700">
                            💡 프로젝트 설정에서 약어 사용 여부가 '사용 안함'으로 되어 있어도,
                            등록된 표준단어의 영문명이 여러 단어로 구성되어 있다면 약어가 자동 적용됩니다.
                        </div>
                    </div>
                </Motion>

                {/* ✅ 등록항목 다운로드 Motion */}
                <Motion id="download">
                    <Title title="데이터 사전 - 등록항목 다운로드" />

                    <div className="text-gray-700 space-y-6 text-base leading-relaxed">
                        <p>
                            데이터 사전에서 관리 중인 <strong>표준 도메인</strong>, <strong>표준 단어</strong>, <strong>표준 용어</strong>는
                            <strong>엑셀 파일로 다운로드</strong>할 수 있습니다.
                        </p>

                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/data/export_button.png" alt="등록항목 다운로드 버튼 예시" className="w-full max-h-[400px] object-contain mx-auto" />
                        </div>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>해당 기능은 <strong>현재 프로젝트</strong>에서 작업 중인 데이터 사전 항목을 내려받는 데 사용됩니다.</li>
                            <li>다른 프로젝트에 동일한 항목을 재사용하고 싶다면, <strong>다운로드 후 해당 프로젝트에서 업로드</strong>하면 됩니다.</li>
                            <li>템플릿 업로드와 동일한 형식이기 때문에, 불러온 후 바로 등록 가능하도록 구성되어 있습니다.</li>
                        </ul>

                        <p className="text-sm text-gray-600">
                            동일 조직 내 여러 프로젝트 간 <strong>표준 정보 공유</strong> 및 <strong>재사용성 확보</strong>를 위한 기능입니다.
                        </p>
                    </div>
                </Motion>

                {/* ✅ 테이블 관리 Motion */}
                <Motion id="table">
                    <Title title="테이블 관리" />

                    <div className="text-gray-700 space-y-6 text-base leading-relaxed">
                        <p>
                            테이블 관리 페이지는 <strong>컬럼 관리를 위한 기준 테이블</strong>을 등록하고 관리하는 공간입니다.
                        </p>

                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/data/table_main.png" alt="테이블 목록 화면 예시" className="w-full max-h-[500px] object-contain mx-auto" />
                        </div>

                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li><strong>테이블명, 설명, 마스터 여부, 정렬 순서</strong> 등을 입력하여 테이블을 등록할 수 있습니다.</li>
                            <li>등록 후에는 <strong>승인 프로세스</strong>를 통해 관리자가 승인해야 컬럼 등록이 가능합니다.</li>
                            <li>우측 상단의 <strong>템플릿 다운로드</strong> 및 <strong>테이블 업로드</strong> 기능을 통해 일괄 등록도 가능합니다.</li>
                            <li><strong>승인 취소</strong> 버튼을 통해 테이블을 미승인 상태로 되돌릴 수 있으며, 이후 <strong>선택한 행에 대해 수정</strong>이 가능합니다.</li>
                        </ul>

                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/data/table_register.png" alt="테이블 등록 팝업 예시" className="w-full max-h-[400px] object-contain mx-auto" />
                        </div>

                        <p className="text-sm text-gray-600">
                            테이블은 컬럼 설계의 기준 단위로 사용되며, <strong>컬럼 관리 메뉴</strong>를 통해 상세 구조를 정의할 수 있습니다.
                        </p>
                    </div>
                </Motion>

                {/* ✅ 컬럼 관리 Motion */}
                <Motion id="column">
                    <Title title="컬럼 관리" />

                    <div className="text-gray-700 space-y-6 text-base leading-relaxed">
                        <p>
                            컬럼 관리 기능은 <strong>승인된 테이블</strong>을 기준으로, 해당 테이블에 필요한 컬럼을 등록하는 절차입니다.
                        </p>

                        {/* 📷 컬럼 목록 메인 이미지 */}
                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/data/column_main.png" alt="컬럼 목록 화면 예시" className="w-full max-h-[500px] object-contain mx-auto" />
                        </div>

                        <h3 className="text-lg font-semibold text-indigo-700">🧱 컬럼 등록 절차</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>우측 상단 <strong>[추가]</strong> 버튼을 클릭하여 컬럼 등록 창을 활성화합니다.</li>
                            <li><strong>테이블명 오른쪽 돋보기 버튼</strong> 클릭 시, <span className="text-blue-600 font-medium">승인된 테이블만 조회</span>됩니다.</li>
                            <li>테이블을 선택하면, 다음 팝업에서 <strong>표준 용어명 또는 영문 약어명</strong>으로 용어 검색이 가능합니다.</li>
                            <li>선택한 표준 용어의 정보가 <strong>컬럼명 / 데이터 타입 / 설명</strong> 등에 자동으로 매핑됩니다.</li>
                            <li>컬럼 등록 팝업에서 저장을 완료하면, 해당 컬럼이 시스템에 반영됩니다.</li>
                            <li className="text-blue-700">
                                테이블 조회 시 하단에 이전에 등록된 테이블 내 <strong>컬럼의 정보들이 나타나게 되며</strong> 이를 참고하여 컬럼을 추가할 수 있습니다.
                            </li>
                        </ul>

                        {/* 📷 테이블-용어 연결 팝업 이미지 */}
                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/data/table_term_search.png" alt="테이블 및 표준용어 검색 팝업" className="w-full object-contain mx-auto" />
                        </div>

                        <h3 className="text-lg font-semibold text-indigo-700">📋 컬럼 속성 설정</h3>
                        <p>
                            기본 정보 외에도, 추가적인 컬럼 속성은 <strong>[부가 정보 보기]</strong> 버튼을 클릭하면 상세 옵션이 확장됩니다.
                        </p>

                        {/* 📷 기본 컬럼 등록 화면 */}
                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/data/column_register_base.png" alt="컬럼 등록 기본 팝업" className="w-full max-h-[500px] object-contain mx-auto" />
                        </div>

                        {/* 📷 부가 정보 확장 화면 */}
                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/data/column_register_detail.png" alt="컬럼 등록 부가 정보" className="w-full max-h-[500px] object-contain mx-auto" />
                        </div>

                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>기본 설정: <strong>NULL 허용 여부, PK 여부, 최대 길이</strong> 등</li>
                            <li>부가 설정 항목:
                                <ul className="pl-4 list-disc">
                                    <li><strong>정밀도, 소수 자릿수</strong></li>
                                    <li><strong>기본값, 정렬 순서</strong></li>
                                    <li><strong>참조 테이블명, 데이터 예시</strong></li>
                                    <li><strong>마스터 여부, 필수 입력 여부</strong></li>
                                    <li><strong>민감정보 여부, 고유값 여부</strong></li>
                                    <li><strong>인덱스 생성 여부, 암호화 필요 여부</strong></li>
                                </ul>
                            </li>
                        </ul>

                        <div className="bg-blue-50 border border-blue-200 rounded-md p-4 text-sm text-blue-800">
                            ✅ 컬럼 등록은 <strong>표준 용어 기반</strong>으로만 가능하며, 시스템 일관성을 유지하기 위해 <strong>직접 입력은 제한</strong>됩니다.
                        </div>

                        <div className="bg-yellow-50 border border-yellow-300 rounded-md p-4 text-sm text-yellow-800">
                            ⚠️ 컬럼 등록은 반드시 <strong>승인된 테이블</strong>에 한해 가능하며, 컬럼이 미승인 상태일 경우에만 수정이 가능합니다.
                        </div>

                        <p className="text-sm text-gray-600">
                            표준 용어 → 컬럼 자동 변환을 통해 <strong>데이터 표준화와 설계 효율성</strong>을 함께 확보할 수 있습니다.
                        </p>
                    </div>
                </Motion>

            </ScrollSub>
        </ScrollMain>
    );
}
