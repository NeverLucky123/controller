input.onLoudSound(function () {
    makerController.player1.press(ArcadeButton.Right)
    light.setAll(0x00ff00)
    music.playMelody("F G A B A G F G ", 120)
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
