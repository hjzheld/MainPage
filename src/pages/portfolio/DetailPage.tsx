import styled from "styled-components";

import Link from "@/components/detail/Link";
import { Title } from "@/components/common/Title";
import Container from "@/components/common/Container";

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


const MultiImagePreview = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  cursor: zoom-in;
`;

const PreviewImage = styled(motion.img)`
  display: block;
  width: 100%;
  height: auto;
  max-height: 600px;

  object-fit: contain;
  user-select: none;
`;

const PreviewNavButton = styled.button<{
  $direction: "prev" | "next";
}>`
  position: absolute;
  top: 50%;

  ${({ $direction }) =>
    $direction === "prev"
      ? "left: 1rem;"
      : "right: 1rem;"}

  z-index: 5;

  width: 44px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: 1px solid rgba(154, 189, 230, 0.5);
  border-radius: 50%;

  background: rgba(114, 130, 151, 0.85);

  transform: translateY(-50%);

  transition:
    opacity 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;

  /* 화살표 */
  &::before {
    content: "";

    width: 10px;
    height: 10px;

    border-top: 2px solid #fff;
    border-right: 2px solid #fff;

    ${({ $direction }) =>
      $direction === "prev"
        ? `
          transform: translateX(2px) rotate(-135deg);
        `
        : `
          transform: translateX(-2px) rotate(45deg);
        `}
  }

  &:hover:not(:disabled) {
    background: rgba(116, 125, 136, 0.95);
  }

  &:disabled {
    opacity: 0.25;
  }

  @media (max-width: 768px) {
    width: 38px;
    height: 38px;

    ${({ $direction }) =>
      $direction === "prev"
        ? "left: 0.5rem;"
        : "right: 0.5rem;"}
  }
`;

const ModalBackdrop = styled(motion.div)`
  position: fixed;
  inset: 0;

  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  background: rgba(0, 0, 0, 0.78);
  backdrop-filter: blur(6px);
`;

const ModalContent = styled(motion.div)`
  position: relative;

  width: min(86vw, 1200px);
  height: min(84vh, 860px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalImage = styled(motion.img)`
  display: block;

  max-width: 100%;
  max-height: 100%;

  width: auto;
  height: auto;

  object-fit: contain;
  user-select: none;
`;

const ModalNavButton = styled.button<{
  $direction: "prev" | "next";
}>`
  position: absolute;
  top: 50%;

  ${({ $direction }) =>
    $direction === "prev"
      ? "left: 32px;"
      : "right: 32px;"}

  z-index: 10001;

  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  margin: 0;

  border: 1px solid rgba(154, 189, 230, 0.5);
  border-radius: 50%;

  background: rgba(114, 130, 151, 0.85);
  transform: translateY(-50%);

  transition:
    opacity 0.2s ease,
    background 0.2s ease;

  /* 화살표 직접 그리기 */
  &::before {
    content: "";

    width: 11px;
    height: 11px;

    border-top: 2px solid #fff;
    border-right: 2px solid #fff;

    ${({ $direction }) =>
      $direction === "prev"
        ? `
          transform: translateX(2px) rotate(-135deg);
        `
        : `
          transform: translateX(-2px) rotate(45deg);
        `}
  }

  &:hover:not(:disabled) {
    background: rgba(116, 125, 136, 0.95);
  }

  &:active:not(:disabled) {
    background: rgba(116, 125, 136, 0.95);
  }

  &:disabled {
    opacity: 0.18;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    width: 42px;
    height: 42px;

    ${({ $direction }) =>
      $direction === "prev"
        ? "left: 12px;"
        : "right: 12px;"}

    &::before {
      width: 9px;
      height: 9px;
    }
  }
`;

const ModalCounter = styled.div`
  position: absolute;
  left: 50%;
  bottom: 24px;

  z-index: 10001;

  transform: translateX(-50%);

  padding: 0.4rem 0.75rem;
  border-radius: 999px;

  background: rgba(0, 0, 0, 0.65);
  color: #fff;

  font-size: 0.85rem;
  pointer-events: none;
`;

const ModalCloseButton = styled.button`
  /*
   * ModalBackdrop 자체가 position: fixed + inset: 0 이므로
   * 그 안에서 absolute로 고정하면 이미지 scale 애니메이션과
   * 아무 상관 없이 우측 상단 위치가 항상 동일함.
   */
  position: absolute;
  top: 20px;
  right: 20px;

  z-index: 10002;

  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  margin: 0;

  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 50%;

  background: rgba(0, 0, 0, 0.68);

  /*
   * transform을 transition 대상에서 완전히 제외.
   * hover / active 시 버튼 위치와 크기가 절대 변하지 않음.
   */
  transform: none !important;
  transition:
    background 0.2s ease,
    border-color 0.2s ease;

  &::before,
  &::after {
    content: "";
    position: absolute;

    left: 50%;
    top: 50%;

    width: 22px;
    height: 2px;

    border-radius: 999px;
    background: #fff;

    transform-origin: center;
  }

  &::before {
    transform:
      translate(-50%, -50%)
      rotate(45deg);
  }

  &::after {
    transform:
      translate(-50%, -50%)
      rotate(-45deg);
  }

  &:hover {
    background: rgba(0, 0, 0, 0.88);
    border-color: rgba(255, 255, 255, 0.7);
    transform: none !important;
  }

  &:active {
    background: rgba(0, 0, 0, 0.95);
    transform: none !important;
  }

  @media (max-width: 768px) {
    top: 12px;
    right: 12px;

    width: 44px;
    height: 44px;

    &::before,
    &::after {
      width: 19px;
    }
  }
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

  const [previewImageIndex, setPreviewImageIndex] =
    useState(0);

  const [currentImageIndex, setCurrentImageIndex] =
    useState(0);

  useEffect(() => {
    const stored =
      localStorage.getItem("project");

    if (stored) {
      setProject(JSON.parse(stored));
    }
  }, []);

  const imageCount =
    project?.detail.image.length ?? 0;

  const hasPreviewPrev =
    previewImageIndex > 0;

  const hasPreviewNext =
    previewImageIndex < imageCount - 1;

  const hasPrevImage =
    currentImageIndex > 0;

  const hasNextImage =
    currentImageIndex < imageCount - 1;

  const openImageModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsImageOpen(true);
  };

  const closeImageModal = () => {
    setIsImageOpen(false);
  };

  const showPreviewPrev = () => {
    if (!hasPreviewPrev) return;
    setPreviewImageIndex((prev) => prev - 1);
  };

  const showPreviewNext = () => {
    if (!hasPreviewNext) return;
    setPreviewImageIndex((prev) => prev + 1);
  };

  const showPrevImage = () => {
    if (!hasPrevImage) return;
    setCurrentImageIndex((prev) => prev - 1);
  };

  const showNextImage = () => {
    if (!hasNextImage) return;
    setCurrentImageIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (!isImageOpen) return;

    const previousBodyOverflow =
      document.body.style.overflow;
    const previousHtmlOverflow =
      document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsImageOpen(false);
        return;
      }

      if (event.key === "ArrowLeft") {
        setCurrentImageIndex((prev) =>
          Math.max(prev - 1, 0),
        );
      }

      if (event.key === "ArrowRight") {
        setCurrentImageIndex((prev) =>
          Math.min(
            prev + 1,
            Math.max(imageCount - 1, 0),
          ),
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow =
        previousBodyOverflow;
      document.documentElement.style.overflow =
        previousHtmlOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [isImageOpen, imageCount]);

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
                {project.detail.image.length === 1 ? (
                  <motion.img
                    src={project.detail.image[0].src}
                    loading="lazy"
                    alt="프로젝트 이미지"
                    onClick={() => openImageModal(0)}
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
                  <MultiImagePreview
                    onClick={() =>
                      openImageModal(previewImageIndex)
                    }
                  >
                    <PreviewImage
                      key={previewImageIndex}
                      src={
                        project.detail.image[
                          previewImageIndex
                        ]?.src
                      }
                      loading="lazy"
                      alt={`${project.title} 프로젝트 이미지 ${
                        previewImageIndex + 1
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      draggable={false}
                    />

                    <PreviewNavButton
                      type="button"
                      $direction="prev"
                      aria-label="이전 이미지"
                      disabled={!hasPreviewPrev}
                      onClick={(event) => {
                        event.stopPropagation();
                        showPreviewPrev();
                      }}
                    >
                    </PreviewNavButton>

                    <PreviewNavButton
                      type="button"
                      $direction="next"
                      aria-label="다음 이미지"
                      disabled={!hasPreviewNext}
                      onClick={(event) => {
                        event.stopPropagation();
                        showPreviewNext();
                      }}
                    >
                    </PreviewNavButton>
                  </MultiImagePreview>
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeImageModal}
              >
                <ModalContent
                  initial={{
                    opacity: 0,
                    scale: 0.92,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.96,
                  }}
                  transition={{
                    duration: 0.18,
                  }}
                  onClick={(event) =>
                    event.stopPropagation()
                  }
                >
                  <ModalImage
                    key={currentImageIndex}
                    src={
                      project.detail.image[
                        currentImageIndex
                      ]?.src
                    }
                    alt={`${project.title} 프로젝트 이미지 ${
                      currentImageIndex + 1
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.18 }}
                    draggable={false}
                  />
                </ModalContent>

                {imageCount > 1 && (
                  <>
                    <ModalNavButton
                      type="button"
                      $direction="prev"
                      aria-label="이전 이미지"
                      disabled={!hasPrevImage}
                      onClick={(event) => {
                        event.stopPropagation();
                        showPrevImage();
                      }}
                    >
                    </ModalNavButton>

                    <ModalNavButton
                      type="button"
                      $direction="next"
                      aria-label="다음 이미지"
                      disabled={!hasNextImage}
                      onClick={(event) => {
                        event.stopPropagation();
                        showNextImage();
                      }}
                    >
                    </ModalNavButton>

                    <ModalCounter>
                      {currentImageIndex + 1} / {imageCount}
                    </ModalCounter>
                  </>
                )}

                <ModalCloseButton
                  type="button"
                  aria-label="이미지 크게 보기 닫기"
                  onClick={(event) => {
                    event.stopPropagation();
                    closeImageModal();
                  }}
                />
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
