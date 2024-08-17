document.getElementById('training-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Capturar la información del formulario
    const day = document.getElementById('day').value.toLowerCase();
    const session = document.getElementById('session').value;
    const exercise1 = document.getElementById('exercise1').value;
    const exercise2 = document.getElementById('exercise2').value;
    const exercise3 = document.getElementById('exercise3').value;

    // Crear un objeto de entrenamiento
    const trainingData = {
        session,
        exercises: [exercise1, exercise2, exercise3]
    };

    // Guardar en localStorage
    localStorage.setItem(day, JSON.stringify(trainingData));

    // Limpiar el formulario
    document.getElementById('training-form').reset();
    alert('Entrenamiento guardado correctamente');
});
