function dec_to_bin(provided_dec){
    let dec = Number(provided_dec);
    let bin = '';

    while(dec >= 1){
        bin = bin + String(dec % 2);
        dec = Math.floor(dec/2);

    }
    return bin.split("").reverse().join("");
}