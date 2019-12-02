
var arrays= {numbers:[15,14,13,12,11,10,9,8,7,6,5],
             languages:['JavaScript','HTML','CSS','Java','C#','Python','C/C++'],
             languagePopularity:[1,2,3,4,5,6,7]}

for(let i = 0; i < arrays.numbers.length; i++) {
    console.log(arrays.numbers[i]);
}

window.onload = () => {
var arrays= {numbers:[15,14,13,12,11,10,9,8,7,6,5],
        languages:['JavaScript','HTML','CSS','Java','C#','Python','C/C++'],
        languagePopularity:[1,2,3,4,5,6,7]}

    const numbersDisplay = document.getElementById('numbers-display');
    const numbersAction = document.getElementById('numbers-action');
    const techLanguageNamesDisplay = document.getElementById('tech-language-names-display');
    const techLanguageNamesAction = document.getElementById('tech-language-names-action');
    const techLanguagePopularityAction = document.getElementById('tech-language-popularity-action');
    const techLanguagePopularityDisplay = document.getElementById('tech-language-popularity-display');

    const elfCode = {
        appendToList: (list, value) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    };
    
    numbersAction.onclick = () => {
        for (i= 0; i < arrays.numbers.length; i++) {
            elfCode.appendToList(numbersDisplay, arrays.numbers[i]);
        }

        arrays.numbers.sort((a, b) => a - b);
    }

    techLanguageNamesAction.onclick = () => {
        for (i= 0; i < arrays.languages.length; i++) {
            elfCode.appendToList(techLanguageNamesDisplay, arrays.languages[i]);
        }
    }

    techLanguagePopularityAction.onclick = () => {
        for (i= 0; i < arrays.languages.length; i++) {
            elfCode.appendToList(techLanguagePopularityDisplay, arrays.languages[i] + " rank: " + arrays.languagePopularity[i]);
        }
    }



}