import {
  StyledH3,
  StyledP,
  StyledSidePanelArticle,
} from './SidePanelArticle.styled';

interface SidePanelArticleProps {
  title: string;
  text: string;
}

export default function SidePanelArticle({
  title,
  text,
}: SidePanelArticleProps) {
  return (
    <StyledSidePanelArticle>
      <StyledH3>{title}</StyledH3>
      <StyledP>{text}</StyledP>
    </StyledSidePanelArticle>
  );
}
