
function random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)

}

let abc = +prompt('Salom! Nechta misol yechmoqchisiz')
let minNum = +prompt('Minimal Sonni kiriting')// 2
let maxNum = +prompt('Maximal Sonni kiriting') // 10

for (let i = 0; i < abc; i++) {
    let num1 = random(minNum, maxNum)
    let num2 = random(minNum, maxNum)
    let symbols = random(1, 5)
    if (symbols == 1) {
        symbols = '+'
        let pr = +prompt('Misolni yeching ' + num1 + symbols + num2)
        let answer = num1 + num2 == pr ? 'Togri' : 'Javobingiz notogri'
        alert(answer)
    }

    if (symbols == 2) {
        symbols = '-'
        let pr = +prompt('Misolni yeching ' + num1 + symbols + num2)
        let answer = num1 - num2 == pr ? 'Togri' : 'Javobingiz notogri'
        alert(answer)
    }

    if (symbols == 3) {
        symbols = '*'
        let pr = +prompt('Misolni yeching ' + num1 + symbols + num2)
        let answer = num1 * num2 == pr ? 'Togri' : 'Javobingiz notogri'
        alert(answer)
    }

    if (symbols == 4) {
        symbols = '/'
        let pr = +prompt('Misolni yeching ' + num1 + symbols + num2)
        let answer = num1 / num2 == pr ? 'Togri' : 'Javobingiz notogri'
        alert(answer)
    }
    if (symbols == 5) {
        symbols = '%'
        let pr = +prompt('Misolni yeching ' + num1 + symbols + num2)
        let answer = num1 % num2 == pr ? 'Togri' : 'Javobingiz notogri'
        alert(answer)
    }
}
