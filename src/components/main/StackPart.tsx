import styled from "styled-components";
import { LayoutCard } from '@/components/common/LayoutCard';
import { SubTitle } from '@/components/common/Title';
import { motion } from 'framer-motion';

const CardsGrid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    width: 100%;
    max-width: 1000px;
    margin: 3rem 0;
    padding: 0 2rem;
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

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

export const StackCard = () => {
    const cards = [
        {
            id: "card-1",
            title: "프론트엔드",
            stack: [
                {
                  name: "React",
                  logo: "https://cdn.simpleicons.org/react"
                },
                {
                  name: "Vue",
                  logo: "https://cdn.simpleicons.org/vue.js"
                },
                {
                  name: "Nuxt",
                  logo: "https://api.iconify.design/simple-icons:nuxt.svg?color=%2300C58E"
                },
                {
                  name: "JavaScript",
                  logo: "https://cdn.simpleicons.org/javascript"
                },
                {
                  name: "TypeScript",
                  logo: "https://cdn.simpleicons.org/typescript"
                }
              ]
        },
        {
            id: "card-2",
            title: "백엔드",
            stack: [
                {
                    name: "Django",
                    logo: "https://cdn.simpleicons.org/django"
                },
                {
                    name: "FastAPI",
                    logo: "https://cdn.simpleicons.org/fastapi"
                },
                {
                    name: "Node.js",
                    logo: "https://cdn.simpleicons.org/node.js"
                }
            ]
        },
        {
            id: "card-3",
            title: "데이터베이스",
            stack: [
                {
                    name: "PostgreSQL",
                    logo: "https://cdn.simpleicons.org/postgresql"
                },
                {
                    name: "MySQL",
                    logo: "https://cdn.simpleicons.org/mysql"
                }
            ]
        },
        {
            id: "card-4",
            title: "인프라",
            stack: [
                {
                    name: "Docker",
                    logo: "https://cdn.simpleicons.org/docker"
                },
                {
                    name: "Render",
                    logo: "https://cdn.simpleicons.org/render"
                },
                {
                    name: "Supabase",
                    logo: "https://cdn.simpleicons.org/supabase"
                }
            ]
        }
    ];

    return (
        <div>
            <SubTitle title="Stack"/>
            <CardsGrid
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            >
                    {cards.map((card) => (
                        <LayoutCard
                            key={card.id}
                            title={card.title}
                            stack={card.stack}
                            layoutId={card.id}
                        />
                    ))}
            </CardsGrid>
        </div>
    )
}