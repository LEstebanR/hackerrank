const designerPDFViewer = (h, word) => {
  //crear un array con el abecedario
  //crear un array con los valores de la altura de cada letra
  //recorrer el array de la palabra y buscar el indice de cada letra en el array del abecedario
  //guardar el valor de la altura de cada letra en un nuevo array
  //buscar el valor mas alto del nuevo array
  //multiplicar el valor mas alto por el largo de la palabra

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = alphabet.split("");
  const wordArray = word.split("");
  const wordHeight = [];

  for (let i = 0; i < wordArray.length; i++) {
    wordHeight.push(h[alphabetArray.indexOf(wordArray[i])]);
  }

  const maxHeight = Math.max(...wordHeight);

  return maxHeight * wordArray.length;
};

console.log(
  designerPDFViewer(
    [
      1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      5,
    ],
    "abc"
  )
);
