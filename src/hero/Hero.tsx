import SidePanel from '../side-panel/SidePanel';
import { StyledHero, Image, ImageContainer } from './Hero.styled';

export default function Hero() {
  return (
    <StyledHero>
      <ImageContainer>
        <Image src={'/images/image-web-3-desktop.jpg'} />
      </ImageContainer>
      <SidePanel />
    </StyledHero>
  );
}
