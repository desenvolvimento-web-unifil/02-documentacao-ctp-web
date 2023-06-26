<!DOCTYPE html>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js" integrity="sha512-AA1Bzp5Q0K1KanKKmvN/4d3IRKVlv9PYgwFPvm32nPO6QS8yH1HO7LbgB1pgiOxPtfeg5zEn2ba64MUcqJx6CA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

  <title>local de Cadastro</title>
  <link rel="stylesheet" type="text/css" href="{{asset('css/style.css')}}">

</head>
<body>
<div class="container">
    <h2>TTL</h2>
    <h3>Cadastrar-se</h3>
    <h4>Top Team League</h4>
    <form id="form-registro" action="{{ route('register.store') }}" method="POST">
      @csrf
      @if ($errors->any())
    <div class="error">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
    @endif
      <input  style="margin-bottom: 10px" id="name" name="name" class="name" type="text" placeholder="Nome" required value="{{old('name')}}">
      <input  style="margin-bottom: 10px" id="email" name="email" class="email" type="text" placeholder="Email" required value="{{old('email')}}">
      <input  style="margin-bottom: 10px" id="password" name="password" class="senha" type="password" placeholder="Senha" required>
      <button type="submit">Registrar</button>
    </form>
  </div>
</body>
</html>
