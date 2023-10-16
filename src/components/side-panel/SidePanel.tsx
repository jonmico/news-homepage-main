import SidePanelArticle from '../side-panel-article/SidePanelArticle';
import { StyledSidePanel, StyledH2 } from './SidePanel.styled';

export default function SidePanel() {
  return (
    <StyledSidePanel>
      <StyledH2>New</StyledH2>
      <SidePanelArticle
        title={'Hydrogen VS Electric Cars'}
        text={'Will hydrogen-fueled cars ever catch up to EVs?'}
      />
      <SidePanelArticle
        title={'The Downsides of AI Artistry'}
        text={
          'What are the possible adverse effects of on-demand AI image generation?'
        }
      />
      <SidePanelArticle
        title={'Is VC Funding Drying Up?'}
        text={
          'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
        }
      />
    </StyledSidePanel>
  );
}
