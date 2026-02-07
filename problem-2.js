function validOtp(otp) {
    if(typeof otp !== 'string'){
        return "Invalid"
    }

    if(otp.length !== 8){
        return false;
    }

    if(!otp.startsWith("ph-")){
        return false;
    }
    return true;
}

// let output=validOtp("ph-10985");
// let output=validOtp("ph-10984444");
let output=validOtp(["ph-10985"]);

console.log(output);
