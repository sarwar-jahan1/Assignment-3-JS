function analyzeText(str) {
    if (typeof str !== "string" || str === "") {
        return "Invalid";
    }

    const words = str.split(" ");

    let longestWord = "";

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    const token = str.split(" ").join("").length;

    return {
        longwords: longestWord,
        token: token
    };
}

let output=analyzeText("I am a little honest person");
console.log(output);