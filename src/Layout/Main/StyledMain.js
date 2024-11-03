import styled from 'styled-components';

export const StyledMain = styled.div`
    margin-top: 50px;
    display: flex;
    gap: 25px;

    @media screen and (max-width: 850px) {
        flex-direction: column;
        gap: 70px;
    }
`;

export const StyledMainArticle = styled.article`
    flex: 2;
`;

export const StyledMainText = styled.div`
    margin-top: 20px;
    display : flex;

    @media screen and (max-width: 850px) {
        flex-direction: column;
    }

    & > div,
    h2 {
        flex: 1;
    }

    h2 {
        font-size: 48px;
        line-height: 1;

        @media screen and (max-width: 850px) {
            font-size: 50px;
            width: 60%;
            line-height: 1;
            margin-bottom: 20px;
        }
    }

    & > div {
        p {
            width: 95%;
            color: var(--dark-grayish-blue);
            font-size: 14px;
            line-height: 1.5;

            @media screen and (max-width: 850px) {
                font-size: 18px;
            }
        }

        button {
            font-size: 12px;
            font-weight: bold;
            padding: 10px 25px;
            margin-top: 30px;
            border: none;
            letter-spacing: 1px;
            background-color: var(--soft-red);
            cursor: pointer;

            @media screen and (min-width: 850px) {
                &:hover {
                    color: var(--off-white);
                    background-color: var(--very-dark-blue);
                }
            }
        }
    }
`;