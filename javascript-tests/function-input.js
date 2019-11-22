window.onload = () => {
    const feetToInchesDisplay = document.getElementById('feetToInchesDisplay');
    const milesToFeetDisplay = document.getElementById('milesToFeetDisplay');
    const areaOfTriangleDisplay = document.getElementById('areaOfTriangleDisplay');
    const areaOfCircleDisplay = document.getElementById('areaOfCircleDisplay');

    const feetToInchesAction = document.getElementById('feetToInchesAction');
    const milesToFeetAction = document.getElementById('milesToFeetAction');
    const areaOfTriangleAction = document.getElementById('areaOfTriangleAction');
    const areaOfCircleAction = document.getElementById('areaOfCircleAction');

    const feetToInchesInput = document.getElementById('feetToInchesInput');
    const milesToFeetInput = document.getElementById('milesToFeetInput');
    const areaOfTriangleInput = document.getElementById('areaOfTriangleInput');
    const areaOfTriangleInput2 = document.getElementById('areaOfTriangleInput2');
    const areaOfCircleInput = document.getElementById('areaOfCircleInput');

    feetToInchesAction.onclick = () => {
        feetToInchesDisplay.textContent = feetToInches(feetToInchesInput.value);
    }

    milesToFeetAction.onclick = () => {
        milesToFeetDisplay.textContent = milesToFeet(milesToFeetInput.value);
    }

    areaOfTriangleAction.onclick = () => {
        areaOfTriangleDisplay.textContent = areaOfTriangle(areaOfTriangleInput.value, areaOfTriangleInput2.value);
    }

    areaOfCircleAction.onclick = () => {
        areaOfCircleDisplay.textContent = areaOfCircle(areaOfCircleInput.value);
    }

    const feetToInches = (feet) => {
        return feet * 12;
    }

    const milesToFeet = (miles) => {
        return miles * 5280;
    }

    const areaOfTriangle = (base, height) => {
        return area = (base * height) / 2;
    }

    const areaOfCircle = (radius) => {
        return area = Math.PI * (radius * radius);
    }
}