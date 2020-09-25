input.buttonA.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.A)
    light.showAnimation(light.rainbowAnimation, 100)
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.B)
    light.showAnimation(light.cometAnimation, 100)
})
