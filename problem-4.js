function gonoVote(array) {
    if(!Array.isArray(array)){
        return "Invalid";
    }

    let haVote=0;
    let naVote=0;

    for (let newArray of array){
        if(newArray =="ha"){
            haVote++;
        }else{
            naVote++;
        }
    }

    if(haVote > naVote){
        return true;
    }else if(haVote === naVote){
        return "equal";
    }else{
        return false;
    }
    
}

// let output = gonoVote(["ha","na","ha","na"]);
// let output = gonoVote(["ha","na","na"]);
// let output = gonoVote(["ha","ha","ha","na"]);
// let output = gonoVote("ha, na");
let output = gonoVote(12345);
console.log(output);