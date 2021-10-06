import styled from 'styled-components';

import { CommonButton } from '../styles/common';

export const Styled = {
    Calendar: styled.article`
        text-align: center;
        user-select: none;
        & > dl {
            margin-bottom: 20px;
            & > dt,
            & > dd {
                display: flex;
                justify-content: center;
                gap: 0.5em;
                padding: 0.3em 0;
                &:hover {
                    button {
                        opacity: 1;
                        &:active {
                            opacity: 0.7;
                        }
                    }
                }
            }
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

                &.selected:before {
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
                    background: blue;
                    opacity: 0.5;
                }
            }
        }
    `,
    ChangeDateButton: styled(CommonButton)`
        border: none;
        padding: 0 1em;
        border-radius: 0.5em;
        font-weight: bold;
        transition: opacity 0.1s;
        opacity: 0;
    `
};
