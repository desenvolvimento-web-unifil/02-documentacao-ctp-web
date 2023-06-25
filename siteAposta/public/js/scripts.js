function showSelectedInfo(game) {
    var selectedInfo = document.getElementById("selectedInfo");
    selectedInfo.innerHTML = "";

    switch (game) {
        case "all":
            // Informações para o jogo 1 (League of Legends)
            var time1LOL1 = "LOUD";
            var oddsTime1LOL1 = 1.5;
            var time2LOL1 = "NRG";
            var oddsTime2LOL1 = 2.0;

            selectedInfo.innerHTML += `
                <div class="teams-container">
                    <div class="team active" onclick="openPopup('time1', ${oddsTime1LOL1})">
                        <h3 class="team-name">${time1LOL1}</h3>
                        <div class="team-odds">
                            <span>${oddsTime1LOL1}</span>
                        </div>
                    </div>
                    <div class="team" onclick="openPopup('time2', ${oddsTime2LOL1})">
                        <h3 class="team-name">${time2LOL1}</h3>
                        <div class="team-odds">
                            <span>${oddsTime2LOL1}</span>
                        </div>
                    </div>
                </div>
            `;

            // Informações para o jogo 2 (League of Legends)
            var time1LOL2 = "Team Liquid";
            var oddsTime1LOL2 = 1.8;
            var time2LOL2 = "Cloud9";
            var oddsTime2LOL2 = 2.2;

            selectedInfo.innerHTML += `
                <div class="teams-container">
                    <div class="team active" onclick="openPopup('time1', ${oddsTime1LOL2})">
                        <h3 class="team-name">${time1LOL2}</h3>
                        <div class="team-odds">
                            <span>${oddsTime1LOL2}</span>
                        </div>
                    </div>
                    <div class="team" onclick="openPopup('time2', ${oddsTime2LOL2})">
                        <h3 class="team-name">${time2LOL2}</h3>
                        <div class="team-odds">
                            <span>${oddsTime2LOL2}</span>
                        </div>
                    </div>
                </div>
            `;

            // Informações para o jogo 3 (League of Legends)
            var time1LOL3 = "Fnatic";
            var oddsTime1LOL3 = 1.7;
            var time2LOL3 = "G2 Esports";
            var oddsTime2LOL3 = 2.5;

            selectedInfo.innerHTML += `
                <div class="teams-container">
                    <div class="team active" onclick="openPopup('time1', ${oddsTime1LOL3})">
                        <h3 class="team-name">${time1LOL3}</h3>
                        <div class="team-odds">
                            <span>${oddsTime1LOL3}</span>
                        </div>
                    </div>
                    <div class="team" onclick="openPopup('time2', ${oddsTime2LOL3})">
                        <h3 class="team-name">${time2LOL3}</h3>
                        <div class="team-odds">
                            <span>${oddsTime2LOL3}</span>
                        </div>
                    </div>
                </div>
            `;

            // Informações para o jogo 1 (CS)
            var time1CS1 = "Astralis";
            var oddsTime1CS1 = 1.8;
            var time2CS1 = "Natus Vincere";
            var oddsTime2CS1 = 1.9;

            selectedInfo.innerHTML += `
                <div class="teams-container">
                    <div class="team active" onclick="openPopup('time1', ${oddsTime1CS1})">
                        <h3 class="team-name">${time1CS1}</h3>
                        <div class="team-odds">
                            <span>${oddsTime1CS1}</span>
                        </div>
                    </div>
                    <div class="team" onclick="openPopup('time2', ${oddsTime2CS1})">
                        <h3 class="team-name">${time2CS1}</h3>
                        <div class="team-odds">
                            <span>${oddsTime2CS1}</span>
                        </div>
                    </div>
                </div>
            `;

            // Informações para o jogo 2 (CS)
            var time1CS2 = "FURIA";
            var oddsTime1CS2 = 2.2;
            var time2CS2 = "Team Liquid";
            var oddsTime2CS2 = 1.7;

            selectedInfo.innerHTML += `
                <div class="teams-container">
                    <div class="team active" onclick="openPopup('time1', ${oddsTime1CS2})">
                        <h3 class="team-name">${time1CS2}</h3>
                        <div class="team-odds">
                            <span>${oddsTime1CS2}</span>
                        </div>
                    </div>
                    <div class="team" onclick="openPopup('time2', ${oddsTime2CS2})">
                        <h3 class="team-name">${time2CS2}</h3>
                        <div class="team-odds">
                            <span>${oddsTime2CS2}</span>
                        </div>
                    </div>
                </div>
            `;

            // Informações para o jogo 3 (CS)
            var time1CS3 = "BIG";
            var oddsTime1CS3 = 1.5;
            var time2CS3 = "G2 Esports";
            var oddsTime2CS3 = 2.0;

            selectedInfo.innerHTML += `
                <div class="teams-container">
                    <div class="team active" onclick="openPopup('time1', ${oddsTime1CS3})">
                        <h3 class="team-name">${time1CS3}</h3>
                        <div class="team-odds">
                            <span>${oddsTime1CS3}</span>
                        </div>
                    </div>
                    <div class="team" onclick="openPopup('time2', ${oddsTime2CS3})">
                        <h3 class="team-name">${time2CS3}</h3>
                        <div class="team-odds">
                            <span>${oddsTime2CS3}</span>
                        </div>
                    </div>
                </div>
            `;

            // Informações para o jogo 1 (Valorant)
            var time1Valorant1 = "Sentinels";
            var oddsTime1Valorant1 = 2.2;
            var time2Valorant1 = "Fnatic";
            var oddsTime2Valorant1 = 1.7;

            selectedInfo.innerHTML += `
                <div class="teams-container">
                    <div class="team active" onclick="openPopup('time1', ${oddsTime1Valorant1})">
                        <h3 class="team-name">${time1Valorant1}</h3>
                        <div class="team-odds">
                            <span>${oddsTime1Valorant1}</span>
                        </div>
                    </div>
                    <div class="team" onclick="openPopup('time2', ${oddsTime2Valorant1})">
                        <h3 class="team-name">${time2Valorant1}</h3>
                        <div class="team-odds">
                            <span>${oddsTime2Valorant1}</span>
                        </div>
                    </div>
                </div>
            `;

            // Informações para o jogo 2 (Valorant)
            var time1Valorant2 = "Team Liquid";
            var oddsTime1Valorant2 = 1.9;
            var time2Valorant2 = "Vision Strikers";
            var oddsTime2Valorant2 = 2.5;

            selectedInfo.innerHTML += `
                <div class="teams-container">
                    <div class="team active" onclick="openPopup('time1', ${oddsTime1Valorant2})">
                        <h3 class="team-name">${time1Valorant2}</h3>
                        <div class="team-odds">
                            <span>${oddsTime1Valorant2}</span>
                        </div>
                    </div>
                    <div class="team" onclick="openPopup('time2', ${oddsTime2Valorant2})">
                        <h3 class="team-name">${time2Valorant2}</h3>
                        <div class="team-odds">
                            <span>${oddsTime2Valorant2}</span>
                        </div>
                    </div>
                </div>
            `;

            // Informações para o jogo 3 (Valorant)
            var time1Valorant3 = "Shanghai Dragons";
            var oddsTime1Valorant3 = 1.8;
            var time2Valorant3 = "T1";
            var oddsTime2Valorant3 = 1.6;

            selectedInfo.innerHTML += `
                <div class="teams-container">
                    <div class="team active" onclick="openPopup('time1', ${oddsTime1Valorant3})">
                        <h3 class="team-name">${time1Valorant3}</h3>
                        <div class="team-odds">
                            <span>${oddsTime1Valorant3}</span>
                        </div>
                    </div>
                    <div class="team" onclick="openPopup('time2', ${oddsTime2Valorant3})">
                        <h3 class="team-name">${time2Valorant3}</h3>
                        <div class="team-odds">
                            <span>${oddsTime2Valorant3}</span>
                        </div>
                    </div>
                </div>
            `;

            document.querySelector(".titulo").textContent = "Todos os Jogos";
            break;

        case "game1":
            // Informações para o jogo 1 (League of Legends)
            var time1LOL1 = "LOUD";
            var oddsTime1LOL1 = 1.5;
            var time2LOL1 = "NRG";
            var oddsTime2LOL1 = 2.0;

            selectedInfo.innerHTML = `
                <div class="teams-container">
                    <div class="team active" onclick="openPopup('time1', ${oddsTime1LOL1})">
                        <h3 class="team-name">${time1LOL1}</h3>
                        <div class="team-odds">
                            <span>${oddsTime1LOL1}</span>
                        </div>
                    </div>
                    <div class="team" onclick="openPopup('time2', ${oddsTime2LOL1})">
                        <h3 class="team-name">${time2LOL1}</h3>
                        <div class="team-odds">
                            <span>${oddsTime2LOL1}</span>
                        </div>
                    </div>
                </div>
            `;

            // Informações para o jogo 2 (League of Legends)
            var time1LOL2 = "Team Liquid";
            var oddsTime1LOL2 = 1.8;
            var time2LOL2 = "Cloud9";
            var oddsTime2LOL2 = 2.2;

            selectedInfo.innerHTML += `
                <div class="teams-container">
                    <div class="team active" onclick="openPopup('time1', ${oddsTime1LOL2})">
                        <h3 class="team-name">${time1LOL2}</h3>
                        <div class="team-odds">
                            <span>${oddsTime1LOL2}</span>
                        </div>
                    </div>
                    <div class="team" onclick="openPopup('time2', ${oddsTime2LOL2})">
                        <h3 class="team-name">${time2LOL2}</h3>
                        <div class="team-odds">
                            <span>${oddsTime2LOL2}</span>
                        </div>
                    </div>
                </div>
            `;

            // Informações para o jogo 3 (League of Legends)
            var time1LOL3 = "Fnatic";
            var oddsTime1LOL3 = 1.7;
            var time2LOL3 = "G2 Esports";
            var oddsTime2LOL3 = 2.5;

            selectedInfo.innerHTML += `
                <div class="teams-container">
                    <div class="team active" onclick="openPopup('time1', ${oddsTime1LOL3})">
                        <h3 class="team-name">${time1LOL3}</h3>
                        <div class="team-odds">
                            <span>${oddsTime1LOL3}</span>
                        </div>
                    </div>
                    <div class="team" onclick="openPopup('time2', ${oddsTime2LOL3})">
                        <h3 class="team-name">${time2LOL3}</h3>
                        <div class="team-odds">
                            <span>${oddsTime2LOL3}</span>
                        </div>
                    </div>
                </div>
            `;

            document.querySelector(".titulo").textContent = "League of Legends";
            break;

        case "game2":
            // Informações para o jogo 1 (CS)
            var time1CS1 = "Astralis";
            var oddsTime1CS1 = 1.8;
            var time2CS1 = "Natus Vincere";
            var oddsTime2CS1 = 1.9;

            selectedInfo.innerHTML = `
                <div class="teams-container">
                    <div class="team active" onclick="openPopup('time1', ${oddsTime1CS1})">
                        <h3 class="team-name">${time1CS1}</h3>
                        <div class="team-odds">
                            <span>${oddsTime1CS1}</span>
                        </div>
                    </div>
                    <div class="team" onclick="openPopup('time2', ${oddsTime2CS1})">
                        <h3 class="team-name">${time2CS1}</h3>
                        <div class="team-odds">
                            <span>${oddsTime2CS1}</span>
                        </div>
                    </div>
                </div>
            `;

            // Informações para o jogo 2 (CS)
            var time1CS2 = "FURIA";
            var oddsTime1CS2 = 2.2;
            var time2CS2 = "Team Liquid";
            var oddsTime2CS2 = 1.7;

            selectedInfo.innerHTML += `
                <div class="teams-container">
                    <div class="team active" onclick="openPopup('time1', ${oddsTime1CS2})">
                        <h3 class="team-name">${time1CS2}</h3>
                        <div class="team-odds">
                            <span>${oddsTime1CS2}</span>
                        </div>
                    </div>
                    <div class="team" onclick="openPopup('time2', ${oddsTime2CS2})">
                        <h3 class="team-name">${time2CS2}</h3>
                        <div class="team-odds">
                            <span>${oddsTime2CS2}</span>
                        </div>
                    </div>
                </div>
            `;

            // Informações para o jogo 3 (CS)
            var time1CS3 = "BIG";
            var oddsTime1CS3 = 1.5;
            var time2CS3 = "G2 Esports";
            var oddsTime2CS3 = 2.0;

            selectedInfo.innerHTML += `
                <div class="teams-container">
                    <div class="team active" onclick="openPopup('time1', ${oddsTime1CS3})">
                        <h3 class="team-name">${time1CS3}</h3>
                        <div class="team-odds">
                            <span>${oddsTime1CS3}</span>
                        </div>
                    </div>
                    <div class="team" onclick="openPopup('time2', ${oddsTime2CS3})">
                        <h3 class="team-name">${time2CS3}</h3>
                        <div class="team-odds">
                            <span>${oddsTime2CS3}</span>
                        </div>
                    </div>
                </div>
            `;

            document.querySelector(".titulo").textContent = "CS";
            break;

        case "game3":
            // Informações para o jogo 1 (Valorant)
            var time1Valorant1 = "Sentinels";
            var oddsTime1Valorant1 = 2.2;
            var time2Valorant1 = "Fnatic";
            var oddsTime2Valorant1 = 1.7;

            selectedInfo.innerHTML = `
                <div class="teams-container">
                    <div class="team active" onclick="openPopup('time1', ${oddsTime1Valorant1})">
                        <h3 class="team-name">${time1Valorant1}</h3>
                        <div class="team-odds">
                            <span>${oddsTime1Valorant1}</span>
                        </div>
                    </div>
                    <div class="team" onclick="openPopup('time2', ${oddsTime2Valorant1})">
                        <h3 class="team-name">${time2Valorant1}</h3>
                        <div class="team-odds">
                            <span>${oddsTime2Valorant1}</span>
                        </div>
                    </div>
                </div>
            `;

            // Informações para o jogo 2 (Valorant)
            var time1Valorant2 = "Team Liquid";
            var oddsTime1Valorant2 = 1.9;
            var time2Valorant2 = "Vision Strikers";
            var oddsTime2Valorant2 = 2.5;

            selectedInfo.innerHTML += `
                <div class="teams-container">
                    <div class="team active" onclick="openPopup('time1', ${oddsTime1Valorant2})">
                        <h3 class="team-name">${time1Valorant2}</h3>
                        <div class="team-odds">
                            <span>${oddsTime1Valorant2}</span>
                        </div>
                    </div>
                    <div class="team" onclick="openPopup('time2', ${oddsTime2Valorant2})">
                        <h3 class="team-name">${time2Valorant2}</h3>
                        <div class="team-odds">
                            <span>${oddsTime2Valorant2}</span>
                        </div>
                    </div>
                </div>
            `;

            // Informações para o jogo 3 (Valorant)
            var time1Valorant3 = "Shanghai Dragons";
            var oddsTime1Valorant3 = 1.8;
            var time2Valorant3 = "T1";
            var oddsTime2Valorant3 = 1.6;

            selectedInfo.innerHTML += `
                <div class="teams-container">
                    <div class="team active" onclick="openPopup('time1', ${oddsTime1Valorant3})">
                        <h3 class="team-name">${time1Valorant3}</h3>
                        <div class="team-odds">
                            <span>${oddsTime1Valorant3}</span>
                        </div>
                    </div>
                    <div class="team" onclick="openPopup('time2', ${oddsTime2Valorant3})">
                        <h3 class="team-name">${time2Valorant3}</h3>
                        <div class="team-odds">
                            <span>${oddsTime2Valorant3}</span>
                        </div>
                    </div>
                </div>
            `;

            document.querySelector(".titulo").textContent = "Valorant";
            break;

        default:
            selectedInfo.innerHTML = "Nenhum jogo selecionado";
            document.querySelector(".titulo").textContent = "";
            break;
    }

    setInterval(updateOdds, 10000); // Atualiza as odds a cada 10 segundos
}

function openPopup(team, odds) {
    var popupOverlay = document.getElementById("popupOverlay");
    var popupContainer = document.querySelector(".popup-container");

    popupContainer.innerHTML = `
        <input type="number" placeholder="Digite o valor da aposta" id="betValue" required>
        <button onclick="placeBet()">Apostar</button>
    `;

    popupOverlay.style.display = "block";
}
