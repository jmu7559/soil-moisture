def on_button_pressed_a():
    if pins.analog_read_pin(AnalogPin.P0) < 700:
        pass
    elif pins.analog_read_pin(AnalogPin.P0) < 850:
        pass
    elif pins.analog_read_pin(AnalogPin.P0) < 980:
        basic.show_string("Water")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    pass
basic.forever(on_forever)
