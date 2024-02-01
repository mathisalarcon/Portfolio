const sr = ScrollReveal({
    distance: '60px',
    duration: 1000,
    reset: true
});

["top", "right", "bottom", "left"].forEach(direction => {
    
    sr.reveal(`.sr-${direction}`, {
        origin: direction
    });

});