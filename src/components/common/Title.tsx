import styled from "styled-components";

type TitleProps = {
    page?: string
}

const Title = styled.div<TitleProps>`
    width: 100%;
    padding-top: 5rem;
    font-size: 3rem;
    font-weight: 600;
    display: flex;
    justify-content: ${({ page }) => page == 'main' ? 'center' : 'start'};
`

export default Title