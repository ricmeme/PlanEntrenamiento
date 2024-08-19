document.addEventListener('DOMContentLoaded', () => {
    const trainingPlan = {
        lunes: {
            session: "Después de CrossFit",
            exercises: [
                "Carrera continua a ritmo moderado durante 30 minutos.",
                "Series de 5x200m a ritmo rápido, con 2 minutos de descanso entre series.",
                "Ejercicios de fortalecimiento para el tren inferior (sentadillas, lunges)."
            ],
            videos: [
                "https://www.youtube.com/watch?v=6vQpW9XRiyM", // Carrera continua
                "https://www.youtube.com/watch?v=2WdYt9VkVek", // Series 200m
                "https://www.youtube.com/watch?v=1P6obRizj_c"  // Fortalecimiento tren inferior
            ]
        },
        martes: {
            session: "Después de CrossFit",
            exercises: [
                "Carrera continua suave de 20 minutos.",
                "4x400m a ritmo de carrera, con 2 minutos de descanso.",
                "Ejercicios preventivos para lesiones (estiramientos específicos)."
            ],
            videos: [
                "https://www.youtube.com/watch?v=VoC38_NAzeY", // Carrera suave
                "https://www.youtube.com/watch?v=rGyoTCKUI3k", // Series 400m
                "https://www.youtube.com/watch?v=L6CMfWCRZ0s"  // Estiramientos preventivos
            ]
        },
        miércoles: {
            session: "Después de CrossFit",
            exercises: [
                "Fartlek de 30 minutos, alternando entre 2 minutos rápidos y 1 minuto suave.",
                "Ejercicios de movilidad y fortalecimiento del core.",
                "Estiramientos enfocados en la recuperación."
            ],
            videos: [
                "https://www.youtube.com/watch?v=3wXnpkJwE5E", // Fartlek
                "https://www.youtube.com/watch?v=BOjmgM_8-5Y", // Movilidad y core
                "https://www.youtube.com/watch?v=8qE8GZn9L5Y"  // Estiramientos recuperación
            ]
        },
        viernes: {
            session: "Después de CrossFit",
            exercises: [
                "Carrera continua moderada de 40 minutos.",
                "Series de 3x800m a ritmo de carrera, con 3 minutos de descanso.",
                "Ejercicios de fortalecimiento para el tren superior (push-ups, pull-ups)."
            ],
            videos: [
                "https://www.youtube.com/watch?v=kTJAXcr2V6k", // Carrera continua
                "https://www.youtube.com/watch?v=lvz6ZOfhbhE", // Series 800m
                "https://www.youtube.com/watch?v=IODxDxX7oi4"  // Fortalecimiento tren superior
            ]
        },
        sábado: {
            session: "Entre 10:00 y 11:00 AM",
            exercises: [
                "Rodaje largo de 60 minutos a ritmo constante.",
                "Ejercicios de técnica de carrera (drills).",
                "Estiramientos y relajación muscular."
            ],
            videos: [
                "https://www.youtube.com/watch?v=GgblUdc6Vw8", // Rodaje largo
                "https://www.youtube.com/watch?v=R1kaXgI-AJ4", // Técnica de carrera
                "https://www.youtube.com/watch?v=4x5bhmbnzOI"  // Estiramientos y relajación
            ]
        }
    };

    const trainingPlanElement = document.getElementById('training-plan');

    Object.keys(trainingPlan).forEach(day => {
        const dayPlan = trainingPlan[day];
        let dayElement = document.createElement('div');
        dayElement.classList.add('session');

        let sessionElement = document.createElement('h3');
        sessionElement.textContent = `${day.charAt(0).toUpperCase() + day.slice(1)}: ${dayPlan.session}`;
        dayElement.appendChild(sessionElement);

        dayPlan.exercises.forEach((exercise, index) => {
            let exerciseElement = document.createElement('p');
            exerciseElement.textContent = exercise;
            dayElement.appendChild(exerciseElement);

            let videoElement = document.createElement('a');
            videoElement.href = dayPlan.videos[index];
            videoElement.textContent = 'Ver video';
            videoElement.target = '_blank';
            dayElement.appendChild(videoElement);
        });

        trainingPlanElement.appendChild(dayElement);
    });

    notifyUser("¡No olvides revisar tu plan de entrenamiento para hoy!");
    renderComments();
});

function notifyUser(message) {
    if (Notification.permission === 'granted') {
        new Notification(message);
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                new Notification(message);
            }
        });
    }
}

document.getElementById('comment-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const comment = document.getElementById('comment').value;
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));

    document.getElementById('comment').value = '';
    renderComments();
});

function renderComments() {
    const commentSection = document.getElementById('comment-section');
    commentSection.innerHTML = '';

    let comments = JSON.parse(localStorage.getItem('comments')) || [];

    comments.forEach(comment => {
        let commentElement = document.createElement('p');
        commentElement.textContent = comment;
        commentSection.appendChild(commentElement);
    });
}
