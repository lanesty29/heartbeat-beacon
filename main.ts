radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
})
radio.setGroup(71)
radio.setTransmitPower(7)
basic.forever(function () {
    radio.sendString("hello")
    basic.showIcon(IconNames.Heart)
    basic.pause(5000)
})
