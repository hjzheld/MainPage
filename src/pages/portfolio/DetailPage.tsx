import styled from "styled-components";

import Btn from "@/components/common/Btn";
import Link from "@/components/detail/Link";
import { Title } from "@/components/common/Title";
import Container from "@/components/common/Container";
import SwiperImage from "@/components/detail/Swiper";

import Thumbnail from "@/assets/images/detail/video_thumb.png";

import {
  useEffect,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { Projects } from "@/types/project";

import {
  fadeUp,
  slideLeft,
  springPop,
  staggerContainer,
  viewport,
} from "@/utils/animations";

const SectionTitle = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;

  margin: 2.5rem 0 1.5rem 0;
  padding-bottom: 0.75rem;

  border-bottom:
    3px solid var(--primary-color);

  color: var(--gray-100);

  line-height: 1.4;

  position: relative;

  &::before {
    content: "";

    position: absolute;

    bottom: -3px;
    left: 0;

    width: 60px;
    height: 3px;

    background: var(--primary-light);
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const StackCategoryTitle = styled(motion.div)`
  font-size: 1.2rem;
  font-weight: 600;

  margin: 1.5rem 0 1rem 0;

  color: var(--primary-color);

  display: flex;
  align-items: center;

  gap: 0.5rem;

  &::before {
    content: "";

    width: 4px;
    height: 1.2rem;

    background: var(--primary-color);

    border-radius: 2px;
  }
`;

const ContentTitle = styled(motion.h4)`
  font-size: 1.8rem;
  font-weight: 600;

  line-height: 1.4;

  margin-bottom: 1rem;
  margin-top: 0;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const StackTagContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;

  gap: 0.75rem;

  margin-bottom: 0.5rem;
`;

const StackTag = styled(motion.div)`
  display: inline-flex;
  align-items: center;

  padding: 0.5rem 1rem;

  background: rgba(118, 164, 218, 0.15);

  border:
    1px solid rgba(118, 164, 218, 0.3);

  border-radius: 20px;

  font-size: 0.9rem;
  font-weight: 500;

  color: var(--gray-100);
`;

const ImageWrapper = styled(motion.div)`
  width: 100%;
`;

const ContentWrapper = styled(motion.div)`
  width: 100%;
`;

const ModalBackdrop = styled(motion.div)`
  position: fixed;
  inset: 0;

  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.75);

  backdrop-filter: blur(6px);
`;

const ModalContent = styled(motion.div)`
  position: relative;

  width: min(90vw, 1200px);
  max-height: 90vh;
`;

const StackName = {
  back: "Back-end",
  front: "Front-end",
  database: "Database",
  ai: "AI",
  build: "Build 도구",
};

const DetailPage = () => {
  const [project, setProject] =
    useState<Projects | null>(null);

  const [isImageOpen, setIsImageOpen] =
    useState(false);

  useEffect(() => {
    const stored =
      localStorage.getItem("project");

    if (stored) {
      setProject(JSON.parse(stored));
    }
  }, []);

  return (
    <Container>
      {project ? (
        <>
          <motion.div
            className="detail-container"
            variants={slideLeft}
            initial="hidden"
            animate="visible"
          >
            <Title
              page="detail"
              title={project.title}
            />

            <motion.div
              className="detail-content-container"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <ImageWrapper
                className="detail-img-container"
                variants={springPop}
              >
                {project.detail.image.length ===
                1 ? (
                  <motion.img
                    src={
                      project.detail.image[0].src
                    }
                    loading="lazy"
                    alt="프로젝트 이미지"
                    onClick={() =>
                      setIsImageOpen(true)
                    }
                    whileHover={{
                      scale: 1.04,
                      rotate: 0.5,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 18,
                    }}
                  />
                ) : (
                  <SwiperImage
                    images={project.detail.image}
                    onClick={() =>
                      setIsImageOpen(true)
                    }
                  />
                )}
              </ImageWrapper>

              <ContentWrapper
                className="detail-content"
                variants={fadeUp}
              >
                <ContentTitle
                  variants={fadeUp}
                >
                  {project.content}
                </ContentTitle>

                <motion.p
                  className="detail-sub-content"
                  variants={fadeUp}
                  dangerouslySetInnerHTML={{
                    __html:
                      project.detail.content,
                  }}
                />

                {project.detail.video && (
                  <motion.div
                    className="video-wrap"
                    variants={springPop}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                  >
                    <video
                      src={project.detail.video}
                      poster={Thumbnail}
                      autoPlay
                      playsInline
                      controls
                      muted
                      aria-label="시연영상"
                    />
                  </motion.div>
                )}

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                >
                  {project.detail.github && (
                    <motion.div
                      variants={fadeUp}
                    >
                      <Link
                        title="GitHub"
                        links={
                          project.detail.github
                        }
                      />
                    </motion.div>
                  )}

                  {project.detail.notion && (
                    <motion.div
                      variants={fadeUp}
                    >
                      <Link
                        title="Notion"
                        links={
                          project.detail.notion
                        }
                      />
                    </motion.div>
                  )}

                  {project.detail.site && (
                    <motion.div
                      variants={fadeUp}
                    >
                      <Link
                        title="URL"
                        links={
                          project.detail.site
                        }
                      />
                    </motion.div>
                  )}

                  {project.detail.blog &&
                    project.detail.blog.length >
                      0 && (
                      <motion.div
                        variants={fadeUp}
                      >
                        <Link
                          title="Blog"
                          links={
                            project.detail.blog
                          }
                        />
                      </motion.div>
                    )}
                </motion.div>

                <SectionTitle
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                >
                  기술 스택
                </SectionTitle>

                {project.detail.stack &&
                  Object.entries(
                    project.detail.stack ?? {},
                  ).map(
                    ([key, stackList]) => {
                      const typedKey =
                        key as keyof typeof StackName;

                      const list =
                        stackList as string[];

                      if (list.length === 0) {
                        return null;
                      }

                      return (
                        <motion.div
                          key={typedKey}
                          initial="hidden"
                          whileInView="visible"
                          viewport={viewport}
                          variants={
                            staggerContainer
                          }
                        >
                          <StackCategoryTitle
                            variants={fadeUp}
                          >
                            {
                              StackName[
                                typedKey
                              ]
                            }
                          </StackCategoryTitle>

                          <StackTagContainer
                            variants={
                              staggerContainer
                            }
                          >
                            {list.map(
                              (stack) => (
                                <StackTag
                                  key={stack}
                                  variants={
                                    springPop
                                  }
                                  whileHover={{
                                    scale: 1.08,
                                    y: -4,

                                    background:
                                      "rgba(118, 164, 218, 0.25)",

                                    borderColor:
                                      "var(--primary-color)",
                                  }}
                                  whileTap={{
                                    scale: 0.96,
                                  }}
                                >
                                  {stack}
                                </StackTag>
                              ),
                            )}
                          </StackTagContainer>
                        </motion.div>
                      );
                    },
                  )}
              </ContentWrapper>
            </motion.div>
          </motion.div>

          <AnimatePresence>
            {isImageOpen && (
              <ModalBackdrop
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                onClick={() =>
                  setIsImageOpen(false)
                }
              >
                <ModalContent
                  initial={{
                    opacity: 0,
                    scale: 0.75,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.85,
                    y: 30,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 240,
                    damping: 22,
                  }}
                  onClick={(event) =>
                    event.stopPropagation()
                  }
                >
                  <SwiperImage
                    images={
                      project.detail.image
                    }
                  />

                  <Btn.CloseBtn
                    onClick={() =>
                      setIsImageOpen(false)
                    }
                  />
                </ModalContent>
              </ModalBackdrop>
            )}
          </AnimatePresence>
        </>
      ) : (
        <p>프로젝트 정보를 불러오는 중...</p>
      )}
    </Container>
  );
};

export default DetailPage;