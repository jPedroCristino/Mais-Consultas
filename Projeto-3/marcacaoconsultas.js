(function(){ //TIVE QUE ADD ISSO E NA ULTPIMA LINHA PARA PODER FUNCIONAR, PQ NAO É PERMITIDO COLOCAR TANTAS CONST,VAR E LET 
  // Seletor de elementos do DOM

const form = document.querySelector('form');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputPhone = document.querySelector('#phone');
const selectSpecialty = document.querySelector('#specialty');
const selectDoctor = document.querySelector('#doctor');
const inputDate = document.querySelector('#date');
const inputTime = document.querySelector('#time');
const submitButton = document.querySelector('button[type="submit"]');

// Array de especialidades e médicos

const specialties = [
  {
    name: 'Cardiologia',
    doctors: ['Dr. João', 'Dr. José', 'Dr. Maria']
  },
  {
    name: 'Dermatologia',
    doctors: ['Dr. Pedro', 'Dr. Ana', 'Dr. Paula']
  },
  {
    name: 'Ginecologia',
    doctors: ['Dr. Marcela', 'Dr. Juliana', 'Dr. Camila']
  }
];

// Função para atualizar a lista de médicos quando a especialidade selecionada mudar

selectSpecialty.addEventListener('change', function(){ //TROQUEI A FUNÇÃO PARA RETORNAR EVENTO ASSIM DESSA FORMA
  // Obter a especialidade selecionada
  const selectedSpecialty = selectSpecialty.value;

  // Encontrar o objeto de especialidade correspondente ao nome selecionado
  const selectedSpecialtyObj = specialties.find(spec => spec.name === selectedSpecialty);

  // Gerar a lista de médicos para a especialidade selecionada
  const doctorsList = selectedSpecialtyObj.doctors.map(doc => `<option value="${doc}">${doc}</option>`);

  // Definir a lista de médicos no campo de seleção de médicos
  selectDoctor.innerHTML = doctorsList.join('');
})

// Adicionar um ouvinte de evento para quando a especialidade selecionada mudar
// selectSpecialty.addEventListener('change', updateDoctorsList);

// Função para formatar a data e hora da consulta

function formatDateTime(date, time) {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const formattedDate = `${day}/${month}/${year}`;
  return `${formattedDate} às ${time}`;
}

// Função para enviar o formulário
submitButton.addEventListener('click', (event)=>{ //TROQUEI A FUNÇÃO PARA RETORNAR EVENTO ASSIM DESSA FORMA
  // Impedir o envio padrão do formulário
  event.preventDefault();

  // Obter os valores dos campos do formulário
  const name = inputName.value;
  const email = inputEmail.value;
  const phone = inputPhone.value;
  const specialty = selectSpecialty.value;
  const doctor = selectDoctor.value;
  const date = inputDate.value;
  const time = inputTime.value;

  // Verificar se todos os campos foram preenchidos
  if (!name || !email || !phone || !specialty || !doctor || !date || !time) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  // Formatar a data e hora da consulta
  const formattedDateTime = formatDateTime(date, time);

  // Mostrar uma mensagem de confirmação ao usuário
  const message = `Olá ${name}!\nSua consulta de ${specialty} com o médico(a) ${doctor} foi marcada para ${formattedDateTime}.\nUm e-mail de confirmação será enviado para ${email}.\nObrigado!`;
  alert(message);

  // Limpar os valores dos campos do formulário
  form.reset();
})

}()) //ADD ISSO AQUI, COMO DITO LA EM CIMA


