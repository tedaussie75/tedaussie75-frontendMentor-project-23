import Data from '../../Data/data.json';
import {StyledMain, StyledMainArticle, StyledMainText} from './StyledMain';
import Sidebar from '../Sidebar/Sidebar';
import Image from '../../Components/Image/Image';

const {main_img, main_content} = Data.main;

function Main() {
  return (
    <StyledMain>
        <StyledMainArticle>
            <Image isPicture={true} src={process.env.PUBLIC_URL + main_img.desktop} srcset={{'desktop': process.env.PUBLIC_URL + main_img.desktop, 'mobile': process.env.PUBLIC_URL + main_img.mobile}} alt={main_img.alt}/>
            <StyledMainText>
                <h2>{main_content.title}</h2>
                <div>
                    <p>{main_content.paragraphe}</p>
                    <button>{main_content.button_text}</button>
                </div>
            </StyledMainText>
        </StyledMainArticle>
        <Sidebar/>
    </StyledMain>
  );
}

export default Main;
