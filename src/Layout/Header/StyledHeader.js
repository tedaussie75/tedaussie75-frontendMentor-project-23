import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .hamburger-btn,
    .closing-btn {
        display: none;
    }

    @media screen and (max-width: 980px) {
        .hamburger-btn,
        .closing-btn {
            display: block;
            background: none;
            border: none;
            cursor: pointer;
            max-width: 40px;
        }

        .closing-btn {
            position: absolute;
            top: 30px;
            right: 30px;
        }
    }
`;

export const StyledNav = styled.nav`
        &.show-menu {
            display : block;
        }

        @media screen and (max-width: 980px) {
            display: none;
            position: fixed;
            height: 100vh;
            width: 100vw;
            top: 0;
            left: 0;
            background-color: rgba(0,0,0,0.5);
        }

        ul {
            display: flex;
            list-style-type: none;
            gap: 40px;

            @media screen and (max-width: 980px) {
                position: relative;
                justify-content: center;
                margin-left: auto;
                flex-direction: column;
                gap: 30px;
                background: white;
                height: 100vh;
                width: 70%;
                position: relative;
                right: 0;
                top: 0;
                padding: 30px;
            }

            li a {
                font-size: 14px;
                color: var(--dark-grayish-blue);
                text-decoration: none;

                @media screen and (min-width: 850px) {
                    &:hover {
                        color: var(--soft-red);
                    }
                }
            }
    }
`;