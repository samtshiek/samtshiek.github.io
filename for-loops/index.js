

window.onload = () => {
    const elfCode = {
        appendToList: (list, value) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    };

    const listButton = document.getElementById('run-for-loop-action');

    listButton.onclick = () => {
        const myList = document.getElementById('my-list');
            // WRAP THE NEXT LINE IN A for-loop that iterates over a variable named i. 
            // The loop should iterate 5 times (count from zero to five).
            elfCode.appendToList(myList, 1);
            elfCode.appendToList(myList, 2);
            // END LOOP
    }
}