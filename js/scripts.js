document.addEventListener("DOMContentLoaded", function() {
    // Plan de Entrenamiento
    const trainingPlan = [
        { day: 'Lunes', activity: 'Trote suave 5 km', link: 'https://www.youtube.com/watch?v=video1' },
        { day: 'Martes', activity: 'Series de velocidad 4x400m', link: 'https://www.youtube.com/watch?v=video2' },
        { day: 'Miércoles', activity: 'Entrenamiento de fuerza (pesas)', link: 'https://www.youtube.com/watch?v=video3' },
        { day: 'Jueves', activity: 'Descanso activo (caminata)', link: '' },
        { day: 'Viernes', activity: 'Trote en pendiente 3 km', link: 'https://www.youtube.com/watch?v=video4' },
        { day: 'Sábado', activity: 'Entrenamiento de circuito', link: 'https://www.youtube.com/watch?v=video5' },
        { day: 'Domingo', activity: 'Descanso', link: '' },
    ];

    const trainingPlanDiv = document.getElementById('training-plan');

    trainingPlan.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.innerHTML = `<strong>${day.day}:</strong> ${day.activity} ${day.link ? `<a href="${day.link}" target="_blank">Ver Ejercicio</a>` : ''}`;
        trainingPlanDiv.appendChild(dayElement);
    });

    // Manejador de comentarios
    document.getElementById('comment-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const comment = document.getElementById('comment').value;
        if (comment.trim() !== "") {
            const commentSection = document.getElementById('comment-section');
            const commentElement = document.createElement('p');
            commentElement.textContent = comment;
            commentSection.appendChild(commentElement);
            document.getElementById('comment').value = '';
        }
    });

    // Sistema de Notificaciones
    if (Notification.permission === "granted") {
        new Notification("Recuerda revisar tu plan de entrenamiento de hoy.");
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification("Recuerda revisar tu plan de entrenamiento de hoy.");
            }
        });
    }

    // Gráficos de Progreso (utilizando Chart.js)
    const ctx = document.getElementById('progress-chart').getContext('2d');
    const progressChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
            datasets: [{
                label: 'Tiempo (minutos)',
                data: [37.5, 35, 33, 30], // Datos de ejemplo
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
