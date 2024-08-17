document.getElementById('training-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Capturar la información del formulario
    const day = document.getElementById('day').value.toLowerCase();
    const session = document.getElementById('session').value;
    const exercise1 = document.getElementById('exercise1').value;
    const exercise1Video = document.getElementById('exercise1-video').value;
    const exercise2 = document.getElementById('exercise2').value;
    const exercise2Video = document.getElementById('exercise2-video').value;
    const exercise3 = document.getElementById('exercise3').value;
    const exercise3Video = document.getElementById('exercise3-video').value;

    // Crear un objeto de entrenamiento
    const trainingData = {
        session,
        exercises: [exercise1, exercise2, exercise3],
        videos: [exercise1Video, exercise2Video, exercise3Video]
    };

    // Guardar en localStorage
    localStorage.setItem(day, JSON.stringify(trainingData));

    // Limpiar el formulario
    document.getElementById('training-form').reset();
    alert('Entrenamiento guardado correctamente');
});
