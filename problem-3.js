function finalScore(omr) {
    if(typeof omr !== 'object'){
        return "Invalid";
    }

    let {right,wrong,skip}=omr;

    if(right+wrong+skip !== 100){
        return "Invalid"
    }

    let final = (right * 1) + (wrong * -0.5) + (skip * 0);

    return Math.round(final);
}

// let output=finalScore({"right":67,"wrong":23,"skip":10});
// let output=finalScore({"right":80,"wrong":25,"skip":0});
// let output=finalScore({"right":50,"wrong":10,"skip":40});
// let output=finalScore("!@#");
let output=finalScore(["Raj"]);
console.log(output);