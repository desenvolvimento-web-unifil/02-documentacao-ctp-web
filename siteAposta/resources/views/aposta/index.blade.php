<!DOCTYPE html>

<html>
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
    <link rel="stylesheet" type="text/css" href="{{asset('css/style.css')}}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="{{ asset('js/deposit.js') }}"></script>
    <script src="{{ asset('js/scripts.js') }}"></script>
    <script src="{{ asset('js/betting.js') }}"></script>


  <title>Aba Apostas</title>
</head>
<body>
  <header>
      <div class="logo">
        <a href="/home">
          <img src="{{asset('img/logo.png')}}" alt="logo">
        </a>
      </div>

    <div class="search">
      <input type="text" placeholder="Buscar por jogos">
      <button>
        ENCONTRAR
      </button type="submit">
    </div>
    <div class="login">
      <a href="/login">ENTRAR</a>
    </div>

    <div class="user-info" data-username="Nome do Usuário">
        <p id="walletBalance">{{ $money }}</p>
        <a>Deposite</a>
        <div class="menu">
          <div class="alinhador">
            <p>Nome do Usuário</p>
            <p id="walletBalanceMobile">{{ $money }}</p>
            <button onclick="increaseDeposit()">Deposite</button>
          </div>
        </div>
      </div>

      <div class="login">
        <a href="/destroy">Sair</a>
      </div>

  </header>

  <aside>
    <ul>
      <li class="active" onclick="showSelectedInfo('all')">
        <img src="{{asset('img/control.png')}}">
        <a href="#"></a>
      </li>
      <li class="active" onclick="showSelectedInfo('game1')">
        <img src="{{asset('img/logoo.jpg')}}">
        <a href="#"></a>
      </li>
      <li class="active" onclick="showSelectedInfo('game2')">
        <img src="{{asset('img/cs.png')}}">
        <a href="#"></a>
      </li>
      <li class="active" onclick="showSelectedInfo('game3')">
        <img src="{{asset('img/valorant.png')}}">
        <a href="#"></a>
      </li>
      <!-- Restante dos itens do menu lateral -->
    </ul>
  </aside>

  <div class="content">.
    <div class="titulo"></div>
      <div class="subtitulo"> Escolhas arriscadas
      <img src="{{asset('img/fire.png')}}"  >

      </div>
      <form id="form">
        <label for="campeonato">Selecione um Jogo</label>
        <div class="select-wrapper">
          <select id="campeonato" onchange="showSelectedInfo()">
            <option value="">Mudar Jogo</option>
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
        <button onclick="placeBet()">Clique para Apostar</button>
      </div>
    </div>



  </div>
</body>
</html>
