input.onLoudSound(function () {
    makerController.player1.press(ArcadeButton.Right)
    light.showAnimation(light.runningLightsAnimation, 500)
    light.clear()
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.A)
    light.showAnimation(light.rainbowAnimation, 200)
    music.baDing.play()
    light.clear()
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.B)
    light.showAnimation(light.cometAnimation, 200)
    music.baDing.play()
    light.clear()
})
