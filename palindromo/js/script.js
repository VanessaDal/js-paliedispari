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

var wordReverse=reverseString(word)
console.log(wordReverse)




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

isItPalindrome(word)