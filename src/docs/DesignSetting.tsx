import ScrollMain from "../comp/ScrollMain.tsx";
import Scroll from "../comp/Scroll.tsx";
import ScrollSub from "../comp/ScrollSub.tsx";
import Motion from "../comp/Motion.tsx";
import Title from "../comp/Title.tsx";

export default function DesignSetting() {
    const child = [
        { to: "template", title: "템플릿 등록" },
        { to: "rule-register", title: "코드규칙 등록" },
        { to: "rule", title: "코드 규칙" },
        { to: "design-export", title: "설계서" },
        { to: "scenario", title: "테스트 시나리오" },
    ];

    return (
        <ScrollMain>
            <Scroll child={child} />
            <ScrollSub>

                {/* ✅ 템플릿 등록 소개 */}
                <Motion id="template">
                    <Title title="템플릿 등록" />

                    <div className="text-gray-700 space-y-6 text-base leading-relaxed">
                        <p>
                            설계기반 관리의 시작은 <strong>데이터 사전의 표준 단어</strong>를 기반으로 이루어지며,
                            이후 <strong>코드 자동화를 위한 템플릿</strong> 구성으로 이어집니다.
                        </p>

                        <p>
                            코드규칙 관리는 <strong>자동 생성되는 코드의 규칙</strong>을 관리하기 위한 기능입니다.
                            주로 <strong>프로젝트 관리자</strong>가 사용하는 기능으로, 템플릿 단위로 구분하여 다양한 코드 형태를 대응합니다.
                        </p>

                        <div className="bg-gray-50 border border-gray-300 rounded-md p-4 text-sm space-y-2">
                            <p className="text-gray-800 font-medium">📘 메소드 명 생성 방식</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>
                                    <span className="text-blue-800 font-semibold">📘 등록된 표준용어 약어</span>를 기준으로 메소드 이름이 생성됩니다.
                                </li>
                                <li>
                                    <span className="text-red-600 font-semibold">📕 데이터 이름의 띄어쓰기</span>를 기준으로 표준단어의 영문명을 조합해 메소드 이름이 생성됩니다.
                                </li>
                            </ul>
                            <p className="text-gray-600">
                                해당 방식은 프로젝트 설정 내 "약어 사용 여부"에 따라 자동 적용되며, 템플릿에 설정된 규칙을 기반으로 메소드가 생성됩니다.
                            </p>
                        </div>

                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/design/code_template_main.png" alt="코드규칙 템플릿 목록" className="w-full max-h-[400px] object-contain mx-auto" />
                        </div>

                        <p>
                            상단의 <strong>[템플릿 등록]</strong> 버튼을 클릭하여 <strong>RESTful, ModelAndView, Frontend Function</strong> 등 템플릿 유형을 구분해 등록할 수 있습니다.
                        </p>

                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/design/template_register.png" alt="템플릿 등록 팝업" className="w-full max-h-[500px] object-contain mx-auto" />
                        </div>

                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>템플릿 명</strong>과 <strong>설명</strong>을 입력한 후 저장하면 템플릿이 등록됩니다.</li>
                            <li>등록된 템플릿은 선택 후 하단에서 코드 규칙을 추가할 수 있습니다.</li>
                        </ul>
                    </div>
                </Motion>

                {/* ✅ 코드규칙 등록 */}
                <Motion id="rule-register">
                    <Title title="코드규칙 등록" />

                    <div className="text-gray-700 space-y-6 text-base leading-relaxed">
                        <p>
                            템플릿 등록 이후에는 <strong>해당 템플릿에 적용할 코드규칙</strong>을 추가로 등록해야 합니다.
                        </p>

                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/design/code_rule_register.png" alt="코드규칙 등록 팝업 예시" className="w-full max-h-[700px] object-contain mx-auto" />
                        </div>

                        <h3 className="text-lg font-semibold text-indigo-700">📌 필수 입력 항목</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>템플릿 선택</strong>: 사전에 등록된 템플릿 중 하나를 선택합니다.</li>
                            <li><strong>코드규칙 명</strong>: 규칙의 대표 명칭입니다. Swagger 설명 등에 자동 사용됩니다.</li>
                            <li><strong>코드규칙 내용</strong>: 규칙을 설명하는 문장입니다. <code>${'{1}'}</code> 등 키워드로 활용됩니다.</li>
                            <li><strong>메소드 형식 예시</strong>: 실제 생성될 메소드 또는 함수의 포맷을 정의합니다.</li>
                        </ul>

                        <h3 className="text-lg font-semibold text-indigo-700">🔠 접두사 / 접미사란?</h3>
                        <p>
                            메소드 또는 함수 이름을 구성할 때, <strong>앞에 붙는 문자열은 접두사(Prefix)</strong>, <strong>뒤에 붙는 문자열은 접미사(Suffix)</strong>입니다.
                            <br />
                            예: <code>getUserData</code> → <code>get</code>은 접두사, <code>Data</code>는 접미사입니다.
                        </p>

                        <h3 className="text-lg font-semibold text-indigo-700">📥 기본 입력값 / 출력값</h3>
                        <p>
                            반복적으로 사용되는 공통 <strong>입력(Input) 및 출력(Output)</strong> 형식을 사전에 지정할 수 있습니다.
                            <br />
                            예: <code>AccountDto</code>, <code>ResponseEntity&lt;Map&lt;String, Boolean&gt;&gt;</code> 등.
                        </p>

                        <h3 className="text-lg font-semibold text-indigo-700">🛠️ 기본 예외처리값</h3>
                        <p>
                            함수 내 예외 처리 구조를 사전에 등록할 수 있으며, <code>${'{EXCEPTION}'}</code> 키워드로 자동 치환됩니다.
                        </p>

                        <h3 className="text-lg font-semibold text-indigo-700">💡 메소드 형식 예시 사용법</h3>
                        <div className="bg-gray-50 border border-gray-300 rounded-md p-4 text-sm space-y-2">
                            <ul className="list-disc pl-5 text-sm space-y-1">
                                <li><code>${'{0}'}</code>: 메소드/함수 이름</li>
                                <li><code>${'{1}'}</code>: 코드규칙 명칭</li>
                                <li><code>${'{2}'}</code>: 설명</li>
                                <li><code>${'{3}'}</code>: 기타 설명</li>
                                <li><code>${'{INPUT}'}</code>: 입력값</li>
                                <li><code>${'{OUTPUT}'}</code>: 출력값</li>
                                <li><code>${'{EXCEPTION}'}</code>: 예외 처리 내용</li>
                                <li><code>${'{USER_NAME}'}</code>: 사용자명</li>
                            </ul>
                            <p className="text-gray-600">※ Swagger 설정은 자동 적용되므로 <code>@Operation</code>을 직접 입력하지 않아도 됩니다.</p>
                        </div>

                        <h3 className="text-lg font-semibold text-indigo-700">🧾 예시 템플릿</h3>
                        <pre className="bg-gray-100 rounded-md p-4 font-mono text-sm leading-relaxed overflow-x-auto">
{`/**
 * \${2}
 */
@Operation(summary = "\${1}", description = "\${2}")
@GetMapping("/")
public \${OUTPUT} \${0}(\${INPUT}) {
    return ResponseEntity.ok(Map.of("result", true));
}`}
                        </pre>
                    </div>
                </Motion>

                <Motion id="rule">
                    <Title title="코드 규칙" />
                    <div className="text-gray-700 space-y-6 text-base leading-relaxed">
                        <p>
                            코드 규칙 화면에서는 <strong>기 등록된 템플릿과 코드규칙 관리 항목</strong>을 바탕으로
                            실제 생성될 메소드의 명세를 정의할 수 있습니다.
                        </p>

                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/design/code_rule_list.png" alt="코드규칙 목록 예시" className="w-full max-h-[400px] object-contain mx-auto" />
                        </div>

                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>추가 / 삭제</strong> 기능이 제공되며, 행(Row)을 클릭하면 <strong>수정</strong>이 가능합니다.</li>
                            <li>템플릿과 코드 규칙은 <strong>Select Box</strong>로 구성되어 있으며, 선택한 규칙에 따라 명세가 자동 셋팅됩니다.</li>
                        </ul>

                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/design/code_rule_edit.png" alt="코드규칙 상세 팝업" className="w-full max-h-[600px] object-contain mx-auto" />
                        </div>

                        <h3 className="text-lg font-semibold text-indigo-700">🔑 명칭 키워드와 메소드 이름</h3>
                        <p>
                            예를 들어, 명칭 키워드를 <strong>사용자 아이디</strong>로 입력하면 <strong>getUserId</strong>와 같은 방식으로
                            접두사(Prefix) 및 접미사(Suffix)가 자동 조합됩니다.
                        </p>

                        <h3 className="text-lg font-semibold text-indigo-700">⚙️ 구성 항목 설명</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>입력값 / 출력값 / 예외처리</strong>는 템플릿에 따라 기본값이 설정되며, 사용자가 변경할 수 있습니다.</li>
                            <li>하단의 <strong>변환</strong> 버튼을 클릭하면, 자동으로 메소드 형식과 메소드명이 생성됩니다.</li>
                            <li>최종 <strong>저장</strong> 버튼으로 해당 코드규칙 정보를 저장할 수 있습니다.</li>
                        </ul>

                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/design/code_rule_preview.png" alt="코드규칙 미리보기" className="w-full max-h-[600px] object-contain mx-auto" />
                        </div>

                        <p className="text-sm text-gray-600">
                            변환된 메소드 형식은 <strong>프로젝트 Swagger 설정 여부</strong>에 따라 어노테이션 자동 적용 여부가 결정됩니다.
                            <br />
                            기본적인 설명 외에 <strong>자세한 Operation 설정</strong>이 필요하다면, <span className="text-blue-700 font-medium">코드규칙 관리 화면</span>에서 템플릿의 메소드 형식을 커스터마이징하여 등록하는 것이 좋습니다.
                        </p>
                    </div>
                </Motion>

                <Motion id="design-export">
                    <Title title="설계서 출력" />

                    <div className="text-gray-700 space-y-6 text-base leading-relaxed">
                        <p>
                            설계서 화면은 <strong>자동 생성된 코드 규칙</strong>을 바탕으로 설계서를 출력하는 기능입니다.
                            <br />
                            체크박스를 통해 <strong>특정 항목만 선택 출력</strong>할 수 있으며, 선택하지 않으면 전체 항목이 출력됩니다.
                        </p>

                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/design/design_export_main.png" alt="설계서 목록 예시" className="w-full max-h-[400px] object-contain mx-auto" />
                        </div>

                        <p>
                            출력 버튼 클릭 시 <strong>출력 형식 선택 팝업</strong>이 나타납니다. 세 가지 형식 중 선택이 가능합니다.
                        </p>

                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/design/design_export_modal.png" alt="설계서 출력 형식 선택 팝업" className="w-full max-h-[400px] object-contain mx-auto" />
                        </div>

                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>기능 정의서</strong>: 각 기능의 목적, 명세 정보, 메소드명 등 기본 설계 정보를 제공합니다.</li>
                            <li><strong>인터페이스 설계서</strong>: 입력값/출력값 구조 및 메소드 형태를 상세히 기술합니다.</li>
                            <li><strong>기술 설계서</strong>: 메소드, 어노테이션, 예외처리 등 구현 관련 기술 명세가 포함됩니다.</li>
                        </ul>

                        <h3 className="text-lg font-semibold text-indigo-700">📁 엑셀 출력 결과 예시</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>기능 정의서</strong>에는 그룹명, 템플릿명, 코드규칙명, 기능 설명, 메소드명 등이 포함됩니다.</li>
                            <li><strong>인터페이스 설계서</strong>에는 메소드 입력/출력값, 데이터 타입, 설명이 함께 구성됩니다.</li>
                            <li><strong>기술 설계서</strong>에는 Swagger 어노테이션, 예외처리 정보, 기타 설명 등이 기술됩니다.</li>
                        </ul>

                        <p className="text-sm text-gray-600">
                            설계서는 개발 명세 정리 및 문서화 목적 외에도 <strong>타 부서 공유용 문서</strong>로도 활용할 수 있으며,
                            <strong>자동 생성된 코드 기반</strong>으로 일관성 있는 문서 제공이 가능합니다.
                        </p>
                    </div>
                </Motion>

                <Motion id="scenario">
                    <Title title="테스트 시나리오 출력" />

                    <div className="text-gray-700 space-y-6 text-base leading-relaxed">
                        <p>
                            테스트 시나리오 화면은 <strong>자동 생성된 코드 명세</strong>를 기반으로 단위 테스트 시나리오를 출력할 수 있는 기능입니다.
                            <br />
                            체크박스를 통해 <strong>특정 항목만 출력</strong>하거나, 선택하지 않으면 전체 항목을 출력할 수 있습니다.
                        </p>

                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/design/scenario_main.png" alt="테스트 시나리오 목록 예시" className="w-full max-h-[400px] object-contain mx-auto" />
                        </div>

                        <p>
                            출력 버튼 클릭 시 <strong>출력 형식 선택 팝업</strong>이 나타나며, 현재는 <strong>단위테스트 시나리오</strong> 형식을 제공합니다.
                        </p>

                        <div className="rounded-lg overflow-hidden shadow border border-gray-200">
                            <img src="/images/design/scenario_modal.png" alt="시나리오 출력 팝업 예시" className="w-full max-h-[400px] object-contain mx-auto" />
                        </div>

                        <h3 className="text-lg font-semibold text-indigo-700">📁 엑셀 출력 결과 예시</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>메소드명 / 입력값 / 출력값 / 예외처리</strong> 등 테스트 대상 정보가 포함됩니다.</li>
                            <li><strong>요청 시나리오</strong>, <strong>예상 응답</strong>, <strong>검증 로직</strong> 등 테스트 수행에 필요한 정보가 정리되어 있습니다.</li>
                            <li>자동화된 코드 생성 기반으로 <strong>일관성 있는 테스트 시나리오</strong> 구성이 가능합니다.</li>
                        </ul>

                        <p className="text-sm text-gray-600">
                            시나리오 출력은 QA 팀, 개발자 간 테스트 명세 공유용 문서로 활용할 수 있으며,
                            <strong>기획 → 개발 → 테스트까지 일관된 흐름</strong>을 문서로 확인하는 데 유용합니다.
                        </p>
                    </div>
                </Motion>

            </ScrollSub>
        </ScrollMain>
    );
}
