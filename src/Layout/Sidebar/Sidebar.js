import Data from '../../Data/data.json';
import {StyledSidebar} from './StyledSidebar';

const {title, articles} = Data.main.sidebar;

function Sidebar() {
  return (
    <StyledSidebar>
      <h2>{title}</h2>
      {articles.map((article, index) => {
        return <article key={index}>
          <h3><a href="#">{article.title}</a></h3>
          <p>{article.text}</p>
        </article>
      })}
    </StyledSidebar>
  );
}

export default Sidebar;
