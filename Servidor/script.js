
function verificarStatusServidor() {
    // Simulando uma requisição para o servidor
    setTimeout(function () {
        // Suponha que o servidor tenha respondido com um status booleano (true = validado, false = não validado)
        const statusDoServidor = Math.random() < 0.5; // Exemplo: 50% de chance de ser validado ou não

        if (statusDoServidor) {
            // Se o servidor respondeu "true", atualize o texto para "Validado"
            document.getElementById("status").textContent = "Validado";
        } else {
            // Caso contrário, continue aguardando a validação
            verificarStatusServidor();
        }
    }, 2000); // Intervalo de 2 segundos entre as verificações
}

// Inicie a verificação do status do servidor quando a página estiver carregada
document.addEventListener("DOMContentLoaded", function () {
    verificarStatusServidor();
});
