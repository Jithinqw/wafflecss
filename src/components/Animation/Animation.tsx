import { keyframes } from "styled-components";
import { AnimationType } from '../../models/animation'

const Rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Bounce = keyframes`
    {
        0%,20%,53%,to{
            -webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);
            animation-timing-function:cubic-bezier(.215,.61,.355,1);
            -webkit-transform:translateZ(0);
            transform:translateZ(0)
        }
        40%,43%{
            -webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);
            animation-timing-function:cubic-bezier(.755,.05,.855,.06);
            -webkit-transform:translate3d(0,-30px,0) scaleY(1.1);
            transform:translate3d(0,-30px,0) scaleY(1.1)
        }
        70%{
            -webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);
            animation-timing-function:cubic-bezier(.755,.05,.855,.06);
            -webkit-transform:translate3d(0,-15px,0) scaleY(1.05);
            transform:translate3d(0,-15px,0) scaleY(1.05)
        }
        80%{
            -webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);
            transition-timing-function:cubic-bezier(.215,.61,.355,1);
            -webkit-transform:translateZ(0) scaleY(.95);
            transform:translateZ(0) scaleY(.95)
        }
        90%{
            -webkit-transform:translate3d(0,-4px,0) scaleY(1.02);
            transform:translate3d(0,-4px,0) scaleY(1.02)
        }
    }
    {
        0%,20%,53%,to{
            -webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);
            animation-timing-function:cubic-bezier(.215,.61,.355,1);
            -webkit-transform:translateZ(0);
            transform:translateZ(0)
        }
        40%,43%{
            -webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);
            animation-timing-function:cubic-bezier(.755,.05,.855,.06);
            -webkit-transform:translate3d(0,-30px,0) scaleY(1.1);
            transform:translate3d(0,-30px,0) scaleY(1.1)
        }
        70%{
            -webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);
            animation-timing-function:cubic-bezier(.755,.05,.855,.06);
            -webkit-transform:translate3d(0,-15px,0) scaleY(1.05);
            transform:translate3d(0,-15px,0) scaleY(1.05)
        }
        80%{
            -webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);
            transition-timing-function:cubic-bezier(.215,.61,.355,1);
            -webkit-transform:translateZ(0) scaleY(.95);
            transform:translateZ(0) scaleY(.95)
        }
        90%{
            -webkit-transform:translate3d(0,-4px,0) scaleY(1.02);
            transform:translate3d(0,-4px,0) scaleY(1.02)
        }
    }`
;

const Flash = keyframes`
    {
        0%,50%,to{
            opacity:1
        }
        25%,75%{
            opacity:0
        }
    }
    {
        0%,50%,to{
            opacity:1
        }
        25%,75%{
            opacity:0
        }
    }`
;

const Pulse = keyframes`
    {
        0%{
            -webkit-transform:scaleX(1);
            transform:scaleX(1)
        }
        50%{
            -webkit-transform:scale3d(1.05,1.05,1.05);
            transform:scale3d(1.05,1.05,1.05)
        }
        to{
            -webkit-transform:scaleX(1);
            transform:scaleX(1)
        }
    }
    {
        0%{
            -webkit-transform:scaleX(1);
            transform:scaleX(1)
        }
        50%{
            -webkit-transform:scale3d(1.05,1.05,1.05);
            transform:scale3d(1.05,1.05,1.05)
        }
        to{
            -webkit-transform:scaleX(1);
            transform:scaleX(1)
        }
    }`
;

const Rubber = keyframes`
    {
        0%{
            -webkit-transform:scaleX(1);
            transform:scaleX(1)
        }
        30%{
            -webkit-transform:scale3d(1.25,.75,1);
            transform:scale3d(1.25,.75,1)
        }
        40%{
            -webkit-transform:scale3d(.75,1.25,1);
            transform:scale3d(.75,1.25,1)
        }
        50%{
            -webkit-transform:scale3d(1.15,.85,1);
            transform:scale3d(1.15,.85,1)
        }
        65%{
            -webkit-transform:scale3d(.95,1.05,1);
            transform:scale3d(.95,1.05,1)
        }
        75%{
            -webkit-transform:scale3d(1.05,.95,1);
            transform:scale3d(1.05,.95,1)
        }
        to{
            -webkit-transform:scaleX(1);
            transform:scaleX(1)
        }
    }
    {
        0%{
            -webkit-transform:scaleX(1);
            transform:scaleX(1)
        }
        30%{
            -webkit-transform:scale3d(1.25,.75,1);
            transform:scale3d(1.25,.75,1)
        }
        40%{
            -webkit-transform:scale3d(.75,1.25,1);
            transform:scale3d(.75,1.25,1)
        }
        50%{
            -webkit-transform:scale3d(1.15,.85,1);
            transform:scale3d(1.15,.85,1)
        }
        65%{
            -webkit-transform:scale3d(.95,1.05,1);
            transform:scale3d(.95,1.05,1)
        }
        75%{
            -webkit-transform:scale3d(1.05,.95,1);
            transform:scale3d(1.05,.95,1)
        }
        to{
            -webkit-transform:scaleX(1);
            transform:scaleX(1)
        }
    }`
;

const ShakeX = keyframes`
    {
        0%,to{
            -webkit-transform:translateZ(0);
            transform:translateZ(0)
        }
        10%,30%,50%,70%,90%{
            -webkit-transform:translate3d(-10px,0,0);
            transform:translate3d(-10px,0,0)
        }
        20%,40%,60%,80%{
            -webkit-transform:translate3d(10px,0,0);
            transform:translate3d(10px,0,0)
        }
    }
    {
        0%,to{
            -webkit-transform:translateZ(0);
            transform:translateZ(0)
        }
        10%,30%,50%,70%,90%{
            -webkit-transform:translate3d(-10px,0,0);
            transform:translate3d(-10px,0,0)
        }
        20%,40%,60%,80%{
            -webkit-transform:translate3d(10px,0,0);
            transform:translate3d(10px,0,0)
        }
    }`
;

const ShakeY = keyframes`
    {
        0%,to{
            -webkit-transform:translateZ(0);
            transform:translateZ(0)
        }
        10%,30%,50%,70%,90%{
            -webkit-transform:translate3d(0,-10px,0);
            transform:translate3d(0,-10px,0)
        }
        20%,40%,60%,80%{
            -webkit-transform:translate3d(0,10px,0);
            transform:translate3d(0,10px,0)
        }
    }
    {
        0%,to{
            -webkit-transform:translateZ(0);
            transform:translateZ(0)
        }
        10%,30%,50%,70%,90%{
            -webkit-transform:translate3d(0,-10px,0);
            transform:translate3d(0,-10px,0)
        }
        20%,40%,60%,80%{
            -webkit-transform:translate3d(0,10px,0);
            transform:translate3d(0,10px,0)
        }
    }`
;

const HeadShake = keyframes`
    {
        0%{
            -webkit-transform:translateX(0);
            transform:translateX(0)
        }
        6.5%{
            -webkit-transform:translateX(-6px) rotateY(-9deg);
            transform:translateX(-6px) rotateY(-9deg)
        }
        18.5%{
            -webkit-transform:translateX(5px) rotateY(7deg);
            transform:translateX(5px) rotateY(7deg)
        }
        31.5%{
            -webkit-transform:translateX(-3px) rotateY(-5deg);
            transform:translateX(-3px) rotateY(-5deg)
        }
        43.5%{
            -webkit-transform:translateX(2px) rotateY(3deg);
            transform:translateX(2px) rotateY(3deg)
        }
        50%{
            -webkit-transform:translateX(0);
            transform:translateX(0)
        }
    }
    {
        0%{
            -webkit-transform:translateX(0);
            transform:translateX(0)
        }
        6.5%{
            -webkit-transform:translateX(-6px) rotateY(-9deg);
            transform:translateX(-6px) rotateY(-9deg)
        }
        18.5%{
            -webkit-transform:translateX(5px) rotateY(7deg);
            transform:translateX(5px) rotateY(7deg)
        }
        31.5%{
            -webkit-transform:translateX(-3px) rotateY(-5deg);
            transform:translateX(-3px) rotateY(-5deg)
        }
        43.5%{
            -webkit-transform:translateX(2px) rotateY(3deg);
            transform:translateX(2px) rotateY(3deg)
        }
        50%{
            -webkit-transform:translateX(0);
            transform:translateX(0)
        }
    }`
;

const Swing = keyframes`
    {
        20%{
            -webkit-transform:rotate(15deg);
            transform:rotate(15deg)
        }
        40%{
            -webkit-transform:rotate(-10deg);
            transform:rotate(-10deg)
        }
        60%{
            -webkit-transform:rotate(5deg);
            transform:rotate(5deg)
        }
        80%{
            -webkit-transform:rotate(-5deg);
            transform:rotate(-5deg)
        }
        to{
            -webkit-transform:rotate(0deg);
            transform:rotate(0deg)
        }
    }
    {
        20%{
            -webkit-transform:rotate(15deg);
            transform:rotate(15deg)
        }
        40%{
            -webkit-transform:rotate(-10deg);
            transform:rotate(-10deg)
        }
        60%{
            -webkit-transform:rotate(5deg);
            transform:rotate(5deg)
        }
        80%{
            -webkit-transform:rotate(-5deg);
            transform:rotate(-5deg)
        }
        to{
            -webkit-transform:rotate(0deg);
            transform:rotate(0deg)
        }
    }`
;

const Tada = keyframes`
    {
        0%{
            -webkit-transform:scaleX(1);
            transform:scaleX(1)
        }
        10%,20%{
            -webkit-transform:scale3d(.9,.9,.9) rotate(-3deg);
            transform:scale3d(.9,.9,.9) rotate(-3deg)
        }
        30%,50%,70%,90%{
            -webkit-transform:scale3d(1.1,1.1,1.1) rotate(3deg);
            transform:scale3d(1.1,1.1,1.1) rotate(3deg)
        }
        40%,60%,80%{
            -webkit-transform:scale3d(1.1,1.1,1.1) rotate(-3deg);
            transform:scale3d(1.1,1.1,1.1) rotate(-3deg)
        }
        to{
            -webkit-transform:scaleX(1);
            transform:scaleX(1)
        }
    }
    {
        0%{
            -webkit-transform:scaleX(1);
            transform:scaleX(1)
        }
        10%,20%{
            -webkit-transform:scale3d(.9,.9,.9) rotate(-3deg);
            transform:scale3d(.9,.9,.9) rotate(-3deg)
        }
        30%,50%,70%,90%{
            -webkit-transform:scale3d(1.1,1.1,1.1) rotate(3deg);
            transform:scale3d(1.1,1.1,1.1) rotate(3deg)
        }
        40%,60%,80%{
            -webkit-transform:scale3d(1.1,1.1,1.1) rotate(-3deg);
            transform:scale3d(1.1,1.1,1.1) rotate(-3deg)
        }
        to{
            -webkit-transform:scaleX(1);
            transform:scaleX(1)
        }
    }`
;

const Wobble = keyframes`
    {
        0%{
            -webkit-transform:translateZ(0);
            transform:translateZ(0)
        }
        15%{
            -webkit-transform:translate3d(-25%,0,0) rotate(-5deg);
            transform:translate3d(-25%,0,0) rotate(-5deg)
        }
        30%{
            -webkit-transform:translate3d(20%,0,0) rotate(3deg);
            transform:translate3d(20%,0,0) rotate(3deg)
        }
        45%{
            -webkit-transform:translate3d(-15%,0,0) rotate(-3deg);
            transform:translate3d(-15%,0,0) rotate(-3deg)
        }
        60%{
            -webkit-transform:translate3d(10%,0,0) rotate(2deg);
            transform:translate3d(10%,0,0) rotate(2deg)
        }
        75%{
            -webkit-transform:translate3d(-5%,0,0) rotate(-1deg);
            transform:translate3d(-5%,0,0) rotate(-1deg)
        }
        to{
            -webkit-transform:translateZ(0);
            transform:translateZ(0)
        }
    }
    {
        0%{
            -webkit-transform:translateZ(0);
            transform:translateZ(0)
        }
        15%{
            -webkit-transform:translate3d(-25%,0,0) rotate(-5deg);
            transform:translate3d(-25%,0,0) rotate(-5deg)
        }
        30%{
            -webkit-transform:translate3d(20%,0,0) rotate(3deg);
            transform:translate3d(20%,0,0) rotate(3deg)
        }
        45%{
            -webkit-transform:translate3d(-15%,0,0) rotate(-3deg);
            transform:translate3d(-15%,0,0) rotate(-3deg)
        }
        60%{
            -webkit-transform:translate3d(10%,0,0) rotate(2deg);
            transform:translate3d(10%,0,0) rotate(2deg)
        }
        75%{
            -webkit-transform:translate3d(-5%,0,0) rotate(-1deg);
            transform:translate3d(-5%,0,0) rotate(-1deg)
        }
        to{
            -webkit-transform:translateZ(0);
            transform:translateZ(0)
        }
    }`
;

const Jello = keyframes`
    {
        0%,11.1%,to{
            -webkit-transform:translateZ(0);
            transform:translateZ(0)
        }
        22.2%{
            -webkit-transform:skewX(-12.5deg) skewY(-12.5deg);
            transform:skewX(-12.5deg) skewY(-12.5deg)
        }
        33.3%{
            -webkit-transform:skewX(6.25deg) skewY(6.25deg);
            transform:skewX(6.25deg) skewY(6.25deg)
        }
        44.4%{
            -webkit-transform:skewX(-3.125deg) skewY(-3.125deg);
            transform:skewX(-3.125deg) skewY(-3.125deg)
        }
        55.5%{
            -webkit-transform:skewX(1.5625deg) skewY(1.5625deg);
            transform:skewX(1.5625deg) skewY(1.5625deg)
        }
        66.6%{
            -webkit-transform:skewX(-.78125deg) skewY(-.78125deg);
            transform:skewX(-.78125deg) skewY(-.78125deg)
        }
        77.7%{
            -webkit-transform:skewX(.390625deg) skewY(.390625deg);
            transform:skewX(.390625deg) skewY(.390625deg)
        }
        88.8%{
            -webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);
            transform:skewX(-.1953125deg) skewY(-.1953125deg)
        }
    }
    {
        0%,11.1%,to{
            -webkit-transform:translateZ(0);
            transform:translateZ(0)
        }
        22.2%{
            -webkit-transform:skewX(-12.5deg) skewY(-12.5deg);
            transform:skewX(-12.5deg) skewY(-12.5deg)
        }
        33.3%{
            -webkit-transform:skewX(6.25deg) skewY(6.25deg);
            transform:skewX(6.25deg) skewY(6.25deg)
        }
        44.4%{
            -webkit-transform:skewX(-3.125deg) skewY(-3.125deg);
            transform:skewX(-3.125deg) skewY(-3.125deg)
        }
        55.5%{
            -webkit-transform:skewX(1.5625deg) skewY(1.5625deg);
            transform:skewX(1.5625deg) skewY(1.5625deg)
        }
        66.6%{
            -webkit-transform:skewX(-.78125deg) skewY(-.78125deg);
            transform:skewX(-.78125deg) skewY(-.78125deg)
        }
        77.7%{
            -webkit-transform:skewX(.390625deg) skewY(.390625deg);
            transform:skewX(.390625deg) skewY(.390625deg)
        }
        88.8%{
            -webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);
            transform:skewX(-.1953125deg) skewY(-.1953125deg)
        }
    }`
;

const HeartBeat = keyframes`
    {
        0%{
            -webkit-transform:scale(1);
            transform:scale(1)
        }
        14%{
            -webkit-transform:scale(1.3);
            transform:scale(1.3)
        }
        28%{
            -webkit-transform:scale(1);
            transform:scale(1)
        }
        42%{
            -webkit-transform:scale(1.3);
            transform:scale(1.3)
        }
        70%{
            -webkit-transform:scale(1);
            transform:scale(1)
        }
    }
    {
        0%{
            -webkit-transform:scale(1);
            transform:scale(1)
        }
        14%{
            -webkit-transform:scale(1.3);
            transform:scale(1.3)
        }
        28%{
            -webkit-transform:scale(1);
            transform:scale(1)
        }
        42%{
            -webkit-transform:scale(1.3);
            transform:scale(1.3)
        }
        70%{
            -webkit-transform:scale(1);
            transform:scale(1)
        }
    }`
;

const Animation = (animation: AnimationType) => {
    switch(animation) {
        case AnimationType.ROTATE:
            return Rotate;
        case AnimationType.BOUNCE:
            return Bounce;
        case AnimationType.FLASH:
            return Flash;
        case AnimationType.PULSE:
            return Pulse;
        case AnimationType.RUBBER:
            return Rubber;
        case AnimationType.SHAKEX:
            return ShakeX;
        case AnimationType.SHAKEY:
            return ShakeY;
        case AnimationType.HEADSHAKE:
            return HeadShake;
        case AnimationType.SWING:
            return Swing;
        case AnimationType.TADA:
            return Tada;
        case AnimationType.WOBBLE:
            return Wobble;
        case AnimationType.JELLO:
            return Jello;
        case AnimationType.HEADBEAT:
            return HeartBeat;
        default:
            return Bounce;
    }
}

export default Animation;
