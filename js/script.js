let actualColor; 

function mudar(cor) {
    document.body.style.backgroundColor = cor;
    document.body.style.animation = "none";
    actualColor = cor;
}

function secret() {
    document.body.style.animation = "rainbow 10s infinite";
    var buttons = [];

    for(let i = 1;i>=5;i++) {
        buttons.push(document.getElementById(`b${i}`))
    }

    buttons.forEach((element) => {
        element.style.animation = 'shake 10s infinite'
    })

}