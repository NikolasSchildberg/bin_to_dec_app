export function bin_to_dec(bin_str){
 
    let reversed_bin_array = bin_str.split("").reverse();

    let decimal = 0;
    for(let bit_position = 0; bit_position < reversed_bin_array.length; bit_position ++){
        let bit_str = reversed_bin_array[bit_position]
        let bit = Number(bit_str)
        decimal += bit * (2 ** bit_position)
    }

    return(String(decimal))
}

export function dec_to_bin(provided_dec){
    let dec = Number(provided_dec);
    let bin = '';

    while(dec > 1){
        bin = bin + String(dec % 2);
        dec = Math.floor(dec/2);
    }
    bin = bin + String(dec % 2);

    let bin_reversed = bin.split("").reverse().join("");
    return bin_reversed;
}