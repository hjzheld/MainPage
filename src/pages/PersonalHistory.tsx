import styled from "styled-components";
import { motion } from "framer-motion";
import { Title } from "@/components/common/Title";

const CardsGrid = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  margin: 3rem 0;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const HistoryCard = styled(motion.div)`
  max-width: 1000px;
  width: 90%;
  margin: 0 auto;
  padding: 2.5rem;

  background: rgb(174 190 229 / 20%);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: var(--box-shadow);

  color: var(--gray-100);

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  position: relative;
  overflow: hidden;

  /*
   * hover 시 은은한 빛 효과
   */
  &::before {
    content: "";
    position: absolute;

    top: 0;
    left: -100%;

    width: 50%;
    height: 100%;

    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.04),
      transparent
    );

    transform: skewX(-20deg);
    transition: left 0.7s ease;

    pointer-events: none;
  }

  &:hover::before {
    left: 150%;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 2rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1.5rem;
    border-radius: 16px;
  }
`;

const CardHeader = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  border-bottom: 2px solid rgba(118, 164, 218, 0.3);
  padding-bottom: 1rem;
`;

const CompanyTitle = styled(motion.h3)`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;

  color: var(--gray-100);

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const DateText = styled(motion.h4)`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;

  color: var(--gray-400);
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 1.5rem;
`;

const ProjectSection = styled(motion.div)`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  padding-left: 1rem;

  border-left: 3px solid var(--primary-color);
`;

const ProjectText = styled(motion.p)`
  font-size: 0.95rem;
  line-height: 1.6;

  margin: 0;

  color: var(--gray-100);
`;

const SkillSection = styled(motion.div)`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  margin-top: 1rem;
`;

const SkillTitle = styled(motion.h4)`
  font-size: 1.2rem;
  font-weight: 600;

  margin: 0;

  color: var(--primary-color);

  padding-bottom: 0.5rem;

  border-bottom: 1px solid rgba(118, 164, 218, 0.2);
`;

const SkillList = styled(motion.ul)`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  margin: 0;
  padding-left: 1.5rem;

  list-style: none;

  li {
    font-size: 0.9rem;
    line-height: 1.6;

    color: var(--gray-100);

    position: relative;

    &::before {
      content: "•";

      color: var(--primary-color);

      font-weight: bold;

      position: absolute;
      left: -1.5rem;
    }
  }
`;

const isKakaoInApp =
  typeof navigator !== "undefined" &&
  /KAKAOTALK/i.test(navigator.userAgent);

export const PersonalHistory = () => {
  const personal = [
    {
      id: 1,
      title: "블록스퀘어랩스",
      type: "development",
      date: "2024-01-15 ~ 재직중",
      content: [
        [
          "백엔드 개발자로 입사한 후 프론트엔드 인력 부족으로 Vue.js를 학습해 프론트엔드 개발 업무를 함께 담당하게 되었습니다.",
          "이후 다양한 가상자산 서비스의 사용자·관리자 페이지 개발을 경험하며 프론트엔드를 주 업무로 담당하고, 필요에 따라 백엔드 개발도 병행했습니다.",
        ],
        [
          "첫 번째 프로젝트에서는 WebView 기반 가상자산 서비스의 알림 페이지 개발을 담당했습니다.",
          "알림 활성화 및 수신 항목 등록 기능을 구현하고, Vue I18n을 활용한 다국어 환경을 적용했습니다.",
          "또한 패키지 구매 권한에 따른 페이지 접근성 조정을 했습니다.",
          "사용자별 페이지 접근 권한과 권한 유효기간을 기준으로 접근 가능 여부를 처리하고, 사용 중인 구독권 및 권한 상태가 화면에 표시되도록 구현했습니다.",
          "권한 상태에 따라 사용할 수 있는 기능을 구분하고 모바일 앱과 웹 환경에서 동일한 정책으로 동작하도록 처리했습니다.",
          "모바일 앱과 웹의 동작 차이를 대응하며 WebView 환경과 Vue.js 기반 서비스 개발 경험을 쌓았습니다.",
        ],
        [
          "두 번째 프로젝트에서는 기존 서비스의 관리자 페이지 개발에 참여했습니다.",
          "프로젝트 초기 환경을 구성하고 로그인 페이지와 API 오류 확인 페이지를 개발했으며, 신입 개발자들과 업무를 나누어 진행했습니다.",
          "이때부터 개발 일정과 진행 상황을 함께 관리하며 프론트엔드 업무 조율 역할을 맡기 시작했습니다.",
        ],
        [
          "세 번째 프로젝트에서는 가상자산 데이터를 시각화하는 차트 및 데이터 리스트 화면을 개발했습니다.",
          "TradingView와 ZingChart를 활용해 총 8개의 차트와 2개의 데이터 리스트를 구현했습니다.",
          "PC와 모바일 환경을 모두 고려한 반응형 UI를 적용하며 데이터 시각화와 차트 라이브러리 활용 경험을 쌓았습니다.",
        ],
        [
          "네 번째 프로젝트에서는 외주 업체에서 개발하던 대규모 Nuxt 프로젝트를 인수하여 기존 코드 분석, 리팩토링 및 신규 기능 개발을 진행했습니다.",
          "Nuxt의 서버·클라이언트 실행 환경과 파일 기반 라우팅 구조를 이해하고, 기존 서비스에 필요한 기능을 안정적으로 추가할 수 있도록 구조를 개선했습니다.",
          "Access Token 만료 시 Refresh Token 을 이용해 토큰을 재발급한 뒤 기존 API 요청을 다시 처리하는 인증 흐름을 적용했습니다.",
          "서비스의 패키지 및 구독 페이지를 개발하고 결제 페이지와 연동했습니다.",
          "사용자 조건에 따라 적용되는 할인 정책을 화면에 표시하고 실제 결제 금액에 반영했으며, 결제 API 연동부터 결제 완료 이후의 상태 처리까지 구현했습니다.",
          "또한 사용자의 구독 패키지, 권한 유효기간 및 권한 상태에 따라 페이지 접근 여부를 판단하고, 접근이 제한된 경우 안내 모달을 노출하는 등 서비스 전반의 권한 및 접근 제어 로직을 개발했습니다.",
          "Docker와 Nginx 기반 배포 환경을 활용해 직접 빌드하고 버전을 관리하며 운영 환경에 대한 이해도를 높였습니다.",
        ],
        [
          "다섯 번째 프로젝트에서는 앞선 Nuxt 서비스의 관리자 페이지 유지보수 및 신규 기능 개발을 담당했습니다.",
          "회원 추천·조직 구조를 관리하는 조직도 기능을 개발하고, 상위 회원 변경 시 하위 회원이 함께 이동하도록 관련 로직을 적용했습니다.",
          "대규모 조직도에서도 원하는 회원을 빠르게 확인할 수 있도록 검색, 선택 노드 강조 및 자동 확대 기능 등을 추가해 관리자 사용성을 개선했습니다.",
        ],
        [
          "여섯 번째 프로젝트에서는 사용자 페이지와 관리자 페이지를 함께 개발하는 신규 서비스의 프론트엔드 초기 구조를 설계했습니다.",
          "라우터와 로그인 상태에 따른 페이지 접근 구조를 구성하고, 버튼·모달 등 반복적으로 사용하는 UI를 공통 컴포넌트로 분리했습니다.",
          "팀원들과 개발 기준과 역할을 정리하며 프로젝트 전반의 코드 재사용성과 유지보수성을 높이는 방향으로 개발했습니다.",
        ],
        [
          "일곱 번째 프로젝트에서는 기존 네번째 서비스를 기반으로 새로운 서비스를 구축하는 복제·컨버팅 작업을 진행했습니다.",
          "기존 Nuxt 프로젝트의 구조와 기능을 분석해 새로운 서비스 정책에 맞게 화면과 로직을 수정하고 신규 기능을 추가했습니다.",
          "기존 서비스의 패키지·결제·권한 시스템을 새로운 서비스 정책에 맞게 변환했습니다.",
          "패키지 페이지와 결제 흐름, 사용자 조건에 따른 할인 정책, 결제 API 처리 및 페이지별 접근 권한 로직을 서비스 정책에 맞게 수정했습니다.",
          "공통으로 사용할 수 있는 기능은 기존 코드를 재사용하면서 권한·결제·UI 등 서비스별로 달라지는 영역을 분리하여 이후 두 서비스를 각각 유지보수할 수 있도록 구성했습니다.",
          "기존 코드를 최대한 재사용하면서 서비스별 기능과 UI 차이를 분리하여 이후 유지보수가 가능하도록 구성했습니다.",
        ],
        [
          "여덟 번째 프로젝트에서는 첫 번째로 개발했던 서비스를 전반적으로 리뉴얼했습니다.",
          "운영 과정에서 확인된 중복 코드와 유지보수가 어려운 구조를 팀원들과 검토하여 리팩토링했습니다.",
          "기존 공통 컴포넌트 구조를 한 단계 더 세분화하고 재사용 범위를 넓혀 유지보수성과 개발 효율을 개선했습니다.",
        ],
        [
          "아홉 번째 프로젝트에서는 자격증 교육 과정의 수강신청 및 결제 서비스를 개발하고 프론트엔드 초기 구조를 설계했습니다.",
          "로그인·회원가입, 수강신청, 결제, 마이페이지 등 서비스 전반의 화면과 API 연동 구조를 구성했습니다.",
          "기존 프로젝트에서 부족했던 코드 작성 기준을 개선하기 위해 코드 컨벤션을 도입하고, Oxfmt 기반 포맷팅 환경을 적용해 코드 품질과 개발 생산성을 높였습니다.",
          "로그인 상태에 따른 라우터 접근 제어를 구성하고 Access Token 만료 시 Refresh Token을 이용해 토큰을 재발급한 뒤 기존 API 요청을 다시 처리하는 인증 흐름을 적용했습니다."
        ],
        [
          "열 번째 프로젝트에서는 네 번째 프로젝트에서 인수·개발했던 Nuxt 기반 가상자산 서비스를 전면 리뉴얼했습니다.",
          "기존 서비스의 권한 및 결제 시스템을 다시 검토하고 변경된 서비스 정책에 맞춰 전체 로직을 수정했습니다.",
          "사용자 구독 상태와 권한 기한을 기준으로 처리되던 접근 제어 구조를 재정비하고, 패키지 및 결제 시스템의 데이터 흐름과 상태 관리 구조를 변경했습니다.",
          "기존 프로젝트에서 복잡하게 연결되어 있던 권한·결제 관련 로직과 컴포넌트 구조를 리팩토링하여 기능별 책임을 분리하고 이후 정책 변경과 유지보수에 대응하기 쉬운 구조로 개선했습니다."
        ],
        [
          "프론트엔드 업무와 함께 서비스 운영에 필요한 일부 백엔드 기능도 개발했습니다.",
          "외부 업체에 전달할 DB 데이터를 조회·가공하여 필요한 정보만 구조화하고 암호화해 전송하는 기능을 구현했습니다.",
          "Crontab을 이용해 정해진 시간마다 데이터 전송 작업이 자동 실행되도록 구성하고 실행 결과를 로그로 관리했습니다.",
          "또한 외부 API에서 전달받은 암호화된 사용자 정보를 서버에서 복호화한 뒤 프론트엔드에서 사용할 수 있는 형태로 가공하여 전달하는 API 연동 로직을 개발했습니다.",
        ],
      ],

    front: [
      "Nuxt.js·Vue.js 기반 사용자 및 관리자 페이지 개발",
      "프로젝트 초기 구조 설계 및 로그인·라우터·공통 컴포넌트 구조화",
      "사용자 구독 상태·권한 유효기간에 따른 페이지 및 기능 접근 제어 구현",
      "패키지·구독 페이지 개발 및 결제 페이지·결제 API 연동",
      "사용자 조건에 따른 할인 정책 표기·적용 및 결제 완료 후 상태 처리",
      "권한 상태에 따른 접근 제한·안내 모달 및 서비스별 권한 로직 구현",
      "TradingView·ZingChart를 활용한 가상자산 데이터 시각화",
      "REST API 및 WebSocket 기반 실시간 데이터 연동",
      "PC·모바일·Android WebView 환경을 고려한 반응형 UI 개발",
      "Vue I18n 기반 다국어 지원 및 서비스별 테마 적용",
      "기존·외주 프로젝트 코드 분석, 리팩토링 및 신규 기능 개발",
      "기존 서비스 컨버팅 및 전면 리뉴얼 과정에서 권한·결제 시스템 구조 개선",
      "Docker·Nginx 기반 빌드 및 배포 버전 관리",
      "프로젝트 팀 리더로 업무 분배·일정 관리·지연 이슈 조율 및 자체 QA 진행",
    ],

      back: [
        "DB 데이터를 조회·가공하여 외부 업체에 필요한 데이터 구조로 변환하는 기능 개발",
        "민감한 사용자 정보를 암호화하여 외부 시스템으로 전달하는 데이터 연동 로직 구현",
        "Crontab을 활용한 정기 데이터 전송 작업 자동화 및 실행 로그 관리",
        "외부 API를 통해 수신한 암호화 데이터를 복호화하고 프론트엔드용 데이터로 가공하는 서버 로직 개발",
        "프론트엔드 API 연동 과정에서 필요한 백엔드 기능 수정 및 오류 분석",
      ],
    },

    {
      id: 2,
      title: "씨인스원보험컨설팅 주식회사",
      content: [["해지 환급 업무"]],
      date: "2022.01 ~ 2023.04",
    },

    {
      id: 3,
      title: "내일배움캠프",
      content: [
        [
          "내일배움캠프에 참여하여 Python과 Django를 중심으로 웹 개발을 학습했습니다.",
          "개인 및 팀 프로젝트를 진행하며 Figma를 활용한 화면 설계부터 ERD 및 API 설계, 백엔드·프론트엔드 개발까지 웹 서비스 개발 과정을 경험했습니다.",
          "최종 프로젝트로 AI 기반 동화 생성 서비스인 야미야기를 개발했으며, 현업 개발자가 참여한 프로젝트 평가에서 1위를 기록했습니다.",
          "프로젝트에서는 소셜 로그인 기능을 중심으로 담당했으며, 당시 사용하던 라이브러리에서 발생한 Google OAuth 오류를 직접 분석하여 별도 로직으로 구현했습니다.",
        ],
      ],
      date: "2023.08 ~ 2023.12",
    },
  ];

  // ==========================================
  // 전체 카드 Container
  // 카드가 하나씩 순차적으로 등장
  // ==========================================
  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  // ==========================================
  // 경력 카드
  // 짝수 : 왼쪽에서 등장
  // 홀수 : 오른쪽에서 등장
  // ==========================================
  const cardVariants = {
    hidden: (index: number) => ({
      opacity: 0,

      x: index % 2 === 0 ? -70 : 70,

      y: 25,

      scale: 0.96,
    }),

    visible: {
      opacity: 1,

      x: 0,

      y: 0,

      scale: 1,

      transition: {
        type: "spring" as const,
        stiffness: 110,
        damping: 18,
        mass: 0.8,
      },
    },
  };

  // ==========================================
  // 카드 Header
  // ==========================================
  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  // ==========================================
  // 프로젝트 내용 Container
  // 내부 문장 순차 등장
  // ==========================================
  const projectContainerVariants = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  // ==========================================
  // 프로젝트 문장
  // 아래에서 위로 살짝 등장
  // ==========================================
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 12,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.35,
        ease: "easeOut" as const,
      },
    },
  };

  // ==========================================
  // Front / Back 기술 영역
  // ==========================================
  const skillSectionVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.98,
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,

      transition: {
        duration: 0.45,
        ease: "easeOut" as const,
      },
    },
  };

  // ==========================================
  // 기술 목록
  // ==========================================
  const skillListVariants = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  // ==========================================
  // 기술 하나씩 왼쪽 → 오른쪽 등장
  // ==========================================
  const skillItemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div>
      <Title page="main" title="경력" />

      <CardsGrid
        variants={containerVariants}
        initial="hidden"
        animate={isKakaoInApp ? "visible" : undefined}
        whileInView={!isKakaoInApp ? "visible" : undefined}
        viewport={{
          once: true,
          amount: 0.05,
        }}
      >
        {personal.map((pers, index) => (
          <HistoryCard
            key={pers.id}
            custom={index}
            variants={cardVariants}

            // 카드 hover
            whileHover={{
              y: -7,
              scale: 1.008,
            }}

            transition={{
              type: "spring",
              stiffness: 260,
              damping: 22,
            }}
          >
            {/* ==========================================
                회사명 / 기간
            ========================================== */}
            <CardHeader
              variants={headerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.5,
              }}
            >
              <CompanyTitle
                whileHover={{
                  x: 5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                {pers.title}
              </CompanyTitle>

              <DateText
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.1,
                  duration: 0.35,
                }}
              >
                {pers.date}
              </DateText>
            </CardHeader>

            {/* ==========================================
                프로젝트 / 경력 설명
            ========================================== */}
            {pers.content && (
              <ContentWrap>
                {pers.content.map(
                  (content, idx) => (
                    <ProjectSection
                      key={idx}

                      // 설명 블록도 좌/우 번갈아 등장
                      initial={{
                        opacity: 0,
                        x:
                          idx % 2 === 0
                            ? -30
                            : 30,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.25,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: idx * 0.025,
                        ease: "easeOut",
                      }}
                    >
                      <motion.div
                        variants={
                          projectContainerVariants
                        }
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                          once: true,
                          amount: 0.3,
                        }}
                      >
                        {content.map(
                          (cont, i) => (
                            <ProjectText
                              key={`${idx}-${i}`}
                              variants={
                                textVariants
                              }
                            >
                              {cont}
                            </ProjectText>
                          ),
                        )}
                      </motion.div>
                    </ProjectSection>
                  ),
                )}
              </ContentWrap>
            )}

            {/* ==========================================
                Front-end
            ========================================== */}
            {pers.front && (
              <SkillSection
                variants={skillSectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
              >
                <SkillTitle
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 160,
                    damping: 18,
                  }}
                >
                  Front-end
                </SkillTitle>

                <SkillList
                  variants={skillListVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.1,
                  }}
                >
                  {pers.front.map(
                    (front, idx) => (
                      <motion.li
                        key={idx}
                        variants={
                          skillItemVariants
                        }
                        whileHover={{
                          x: 6,
                        }}
                      >
                        {front}
                      </motion.li>
                    ),
                  )}
                </SkillList>
              </SkillSection>
            )}

            {/* ==========================================
                Back-end
            ========================================== */}
            {pers.back && (
              <SkillSection
                variants={skillSectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
              >
                <SkillTitle
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 160,
                    damping: 18,
                  }}
                >
                  Back-end
                </SkillTitle>

                <SkillList
                  variants={skillListVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.1,
                  }}
                >
                  {pers.back.map(
                    (back, idx) => (
                      <motion.li
                        key={idx}
                        variants={
                          skillItemVariants
                        }
                        whileHover={{
                          x: 6,
                        }}
                      >
                        {back}
                      </motion.li>
                    ),
                  )}
                </SkillList>
              </SkillSection>
            )}
          </HistoryCard>
        ))}
      </CardsGrid>
    </div>
  );
};