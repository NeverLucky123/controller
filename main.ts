input.onLoudSound(function () {
    makerController.player1.press(ArcadeButton.Right)
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.A)
    light.showAnimation(light.rainbowAnimation, 200)
    light.clear()
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.B)
    light.showAnimation(light.cometAnimation, 200)
    light.clear()
})
