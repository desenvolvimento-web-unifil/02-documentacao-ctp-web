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

  <title>Home</title>
</head>
<body>
  <header>
      <div class="logo">
        <a href="/home">
          <img src="{{asset('img/Grupo 9601.png')}}" alt="logo">
        </a>
      </div>
    
    <!-- <div class="search">
      <input type="text" placeholder="Buscar por jogos">
      <button>
        BUSCAR
      </button type="submit">
    </div> -->
    <div class="login">
      <a href="/login">LOGIN</a>
    </div>

    <div class="login">
        <a href="/register">REGISTRAR</a>
      </div>
  </header>

  <section class="intro">
    <div class="intro-text">
      <h1>Bem-vindo à TTL – Top Team League!</h1>
      <p>Experimente a emoção das apostas em E-sports e ponha à prova as suas capacidades!</p>
      <h2>Você vai se juntar às fileiras de apostadores de elite, ou você vai assistir de fora?</h2>
      <p>Não espere, registe-se ou deposite agora e alimente a sua fogueira de apostas!</p>
    </div>
    <div class="intro-image">
      <img src="{{asset('img/exemplo.jpg')}}" alt="Imagem de destaque" style="width: 600px; ">
    </div>
  </section>

  <section class="feature">
    <div class="feature-image">
        <img src="{{asset('img/exemplo.jpg')}}" alt="Imagem de destaque" style="width: 500px; ">
    </div>
    <div class="feature-text">
      <h2>Descubra oportunidades de apostas incomparáveis</h2>
      <p>Nunca foi tão emocionante apostar! Com E-sports, a cada partida é uma nova oportunidade de vitória. Aproveite a empolgação e faça suas apostas com confiança!</p>
    </div>
  </section>

  <section class="feature">
    <div class="feature-text">
      <h2>O Poder dos E-sports ao seu Alcance: Faça Suas Apostas Agora!</h2>
      <p>Seja um apostador de elite! Aproveite a paixão pelos E-sports e desafie as probabilidades. Entre na ação e torne-se um vencedor hoje mesmo!</p>
    </div>
    <div class="feature-image">
        <img src="{{asset('img/exemplo.jpg')}}" alt="Imagem de destaque" style="width: 500px; ">
    </div>
  </section>

  <section class="join-league">
    <h2>Junte-se à Liga</h2>
    <p>Um pequeno texto chamativo sobre a liga. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper ligula nec facilisis lobortis.</p>
    <a href="/register" class="register-button">Registrar</a>
  </section>

  <footer>
  <p>© 2023 TTL - Top Team League</p>
  <p>Criado em 2023</p>
</footer>
  
  </div>
</body>
</html>