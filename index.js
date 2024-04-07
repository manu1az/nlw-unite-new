let participantes = [
  {
  nome: "Diego Fernandes",
  email: "diego@gmail.com",
  dataInscricao: new Date(2024, 2, 1, 23),
  dataCheckIn: new Date(2024, 2, 1, 20, 20)
  },
  {
    nome: "Mayk Brito",
    email: "mayk@gmail.com",
    dataInscricao: new Date(2024, 1, 2, 23),
    dataCheckIn: null
  },
  {
    nome: "Maria Souza",
    email: "maria@gmail.com",
    dataInscricao: new Date(2024, 2, 1, 10),
    dataCheckIn: new Date(2024, 2, 5, 14, 15)
  },
  {
    nome: "Lucas Oliveira",
    email: "lucas@gmail.com",
    dataInscricao: new Date(2023, 11, 10, 22),
    dataCheckIn: new Date(2024, 2, 18, 18, 45)
  },
  {
    nome: "Ana Santos",
    email: "ana@gmail.com",
    dataInscricao: new Date(2024, 1, 28, 12),
    dataCheckIn: null
  },
  {
    nome: "Pedro Lima",
    email: "pedro@gmail.com",
    dataInscricao: new Date(2023, 10, 5, 16),
    dataCheckIn: new Date(2024, 2, 10, 10, 20)
  },
  {
    nome: "Julia Fernandes",
    email: "julia@gmail.com",
    dataInscricao: new Date(2024, 1, 20, 21),
    dataCheckIn: new Date(2024, 1, 25, 17, 45)
  },
  {
    nome: "Marcos Costa",
    email: "marcos@gmail.com",
    dataInscricao: new Date(2024, 2, 12, 19),
    dataCheckIn: new Date(2024, 2, 20, 15, 10)
  },
  {
    nome: "Carla Rocha",
    email: "carla@gmail.com",
    dataInscricao: new Date(2024, 2, 8, 14),
    dataCheckIn: null
  },
  {
    nome: "Gabriel Santos",
    email: "gabriel@gmail.com",
    dataInscricao: new Date(2023, 7, 25, 17),
    dataCheckIn: null
  }
];


const criarnovoparticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)

  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

  if(participante.dataCheckIn == null) {
    dataCheckIn = `
    <button
     data-email="${participante.email}"
     onclick="FazerCheckIn(event)"
    >
    Confirmar check-in
    </button>
    `
  }

  return `
  <tr>
      <td>
        <strong>
          ${participante.nome}
        </strong>
        <br>
        <small>
         ${participante.email}
        </small>
      </td>
      <td>${dataInscricao}</td>
      <td>${dataCheckIn}</td>
    </tr>
  `
}

const atualizarlista = (participantes) => {
  let output = ""
  for(let participante of participantes) {
  output = output + criarnovoparticipante(participante)
}
document
.querySelector('tbody')
.innerHTML = output
}

atualizarlista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosdoformulario = new FormData(event.target)

  const participante = {
    nome: dadosdoformulario.get('nome'),
    email: dadosdoformulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }

// verificar se o participante ja existe
 const participanteExiste = participantes.find(
  (p) => p.email == participante.email
 )

 if(participanteExiste) {
  alert('Email já cadastrado!')
  return
 }

  participantes = [participante, ...participantes]
  atualizarlista(participantes)

  // limpar o formulario
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
}

const FazerCheckIn = (event) => {
 // confirmar se realmente quer o check-in
  const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'
  if(confirm(mensagemConfirmacao) == false) {
    return
  }
  

  //encontrar o participante dentro da lista
  const participante = participantes.find((p) => {
  return p.email == event.target.dataset.email
  })
  //realizar o check-in do participante
  participante.dataCheckIn = new Date()
  //atualizar a lista de participantes
  atualizarlista(participantes)
}