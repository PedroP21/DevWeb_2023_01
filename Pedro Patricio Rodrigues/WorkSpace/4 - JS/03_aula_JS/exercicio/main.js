let fruta1 = "Banana";
let fruta2 = "Melância";
let fruta3 = "          Limão";
let fruta4 = "Manga";
let fruta5 = "Uva";

//length
console.log(fruta1.length);

//substring
console.log(fruta2.substring(0,3));

//trim
console.log(fruta3.trim());

//replace - toLowerCase
let novaMensagem = fruta4.replace('Manga', 'Pêra') ;
console.log(novaMensagem.toLowerCase());

//template string
let templateString= 'Aqui temos 5 frutas: ${fruta1}, ${fruta2}, ${fruta3}, ${fruta4}, ${fruta5}';
console.log(templateString)