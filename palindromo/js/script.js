// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//richiesta parola utente
var word=prompt("scrivi una parola")

document.getElementById("word").innerHTML=word;
//creo funzione per invertire una parola
function reverseString(string){
    var arr=string.split("");
    console.log(arr);
    var arrReverse=arr.reverse();
    console.log(arrReverse);
    return arrReverse.join("")
}

//assegno alla variabile la parola invertita
var wordReverse=reverseString(word)
console.log(wordReverse)



//creo funzione per controllare se la parola è palindroma e stampo. Ritorno true e false giusto per rendarla più generica e utilizzabile in altri contesti
function isItPalindrome(word){
    reverseString(word);
    if (word===wordReverse){
        document.getElementById("pali").innerHTML="La parola è palindroma";
        return true;
    } else{
        document.getElementById("pali").innerHTML="La parola non è palindroma";
        return false;
    }
}

//chiamo la funzione
isItPalindrome(word)