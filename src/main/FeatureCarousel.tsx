import Slider from "react-slick";

export default function FeatureCarousel() {
  const features = [
    {
      title: "데이터 사전 기반 메소드/함수명 생성",
      description: "데이터 사전 기준으로 메소드/함수명을 자동 생성하고 표준화합니다.",
      image: "/images/metagen.png",
    },
    {
      title: "명명 규칙 커스터마이징 지원",
      description: "Prefix, Suffix, 대소문자 스타일 등을 자유롭게 설정할 수 있습니다.",
      image: "/images/metagen.png",
    },
    {
      title: "표준화된 설계서 자동 생성",
      description: "명명 규칙에 맞춰 설계서를 자동 작성하여 문서화를 간소화합니다.",
      image: "/images/metagen.png",
    },
    {
      title: "테스트 시나리오 엑셀 자동 출력",
      description: "테스트 시나리오를 엑셀 파일로 자동 생성하여 효율적인 테스트를 지원합니다.",
      image: "/images/metagen.png",
    },
    {
      title: "표준어 기반 코드 템플릿 제공",
      description: "등록된 표준어를 기반으로 코드 템플릿을 자동 생성합니다.",
      image: "/images/metagen.png",
    },
    {
      title: "테이블/컬럼 메타 관리 기능",
      description: "테이블과 컬럼 메타 정보를 통합 관리하고 일관성을 유지합니다.",
      image: "/images/metagen.png",
    },
    {
      title: "승인 및 거절 워크플로우 기능",
      description: "메타 정보에 대한 승인/거절 프로세스를 통해 품질을 관리합니다.",
      image: "/images/metagen.png",
    },
    {
      title: "Redis Pub/Sub 기반 실시간 메시지 처리",
      description: "비동기 메시징 처리를 통해 승인관리 등 실시간 알림을 제공합니다.",
      image: "/images/metagen.png",
    },
    {
      title: "WebSocket(SockJS + STOMP.js) 기반 유저 간 메시지 송수신",
      description: "WebSocket을 활용하여 유저 간 실시간 채팅 및 알림 기능을 지원합니다.",
      image: "/images/metagen.png",
    },
    {
      title: "프로젝트/도메인별 메타 관리",
      description: "프로젝트별, 도메인별로 메타 정보를 구분하여 관리할 수 있습니다.",
      image: "/images/metagen.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,   // 3개 가로로
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
      <div className="w-full overflow-hidden my-16">
        <div className="max-w-7xl mx-auto">
          <Slider {...settings}>
            {features.map((feature, index) => (
                <div key={index} className="px-4">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                    <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover" />
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-700 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
            ))}
          </Slider>
        </div>
      </div>
  );
}
