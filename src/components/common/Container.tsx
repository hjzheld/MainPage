import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: var(--main-background);
    margin: 0 auto;
    padding: 1.2rem 2rem;
    box-sizing: border-box;
    
    @media (max-width: 1200px) {
        padding: 1.2rem 1.5rem;
    }
    
    @media (max-width: 768px) {
        padding: 1rem 1rem;
    }
    
    @media (max-width: 480px) {
        padding: 0.875rem 0.75rem;
    }
    
    @media (max-width: 360px) {
        padding: 0.75rem 0.5rem;
    }
`

export default Container