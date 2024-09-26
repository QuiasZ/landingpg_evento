// Inicializar AOS (Animação On Scroll)
AOS.init();

// Definir a data do seu aniversário
const dataDoAniversario = new Date("March 6, 2025 00:00:00");
const timeStampDoAniversario = dataDoAniversario.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    // Calcula a diferença entre a data atual e a data do aniversário
    const distanciaAteOAniversario = timeStampDoAniversario - timeStampAtual;

    // Definições de unidade de tempo em milissegundos
    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    // Cálculos de dias, horas, minutos e segundos
    const diasAteOAniversario = Math.floor(distanciaAteOAniversario / diaEmMs);
    const horasAteOAniversario = Math.floor((distanciaAteOAniversario % diaEmMs) / horaEmMs);
    const minutosAteOAniversario = Math.floor((distanciaAteOAniversario % horaEmMs) / minutoEmMs);
    const segundosAteOAniversario = Math.floor((distanciaAteOAniversario % minutoEmMs) / 1000);

    // Atualiza o elemento HTML com o ID 'contador' para mostrar a contagem regressiva
    document.getElementById('contador').innerHTML = `${diasAteOAniversario}d ${horasAteOAniversario}h ${minutosAteOAniversario}m ${segundosAteOAniversario}s`;

    // Se a contagem terminar, mostrar mensagem de aniversário
    if (distanciaAteOAniversario < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = "Feliz Aniversário!";
    }
}, 1000);
