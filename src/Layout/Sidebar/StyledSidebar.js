import styled from 'styled-components';

export const StyledSidebar = styled.div`
    height: fit-content;
    flex: 1;
    background-color: var(--very-dark-blue);
    padding: 25px 20px;

    h2 {
        color: var(--soft-orange);
        font-size: 30px;
        margin-bottom: 20px;
    }

    h3 a {
        color: var(--off-white);
        text-decoration: none;

        @media screen and (min-width: 850px) {
            &:hover {
                color: var(--soft-orange);
            }
        }
    }

    article {
        padding: 15px 0;

        p {
            font-weight: 100;
            line-height: 1.5;
            margin-top: 10px;
            color: var(--grayish-blue);
        }
    }

    article:not(:first-of-type) {
        border-top: 1px solid var(--dark-grayish-blue);
    }

`;