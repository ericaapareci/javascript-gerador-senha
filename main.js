const numeroSenha = document.querySelector('.parametro-senha__texto'); 
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const Botoes=document.querySelectorAll('.parametro-senha__botoes');

Botoes[0].onclick=diminuiTamanho;
Botoes[1].onclick=aumentaTamanho;

function diminuiTamanho(){
   if(tamanhoSenha > 1){

    //tamanhoSenha = tamanhoSenha-1;
    tamanhoSenha--;
   }
   numeroSenha.textContent = tamanhoSenha;
   geraSenha();
}

function aumentaTamanho(){
    if(tamanhoSenha < 20){
 //tamanhoSenha = tamanhoSenha+1;
tamanhoSenha++;

    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelector('.checkbox');

for(i=0;i < checkbox.length;i++){
    checkbox[i].onclick = geraSenha;
}

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbulos = '!@%*?'
geraSenha();

function geraSenha(){
    {let alfabeto = '';
       if (checkbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas;
       }
       if (checkbox[0].checked){
        alfabeto = alfabeto + letrasMinusculas;
       }
       if (checkbox[0].checked){
        alfabeto = alfabeto + numeros;
       }
       if (checkbox[0].checked){
        alfabeto = alfabeto + simbolos;
       }
       console.log(alfabeto);
       let senha ='';
}
    let senha ='';
    for ( let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + letrasMaiusculas[numeroAleatorio];
    }
    campoSenha.value = senha;
}