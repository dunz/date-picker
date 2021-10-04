import styled from 'styled-components';

export const Styled = {
    Calendar: styled.article`
        & > h1 {
            margin-bottom: 20px;
        }
        & > ul {
            list-style: none;
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            grid-gap: 1px;

            & > li {
                background: #fff;
                color: #000;
                box-sizing: border-box;
                padding: 15px 20px;
                position: relative;
                &.weekday {
                    font-weight: bold;
                    margin-bottom: 2px;
                }
                &.prev-dates,
                &.next-dates {
                    opacity: 0.2;
                }
                &:nth-child(7n) {
                    color: blue;
                }
                &:nth-child(7n + 1) {
                    color: red;
                }
                &.today:before {
                    content: '';
                    position: absolute;
                    box-sizing: border-box;
                    display: block;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    border-radius: 100%;
                    width: 1.8em;
                    height: 1.8em;
                    border: 3px solid red;
                }
            }
        }
    `
};
