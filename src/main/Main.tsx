import { motion } from 'framer-motion';

export default function Main() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-16 text-center text-gray-800"
        >
            {/* 로고 + 타이틀을 한 줄로 */}
            <div className="flex items-center justify-center gap-4 mb-8">
                <motion.img
                    src="/images/favicon.png"
                    alt="MetaGen Logo"
                    className="w-16 h-16"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                />
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                    MetaGen
                </h1>
            </div>

            {/* 설명 */}
            <p className="text-lg md:text-xl leading-relaxed mb-10 text-gray-700">
                MetaGen은 데이터 사전 또는 규칙 기반 명명법을 활용하여<br />
                메소드와 함수명을 자동으로 생성하고, 설계서 및 테스트 시나리오 작성을 지원하는<br />
                <span className="font-semibold text-blue-700">웹 애플리케이션</span>입니다.<br />
                일관된 명명 규칙 준수와 문서화 자동화를 통해 개발 생산성을 극대화합니다.
            </p>

            {/* 버튼 영역 */}
            <div className="flex justify-center gap-6 mb-12">
                <a
                    href="https://hub.docker.com/repository/docker/koboolean/metagen"
                    target="_blank"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow transition"
                >
                    🚀 Docker Hub
                </a>
                <a
                    href="https://github.com/meta-gen"
                    target="_blank"
                    className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded-full shadow transition"
                >
                    🌟 GitHub
                </a>
            </div>

            {/* 구분선 */}
            <hr className="my-12 border-gray-300" />

            {/* 라이선스 안내 */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                이 프로젝트는&nbsp;
                <a
                    href="https://github.com/meta-gen/metagen/blob/main/LICENSE"
                    className="text-blue-600 hover:text-blue-800 font-semibold underline underline-offset-4"
                    target="_blank"
                >
                    MIT 라이선스
                </a>
                &nbsp;를 따릅니다.<br />
                자유롭게 수정 및 배포할 수 있으나, 저작권 및 라이선스 명시는 필요합니다.
            </p>
        </motion.div>
    );
}
