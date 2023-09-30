// Get a reference to the button
const cToFButton = document.getElementById("cToFButton");

// Add a click event listener to the button
cToFButton.addEventListener("click", function () {
    // Change the background color when clicked
    cToFButton.style.backgroundColor = "red"; // Change to the color you want
});

document.getElementById("cToFButton").addEventListener("click", function() {
    showConverter();
    cToFButton.style.color = "white"; 
    fToCButton.style.color = ""; 
    kToFButton.style.color = ""; 
    kToCButton.style.color = "";  
    cToFButton.style.backgroundColor = "black"; 
    fToCButton.style.backgroundColor = ""; 
    kToFButton.style.backgroundColor = ""; 
    kToCButton.style.backgroundColor = ""; 
    document.getElementById("convertButton").addEventListener("click", function() {
        convertCelsiusToFahrenheit();
    });
});

document.getElementById("fToCButton").addEventListener("click", function() {
    showConverter();
    cToFButton.style.color = ""; 
    fToCButton.style.color = "white"; 
    kToFButton.style.color = ""; 
    kToCButton.style.color = "";  
    cToFButton.style.backgroundColor = ""; 
    fToCButton.style.backgroundColor = "black"; 
    kToFButton.style.backgroundColor = ""; 
    kToCButton.style.backgroundColor = "";  
    document.getElementById("convertButton").addEventListener("click", function() {
        convertFahrenheitToCelsius();
    });
});

document.getElementById("kToCButton").addEventListener("click", function() {
    showConverter();
    cToFButton.style.color = ""; 
    fToCButton.style.color = ""; 
    kToFButton.style.color = ""; 
    kToCButton.style.color = "white";  
    cToFButton.style.backgroundColor = ""; 
    fToCButton.style.backgroundColor = ""; 
    kToFButton.style.backgroundColor = ""; 
    kToCButton.style.backgroundColor = "black"; 
    document.getElementById("convertButton").addEventListener("click", function() {
        convertKelvinToCelsius();
    });
});

document.getElementById("kToFButton").addEventListener("click", function() {
    showConverter();
    cToFButton.style.color = ""; 
    fToCButton.style.color = ""; 
    kToFButton.style.color = "white"; 
    kToCButton.style.color = "";  
    cToFButton.style.backgroundColor = ""; 
    fToCButton.style.backgroundColor = ""; 
    kToFButton.style.backgroundColor = "black"; 
    kToCButton.style.backgroundColor = ""; 
    document.getElementById("convertButton").addEventListener("click", function() {
        convertKelvinToFahrenheit();
    });
});

function showConverter() {
    document.getElementById("converterContainer").classList.remove("hidden");
    document.getElementById("result").textContent = "";
}

function convertCelsiusToFahrenheit() {
    const celsius = parseFloat(document.getElementById("inputValue").value);
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result").textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
}

function convertFahrenheitToCelsius() {
    const fahrenheit = parseFloat(document.getElementById("inputValue").value);
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("result").textContent = `${fahrenheit}°F is ${celsius.toFixed(2)}°C`;
}

function convertKelvinToCelsius() {
    const kelvin = parseFloat(document.getElementById("inputValue").value);
    const celsius = kelvin - 273.15;
    document.getElementById("result").textContent = `${kelvin}K is ${celsius.toFixed(2)}°C`;
}

function convertKelvinToFahrenheit() {
    const kelvin = parseFloat(document.getElementById("inputValue").value);
    const fahrenheit = (kelvin - 273.15) * 9/5 + 32;
    document.getElementById("result").textContent = `${kelvin}K is ${fahrenheit.toFixed(2)}°F`;
}
