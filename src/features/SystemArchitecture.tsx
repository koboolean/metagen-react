import {useState} from "react";
import { motion } from 'framer-motion';
import Title from "../comp/Title.tsx";

export default function SystemArchitecture() {

    const [isOpen, setIsOpen] = useState(false);

    const handleImageClick = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-16 text-gray-800"
        >
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-10 text-gray-800">
            <Title title={"시스템 아키텍처"}/>

            {/* 설명 */}
            <p className="text-lg leading-relaxed mb-6">
                MetaGen 시스템은 <strong>Spring Boot</strong> 기반의 백엔드와
                <strong> Thymeleaf</strong> 기반 프론트엔드로 구성되어 있습니다. 모든 서비스는 <strong>Docker</strong> 컨테이너로 패키징되어,
                개발자가 로컬 환경이나 운영 환경에 따라 자유롭게 구성할 수 있도록 설계되었습니다.
            </p>

            <p className="text-lg leading-relaxed mb-6">
                인증 및 인가 처리는 <strong>Spring Security</strong>를 통해 세션 기반으로 이루어지며, 인증 정보는
                <strong> Redis</strong>에 저장되어 관리됩니다. 메타데이터 및 명명규칙 관리 기능은 <strong>JPA</strong>와
                <strong> QueryDSL</strong>을 통해 데이터베이스와 연동되어 있으며, 테스트 및 문서화를 위해
                <strong> Swagger(OpenAPI)</strong> 문서가 자동 생성됩니다.
            </p>

            <p className="text-lg leading-relaxed mb-6">
                데이터베이스는 상황에 따라 <strong>H2</strong> (개발용) 또는 <strong>PostgreSQL</strong> (운영용) 중 선택하여 사용할 수 있습니다.
                모든 인프라는 <strong>Docker</strong>를 통해 일관되게 관리되며, 별도의 배포 서버 없이 개발자가 직접 실행 환경을 구성할 수 있도록 지원합니다.
            </p>

            {/* 다이어그램 */}
            {/* 다이어그램 - 클릭 가능한 이미지 */}
            <div className="my-12 cursor-pointer">
                <img
                    src="/images/flowchart.png"
                    alt="MetaGen 시스템 아키텍처 다이어그램"
                    className="rounded-lg shadow-md mx-auto transition hover:scale-105"
                    onClick={handleImageClick}
                />
            </div>

            {/* 모달 */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleClose}>
                    <div className="bg-white p-4 rounded-lg w-[90%] max-w-6xl relative">
                        <button
                            onClick={handleClose}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
                        >
                            &times;
                        </button>
                        <img
                            src="/images/flowchart.png"
                            alt="확대된 시스템 아키텍처"
                            className="w-full h-auto rounded-md"
                        />
                    </div>
                </div>
            )}

            {/* 추가 요약 */}
            <p className="text-base text-gray-600 leading-relaxed">
                MetaGen은 단순한 명명법 생성 도구를 넘어, 개발 생산성 향상과
                문서화 자동화를 목표로 지속적인 확장을 계획하고 있습니다.
            </p>
        </div>
        </motion.div>
    );
}
