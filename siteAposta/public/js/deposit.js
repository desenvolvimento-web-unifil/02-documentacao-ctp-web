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
}
