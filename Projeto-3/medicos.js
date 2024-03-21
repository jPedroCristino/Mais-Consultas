let medicos = []; // array para armazenar os dados dos médicos

function carregarMedicos() {
  // função para preencher a tabela com os dados dos médicos
  let tabela = document.querySelector("#tabela-medicos");
  tabela.innerHTML = ""; // limpa a tabela antes de preencher novamente

  for (let i = 0; i < medicos.length; i++) {
    let medico = medicos[i];
    let linha = `
      <tr>
        <td>${medico.nome}</td>
        <td>${medico.especialidade}</td>
        <td>${medico.crm}</td>
      </tr>
    `;
    tabela.innerHTML += linha; // adiciona a linha à tabela
  }
}

function adicionarMedico() {
  // função para adicionar novo médico à tabela
  let nome = document.querySelector("#nome").value;
  let especialidade = document.querySelector("#especialidade").value;
  let crm = document.querySelector("#crm").value;

  let medico = {
    nome: nome,
    especialidade: especialidade,
    crm: crm,
  };

  medicos.push(medico); // adiciona o novo médico ao array
  carregarMedicos(); // atualiza a tabela com os dados atualizados
}