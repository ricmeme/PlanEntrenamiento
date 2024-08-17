window.onload = () => {
    const days = ["lunes", "martes", "miercoles", "viernes", "sabado"];

    days.forEach(day => {
        const trainingData = JSON.parse(localStorage.getItem(day));
        if (trainingData) {
            document.getElementById(`${day}-session`).textContent = trainingData.session || 'No disponible';
            document.getElementById(`${day}-exercise1`).textContent = trainingData.exercises[0] || 'No disponible';
            document.getElementById(`${day}-exercise1-video`).href = trainingData.videos[0] || '#';
            document.getElementById(`${day}-exercise2`).textContent = trainingData.exercises[1] || 'No disponible';
            document.getElementById(`${day}-exercise2-video`).href = trainingData.videos[1] || '#';
            document.getElementById(`${day}-exercise3`).textContent = trainingData.exercises[2] || 'No disponible';
            document.getElementById(`${day}-exercise3-video`).href = trainingData.videos[2] || '#';
        }
    });
};
