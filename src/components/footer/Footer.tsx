import styled from "styled-components";
import GraLine from "@/components/common/GradationLine";
import {FooterLogo} from '../header/Logo';
import { useMediaQuery } from '@/hooks/useMediaQuery'

import emailSvg from "@/assets/images/common/email.svg";
import phoneSvg from "@/assets/images/common/phone.svg";

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

const FooterIcon = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    img {
        width: 25px;
        height: auto;
    }
`

const Footer = () => {
    const isSmallMobile = useMediaQuery('(max-width: 480px)');

    return ( 
        <FooterWrapper>
            <GraLine />
            <FooterContent>
            <FooterLogo />
                <FooterIcon>
                    <img src={emailSvg} alt="email" loading="lazy" />
                    {isSmallMobile ? <p>010-8927-2421</p> : <p>연락처: 010-8927-2421</p>}
                </FooterIcon>
                <FooterIcon>
                    <img src={phoneSvg} alt="phone" loading="lazy" />
                    {isSmallMobile ? <p>dusen380@gmail.com</p> : <p>이메일: dusen380@gmail.com</p>}
                </FooterIcon>
                </FooterContent>
            
        </FooterWrapper>
    );
}

export default Footer;