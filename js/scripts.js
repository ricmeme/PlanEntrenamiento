window.onload = () => {
    const trainingPlan = {
        lunes: {
            session: "Después de CrossFit",
            exercises: [
                "1. Carrera continua a ritmo moderado durante 30 minutos.",
                "2. Series de 5x200m a ritmo rápido, con 2 minutos de descanso entre series.",
                "3. Ejercicios de fortalecimiento para el tren inferior (sentadillas, lunges)."
            ],
            videos: [
                "https://example.com/video1",
                "https://example.com/video2",
                "https://example.com/video3"
            ]
        },
        martes: {
            session: "Después de CrossFit",
            exercises: [
                "1. Carrera continua suave de 20 minutos.",
                "2. 4x400m a ritmo de carrera, con 2 minutos de descanso.",
                "3. Ejercicios preventivos para lesiones (estiramientos específicos)."
            ],
            videos: [
                "https://example.com/video4",
                "https://example.com/video5",
                "https://example.com/video6"
            ]
        },
        miércoles: {
            session: "Después de CrossFit",
            exercises: [
                "1. Fartlek de 30 minutos, alternando entre 2 minutos rápidos y 1 minuto suave.",
                "2. Ejercicios de movilidad y fortalecimiento del core.",
                "3. Estiramientos enfocados en la recuperación."
            ],
            videos: [
                "https://example.com/video7",
                "https://example.com/video8",
                "https://example.com/video9"
            ]
        },
        viernes: {
            session: "Después de CrossFit",
            exercises: [
                "1. Carrera continua moderada de 40 minutos.",
                "2. Series de 3x800m a ritmo de carrera, con 3 minutos de descanso.",
                "3. Ejercicios de fortalecimiento para el tren superior (push-ups, pull-ups)."
            ],
            videos: [
                "https://example.com/video10",
                "https://example.com/video11",
                "https://example.com/video12"
            ]
        },
        sábado: {
            session: "Entre 10:00 y 11:00 AM",
            exercises: [
                "1. Rodaje largo de 60 minutos a ritmo constante.",
                "2. Ejercicios de técnica de carrera (drills).",
                "3. Estiramientos y relajación muscular."
            ],
            videos: [
                "https://example.com/video13",
                "https://example.com/video14",
                "https://example.com/video15"
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
            exerciseElement.textContent = `Ejercicio ${index + 1}: ${exercise}`;
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
};

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
