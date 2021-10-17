scene.onOverlapTile(SpriteKind.Player, assets.tile`Maal`, function (sprite, location) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -250
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.starField, 200)
    info.changeScoreBy(1)
    music.playTone(randint(420, 820), music.beat(BeatFraction.Double))
})
let note: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(7)
scene.setBackgroundImage(assets.image`Bakgrunn`)
tiles.setTilemap(tilemap`level3`)
mySprite = sprites.create(assets.image`Saxophone`, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`Start`)
mySprite.ay = 400
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
for (let index = 0; index < 100; index++) {
    note = sprites.create(assets.image`Note`, SpriteKind.Food)
    tiles.placeOnRandomTile(note, assets.tile`transparency16`)
}
forever(function () {
    info.setLife(4)
})
