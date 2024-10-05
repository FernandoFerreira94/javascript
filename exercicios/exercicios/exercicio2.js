class Dados {
  constructor(nome, sobreNome, peso, idade) {
    this.nome = nome;
    this.sobreNome = sobreNome;
    this.peso = peso;
    this.idade = idade;
  }
}

function enviar() {
  let dados = new Dados(
    document.getElementById("nome").value,
    document.getElementById("sobreNome").value,
    document.getElementById("peso").value,
    document.getElementById("idade").value
  );

  document.getElementById(
    "dadosRecuperados"
  ).innerHTML = `<p> Nome: ${dados.nome}</p>`;
  document.getElementById(
    "dadosRecuperados"
  ).innerHTML += `<p> sobreNome: ${dados.sobreNome}</p>`;
  document.getElementById(
    "dadosRecuperados"
  ).innerHTML += `<p> Peso: ${dados.peso}</p>`;
  document.getElementById(
    "dadosRecuperados"
  ).innerHTML += `<p> Idade: ${dados.idade}</p>`;
}
