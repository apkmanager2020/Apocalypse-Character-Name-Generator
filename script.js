// script.js

const maleNames = ["Axel", "Blade", "Fang", "Rex", "Cade", "Jett", "Knox", "Zane", "Thorn", "Drake", "Wolf", "Slade"];
const femaleNames = ["Lyra", "Vera", "Sable", "Raven", "Luna", "Nyx", "Jade", "Iris", "Blaze", "Echo", "Faye", "Skye"];
const neutralNames = ["Ash", "Quinn", "Pax", "Storm", "Onyx", "Rain", "Sky", "Zephyr", "Cinder", "Haze", "Rune", "Flint"];

// Function to generate names
function generateNames(type) {
    let namesArray;
    if (type === "male") namesArray = maleNames;
    else if (type === "female") namesArray = femaleNames;
    else namesArray = neutralNames;

    // Clear the name list
    const nameList = document.getElementById("nameList");
    nameList.innerHTML = "";

    // Display 8 random names
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * namesArray.length);
        const nameDiv = document.createElement("div");
        nameDiv.innerText = namesArray[randomIndex];
        
        // Add click event to copy the name
        nameDiv.addEventListener("click", () => copyName(nameDiv));
        
        nameList.appendChild(nameDiv);
    }
}

// Copy name to clipboard and change background color
function copyName(element) {
    const name = element.innerText;
    navigator.clipboard.writeText(name).then(() => {
        element.classList.add("copied");
        setTimeout(() => {
            element.classList.remove("copied");
        }, 1000);
    });
}

// Initial name generation when the page loads
document.addEventListener("DOMContentLoaded", () => {
    generateNames("neutral"); // Display neutral names initially
});
