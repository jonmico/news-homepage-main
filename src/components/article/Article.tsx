import {
  StyledArticle,
  StyledH1,
  StyledDiv,
  StyledP,
  Link,
} from './Article.styled';

export default function Article() {
  return (
    <StyledArticle>
      <StyledH1>The Bright Future of Web 3.0?</StyledH1>
      <StyledDiv>
        <StyledP>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </StyledP>
        <Link href='#'>Read more</Link>
      </StyledDiv>
    </StyledArticle>
  );
}
