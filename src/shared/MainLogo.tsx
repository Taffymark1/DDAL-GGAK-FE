import styled from 'styled-components';
import { Logo } from 'assets/icons';
import { SVG_SIZE, DEFAULT_VARIANTS } from 'constants/';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function MainLogo() {
  return (
    <Link to={'/'}>
      <Wrapper
        variants={DEFAULT_VARIANTS}
        initial="from"
        animate="to"
        exit="exit"
      >
        <Logo size={SVG_SIZE.LOGO_SIZE} />
        <LogoText>DDAL-GGAK</LogoText>
      </Wrapper>
    </Link>
  );
}

const Wrapper = styled(motion.div)`
  display: flex;
  gap: 10px;
  align-items: center;
  position: fixed;
  left: 1rem;
  top: 1rem;
`;

const LogoText = styled.h1`
  font-weight: 600;
  font-size: 20px;
`;
