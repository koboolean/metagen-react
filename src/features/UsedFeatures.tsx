import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

export default function UsedFeatures() {
    return (
        <div className="flex max-w-7xl mx-auto px-6 py-12 text-gray-800">
            {/* Sidebar */}
            <aside className="hidden lg:block w-60 flex-shrink-0 sticky top-32 self-start">
                <div className="p-4 bg-white shadow-md rounded-md">
                    <h3 className="text-lg font-bold mb-4">목차</h3>
                    <ul className="space-y-2">
                        <li>
                            <ScrollLink to="tech" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-blue-600">
                                기술 스택
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="goal" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-blue-600">
                                프로젝트 목표
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="features" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-blue-600">
                                MetaGen 특화 기능
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="future" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-blue-600">
                                도입 검토 중
                            </ScrollLink>
                        </li>
                    </ul>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 ml-8">
                {/* 기술 스택 */}
                <motion.section
                    id="tech"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h1 className="text-4xl font-bold mb-10">사용 중인 기술 및 기능</h1>

                    <h2 className="text-2xl font-semibold mb-4">기술 스택</h2>

                    {/* Backend */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-2">Backend (REST API 개발, 인증/인가, 비즈니스 로직)</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Spring Boot 3.4.1</li>
                            <li>Java 17</li>
                            <li>Spring Security 6.2.1</li>
                            <li>JPA (Hibernate) 6.4.0.Final</li>
                            <li>QueryDSL 5.0.0</li>
                            <li>Lombok 1.18.30</li>
                            <li>Spring Web (REST API)</li>
                            <li>ModelMapper 3.1.0</li>
                        </ul>
                    </div>

                    {/* Frontend */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Thymeleaf 3.1.2</li>
                            <li>Thymeleaf Layout Dialect 3.2.1</li>
                            <li>jQuery 3.6.0</li>
                            <li>Ajax (jQuery 기반)</li>
                            <li>Bootstrap 5.3.2</li>
                            <li>JavaScript ES6+</li>
                            <li>Thymeleaf Spring Security Extras 3.1.2</li>
                        </ul>
                    </div>

                    {/* Database */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-2">Database</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>PostgreSQL 16.3</li>
                            <li>PostgreSQL JDBC Driver 42.6.0</li>
                        </ul>
                    </div>

                    {/* DevOps */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-2">DevOps / CI-CD</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Docker 24.0.7</li>
                            <li>Docker Compose 2.20.2</li>
                            <li>GitHub Actions, Jenkins 2.440.1</li>
                        </ul>
                    </div>

                    {/* 프로젝트 관리 & 문서화 */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">프로젝트 관리 & 문서화</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Jira (Cloud)</li>
                            <li>GitHub (Actions 포함)</li>
                            <li>Springdoc OpenAPI (Swagger) 2.8.5</li>
                        </ul>
                    </div>
                </motion.section>

                {/* 프로젝트 목표 */}
                <motion.section
                    id="goal"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-2xl font-semibold mb-8">프로젝트 목표</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>코드 일관성 향상</strong> - 명명 규칙에 기반한 메소드/함수명 자동 생성</li>
                        <li><strong>문서화 자동화</strong> - 설계서 및 테스트 시나리오 자동 생성</li>
                        <li><strong>개발 생산성 향상</strong> - 템플릿 제공 및 자동화를 통한 반복 작업 감소</li>
                    </ul>
                </motion.section>

                {/* MetaGen 특화 기능 */}
                <motion.section
                    id="features"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-semibold mb-8">MetaGen 특화 기능</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            '데이터 사전 기반 메소드/함수명 생성',
                            '명명 규칙 커스터마이징 지원 (Prefix, Suffix, 대소문자 스타일 등)',
                            '표준화된 설계서 자동 생성',
                            '테스트 시나리오 엑셀 자동 출력',
                            '표준어 기반 코드 템플릿 제공',
                            '테이블/컬럼 메타 관리 기능',
                            '승인 및 거절 워크플로우 기능',
                            'Redis Pub/Sub 기반 실시간 메시지 처리',
                            'WebSocket(SockJS + STOMP.js) 기반 유저 간 메시지 송수신 기능',
                            '프로젝트/도메인별 메타 관리'
                        ].map((feature, index) => (
                            <div key={index} className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                                {feature}
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* 도입 검토 중 기술 */}
                <motion.section
                    id="future"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    <h2 className="text-2xl font-semibold mb-8">도입 검토 중 기술</h2>

                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Redis Pub/Sub</strong> – 승인관리 시스템 비동기 메시징 처리</li>
                        <li><strong>Elasticsearch 8.11.0</strong> – 대량 데이터 검색 및 실시간 분석</li>
                        <li><strong>Spring Data Elasticsearch 5.2.1</strong> – Elasticsearch 연동 및 데이터 관리</li>
                        <li><strong>Spring Batch 5.2.1</strong> – 대량 데이터 비동기 배치처리 관련 작업 수행</li>
                    </ul>
                </motion.section>
            </div>
        </div>
    );
}
