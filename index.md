# HTML

*Hypertext*
*Markup*
- Tag
- Atributos/propriedades
*Language*

# CSS
cascading stylesheet
* {
  margin: 0;
  padding: 0;
} seletor universal

#JavaScript
``` JavaScript
// variaveis
const mensagem = `Oi, tudo bemm`
// tipos de dados
  // number
  // string
// funcao
alert(mensagem)

// obj javascript
const participante = {
  nome: "Mayk Brito",
  email: "mayk@gmail.com",
  dataInscricao: new Date(2024, 2, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
}

//array
let participantes = [
  {
  nome: "Mayk Brito",
  email: "mayk@gmail.com",
  dataInscricao: new Date(2024, 2, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
},
]

// estrutura de repetição - loop
for(let participante of participantes) {
  // faça alguma coisa aqui
  // enquanto tiver participantes nessa lista
}




  //encontrar o participante dentro da lista
  const participante = participantes.find((p) => {})
  return p.email == event.target.dataset.email
  //realizar o check-in do participante
  
  participante.dataCheckIn = new Date()
  //atualizar a lista de participantes
  atualizarlista(participantes)
```
