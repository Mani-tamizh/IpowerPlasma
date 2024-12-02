export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
            opacity: 0, // Set opacity to 0
            scale: 1, // Optionally scale down to create a "hidden" effect
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            scale: 1, // Scale back to normal
            transition: {
                type: 'tween',
                duration: 1,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};
