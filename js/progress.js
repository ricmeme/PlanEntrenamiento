document.getElementById('progress-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const day = document.getElementById('day').value.toLowerCase();
    const distance = document.getElementById('distance').value;
    const time = document.getElementById('time').value;

    let progressData = JSON.parse(localStorage.getItem('progressData')) || [];

    progressData.push({
        day,
        distance,
        time,
        date: new Date().toLocaleDateString()
    });

    localStorage.setItem('progressData', JSON.stringify(progressData));

    alert('Progreso guardado correctamente');
    renderProgressLog();
});

function renderProgressLog() {
    const progressLog = document.getElementById('progress-log');
    progressLog.innerHTML = '';

    let progressData = JSON.parse(localStorage.getItem('progressData')) || [];

    progressData.forEach(entry => {
        let entryElement = document.createElement('div');
        entryElement.classList.add('progress-entry');

        entryElement.innerHTML = `
            <p><strong>${entry.date}</strong> - ${entry.day.charAt(0).toUpperCase() + entry.day.slice(1)}: ${entry.distance} km en ${entry.time} minutos.</p>
        `;

        progressLog.appendChild(entryElement);
    });
}

// Inicializar el historial de progreso al cargar la página
window.onload = renderProgressLog;
