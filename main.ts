if (input.isGesture(Gesture.Shake)) {
    pins.analogWritePin(AnalogPin.P1, 1023)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(100)
    pins.analogWritePin(AnalogPin.P0, 1023)
    basic.pause(100)
    pins.analogWritePin(AnalogPin.P0, 1023)
    basic.pause(100)
}
basic.forever(function () {
    if (input.lightLevel() < 80) {
        pins.servoWritePin(AnalogPin.P2, 180)
    } else {
        pins.servoWritePin(AnalogPin.P2, 0)
    }
})
