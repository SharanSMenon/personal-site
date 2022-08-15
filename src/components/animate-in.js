import React from 'react';
import { useInView } from "react-intersection-observer"
import { useSpring, animated } from 'react-spring'

const AnimateIn = (props) => {

    const value = props.strong ? 70 : 20

    const [ref, inView] = useInView({ 
        threshold: props.threshold ?? 0.1
     })
    const animations = useSpring({ 
        opacity: inView ? 1 : 0,
        translateY: inView ? 0: value,
        delay: 150
    })
    return (
        <animated.div style={animations} ref={ref}>
            {props.children}
        </animated.div>
    )
}

export default AnimateIn;