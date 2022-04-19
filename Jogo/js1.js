//Pegando o canvas do html e definindo um ctx;
let canvas = document.getElementById("my_Canvas");
let ctx = canvas.getContext("2d");


//#############################################################################################################
//#############################################################################################################
//Adicionando evento para pegar os valores das teclas pressionadas;


document.addEventListener('keydown',pressionar);
document.addEventListener('keyup',soltar); /*Ao add um evento, precisa-se informar o tipo de evento
---------------------------------------------------- e qual função ele deve chamar após ocorrer o evento; */

let keys = []; /*para salvar que um tecla foi precionada, é necessário criar um vetor para adicionar essa tecla lá
--------------então criei o vetor "keys"*/

//pressinar(e) e soltar(e) são as funções que serão chamadas após os eventos "keydown" e "keyup" forem chamados;
function pressionar(e) {
	keys[e.key] = true; //Achei muito estranho, mas é assim que funfa - o que está escrito siginifca que ele irá acrescentar a tecla que pegou à lista
	console.log(keys)
}

function soltar(e){
	delete keys[e.key]; //Após soltar a tecla ele apaga ela da lista
}


//#############################################################################################################
//#############################################################################################################
//Função para movimentar o jogador 1 (w,a,s,d):


//Aqui adicionei a imagem do arroz;
let arroz = new Image(); arroz.src= 'arroz.png'; let arroz_speed=5; let x_arroz = 300; let y_arroz=300;

function j1_move(){
		/*Condições para ver se uma tecla está sendo pressionada (ele verifica se a tecla está dentro do vetor
			"keys" e então executa a função*/
	if ( 'w' in keys ){
		y_arroz -= arroz_speed;
	}
	if ( 's' in keys ){
		y_arroz += arroz_speed;
	}
	if ( 'd' in keys ){
		x_arroz += arroz_speed;
	}
	if ( 'a' in keys ){
		x_arroz -= arroz_speed;
	}

	ctx.beginPath(); //Para indicar o começo
	ctx.drawImage(arroz, x_arroz, y_arroz, 80, 80); //Para desenhar o arroz de acordo com suas novas posições
}


//#############################################################################################################
//-------------------------------------------------------------------------------------------------------------
//#############################################################################################################
//-------------------------------------------------------------------------------------------------------------
//#############################################################################################################
//Função principal:


function main(){
	requestAnimationFrame(main); //Para pedir que o site chame novamente essa função toda vez que atualizar
	ctx.beginPath(); ctx.clearRect(0, 0, canvas.width, canvas.height);//Limpa o canvas para a proxima animação
	j1_move(); //chamando a função do jogador1 (arroz)
}
main(); //Chamando a função principal.

