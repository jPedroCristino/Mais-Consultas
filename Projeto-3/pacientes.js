let pacientes = []; // array para armazenar os dados do arquivo JSON

function carregarPacientes() {
  // função para preencher a tabela com os dados do arquivo JSON
  let tabela = document.querySelector("#tabela-pacientes");
  tabela.innerHTML = ""; // limpa a tabela antes de preencher novamente

  for (let i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i];
    let linha = `
      <tr>
        <td>${paciente.nome}</td>
        <td>${paciente.idade}</td>
        <td>${paciente.telefone}</td>
        <td>${paciente.rua}</td>
        <td>${paciente.numero}</td>
        <td>${paciente.bairro}</td>
        <td>${paciente.cidade}</td>
        <td>${paciente.estado}</td>
      </tr>
    `;
    tabela.innerHTML += linha; // adiciona a linha à tabela
  }
}

function adicionarPaciente() {
  // função para adicionar novo paciente à tabela
  let nome = document.querySelector("#nome").value;
  let idade = document.querySelector("#idade").value;
  let telefone = document.querySelector("#telefone").value;
  let rua = document.querySelector("#rua").value;
  let numero = document.querySelector("#numero").value;
  let bairro = document.querySelector("#bairro").value;
  let cidade = document.querySelector("#cidade").value;
  let estado = document.querySelector("#estado").value;

  let paciente = {
    nome: nome,
    idade: idade,
    telefone: telefone,
    rua: rua,
    numero: numero,
    bairro: bairro,
    cidade: cidade,
    estado: estado,
  };

  pacientes.push(paciente); // adiciona o novo paciente ao array
  carregarPacientes(); // atualiza a tabela com os dados atualizados
}
