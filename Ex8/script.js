document.getElementById("botao").addEventListener("click",
  function() {
    var cpf = document.getElementById("cpf").value;

    console.log(cpf.substr(1,3) + "." + cpf.substr(4,6) + "." + cpf.substr(7,9) + "-" cpf.substr(10,11));

  });
