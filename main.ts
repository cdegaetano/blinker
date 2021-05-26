function circle () {
    while (On == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.clearScreen()
        basic.pause(100)
    }
}
input.onButtonPressed(Button.B, function () {
    On = 1
})
let On = 0
On = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && On == 0) {
        circle()
    } else {
        if (On == 1 && input.buttonIsPressed(Button.A)) {
            basic.showNumber(2)
            On = 0
        }
    }
})
