let user = prompt("Enter s, w, or g");
let cpuI = Math.floor(Math.random() * 3); // Corrected the random number range
let cpu = ["s", "w", "g"][cpuI];

const match = function(cpu, user) {
    if (cpu === user) {
        return "Nobody. Match is tied";
    } else if (cpu === "s" && user === "w") {
        return "User";
    } else if (cpu === "g" && user === "w") {
        return "CPU";
    } else if (cpu === "s" && user === "g") {
        return "CPU";
    } else if (cpu === "g" && user === "s") {
        return "User";
    } else if (cpu === "w" && user === "s") {
        return "User";
    } else if (cpu === "w" && user === "g") {
        return "User";
    } else if (cpu === "s" && user === "w") {
        return "CPU";
    }
}

let result = match(cpu, user);
document.write(`CPU: ${cpu} <br>USER: ${user}<br>The winner is: ${result}`);
