window.onload = () => {
    const days = ["lunes", "martes", "miércoles", "viernes", "sábado"];
    const trainingPlanElement = document.getElementById('training-plan');
    
    days.forEach(day => {
        const trainingData = JSON.parse(localStorage.getItem(day));
        if (trainingData) {
            let dayElement = document.createElement('div');
            dayElement.classList.add('session');

            let sessionElement = document.createElement('h3');
            sessionElement.textContent = `${day.charAt(0).toUpperCase() + day.slice(1)}: ${trainingData.session}`;
            dayElement.appendChild(sessionElement);

            trainingData.exercises.forEach((exercise, index) => {
                let exerciseElement = document.createElement('p');
                exerciseElement.textContent = `Ejercicio ${index + 1}: ${exercise}`;
                dayElement.appendChild(exerciseElement);

                let videoElement = document.createElement('a');
                videoElement.href = trainingData.videos[index];
                videoElement.textContent = 'Ver video';
                videoElement.target = '_blank';
                dayElement.appendChild(videoElement);
            });

            trainingPlanElement.appendChild(dayElement);
        }
    });
};
