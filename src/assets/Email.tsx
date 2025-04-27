import { motion } from 'framer-motion';

export default function Email() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto px-6 py-12 text-gray-800"
        >
            <h1 className="text-3xl font-bold mb-6">이메일 문의</h1>

            <p className="text-lg mb-4 leading-relaxed">
                MetaGen 프로젝트는 <span className="font-semibold">MIT 라이선스 기반의 Public Repository</span>로 운영되고 있습니다.<br/>
                기본적으로 발생하는 이슈는
                <a href="https://github.com/meta-gen/metagen/issues" target="_blank"
                   className="text-blue-600 hover:underline ml-1">
                    GitHub Issues
                </a>를 통해 등록해주시면 빠르게 대응해드립니다.
            </p>

            <p className="text-lg mb-4 leading-relaxed">
                개별적인 문의사항이나 이슈 등록이 어려운 경우에는 아래 이메일로 연락주시면 됩니다.
            </p>

            <div className="bg-gray-100 rounded-md p-6 my-6">
                <p className="text-xl font-semibold mb-2">문의 이메일</p>
                <p className="text-blue-700 text-lg font-mono">koboolean@gmail.com</p>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4">이슈 등록 시 작성 방법</h2>

            <p className="text-lg mb-4 leading-relaxed">
                이슈 등록 시, 아래 양식에 맞추어 작성해주시면 더욱 빠른 대응이 가능합니다:
            </p>

            <ul className="list-disc list-inside text-lg leading-relaxed space-y-2 mb-8">
                <li>📦 사용한 MetaGen 버전 (예: v1.0.0)</li>
                <li>🧩 발생한 문제 및 상황</li>
                <li>🛠️ 문제 재현 방법 (어떤 상황에서 문제가 발생하는지)</li>
                <li>🎯 기대 동작 (원래 기대했던 정상적인 동작)</li>
                <li>🖥️ 사용 환경 정보 (브라우저, 운영체제 등)</li>
                <li>📸 참고 자료 (스크린샷, 에러 로그 등)</li>
            </ul>

            <p className="text-lg leading-relaxed">
                위 양식을 참고하여
                <a href="https://github.com/meta-gen/metagen/issues" target="_blank"
                   className="text-blue-600 hover:underline ml-1">
                    GitHub Issues
                </a>에 등록해주시기 바랍니다.
            </p>
        </motion.div>
    );
}
