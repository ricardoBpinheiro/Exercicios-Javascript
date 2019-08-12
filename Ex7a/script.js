document.getElementById("botao").addEventListener("click",
  function(){
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;

    alert("Olá " + nome + " " + sobrenome);
  });

/*document.getElementById("botao").addEventListener("click",
function(){
	var nomeCompleto = document.getElementById('nome-completo').value;
  var nome = document.getElementById('nome').value;
  //var sobrenome = document.getElementById("sobrenome").value;
	alert('O Nome Completo é: ' + nomeCompleto);
  alert(nome);
  alert(sobrenome);
  console.log(nome);
  console.log(sobrenome);
});
*/
