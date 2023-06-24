function updateOdds() {
    var oddsElements = document.querySelectorAll(".team-odds span");

    oddsElements.forEach(function (oddsElement) {
        var odds = parseFloat(oddsElement.textContent);
        var random = Math.random();

        if (random < 0.5) {
            odds -= 0.1;
        } else {
            odds += 0.1;
        }

        if (odds < 0.1) {
            odds = 0.1;
        }

        oddsElement.textContent = odds.toFixed(2);
    });
}

function updateAllOdds() {
    updateOdds();
}

function showSelectedInfo(game) {
    var selectedInfo = document.getElementById("selectedInfo");
    selectedInfo.innerHTML = "";

    switch (game) {
        case "all":
            // Informações para o jogo 1 (League of Legends)
            var time1LOL = "LOUD";
            var oddsTime1LOL = 1.5;
            var time2LOL = "NRG";
            var oddsTime2LOL = 2.0;

            selectedInfo.innerHTML += `
                <div class="teams-container">
                    <div class="team active" onclick="openPopup('time1', ${oddsTime1LOL})">
                        <h3 class="team-name">${time1LOL}</h3>
                        <div class="team-odds">
                            <span>${oddsTime1LOL}</span>
                        </div>
                    </div>
                    <div class="team" onclick="openPopup('time2', ${oddsTime2LOL})">
                        <h3 class="team-name">${time2LOL}</h3>
                        <div class="team-odds">
                            <span>${oddsTime2LOL}</span>
                        </div>
                    </div>
                </div>
            `;

            // Informações para o jogo 2 (Valorant)
            var time1Valorant = "Sentinels";
            var oddsTime1Valorant = 2.2;
            var time2Valorant = "Fnatic";
            var oddsTime2Valorant = 1.7;

            selectedInfo.innerHTML += `
                <div class="teams-container">
                    <div class="team active" onclick="openPopup('time1', ${oddsTime1Valorant})">
                        <h3 class="team-name">${time1Valorant}</h3>
                        <div class="team-odds">
                            <span>${oddsTime1Valorant}</span>
                        </div>
                    </div>
                    <div class="team" onclick="openPopup('time2', ${oddsTime2Valorant})">
                        <h3 class="team-name">${time2Valorant}</h3>
                        <div class="team-odds">
                            <span>${oddsTime2Valorant}</span>
                        </div>
                    </div>
                </div>
            `;

            // Informações para o jogo 3 (CS)
            var time1CS = "Astralis";
            var oddsTime1CS = 1.8;
            var time2CS = "Natus Vincere";
            var oddsTime2CS = 1.9;

            selectedInfo.innerHTML += `
                <div class="teams-container">
                    <div class="team active" onclick="openPopup('time1', ${oddsTime1CS})">
                        <h3 class="team-name">${time1CS}</h3>
                        <div class="team-odds">
                            <span>${oddsTime1CS}</span>
                        </div>
                    </div>
                    <div class="team" onclick="openPopup('time2', ${oddsTime2CS})">
                        <h3 class="team-name">${time2CS}</h3>
                        <div class="team-odds">
                            <span>${oddsTime2CS}</span>
                        </div>
                    </div>
                </div>
            `;

            document.querySelector(".titulo").textContent = "Todos os Jogos";
            break;

        case "game1":
            // Informações para o jogo 1 (League of Legends)
            var time1LOL = "LOUD";
            var oddsTime1LOL = 1.5;
            var time2LOL = "NRG";
            var oddsTime2LOL = 2.0;

            selectedInfo.innerHTML = `
                <div class="teams-container">
                    <div class="team active" onclick="openPopup('time1', ${oddsTime1LOL})">
                        <h3 class="team-name">${time1LOL}</h3>
                        <div class="team-odds">
                            <span>${oddsTime1LOL}</span>
                        </div>
                    </div>
                    <div class="team" onclick="openPopup('time2', ${oddsTime2LOL})">
                        <h3 class="team-name">${time2LOL}</h3>
                        <div class="team-odds">
                            <span>${oddsTime2LOL}</span>
                        </div>
                    </div>
                </div>
            `;

            document.querySelector(".titulo").textContent = "League of Legends";
            break;

        case "game2":
            // Informações para o jogo 2 (Valorant)
            var time1Valorant = "Sentinels";
            var oddsTime1Valorant = 2.2;
            var time2Valorant = "Fnatic";
            var oddsTime2Valorant = 1.7;

            selectedInfo.innerHTML = `
                <div class="teams-container">
                    <div class="team active" onclick="openPopup('time1', ${oddsTime1Valorant})">
                        <h3 class="team-name">${time1Valorant}</h3>
                        <div class="team-odds">
                            <span>${oddsTime1Valorant}</span>
                        </div>
                    </div>
                    <div class="team" onclick="openPopup('time2', ${oddsTime2Valorant})">
                        <h3 class="team-name">${time2Valorant}</h3>
                        <div class="team-odds">
                            <span>${oddsTime2Valorant}</span>
                        </div>
                    </div>
                </div>
            `;

            document.querySelector(".titulo").textContent = "Valorant";
            break;

        case "game3":
            // Informações para o jogo 3 (CS)
            var time1CS = "Astralis";
            var oddsTime1CS = 1.8;
            var time2CS = "Natus Vincere";
            var oddsTime2CS = 1.9;

            selectedInfo.innerHTML = `
                <div class="teams-container">
                    <div class="team active" onclick="openPopup('time1', ${oddsTime1CS})">
                        <h3 class="team-name">${time1CS}</h3>
                        <div class="team-odds">
                            <span>${oddsTime1CS}</span>
                        </div>
                    </div>
                    <div class="team" onclick="openPopup('time2', ${oddsTime2CS})">
                        <h3 class="team-name">${time2CS}</h3>
                        <div class="team-odds">
                            <span>${oddsTime2CS}</span>
                        </div>
                    </div>
                </div>
            `;

            document.querySelector(".titulo").textContent = "CS";
            break;

        default:
            selectedInfo.innerHTML = "Nenhum jogo selecionado";
            document.querySelector(".titulo").textContent = "";
            break;
    }

    setInterval(updateOdds, 10000); // Atualiza as odds a cada 10 segundos
}

function openPopup(teamName, odds) {
    document.getElementById("popupOverlay").style.display = "block";
    document.getElementById("betValue").value = "";
    document.getElementById("betValue").focus();
}

function placeBet() {
    var betValue = document.getElementById("betValue").value;
    // Aqui você pode fazer algo com o valor da aposta, como enviar para o servidor ou exibir uma mensagem de confirmação
    alert("Aposta realizada com sucesso!");
    document.getElementById("popupOverlay").style.display = "none";
}

function openDepositDialog() {
    // Aqui você pode exibir um pop-up ou redirecionar para a página de depósito
    alert("Valor depositado com sucesso!");
}
