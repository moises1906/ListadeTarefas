let input = document.getElementById("input-principal") //variavel que puxa informações do html
let botao = document.getElementById("botao-adicionar") //variavel para puxar o botao do html
let listaCompleta = document.getElementById("tarefas")

let arrayDeTarefas = [      ] // variavei que guardar as tarefas adicionadas

function mostrarNaTela(){

let novaLista =""

arrayDeTarefas.forEach(tarefa =>{


  novaLista = novaLista + `
  <li class="item-tarefa">
    <p>${tarefa}</p>
  </li>
  
  `  
})

listaCompleta.innerHTML = novaLista //Enviando para o index.html

}

function cliqueiNoBotao(){

    arrayDeTarefas.push(input.value)
    mostrarNaTela()
    

}

botao.addEventListener("click",cliqueiNoBotao)