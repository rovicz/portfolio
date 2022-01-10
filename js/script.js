if(window.SimpleSlide) {
new SimpleSlide({
  slide: "clientes",
  time: 5000,
  nav: true
});
}

if(window.SimpleAnime) {
new SimpleAnime();
}

if(window.SimpleForm) {
new SimpleForm({
  form: ".formphp", // seletor do formulário
  button: "#enviar", // seletor do botão
  erro: "<div id='form-erro'><p>Um erro ocorreu, tente novamente ou envie um email para contato@bikcraft.com.</p></div>", // mensagem de erro
  sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
});
}