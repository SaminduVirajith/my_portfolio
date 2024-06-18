export const fadeInn = (direction, delay) =>{
    return {
        hidden: {
            y: direction === 'up'? 40 : direction === 'down'? -40 : 0,
            x: direction === 'left'? 8 : direction === 'right'? -8 : 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 0.5,
                delay: delay,
                ease: [.25, 0.25, 0.25, 0.25]
            }
        }
    }
}