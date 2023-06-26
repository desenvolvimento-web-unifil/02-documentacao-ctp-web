function placeBet() {
    var betValueElement = document.getElementById("betValue");
    var betValue = parseFloat(betValueElement.value.replace(",", "."));
    var selectedOddsElement = document.querySelector(
        ".team.active .team-odds span"
    );
    var selectedOdds = parseFloat(selectedOddsElement.textContent);

    if (isNaN(betValue) || betValue <= 0) {
        alert("Digite um valor válido para a aposta.");
        betValueElement.focus();
        return;
    }

    var walletElement = document.getElementById("walletBalance");
    var currentBalance = parseFloat(
        walletElement.textContent.replace("R$", "").replace(",", ".")
    );

    if (betValue > currentBalance) {
        alert("Saldo insuficiente. Digite um valor menor para a aposta.");
        betValueElement.focus();
        return;
    }

    betValueElement.disabled = true; // Desabilita o campo de valor da aposta
    document.querySelector(".popup-container button").disabled = true; // Desabilita o botão de apostar

    currentBalance -= betValue; // Subtrai o valor da aposta do saldo atual

    walletElement.textContent =
        "R$" + currentBalance.toFixed(2).replace(".", ",");

    // Espera 10 segundos antes de exibir o resultado da aposta
    setTimeout(function () {
        var random = Math.random();
        var isWin = random < 0.99; // 49% de chance de vitória (ajustado para 49%)
        var wonAmount = 0;

        if (isWin) {
            wonAmount = betValue * selectedOdds;
            currentBalance += wonAmount;
            walletElement.textContent =
                "R$" + currentBalance.toFixed(2).replace(".", ",");
        }

        alert(isWin ? "Parabéns, você ganhou!" : "Você perdeu.");
        betValueElement.disabled = false; // Habilita o campo de valor da aposta novamente
        betValueElement.value = ""; // Limpa o campo de valor da aposta
        document.querySelector(".popup-container button").disabled = false; // Habilita o botão de apostar novamente
        document.getElementById("popupOverlay").style.display = "none"; // Oculta a tela de aposta
    }, 10000); // Tempo de espera: 10 segundos (10000 milissegundos)

    document.getElementById("popupOverlay").style.display = "none"; // Oculta a tela de aposta imediatamente após o clique no botão
}
