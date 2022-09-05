function fruta() {
    var input = document.getElementById("nf").value;
    console.log(input)
    

    var txts = document.getElementById("txt");

    switch (input) {
        case "pessego":
        case "acerola":
        case "abacaxi":
        case "kiwi":
        case "mamao":
        case "manga":
            txts.innerHTML = "Essa fruta é boa para fazer suco"
            break;
        case "banana":
        case "morango":
        case "pitaia":
        case "cereja":
        case "mertilo":
            txts.innerHTML = "Essa fruta é boa para fazer vitamina"
            break;
        default:
            txts.innerHTML = "fruta não verificada favor procurar um nutricionista!"
            break;
    }
}
