import { css, keyframes } from "styled-components"


export const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-50px);
    }
    60% {
        transform: translateY(-50px);
    }
`;

export const wiggle = keyframes`
    0%, 7% {
            transform: rotateZ(0);
    }
    15% {
        transform: rotateZ(-15deg);
    }
    20% {
        transform: rotateZ(10deg);
    }
    25% {
        transform: rotateZ(-10deg);
    }
    30% {
        transform: rotateZ(6deg);
    }
    35% {
        transform: rotateZ(-4deg);
    }
    40%, 100% {
        transform: rotateZ(0);
    }
`

export const spin = keyframes`
    0% {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
                transform: rotate(359deg);
    }
`

export const zoomIn = keyframes`
    0% {
        font-size: 1px
    }
    100% {
        font-size: 19vw;
    }
`;

export const testAnimation = css`
  animation-name: ${zoomIn};
  animation-duration: 1s; 
  animation-timing-function: ease-in-out; 
  animation-delay: 1s;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-fill-mode: none;
  animation-play-state: running; 
`;