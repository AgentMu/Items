input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # # # . #
        # # # . #
        # # . . #
        . # # # .
        `)
    basic.pause(20000)
    basic.showString("The answer is \"A Cookie")
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # # . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # # # . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . # #
        # # # . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        # . . # #
        # # # . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        # . # # #
        # # # . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        # . . # #
        # # # . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        # . # # #
        # # # . #
        # # # # #
        `)
    basic.pause(20000)
    basic.showString("The answer is \"A Treasure Map")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # # . . .
        # # # # #
        . . . . .
        # # # # #
        `)
    basic.pause(20000)
    basic.showString("The answer is \"The American Flag")
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        . # # # .
        # . # . #
        # # # . #
        # . . . #
        . # # # .
        `)
    basic.pause(20000)
    basic.showString("The answer is \"A Clock\"")
})
basic.showLeds(`
    . . # # .
    . # # # .
    # # # # #
    . . # . .
    . # # # .
    `)
basic.showLeds(`
    # . # . .
    # # # # .
    # # # # #
    . # . # .
    . # # # .
    `)
