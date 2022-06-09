let actualColor;

function mudar(cor) {
    document.body.style.backgroundColor = cor;
    document.body.style.animation = "none";
    actualColor = cor;
}

var isRunning = false;

function secret() {
    if (!isRunning) {
        document.body.style.animation = "rainbow 10s infinite";
        var buttons = [];

        for (let i = 1; i <= 5; i++) {
            buttons.push(document.getElementById(`b${i}`))
        }
        let count = 0;
        buttons.forEach((element) => {
            if (count % 2 == 0) {
                element.style.animation = 'shake1 2s infinite'
            } else {
                element.style.animation = 'shake2 2s infinite'
            }
            count++
        })
        isRunning = true
    } else {
        
        var buttons = [];

        document.body.style.animation = "none";

        for (let i = 1; i <= 5; i++) {
            buttons.push(document.getElementById(`b${i}`))
        }
        buttons.forEach((element) => {
            element.style.animation = 'none'
        })
        isRunning = false;
    }
}