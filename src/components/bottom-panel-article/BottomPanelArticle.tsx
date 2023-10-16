import {
  StyledBottomPanelArticle,
  Image,
  InfoContainer,
  StyledSpan,
  StyledH3,
  StyledP,
} from './BottomPanelArticle.styled';

interface BottomPanelArticleProps {
  src: string;
  number: string;
  title: string;
  text: string;
}

export default function BottomPanelArticle({
  src,
  number,
  title,
  text,
}: BottomPanelArticleProps) {
  return (
    <StyledBottomPanelArticle>
      <Image src={src} alt='Retro PCs' />
      <InfoContainer>
        <StyledSpan>{number}</StyledSpan>
        <StyledH3>{title}</StyledH3>
        <StyledP>{text}</StyledP>
      </InfoContainer>
    </StyledBottomPanelArticle>
  );
}
