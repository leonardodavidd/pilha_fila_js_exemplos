
function clear() {
    while(! Empety(vet)){
        vet.pop()
    }
}

function pop(){
    if(! Empety()){
        x = pop()
       push(x)
    }
    return x
}

/*conceito de fila*/
/* a função de fila funciona como uma fila de banco */
/*quem entra na fila é o último a sair/*
//FIFA, gerenciar fila, o primeiro a chegar será o primeiro a sair
/*EXEMPLO DE FILA: Descrição O método shift remove o elemento de índice zero */
var fila = []
var x 
x = Number(prompt('Informe um número'))
fila.push(x)
fila.push(1)
fila.push(2)
alert(`Fila: ${fila}`)

x = fila.shift()
alert("elemento: " + x)
alert("Fila: " + fila)


//exemplo de FILA
const fila = []; //armazenar valores
fila.push("james"); //este é o nome da primeira pessoa que entrou na fila
fila.push("leo"); //este é o nome da segunda pessoa que entrou na fila
fila.push("lisandro"); //este é o nome da terceira pessoa que entrou na fila
fila.shift() //tirar o primeiro dado da fila, ou seja, james
fila.shift() //se chamar o shift denovo, irá retirar a próxima pessoa da fila

console.log(fila) //mostra o james que é o unico que chegou na fila até agora

//exemplo de FILA
function fila(){
    var items = []; //criamos um vetor para adicionar elementos
    this.enqueue = function(){
        //adiciona um novo item
        //O método enqueue() adiciona um elemento no final da fila. Usamos o método push() do objeto array para inserir o novo elemento no final da fila. O método dequeue() remove um elemento da fila. No método dequeue() usamos o método shift() do array para remover um elemento na frente da fila.
    }
    this.dequeue = function(){
        //remove um item da fila
    }
    this.front = function(){
        //retorna o primeiro elemento da fila
    }
    this.isEmpty = function(){
        //verifica se a fila está vazia ou não, valores booleanos
    }
    this.size = function(){
        //retorna o tamanho da fila
    }
    this.print = function(){
        //imprimir a fila na tela
    }
    items.enqueue('leonardo')
    items.enqueue('joao')
    items.enqueue('leandro')
    fila.print()
}



/*conceito de pilha*/
/* inserção e remoção começa no topo, única extremidade, vet de 0 a 5, começa a remoção ou inserção no topo, ou seja, vet[4] */
/* função aritmética, função de busca ativa */
/*Quando uso uma pilha? PUSH INSERE, POP EXCLUI, EMPATY VAZIA, CHEIA FULL, SIZE TAMANHO, CLEAR EXCLUI*/
/* stack é o estouro da pilha de execução, a filha chama LIFO, o último a entrar é o primeiro a sair */
/*EXEMPLO DE PILHA: O método pop remove o último elemento de um array */

var pilha = []
var x
//x = number(prompt("Informe um número"))
x = 7
pilha.push(x)
pilha.push(1)
pilha.push(2)

console.log("Pilha: " + pilha)

x = pilha.pop()

console.log("Elemento:" + x) //aqui mostramos o elemento a qual vai ser excluído
console.log("Pilha: "+ pilha) //aqui mostramos a pilha inteira já com o elemento excluído


/*EXEMPLO DE TODOS OS MÉTODOS DE PILHA*/
/*MÉTODO PUSH,POP,SIZE,ISEMPTY E PEEK*/
/*A pilha de chamadas (call stack) é um mecanismo do interpretador de uma linguagem que organiza o funcionamento do script quando são chamadas muitas funções, qual função está sendo executada no momento, e quais serão chamadas dentro de alguma função, etc.*/
class Stack{
    constructor() {
        this.items = [];
        /*O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe*/
        /*O "this" em JavaScript se refere ao objeto que está sendo referenciado em um determinado contexto ou escopo. Ele pode ser usado dentro de uma função para se referir ao objeto que a chamou, ou pode ser usado fora de uma função para se referir ao objeto global*/
    }
    push(item){
        this.items.push(item); /*inserir algo*/
    }
    pop(){
        this.items.pop(); /*remover o último elemento do array*/
    }
    size(){
        return this.items.length; /*retornar o tamanho do array*/
    }
    isEmpty() {
        return this.size() === 0; /*retornar booleano se está vazio ou não, true ou false*/
        /* se for igual a 0 retorna true se não retorna false*/
    }
    peek() {
        return this.items[this.items.length-1]; /*retornar o elemento que está no topo da pilha*/
        /*acessar o último índice do array*/

    }
}
const stack = new Stack();
stack.push('vermelho');
console.log(stack.peek());/* o peek serve para retornar o elemento que está no topo*/
stack.push('amarelo');
stack.push('verde');
console.log(stack.peek());/* o peek serve para retornar o elemento que está no topo*/
stack.pop(); /* o pop serve para excluir o último elemento do array*/
console.log(stack.peek()); /* o peek serve para retornar o elemento que está no topo*/
console.log(stack.size()); /* contamos quantos elementos temos na pilha, temos 2 porque já excluimos 1 */
console.log(stack.isEmpty()); /*retornar booleano se está vazio ou não, true ou false*/


/*TRABALHO PARTE 1*/
// VAMOS CRIAR 2 VARIÁVEIS COM VALORES FIXOS PARA PODER TESTAR A FUNCTION
let exemplo = "{[(5-1) * 8/2]}"; //ESTE EXEMPLO TEM QUE RETORNAR TRUE PORQUE ESTÁ CERTO
let exemplo2 = "[(892 + 8/9)]]"; //ESTE EXEMPLO TEM QUE RETORNAR FALSE PORQUE ESTÁ ERRADO
console.log(verificarexpressao(exemplo)); //EXIBIR RESULTADO NA TELA DEVE DAR TRUE
console.log(verificarexpressao(exemplo2)); //EXIBIR RESULTADO NA TELA DEVE DAR FALSE
function verificarexpressao(valor) {
    var expressoes = {
        ')': '(',
        ']': '[',
        '}': '{'
    }; //CRIAR VETOR E COLOCAR TODAS AS EXPRESSÕES EXISTENTES.
    var pilha123 = []; //CRIAR PILHA PARA ARMAZENAR RESULTADOS E VERIFICAR OS ELEMENTOS.
    for (let i = 0; i < valor.length; i++) /*criar um for do tamanho da expressão que for digitada*/{
        var expressao1 = valor[i]; /*criar uma variável para armazenar todos os valores que estão na função*/
        if (expressao1 === '(' || expressao1 === '[' || expressao1 === '{') /* se tiver a expressão '(' e a expressão '[' e a expressão '{' será adicionado na pilha*/ {
            pilha123.push(expressao1);
        } else if (expressao1 === ')' || expressao1 === ']' || expressao1 === '}') /* se não se tiver a expressão ')' e a expressão ']' e a expressão '}' fazemos uma comparação, se o valor dos elementos que contém na pilha === (Valor e Tipo igual) - é usado para a comparação entre duas variáveis, mas isso irá verificar o tipo estrito, o que significa que ele irá verificar o tipo de dados e comparar dois valores, ou seja, VERIFICAMOS O VALOR E O TIPO IGUAL, se resultar em 0, ou seja, se a pilha estiver vazia e se removemos o último elemento da pilha com o comando pop() e isso for diferente das expressões que já foram estabelecidas e puxadas para dentro da pilha, retornamos o valor falso, ou seja, as expressões não estão corretas. */{
            if (pilha123.length === 0 || pilha123.pop() !== expressoes[expressao1]) {
                return false;
            }
        }
    }
    return pilha123.length === 0;
} 






    




