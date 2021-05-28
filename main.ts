function circle () {
    basic.showLeds(`
        . . # . .
        . # . # .
        # . # . #
        . # . # .
        . . # . .
        `)
    basic.clearScreen()
    basic.pause(500)
}
input.onButtonPressed(Button.A, function () {
    if (On == true) {
        On = false
    } else {
        On = true
    }
})
let On = false
On = false
basic.forever(function () {
    while (On == true) {
        circle()
    }
})
