// Trae a las preguntas completas (dentro contiene botones y texto)
const questions = document.querySelectorAll(".question");

// a todas las preguntas que le pase lo siguiente:
questions.forEach(function(question) {
    // busca dentro de las preguntas la clase "question-btn" en este caso los botones
    // y asignamelo a la variable btn
    const btn = question.querySelector(".question-btn");
    // ahora a los botones ponele un eventListener para cuando alguien le haga click
    btn.addEventListener("click", function() {
        // primero que nada si antes habia una pregunta abierta (o sea, una pregunta
        // que contenga "show-text") sacale la clase show-text
        questions.forEach(function(item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });
        // y el event listener que vas a agregar a ese boton es agregar la clase "show-text"
        question.classList.toggle("show-text");
        // por que toggle y no solo add? porque es necesario alternar para que se 
        // pueda cerrar al apretar nuevamente
    });
});