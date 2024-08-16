document.querySelectorAll('.exercise input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
        localStorage.setItem(e.target.id, e.target.checked);
    });
});

window.onload = () => {
    document.querySelectorAll('.exercise input[type="checkbox"]').forEach((checkbox) => {
        checkbox.checked = localStorage.getItem(checkbox.id) === 'true';
    });
};

document.querySelectorAll('.rpe-input').forEach((input) => {
    input.addEventListener('change', (e) => {
        localStorage.setItem(e.target.id, e.target.value);
    });
});

window.onload = () => {
    document.querySelectorAll('.rpe-input').forEach((input) => {
        input.value = localStorage.getItem(input.id) || '';
    });
};

document.getElementById('feedback-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const feedback = document.getElementById('feedback').value;
    if (feedback.trim() !== '') {
        // Aquí se podría usar fetch para enviar datos a un servidor
        alert('Gracias por tus comentarios. Serán enviados al entrenador.');
    } else {
        alert('Por favor, ingrese un comentario.');
    }
});

document.querySelectorAll('.session h2').forEach((header) => {
    header.addEventListener('click', () => {
        header.nextElementSibling.classList.toggle('hidden');
    });
});

const ctx = document.getElementById('progressChart').getContext('2d');
const progressChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
        datasets: [{
            label: 'Tiempo (minutos)',
            data: [37.5, 35, 32, 30],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2
        }]
    }
});
