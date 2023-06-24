<!DOCTYPE html>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">

<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">

  <title>Tela de Login</title>
  <link rel="stylesheet" type="text/css" href="{{asset('css/style.css')}}">
 
</head>
<body>
  <div class="container">
    <h2>TTL</h2>
    <h3>BEM-VINDO</h3>
    <h4>Top Team League</h4>

    <form id="form-login" method="POST" action="/login">
      @csrf
      
      @if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif
    <div>
      <input id="email" name="email" class="email" type="text" placeholder="Email" required>
      <input id="password" name="password" type="password" placeholder="Senha" required>
      <button style="margin-bottom: 10px" type="submit">Entrar</button>
      <button> <a href="/register" style="color: white" >Cadastrar</a></button>
    </div>  
    </form>
  </div>
</body>
</html>