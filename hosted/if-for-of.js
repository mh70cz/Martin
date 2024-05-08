const emojis = ["🌟", "🎂", "🐱", "🌍", "🏀",  "💡",  "🚀"];


let obsahujeZarovku = false;

for (const emoji of emojis) {

    console.log(emoji);
    if (emoji === "💡") {
        obsahujeZarovku = true;
    }
    
}

if (obsahujeZarovku === true) {
    console.log ('Array of emojis ' + emojis + ' contains 💡.');
    
} else {
    console.log ('Array of emojis ' + emojis + ' does NOT contain 💡.');
}



const emoticonEmojis = [ "😊", "😂", "👫", "😍", "❤️", "🥰","🤝", "💏",  "💔", "😢", "😡"];

let obsahujeSrdce = false;

for (const emoticonEmoji of emoticonEmojis) {
    console.log(emoticonEmoji);
    if (emoticonEmoji === "❤️") {
        obsahujeSrdce = true;
    }
}

if (obsahujeSrdce === true) {
    console.log ('Array of emotion emojis ' + emoticonEmojis + ' contains ❤️.');
} else {
    console.log ('Array of emotion emojis ' + emoticonEmojis + ' does NOT contain ❤️.');

}





const foodEmojis = ["🍎", "🍔", "🍣", "🍤", "🍪", "🍰", "🥑", "🍕", "🥗"];
                    
let hledanySymbol = '🥑' ;            

let obsahujeHledanySymbol = false;

for (const foodEmoji of foodEmojis) {
    console.log(foodEmoji);
    if (foodEmoji === hledanySymbol) {
        obsahujeHledanySymbol = true;
    }
}

if (obsahujeHledanySymbol === true) {
    console.log ('Array of food emojis ' + foodEmojis + ' contains ' + hledanySymbol + '.');
} else {
    console.log ('Array of food emojis ' + foodEmojis + ' does NOT contain ' + hledanySymbol + '.');

} 