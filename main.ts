input.onLoudSound(function () {
    makerController.player1.press(ArcadeButton.Right)
    light.showAnimation(light.runningLightsAnimation, 500)
    light.clear()
})
input.buttonB.onEvent(ButtonEvent.Down, function () {
    makerController.player1.setButton(ArcadeButton.B, true)
    light.showAnimation(light.cometAnimation, 200)
    light.clear()
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.A)
    light.showAnimation(light.rainbowAnimation, 200)
    light.clear()
})
input.setLoudSoundThreshold(255)
