import styled from "styled-components";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

import Container from "@/components/common/Container";
import { Title } from "@/components/common/Title";
import Card from "@/components/detail/Card";
import Btn from "@/components/common/Btn";

import projects from "@/data/project";
import categories from "@/data/categry";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { SubCategory } from "@/types/category";

const Category = styled(motion.div)`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 2rem 1rem 2rem;
  min-height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    padding: 1.75rem 1.5rem 0.75rem 1.5rem;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem 0.5rem 1rem;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 0.5rem 0.5rem 0.5rem;
    gap: 0.75rem;
  }

  @media (max-width: 360px) {
    padding: 0.75rem 0.25rem 0.5rem 0.25rem;
    gap: 0.5rem;
  }
`;

const SubCategoryWrapper = styled(motion.div)`
  min-height: 30px;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  padding: 0 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 1rem;

  @media (max-width: 1200px) {
    padding: 0 1.5rem;
    gap: 0.875rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    gap: 0.75rem;
    margin-top: 1rem;
    margin-bottom: 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
    gap: 0.5rem;
    margin-top: 0.75rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 360px) {
    padding: 0 0.25rem;
    gap: 0.375rem;
  }
`;

const CardContainer = styled(motion.div)`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;

  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(300px, 1fr)
  );

  gap: 2rem;
  align-items: stretch;

  @media (max-width: 1400px) {
    padding: 1.75rem;
    gap: 1.75rem;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(
      auto-fill,
      minmax(280px, 1fr)
    );

    gap: 1.5rem;
    padding: 1.5rem;
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(
      auto-fill,
      minmax(260px, 1fr)
    );

    gap: 1.25rem;
    padding: 1.25rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(
      auto-fill,
      minmax(240px, 1fr)
    );

    gap: 1rem;
    padding: 1rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.875rem;
    padding: 0.75rem;
  }

  @media (max-width: 360px) {
    gap: 0.75rem;
    padding: 0.5rem;
  }
`;

const CardWrapper = styled(motion.div)`
  display: flex;
  height: 100%;
`;

const PortfolioPage = () => {
  const navigate = useNavigate();

  const [selectedTab, setTab] =
    useState<"all" | "front" | "back">("all");

  const [selectedSub, setSub] =
    useState<string | null>(null);

  // ==========================================
  // 프로젝트 필터
  // ==========================================
  const filteredList = projects.filter(
    (project) => {
      if (selectedTab === "all") {
        return true;
      }

      if (selectedTab !== project.mainTab) {
        return false;
      }

      if (
        selectedSub &&
        selectedSub !== project.subTab
      ) {
        return false;
      }

      return true;
    },
  );

  const selectedCategory = categories.find(
    (category) =>
      category.type === selectedTab,
  );

  return (
    <Container>
      <Title page="main" title="포트폴리오" />

      {/* ==========================================
          메인 카테고리
      ========================================== */}
      <Category
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
        }}
      >
        {categories.map((tab) => (
          <motion.div
            key={tab.type}
            whileHover={{
              scale: 1.06,
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 18,
            }}
          >
            <Btn.CategoryBtn
              tab={tab}
              active={
                selectedTab === tab.type
              }
              onClick={() => {
                setTab(
                  tab.type as
                    | "all"
                    | "front"
                    | "back",
                );

                setSub(null);
              }}
            />
          </motion.div>
        ))}
      </Category>

      {/* ==========================================
          서브 카테고리
      ========================================== */}
      <AnimatePresence mode="wait">
        {selectedCategory?.subTitle && (
          <SubCategoryWrapper
            key={selectedCategory.type}
            initial={{
              opacity: 0,
              scale: 0.9,
              y: -10,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: -10,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 20,
            }}
          >
            <Btn.SubCategory
              tab={selectedCategory}
              active={true}
              selectedSub={
                selectedSub ?? undefined
              }
              onClick={(
                subTitle?: SubCategory,
              ) => {
                if (subTitle) {
                  setSub(subTitle.type);
                }
              }}
            />
          </SubCategoryWrapper>
        )}
      </AnimatePresence>

      {/* ==========================================
          프로젝트 카드
      ========================================== */}
      <CardContainer
        layout
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}
      >
        <AnimatePresence mode="popLayout">
          {filteredList.map(
            (project, index) => {
              const direction =
                index % 2 === 0 ? -35 : 35;

              return (
                <CardWrapper
                  key={project.id}

                  // ⭐ 필터 변경 시 남아 있는 카드
                  // 새 위치로 자연스럽게 이동
                  layout

                  // ⭐ 새로 나타나는 카드
                  initial={{
                    opacity: 0,
                    scale: 0.92,
                    x: direction,
                    y: 20,
                  }}

                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    y: 0,
                  }}

                  // ⭐ 필터에서 제외되는 카드
                  exit={{
                    opacity: 0,
                    scale: 0.85,
                    y: 20,
                  }}

                  transition={{
                    // 카드 재배치
                    layout: {
                      type: "spring",
                      stiffness: 280,
                      damping: 24,
                    },

                    opacity: {
                      duration: 0.2,
                    },

                    scale: {
                      duration: 0.25,
                    },

                    delay: index * 0.04,
                  }}

                  // ⭐ 카드 hover
                  whileHover={{
                    y: -7,
                    scale: 1.015,
                  }}

                  whileTap={{
                    scale: 0.98,
                  }}
                >
                  <Card
                    project={project}
                    onClick={() => {
                      localStorage.setItem(
                        "project",
                        JSON.stringify(
                          project,
                        ),
                      );

                      navigate(
                        `/project/${project.id}`,
                      );
                    }}
                  />
                </CardWrapper>
              );
            },
          )}
        </AnimatePresence>
      </CardContainer>
    </Container>
  );
};

export default PortfolioPage;