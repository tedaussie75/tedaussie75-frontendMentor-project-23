import styled from 'styled-components';

export const StyledFooter = styled.div`
    margin-top: 70px;
    & > div {
        display: flex;
        @media screen and (max-width: 850px) {
            flex-direction: column;
            gap: 30px;
        }
    }

    article {
        display: flex;
        flex: 1;
        @media screen and (min-width: 850px) {
            max-width: 307px;
        }

        img {
            max-width: 80px;
            height: 100%;
            object-fit: cover;

            @media screen and (max-width: 850px) {
                max-width: 110px;
            }
        }

        & > div {
            padding-left: 20px;
        }

        h2 {
            color: var(--soft-red);

            @media screen and (max-width: 850px) {
                font-size: 35px;
            }
        }

        h3 {
            font-size: 16px;
            margin: 10px 0;

            @media screen and (max-width: 850px) {
                font-size: 20px;
            }

            @media screen and (min-width: 850px) {
                cursor: pointer;
                &:hover {
                    color: var(--soft-red);
                }
            }
        }

        p {
            width: 90%;
            font-size: 12px;
            line-height: 1.5;
            color: var(--dark-grayish-blue);

            @media screen and (max-width: 850px) {
                font-size: 18px;
            }
        }
    }
`;