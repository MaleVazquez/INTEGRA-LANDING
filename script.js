document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: dejamos de observar para que el efecto ocurra una sola vez
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    // Sumamos literalmente todas las partes importantes para que nada quede estático
    const targets = document.querySelectorAll(`
        .titulo-seccion,
        .subtitulo,
        .subtitulo-seccion,
        .etiqueta-video,
        .intro-texto,
        .vsl-container,
        .grid-checkboxes,
        .card-check, 
        .card-dimension, 
        .texto-autoridad,
        .paso, 
        .card-caso, 
        .objecion,
        .numeros-gigantes div,
        .texto-grande,
        .highlight-blanco,
        .caja-accion,
        .btn-principal,
        .btn-gigante,
        .bajada-btn
    `);
    
    targets.forEach(t => {
        t.classList.add('fade-in');
        observer.observe(t);
    });
});
