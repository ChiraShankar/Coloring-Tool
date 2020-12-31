
//Referenc to hexInput and inputColor DOM elements
//keyup event handler for hexInput
//Checking if hex color is valid
//If hex color is valid, update the background color of inputColor

const hexInput = document.getElementById('hexInput');
const inputColor = document.getElementById('inputColor');

hexInput.addEventListener('keyup', () => {
    const hex = hexInput.value;
    if(!isValidHex(hex)) return;
    
    const strippedHex = hex.replace('#', '');
    
    inputColor.style.backgroundColor = "#" + strippedHex;
})

const isValidHex = (hex) => {
    if(!hex) return false;
    
    const strippedHex = hex.replace('#', '');
    return strippedHex.length === 3 || strippedHex.length === 6;
}

