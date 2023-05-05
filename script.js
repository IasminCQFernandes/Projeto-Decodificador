const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function botaoEncrip(){
    const textEncrip = encriptar(textArea.value);

    mensagem.value = textEncrip;

    textArea.value = "";

}


function encriptar(stringEncriptada){
    let matrizCod = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i<matrizCod.length; i++){
        if(stringEncriptada.includes(matrizCod[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCod[i][0], matrizCod[i][1]);

        }
    }

    return stringEncriptada;
}

//



function botaoDescrip(){
    const textDescrip = descriptar(textArea.value);

    mensagem.value = textDescrip;

    textArea.value = "";

    
    
}


function descriptar(stringDescrip){
    let matrizCod = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringDescrip = stringDescrip.toLowerCase();

    for(let i = 0; i<matrizCod.length; i++){
        if(stringDescrip.includes(matrizCod[i][1])){
            stringDescrip = stringDescrip.replaceAll(matrizCod[i][1], matrizCod[i][0]);

        }
    }

    return stringDescrip;
}
