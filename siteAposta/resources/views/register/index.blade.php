<!DOCTYPE html>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">

<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">

  <title>Tela de Registro</title>
  <link rel="stylesheet" type="text/css" href="{{asset('css/style.css')}}">
</head>
<body>
<div class="container">
    <h2>TTL</h2>
    <h3>Registrar-se</h3>
    <h4>Top Team League</h4>
    <form id="form-registro" action="{{ route('register.store') }}" method="POST">
      @csrf
      <input  style="margin-bottom: 10px" id="name" name="name" class="name" type="text" placeholder="Nome" required>
      <input  style="margin-bottom: 10px" id="email" name="email" class="email" type="text" placeholder="Email" required>
      <input  style="margin-bottom: 10px" id="password" name="password" class="senha" type="password" placeholder="Senha" required>
      <button type="submit">Registrar</button>
    </form>
  </div>
</body>
</html>