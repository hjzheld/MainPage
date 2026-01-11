import styled from "styled-components";
import { motion } from 'framer-motion';
import { SubTitle } from '@/components/common/Title';

const CardsGrid = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 100%;
    max-width: 1000px;
    margin: 3rem 0;
    padding: 0 2rem;
    
    @media (max-width: 768px) {
        padding: 0 1rem;
    }
`;

const HistoryCard = styled(motion.div)`
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
`;

const CardHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-bottom: 2px solid rgba(118, 164, 218, 0.3);
    padding-bottom: 1rem;
`;

const CompanyTitle = styled.h3`
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0;
    color: var(--gray-100);
`;

const DateText = styled.h4`
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

export const PersonalHistory = () => {
    const personal = [
        {
            id: 1,
            title: '블록스퀘어랩스',
            type: 'development',
            date: '2024-01-15 ~ 재직중',
            content: [
                [
                  '백엔드 개발자로 입사했으나, 인원 부족으로 인해 프론트엔드 업무를 맡게 되었습니다.',
                  '회사에서 제공한 Vue.js 강의를 수강한 후 프로젝트에 참여했습니다.'
                ],
                [
                  '첫 번째 프로젝트는 웹뷰 기반으로 앱을 제작하는 프로젝트였습니다.',
                  '알림 페이지를 담당하여 알림 활성화 및 수신 항목 등록 기능을 구현했습니다.',
                  'i18n을 활용해 다국어 언어팩 작업을 진행했습니다.',
                  '모바일 환경에 맞춘 UI 구현 경험을 쌓으며 Vue.js에 대한 기초 역량을 다질 수 있었습니다.'
                ],
                [
                  '두 번째 프로젝트는 첫 번째 프로젝트의 관리자 페이지 개발이었습니다.',
                  '신입 개발자 두 분과 함께 작업하며 자연스럽게 업무 분담과 일정 관리를 맡게 되었습니다.',
                  '프로젝트 초기 세팅과 각 페이지에서 호출되는 API 오류 확인 페이지, 로그인 페이지 개발을 담당했습니다.'
                ],
                [
                  '세 번째 프로젝트는 차트 9개와 리스트 2개를 구현하는 페이지 개발이었습니다.',
                  '한 분과 함께 진행하던 프로젝트였으나, 같이 하시는 분의 휴가 일정으로 인해 차트 8개와 리스트 2개를 담당했습니다.',
                  '모바일과 PC 화면을 모두 고려한 반응형 UI를 구현하며 반응형 개발에 대한 이해도를 높일 수 있었습니다.',
                  'ZingChart와 TradingView를 사용하며 차트 라이브러리 활용 경험을 쌓았습니다.'
                ],
                [
                  '네 번째 프로젝트는 외주 업체에서 개발하던 코드를 인수받아 리팩토링 및 신규 기능 개발을 진행한 프로젝트였습니다.',
                  '프로젝트 규모가 커 팀원들과 함께 진행고, 업무 분담과 일정 관리를 진행했습니다.',
                  'Nuxt 기반 프로젝트로 서버와 클라이언트 영역을 구분하는 과정에서 어려움을 겪었습니다.',
                  '이후 Nuxt의 자동 import, 파일 기반 라우팅, 별도의 프록시 서버 없이 API 연동이 가능한 점을 장점으로 느끼게 되었습니다.',
                  '취업 전 진행했던 야미야기 프로젝트에서 사용한 Docker 기반 배포 환경이 적용되어 있어 빌드 버전 관리와 새로운 기술 학습에 도움이 되었습니다.',
                ],
                [
                    '다섯 번째 위 프로젝트의 관리자 페이지 개발이었습니다.',
                    '조직도와 각 회원별 팔로우 구조 변경(상위 팔로우 변경시 하위 팔로워 같이 이동 등의 페이지를 맡아서 진행했습니다.',
                    '조직도를 사용하기 편하게 만들기 위해서 검색기능, 검색된 유저 노드 테두리 hover + zoom 기능 등을 추가했습니다.',
                ],
                [
                  '여섯 번째 프로젝트는 사용자 페이지와 관리자 페이지를 개발하는 작업이었습니다.',
                  '프로젝트 규모가 커 이전과 마찬가지로 업무 분담과 일정 관리를 함께 진행했습니다.',
                  '프론트엔드 팀원들과의 회의를 통해 기존 코드보다 모듈화를 강화하기로 결정했고, 자주 사용되는 UI 요소들을 공통 모듈로 분리해 재사용성을 높였습니다.'
                ]
            ],
            front: [
            '프로젝트 업무 분담 및 같이 작업 진행, 일정 조정',
            '코인 관련 프로젝트로 차트, 조직도 및 결제 시스템 적용',
            'docker, nginx 빌드도구를 이용하여 빌드 및 빌드 버전 관리',
            '외주 업체 코드 리팩토링 및 신규 개발 적용',
            '언어팩 작업 (i18n), 테마 변경 작업' 
            ],
            back: [
            '외주 업체와 협업시 DB 내 데이터를 수집하여 필요한 정보만 선별 및 구조화, 암호화 후 전송',
            '크론탭을 통해 매일 특정 시간마다 데이터 발송 및 로그 저장',
            '서브 페이지 진입 시 외주 업체 API 를 호출하여 암호화된 유저 정보를 수신, 복호화하여 프론트엔드로 전달 작업'
            ]
        },
        {
            id: 2,
            title: '씨인스원보험컨설팅 주식회사',
            content: [['해지 환급 업무']],
            date: '2022.01 ~ 2023.04',
        },
        {
            id: 3,
            title: '내일배움캠프',
            content: [[
                '회사에서 근무한 경력이 아닌, 내일배움캠프에 참여해서 코딩을 배웠을 때 내용입니다.',
                'Django 를 사용하여 개인/팀별 프로젝트를 여러가지 만들었습니다.',
                '팀별 프로젝트의 경우 팀원들과 회의하며 피그마 디자인, ERD 설계, API 설계 후 프로젝트 작업을 진행했습니다.',
                '마지막 프로젝트로 야미야기 라는 동화 생성 프로젝트를 진행했으며, 해당 프로젝트로 현업자분들도 참여하는 투표에서 1등을 차지했습니다.',
                '제가 해당 프로젝트에서 가장 많이 기여한 부분은 소셜 로그인이며, 당시 소셜 로그인 라이브러리의 구글 소셜 로그인 오류로 인해 해당 부분을 코드로 구현하였습니다.',
            ]],
            date: '2023.08 ~ 2023.12',
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            scale: 0.95
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <div>
            <SubTitle title="경력"/>
            <CardsGrid
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {personal.map((pers) =>
                    <HistoryCard 
                        key={pers.id}
                        variants={cardVariants}
                        
                    >
                        <CardHeader>
                            <CompanyTitle>{pers.title}</CompanyTitle>
                            <DateText>{pers.date}</DateText>
                        </CardHeader>
                        
                        {pers.content && (
                            <ContentWrap>
                                {pers.content.map((content, idx) => (
                                    <ProjectSection 
                                        key={idx}
                                        variants={itemVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        {content.map((cont, i) => (
                                            <ProjectText key={`${idx}-${i}`}>
                                                {cont}
                                            </ProjectText>
                                        ))}
                                    </ProjectSection>
                                ))}
                            </ContentWrap>
                        )}

                        {pers.front && (
                            <SkillSection
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <SkillTitle>Front-end</SkillTitle>
                                <SkillList>
                                    {pers.front.map((front, idx) => (
                                        <motion.li 
                                            key={idx}
                                            variants={itemVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        >
                                            {front}
                                        </motion.li>
                                    ))}
                                </SkillList>
                            </SkillSection>
                        )}
                        
                        {pers.back && (
                            <SkillSection
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <SkillTitle>Back-end</SkillTitle>
                                <SkillList>
                                    {pers.back.map((back, idx) => (
                                        <motion.li 
                                            key={idx}
                                            variants={itemVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        >
                                            {back}
                                        </motion.li>
                                    ))}
                                </SkillList>
                            </SkillSection>
                        )}
                    </HistoryCard>
                )}
            </CardsGrid>
        </div>
    )
}