

function increaseDeposit() {
    var depositValue = prompt("Digite o valor para aumentar o depósito:");

    if (depositValue !== null && depositValue !== "") {
        var walletElement = document.getElementById("walletBalance");
        var currentBalance = parseFloat(
            walletElement.textContent
                .replace("R$", "")
                .replace(".", "")
                .replace(",", ".")
        );
        var depositAmount = parseFloat(
            depositValue.replace(".", "").replace(",", ".")
        );

        var newBalance = currentBalance + depositAmount;
        walletElement.textContent =
            "R$" + newBalance.toFixed(2).replace(".", ",");

        var walletElementMobile = document.getElementById(
            "walletBalanceMobile"
        );
        walletElementMobile.textContent =
            "R$" + newBalance.toFixed(2).replace(".", ",");
    }

    updateBalanceDatabase(newBalance);
}

function updateBalanceDatabase(newBalance)
{

    axios.post('/atualizar-saldo', {
        newBalance: newBalance
      })
      .then(function (response) {
        // Sucesso na requisição
        var saldoAtualizado = response.data.saldo;
        
        // Atualizar a exibição do saldo no frontend
        document.getElementById("walletBalance").textContent = saldoAtualizado;
        
      })
      .catch(function (error) {
        // Tratamento de erro
        console.log(error);
      });
}