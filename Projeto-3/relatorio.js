// seleciona o formulário de relatórios
const form = document.querySelector('#relatorios-form');

// adiciona um listener para o evento submit do formulário
form.addEventListener('submit', event => {
  // previne o comportamento padrão do submit, que é enviar o formulário para um servidor
  event.preventDefault();
  
  // seleciona os campos de data início e data fim do formulário
  const dataInicio = form.querySelector('#data-inicio').value;
  const dataFim = form.querySelector('#data-fim').value;
  
  // gera um relatório com as consultas agendadas dentro do período informado (simulando dados vindos de um servidor)
  const relatorio = gerarRelatorio(dataInicio, dataFim);
  
  // exibe o resultado do relatório na página
  exibirRelatorio(relatorio);
});

// função para gerar um relatório com as consultas agendadas dentro do período informado
function gerarRelatorio(dataInicio, dataFim) {
  // aqui poderíamos fazer uma requisição para um servidor para obter os dados das consultas agendadas
  //
}
