document.getElementById("botao").addEventListener("click",
  function() {
    var cpf = document.getElementById("cpf").value;
    //var.substr pega uma parte da string
    // 123.456.789-10
    // 012.345.678-910
    console.log(cpf.substr(0,3) + "." + cpf.substr(3,3) + "." + cpf.substr(6,3) + "-" + cpf.substr(-2));

  });
