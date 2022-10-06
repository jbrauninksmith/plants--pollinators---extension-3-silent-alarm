basic.forever(function () {
    if (touch.getTap(touch.TouchPin.P0)) {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Sad)
            basic.showIcon(IconNames.Confused)
        }
    }
})
