input.onButtonPressed(Button.A, function () {
    if (pins.analogReadPin(AnalogPin.P0) < 320) {
        basic.showString("Water")
        music.playMelody("C C C C C C C C ", 120)
        led.setBrightness(160)
    } else if (pins.analogReadPin(AnalogPin.P0) > 505) {
        basic.showString("To Wet")
        music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 120)
        led.setBrightness(255)
    } else if (pins.analogReadPin(AnalogPin.P0) > 320) {
        basic.showString("Good")
        music.playMelody("F F F F F F F F ", 120)
        led.setBrightness(80)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
})
basic.showIcon(IconNames.Yes)
led.setDisplayMode(DisplayMode.Greyscale)
basic.pause(1000)
basic.clearScreen()
led.plot(2, 2)
