import { StyledBottomPanel } from './BottomPanel.styled';

import BottomPanelArticle from '../bottom-panel-article/BottomPanelArticle';

export default function BottomPanel() {
  return (
    <StyledBottomPanel>
      <BottomPanelArticle
        src={'/images/image-retro-pcs.jpg'}
        number={'01'}
        title={'Reviving Retro PCs'}
        text={'What happens when old PCs are given modern upgrades?'}
      />
      <BottomPanelArticle
        src={'/images/image-top-laptops.jpg'}
        number={'02'}
        title={'Top 10 Laptops of 2022'}
        text={'Our best picks for various needs and budgets.'}
      />
      <BottomPanelArticle
        src={'/images/image-gaming-growth.jpg'}
        number={'03'}
        title={'The Growth of Gaming'}
        text={'How the pandemic has sparked fresh opportunities.'}
      />
    </StyledBottomPanel>
  );
}
