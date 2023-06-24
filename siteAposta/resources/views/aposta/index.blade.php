<!DOCTYPE html>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<link rel="stylesheet" type="text/css" href="{{asset('css/style.css')}}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
<script src="scripts.js"></script>

  <title>Bet</title>
</head>
<body>
  <header>
      <div class="logo">
        <a href="home.html">
          <img src="Grupo 9601.pngg" alt="logo">
        </a>
      </div>
      
    
    <div class="search">
      <input type="text" placeholder="Buscar por jogos">
      <button>
        BUSCAR
      </button type="submit">
    </div>
    <div class="login">
      <a href="login.html">LOGIN</a>
    </div>

    <div class="user-info" data-username="Nome do Usuário">
      R$500,00
      <a>Depositar</a>
      <div class="menu">
        <div class="alinhador">
          <p>Ferreira Viadinho</p>
          <p>R$500,00</p>
          <button onclick="openDepositDialog()">Depositar</button>
        </div>
       
      </div>
    </div>
    <button style="margin-left: 50px"> <a href="/destroy" >sair</a></button>

  </header>

  <aside>
    <ul>
      <li class="active">
        <img src="logoo.jpg" >
        <a href="#"></a>
      </li>
      <li>
        <img src="" >
        <a href="#"></a>
      </li>
      <li>
        <img src="" >
        <a href="#"></a>
      </li>
      <li>
        <img src="" >
        <a href="#"></a>
      </li>
      <li>
        <img src="" >
        <a href="#"></a>
      </li>
    </ul>
  </aside>
  <div class="content">.
    <div class="titulo"></div> 
      <div class="subtitulo"> Escolhas picantes
      <img src="logoo.jpg"  >

      </div>
      <form id="form">
        <label for="campeonato">Escolha um Jogo</label>
        <div class="select-wrapper">
          <select id="campeonato" onchange="showSelectedInfo()">
            <option value="">Selecione um Jogo</option>
            <option value="League Of Legends">League Of Legends</option>
            <option value="Valorant">Valorant</option>
          </select>
        </div>
      </form>
      
      <div id="selectedInfo" class="selected-info"></div>
    </div>

    <div class="popup-overlay" id="popupOverlay">
      <div class="popup-container">
        <input type="number" placeholder="Digite o valor da aposta" id="betValue" required>
        <button onclick="placeBet()">Apostar</button >
      </div>
    </div>
  

    
  </div>
</body>
</html>