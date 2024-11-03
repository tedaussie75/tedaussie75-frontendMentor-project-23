import {StyledImage, StyledPicture} from './StyledImage';

function Image({isPicture, src, srcset, alt}) {
    {
        if(isPicture) {
            return (
                <StyledPicture>
                    <source media="(min-width:768px)" srcset={srcset.desktop}/>
                    <source media="(max-width:768px)" srcset={srcset.mobile}/>
                    <img src={src} alt={alt}/>
                </StyledPicture>
            )

        } else {
            return (
                <StyledImage src={src} alt={alt}/>
            )
        }
    }
}

export default Image;
