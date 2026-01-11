import styled from "styled-components";
import GraLine from "@/components/common/GradationLine";
import {FooterLogo} from '../header/Logo';

const FooterWrapper = styled.footer`
    width: 100%;
    padding: 1rem 2rem;
`;

const FooterContent = styled.footer`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 1rem;
    padding: 50px 0;
    margin: 0 auto;
`;

const Footer = () => {
    return ( 
        <FooterWrapper>
            <GraLine />
            <FooterContent>
            <FooterLogo />
                <p>연락처: 010-8927-2421</p>
                <p>이메일: dusen380@gmail.com</p>
            </FooterContent>
            
        </FooterWrapper>
    );
}

export default Footer;