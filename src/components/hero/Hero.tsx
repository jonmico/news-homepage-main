import SidePanel from '../side-panel/SidePanel';
import {
  StyledHero,
  Image,
  Main,
  StyledH1,
  MainInfo,
  StyledP,
  Link,
} from './Hero.styled';

export default function Hero() {
  return (
    <StyledHero>
      <div>
        <Image src={'/images/image-web-3-desktop.jpg'} />
      </div>
      <SidePanel />
      <Main>
        <div>
          <StyledH1>The Bright Future of Web 3.0?</StyledH1>
        </div>
        <div>
          <MainInfo>
            <StyledP>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </StyledP>
            <div>
              <Link>Read More</Link>
            </div>
          </MainInfo>
        </div>
      </Main>
    </StyledHero>
  );
}
