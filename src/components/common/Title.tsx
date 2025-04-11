import styled from "styled-components";
import backIcon from '@/assets/images/common/back.png';

import { useNavigate } from 'react-router-dom';

type TitleProps = {
    title: string,
    page: string
}

const TitleStyle = styled.div<{ page?: string }>`
    width: 100%;
    padding-top: ${({ page }) => page == 'main' ? '5rem' : '0px'};
    padding-bottom: ${({ page }) => page == 'main' ? '0px' : '2rem'};
    font-size: ${({ page }) => page == 'main' ? '3rem' : '2rem'};
    font-weight: 600;
    display: flex;
    justify-content: ${({ page }) => page == 'main' ? 'center' : 'start'};
    padding-left: ${({ page }) => page == 'main' ? '0px' : '5rem'};

    .back-btn {
        display: flex;
        align-items: center;
        gap: 1rem;

        img {
            width: 30px;
            height: auto;
            cursor: pointer;

            transition: transform 0.3s ease; 

            &:hover {
                transform: scale(1.2);
            }
        }
    }
`

const Title = ( {title, page }: TitleProps) => {
    const navigate = useNavigate();

    return (
        <TitleStyle page={page}>
            {page === 'detail' ? (
                <>
                <div className="back-btn">
                    <img src={backIcon} alt="뒤로가기 버튼" onClick={() => navigate(-1)}/>
                    {title}
                </div>
                </>
                ) : (
                    title
                )}
        </TitleStyle>
    )
}


export default Title