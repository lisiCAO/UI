/*
Add 3 radio buttons to your HTML page
    Long hair
    Short hair
    Both
Once an item is selected create an image element and show the appropriate image according to their selection.
*/


const formElement = document.createElement("form");
formElement.id = "hairChoiceForm";

const hairOptions = ['long', 'short', 'both'];
const hairLabels = ['Long hair','Short hair', 'Both'];

for(let i = 0; i < hairLabels.length; i++){
    const inputElement = document.createElement("input");
    inputElement.type = "radio";
    inputElement.name = "hair";
    inputElement.value = hairOptions[i];
    inputElement.id = hairOptions[i] + "Hair";

    const labelElement = document.createElement("label");
    labelElement.setAttribute("for", hairOptions[i] + "Hair");
    labelElement.innerText = hairLabels[i];
    formElement.appendChild(inputElement);
    formElement.appendChild(labelElement);
    formElement.appendChild(document.createElement("br"));
}

const imageContainer =  document.createElement("div");
imageContainer.id = "imageContainer";

document.body.appendChild(formElement);
document.body.appendChild(imageContainer);


document.getElementById('hairChoiceForm').addEventListener('change', function(event) {
    let imagePath = '';
    const imageContainer = document.getElementById('imageContainer');
    
    switch(event.target.value) {
        case 'long':
            imagePath = 'path_to_long_hair_image.jpg';
            break;
        case 'short':
            imagePath = 'path_to_short_hair_image.jpg';
            break;
        case 'both':
            imagePath = 'path_to_both_hair_image.jpg';
            break;
    }
    
    // If an image is already present, remove it.
    while (imageContainer.firstChild) {
        imageContainer.removeChild(imageContainer.firstChild);
    }

    const imgElement = document.createElement('img');
    imgElement.src = imagePath;
    imageContainer.appendChild(imgElement);
});
