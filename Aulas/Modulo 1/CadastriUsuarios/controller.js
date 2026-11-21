var dadosLista = [];

function salvarUser() {
  let nomeUser = document.getElementById("nomeUser").value;

  if (nomeUser) {
    dadosLista.push(nomeUser);

    criaLista();

    console.log(dadosLista);

    document.getElementById("nomeUser").value = "";
  } else {
    alert("Por favor, preencha o campo nome");
  }
}

function criaLista() {
  let tabela = (document.getElementById("tabela").innerHTML =
    "<tr><th>Nome Usuario</th><th>Ações</th></tr>");

  for (let i = 0; i <= dadosLista.length - 1; i++) {
    tabela +=
      "<tr><td>" +
      dadosLista[i] +
      "</td><td><button>Editar</button> <button onclick='excluir(" +
      i +
      ")'>Excluir</button></td></tr>";
  }

  document.getElementById("tabela").innerHTML = tabela;
}

function excluir(i) {
  dadosLista.splice(i, 1);

  criaLista();

  console.log(dadosLista);
}
