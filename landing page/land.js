const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};


const sr = ScrollReveal();

sr.reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
});

sr.reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 500, 
});

sr.reveal(".header_content p", {
    ...scrollRevealOption,
    delay: 1000, 
});

sr.reveal(".header_content form", {
    ...scrollRevealOption,
    delay: 1500, 
});
