import {StyledFooter} from './StyledFooter';
import Data from '../../Data/data.json';
import Image from '../../Components/Image/Image';

function Footer() {
  return (
    <StyledFooter>
        <div>
            {Data.footer.articles.map((article, index)=> {
                return <article key={index}>
                    <Image src={process.env.PUBLIC_URL + article.img.src} alt={article.img.alt}/>
                    <div>
                        <h2>{article.article_number}</h2>
                        <h3>{article.title}</h3>
                        <p>{article.text}</p>
                    </div>
                </article>
            })}
        </div>
    </StyledFooter>
  );
}

export default Footer;
