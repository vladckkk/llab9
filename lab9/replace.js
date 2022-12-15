let btn = document.querySelector('.change-word');

btn.addEventListener('click', function(event){

    let myWord = document.querySelector('.typed-word');
    let myTextInput = document.querySelector('.container #my-text');
    let myNewText = document.querySelector('.container #replaced-phrase');
    let newPhrase = document.querySelector('.container #new-phrase')

    event.preventDefault();
    myWord.textContent = myTextInput.value;
    let myWordStr = myWord.textContent;
    let replacePhrase = myNewText.value;
    let newPhraseStr = newPhrase.value;
    let splitedWordArr = myWordStr.split(' ');

    for(let i = 0; i<splitedWordArr.length; i++){
        if(splitedWordArr[i] == replacePhrase){
            splitedWordArr[i] = newPhraseStr;
        }
    }

    let outputStr = splitedWordArr.join(" ");
    myWord.textContent = outputStr;
})