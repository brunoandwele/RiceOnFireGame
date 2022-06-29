/*Sumário (Use o ctrl+f para pesquisar pelo índice e encontrar mais fácil!)
_001.Pegando o canvas do html e definindo um ctx;

_002.Adicionando evento para pegar os valores das teclas pressionadas;

_003.pressinar(e) e soltar(e) são as funções que serão chamadas após os eventos "keydown" e "keyup" forem chamados;

_004.Função resposanvel por contabilizar o número de vidas:

_005.Função para movimentar o jogador (w,a,s,d):

_006.Sistema de pontuação
	_0062.Função para aparecer o sushi (pontuação simples)
	_0063.Função para aparecer o sushi especial/colorido (pontuação bônus)

_007.Fogos
	_0071.Funções de movimentação do Fogo

_008.Boss

_main.Função principal:
*/

//_001.Pegando o canvas do html e definindo um ctx;

let canvas = document.getElementById("my_Canvas");
let ctx = canvas.getContext("2d");

//#########################################################
//#########################################################

//_002.Adicionando evento para pegar os valores das teclas pressionadas;

document.addEventListener('keydown',pressionar);
document.addEventListener('keyup',soltar); /*Ao add um evento, precisa-se informar o tipo de evento
---------------------------------------------------- e qual função ele deve chamar após ocorrer o evento; */

let keys = []; /*para salvar que um tecla foi precionada, é necessário criar um vetor para adicionar essa tecla lá
--------------então criei o vetor "keys"*/

//#########################################################
//#########################################################

//_003.pressinar(e) e soltar(e) são as funções que serão chamadas após os eventos "keydown" e "keyup" forem chamados;

function pressionar(e) {
	keys[e.key] = true; //Achei muito estranho, mas é assim que funfa - o que está escrito siginifca que ele irá acrescentar a tecla que pegou à lista
}

function soltar(e){
	delete keys[e.key]; //Após soltar a tecla ele apaga ela da lista
}

//#########################################################
//#########################################################

//_004.Função resposanvel por contabilizar o número de vidas:

//Criando variáveis para que seja possível adicionar as informações de vida no html
let vidas_restantes = document.getElementById('vidas'); //Cria a variável como o texto da tag de id vidas
let num_vidas = 5 //Define com 5 o número inicial de vidas!!!!
vidas_restantes.innerText = num_vidas.toString() //Adiciona pela primeira vez no html o valor das vidas, o qual começa no 5!

function vidas(){
	if (num_vidas > 0)
	{
		arroz_d.x = 300;//retorna o bolinho de arroz para a posição inicial
		arroz_d.y=300;//retorna o bolinho de arroz para a posição inicial
	}
	else
	{
		location.reload(); //Para dar reload na página após perder o jogo;
		alert("Game over!"+ "\nTotal pontos: " +pontos);//fim de jogo
	}
}

//#########################################################
//#########################################################

//_005.Função para movimentar o jogador (w,a,s,d):

//Aqui adicionei a imagem do bolinho de arroz;
let arroz = new Image(); arroz.src= 'img/arrozin.png';
let arroz_d={
	speed:8,
	x:(canvas.width/2),
	y:(canvas.height/2),
	w:80,
	h:80
}

let x_arroz,y_arroz;

function j1_move(){
		/*Condições para ver se uma tecla está sendo pressionada (ele verifica se a tecla está dentro do vetor
			"keys" e então executa a função*/
	if ( 'w' in keys ){
		arroz_d.y -= arroz_d.speed;
	}
	if ( 's' in keys ){
		arroz_d.y += arroz_d.speed;
	}
	if ( 'd' in keys ){
		arroz_d.x += arroz_d.speed;
	}
	if ( 'a' in keys ){
		arroz_d.x -= arroz_d.speed;
	}
	
	/*Delimitação de espaço do personagem dentro do canvas - 4 delimitações para 4 lados*/
	/* Utiliza-se como referencial a largura e comprimento do Canvas, a partir disso o eixo x ou y assumirá seu valor decrementado*/
	/*Lateral direita*/
	if (arroz_d.x - arroz_d.w/2 >= (canvas.width-80)){
        //x_arroz = canvas.width - 80;
		num_vidas -=1;//Contabiliza o número de vidas que foram perdidas ao escostar na parede
		boss_d.x = canvas.width/2;//retorna o bolinho de arroz para a posição inicial
		boss_d.y=45;//retorna o bolinho de arroz para a posição inicial
		vidas()
		vidas_restantes.innerText = num_vidas.toString() //Atualiza no HTML o valor do número de vidas

		x_boss = canvas.width/2;
		y_boss = (boss_d.w/2);

		inicio = 1;
		posicao=getRandomInt(4);
    }

	/*Lateral esquerda*/
	if (arroz_d.x - arroz_d.w/2 <= (0)){
		//x_arroz = 40;
		num_vidas -=1;//Contabiliza o número de vidas que foram perdidas ao escostar na parede
		boss_d.x = canvas.width/2;//retorna o bolinho de arroz para a posição inicial
		boss_d.y=45;//retorna o bolinho de arroz para a posição inicial
		vidas()
		vidas_restantes.innerText = num_vidas.toString() //Atualiza no HTML o valor do número de vidas

		x_boss = canvas.width/2;
		y_boss = (boss_d.w/2);

		inicio = 1;
		posicao=getRandomInt(4);
		
	}

	/*Inferior*/
	if (arroz_d.y - arroz_d.h/2 >= (canvas.height-80)){
		//y_arroz = canvas.height - 80;
		num_vidas -=1;//Contabiliza o número de vidas que foram perdidas ao escostar na parede
		boss_d.x = canvas.width/2;//retorna o bolinho de arroz para a posição inicial
		boss_d.y=45;//retorna o bolinho de arroz para a posição inicial
		vidas()
		vidas_restantes.innerText = num_vidas.toString() //Atualiza no HTML o valor do número de vidas

		x_boss = canvas.width/2;
		y_boss = (boss_d.w/2);

		inicio = 1;
		posicao=getRandomInt(4);
		
   	}
   
	/*Superior*/
   	if (arroz_d.y - arroz_d.h/2 <= (0)){
		//y_arroz = 40;
		num_vidas -=1;//Contabiliza o número de vidas que foram perdidas ao escostar na parede
		boss_d.x = canvas.width/2;//retorna o bolinho de arroz para a posição inicial
		boss_d.y=45;//retorna o bolinho de arroz para a posição inicial
		vidas()
		vidas_restantes.innerText = num_vidas.toString() //Atualiza no HTML o valor do número de vidas

		x_boss = canvas.width/2;
		y_boss = (boss_d.w/2);

		inicio = 1;
		posicao=getRandomInt(4);
	}
	x_arroz = arroz_d.x - arroz_d.w/2;
	y_arroz = arroz_d.y - arroz_d.h/2;
	

	ctx.beginPath(); //Para indicar o começo
	ctx.drawImage(arroz, x_arroz, y_arroz, arroz_d.w, arroz_d.h); //Para desenhar o bolinho de arroz de acordo com suas novas posições
	
}

//#########################################################
//#########################################################

//_006.Comidinhas do bolinho de arroz

//_0061.Função para gerar um valor aleatório para depois associar ao x e y;
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

//São os elementos da comida! - valores x e y iniciais e fonte da imagem
let x_comida = getRandomInt(canvas.width-60)+30; //Defini um valor inicial aleatório para x
let y_comida = getRandomInt(canvas.height-50)+25;//Defini um valor inicial aleatório para y
let comida = new Image(); comida.src = "img/comidinha.jpeg";

//Criando variáveis para que seja possível adicionar as informações de pontuação no html
let pontuacao = document.getElementById('pontos'); //Cria a variável como o texto da tag de id pontos
let pontos = 0  //Cria a variável pontos, para que seja feita a contagem

pontuacao.innerText = pontos; //Adiciona pela primeira vez no html o valor da pontuação, o qual começa no 0!

//_0062. Função para aparecer o sushi (pontuação simples)
function comidinha(){
	
	//Verificar a colisão - foram definidos 4 pontos da comida, pontos esses que são os cantos do quadrado que forma a imagem;
	//Ele verifica se os "pontos" da comida entraram na área do bolinho de arroz
	//Para isso o "x" e o "y" da comida precisa estar dentro desses requisitos:
	if ((x_comida+15 >= arroz_d.x-40) &&
		(x_comida+15 <= arroz_d.x +40) &&
		(y_comida+12.5 >= arroz_d.y-40) &&
		(y_comida+12.5 <= arroz_d.y+40)){
		
		pontos += 1; //A pontuação aumenta em 1 ponto!
		
		pontuacao.innerText = pontos //Atualiza no HTML a pontuação!
		
		x_comida = getRandomInt(canvas.width-90) + 30; //É definido um novo "x"
		y_comida = getRandomInt(canvas.height-75) + 25; //É definido um novo "y"
	}
	
	
	ctx.beginPath(); //Inicio do desenho
	ctx.drawImage(comida, x_comida, y_comida, 30,25); //Desenha a comida
	
	
}

//#########################################################
//#########################################################

//_0063.Função para aparecer o sushi especial/colorido (pontuação bônus)

let c_especial = new Image(); c_especial.src = 'img/c_especial.jpeg'; 
let contador_especial = 0; 
let x_cEspecial = getRandomInt(canvas.width-90) + 30; let y_cEspecial = getRandomInt(canvas.height-75) + 25;


function cespecial(){
	let atualizador = getRandomInt(50);
	
	if (atualizador === 1 && contador_especial<30) {
		contador_especial += 1;
	}
	
	if (contador_especial===30){
		ctx.beginPath();
		ctx.drawImage(c_especial , x_cEspecial , y_cEspecial , 30,25);
		
		if ((x_cEspecial >= arroz_d.x-40) &&
			(x_cEspecial <= arroz_d.x+40) &&
			(y_cEspecial >= arroz_d.y-40) &&
			(y_cEspecial <= arroz_d.y+40) ){
			
			contador_especial=0;
			
			pontos += 5;//A pontuação aumenta em 5 pontos!
			pontuacao.innerText = pontos //Atualiza no HTML a pontuação!
			
			x_cEspecial = getRandomInt(canvas.width-90) +30;
			y_cEspecial = getRandomInt(canvas.height-75) +25;
		}
	}
	
	
}

//#########################################################
//#########################################################

//_007.Fogos:
//let sorteio_posicoes = getRandomInt(2);
let fogo = new Image(); fogo.src= 'img/fogo_pixilizado.png'; let fogo_speed=2;

//Coordernadas - Canto superior esquerdo:
let x_fogo_cse = 0;
let y_fogo_cse =  0;

// Coordenadas - Canto inferior esquerdo:
let x_fogo_cie = 0;
let y_fogo_cie =  435;

//Coordenadas - Canto superir direito
let x_fogo_csd = 560;
let y_fogo_csd=  0;

//Coordenadas - Canto inferior direito
let x_fogo_cid = 560;
let y_fogo_cid=  435;




let inicio = 1,x_temp, y_temp; //Cria as variaveis temporarias que terao seus valores alterados na função do fogos_move();
let posicao = getRandomInt(4); //Sorteia a primeira posição

function fogos_move(){
	/*Essa função funciona da seguinte maneira: Ela primeiro ve o valor já sorteado da variável "posicao", então a partir disso define
	em qual canto que o fogo sairá! Depois disso, ela configura a posção inicial para sair o fogo, mas isso só uma vez, pois se não daria problema toda
	vez que entra no loop, para resolver isso coloquei uma variavel chamada inicio que muda o valor de 1 para 0 depois que ja configura os valores iniciais.
	Então o movimento se baseia em duas variaveis que eu criei para serem temporareia (x_temp e y_temp), então a patir delas que tudo acontecerá.Após o fogo
	completar seu percurso, a variavel inicio volta para 1 e é sorteado um novo numero para "posicao"*/

	//Canto Superior Esquerdo
	if (posicao === 0){ //Verifica se o numero sorteado é 0 = canto superior esquerdo

		if (inicio===1){ //Para começar eu defino o x_temp e o y_temp como os valores do canto
			x_temp = x_fogo_cse; y_temp = y_fogo_cse;
			inicio = 0; //Quebro esse if, para que nas próximas vezes que entrar ele não redefina a posição do x e y
		}

		if (x_temp < canvas.width && y_temp < canvas.height) { //repito até ele chegar no canto oposto
			x_temp += (650 / 525) * fogo_speed;
			y_temp += fogo_speed;
			ctx.drawImage(fogo, x_temp, y_temp, 65, 70);
		}
		else{
			inicio = 1; posicao=getRandomInt(4); //Retomo a variável incio para 1, pois dai na proxima vez ele vai ter que ressetar o valor de x e y em relacao ao canto dele
			//Além disso, sorteio um novo número para a posicao, para que ele troque ela

		}

	}

	//Canto Superior Direito
	else if (posicao === 1){

		if (inicio===1){
			x_temp = x_fogo_csd; y_temp = y_fogo_csd;
			inicio = 0;
		}

		if (x_temp > 0 && y_temp < canvas.height) {
			x_temp -= (650 / 525) * fogo_speed;
			y_temp += fogo_speed;
			ctx.drawImage(fogo, x_temp, y_temp, 65, 70);
		}else{
			inicio = 1; posicao=getRandomInt(4);

		}

	}

	//Canto Inferior Esquerdo
	else if (posicao === 2){

		if (inicio===1){
			x_temp = x_fogo_cie; y_temp = y_fogo_cie;
			inicio = 0;

		}

		if (x_temp < canvas.width && y_temp > 0) {
			x_temp += (650 / 525) * fogo_speed;
			y_temp -= fogo_speed;
			ctx.drawImage(fogo, x_temp, y_temp, 65, 70);
		}else{
			inicio = 1; posicao=getRandomInt(4);

		}

	}

	//Canto Inferior Direito
	else if (posicao === 3){

		if (inicio===1){
			x_temp = x_fogo_cid; y_temp = y_fogo_cid;
			inicio = 0;
		}

		if (x_temp > 0 && y_temp > 0) {
			x_temp -= (650 / 525) * fogo_speed;
			y_temp -= fogo_speed;
			ctx.drawImage(fogo, x_temp, y_temp, 65, 70);
		}else{
			inicio = 1; posicao=getRandomInt(4);

		}

	}
	//Colisão
	if (
		//X0,Y0
		(x_temp > x_arroz) &&
		(x_temp < x_arroz + arroz_d.w) &&
		
		(y_temp > y_arroz) &&
		(y_temp < y_arroz + arroz_d.h) ||
		
		//X0,Ym
		(x_temp > x_arroz) &&
		(x_temp < x_arroz + arroz_d.w) &&
		
		(y_temp + 70 > y_arroz) &&
		(y_temp + 70 < y_arroz + arroz_d.h) ||
		
		//Xm,Y0
		(x_temp + 65 > x_arroz) &&
		(x_temp + 65 < x_arroz + arroz_d.w) &&
		
		(y_temp > y_arroz) &&
		(y_temp < y_arroz + arroz_d.h) ||
		
		//Xm,Ym
		(x_temp + 65 > x_arroz) &&
		(x_temp + 65 < x_arroz + arroz_d.w) &&
		
		(y_temp + 70 > y_arroz) &&
		(y_temp + 70 < y_arroz + arroz_d.h)
	
	
	){
		
		num_vidas -=1;//Contabiliza o número de vidas que foram perdidas ao escostar na parede
		boss_d.x = canvas.width/2;//retorna o bolinho de arroz para a posição inicial
		boss_d.y=45;//retorna o bolinho de arroz para a posição inicial
		vidas()
		vidas_restantes.innerText = num_vidas.toString() //Atualiza no HTML o valor do número de vidas
		
		x_boss = canvas.width/2;
		y_boss = (boss_d.w/2);
		
		inicio = 1;
		posicao=getRandomInt(4);
		
	}
}


//#########################################################
//#########################################################

//_008.Boss

let boss = new Image(); boss.src='img/fogo_pixilizado.png'; //Criando e adicionando a imagem do boss

//São os dados do boss
let boss_d = {
	h:70,
	w:65,
	speed:1.5
}

let x_boss = canvas.width/2;
let y_boss = (boss_d.w/2);

y_boss = y_boss - (boss_d.h/2);
x_boss = x_boss - (boss_d.w/2);


//Ele perseguirá o bolinho de arroz, então é necessário fazer um sistema de chasing comparando os x e y
function boss_move(pontos){
	
	if (pontos>=15) {
		//Condições para caçar o arroz
		if ( x_arroz > x_boss ) {
			x_boss += boss_d.speed;
			
		} else {
			x_boss -= boss_d.speed;
			
		}

		if ( y_arroz > y_boss ) {
			y_boss += boss_d.speed;
			
		} else {
			y_boss -= boss_d.speed;
			
		}
		
		if (
			//X0,Y0
			(x_boss > x_arroz) &&
			(x_boss < x_arroz + arroz_d.w) &&
			
			(y_boss > y_arroz) &&
			(y_boss < y_arroz + arroz_d.h) ||
			
			//X0,Ym
			(x_boss > x_arroz) &&
			(x_boss < x_arroz + arroz_d.w) &&
			
			(y_boss + boss_d.h > y_arroz) &&
			(y_boss + boss_d.h < y_arroz + arroz_d.h) ||
			
			//Xm,Y0
			(x_boss + boss_d.w > x_arroz) &&
			(x_boss + boss_d.w < x_arroz + arroz_d.w) &&
			
			(y_boss > y_arroz) &&
			(y_boss < y_arroz + arroz_d.h) ||
			
			//Xm,Ym
			(x_boss + boss_d.w > x_arroz) &&
			(x_boss + boss_d.w < x_arroz + arroz_d.w) &&
			
			(y_boss + boss_d.h > y_arroz) &&
			(y_boss + boss_d.h < y_arroz + arroz_d.h)
			
			
		){
			
			num_vidas -=1;//Contabiliza o número de vidas que foram perdidas ao escostar na parede
			boss_d.x = canvas.width/2;//retorna o bolinho de arroz para a posição inicial
			boss_d.y=45;//retorna o bolinho de arroz para a posição inicial
			vidas()
			vidas_restantes.innerText = num_vidas.toString() //Atualiza no HTML o valor do número de vidas
			
			x_boss = canvas.width/2;
			y_boss = (boss_d.w/2);
			inicio = 1;
			posicao=getRandomInt(4);
			
		}
		
		ctx.beginPath();
		ctx.drawImage(boss, x_boss, y_boss, boss_d.w, boss_d.h); //Desenha o arroz de acordo com seus dados

	}
}


//#############################################################################################################
//-------------------------------------------------------------------------------------------------------------
//#############################################################################################################
//-------------------------------------------------------------------------------------------------------------
//#############################################################################################################

//_main.Função principal:

function main(){
	requestAnimationFrame(main); //Para pedir que o site chame novamente essa função toda vez que atualizar
	ctx.beginPath(); ctx.clearRect(0, 0, canvas.width, canvas.height);//Limpa o canvas para a proxima animação
	comidinha();//Chama a função de desenhar sushi (pontuação simples)
	cespecial(); //Chama a função de desenhar sushi especial/colorido (pontuação bônus)
	j1_move();//Chama a função responsável pela movimentação do jogador (arroz)
	fogos_move();//Chama a função do mini boss (fogos que aparecem aleatoriamente nas diagonais)
	boss_move(pontos);//Chama a função do boss (fogo que segue o jogador (arroz))
	
}