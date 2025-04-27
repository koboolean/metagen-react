export default function Main(){

    return <>
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">🤘 MetaGen</h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                MetaGen은 데이터 사전 또는 규칙 기반 명명법을 활용하여 메소드와 함수명을 자동으로 생성하고, 이를 기반으로 설계서 및 테스트 시나리오 작성을 지원하는 웹
                애플리케이션입니다.<br/>
                대규모 시스템 개발에서 일관된 명명 규칙을 준수하고, 문서화 작업을 자동화하여 개발 생산성을 극대화합니다.
            </p>

            <p className="mb-8">
                <a href="https://hub.docker.com/repository/docker/koboolean/metagen"
                   className="text-blue-600 hover:text-blue-800 font-semibold underline underline-offset-4"
                   target="_blank">
                    Docker Hub
                </a>
            </p>

            <p className="mb-8">
                <a href="https://github.com/meta-gen"
                   className="text-blue-600 hover:text-blue-800 font-semibold underline underline-offset-4"
                   target="_blank">
                    GitHub
                </a>
            </p>

            <hr className="my-8 border-gray-300"/>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                이 프로젝트는 <a href="https://github.com/meta-gen/metagen/blob/main/LICENSE"
                           className="text-blue-600 hover:text-blue-800 font-semibold underline underline-offset-4"
                           target="_blank">MIT 라이선스</a>를 따릅니다.<br/>
                자유롭게 수정 및 배포할 수 있으나, 저작권 및 라이선스 명시는 필요합니다.
            </p>
        </div>
    </>
}
