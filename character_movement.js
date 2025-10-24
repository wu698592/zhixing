onStart(() => {
  setBackdrop("bg1")
  
  broadcast("startMovement")
})

onMsg("startMovement", () => {
  moveCharacterPattern()
})

function moveCharacterPattern() {
  moveRight()
  wait(1)
  moveLeft()
  wait(1)
  moveUp()
  wait(1)
  moveDown()
  wait(1)
  
  broadcast("movementComplete")
}

function moveRight() {
  for (let i = 0; i < 10; i++) {
    changeX(10)
    wait(0.1)
  }
}

function moveLeft() {
  for (let i = 0; i < 10; i++) {
    changeX(-10)
    wait(0.1)
  }
}

function moveUp() {
  for (let i = 0; i < 10; i++) {
    changeY(10)
    wait(0.1)
  }
}

function moveDown() {
  for (let i = 0; i < 10; i++) {
    changeY(-10)
    wait(0.1)
  }
}

onMsg("movementComplete", () => {
  say("移动完成!", 2)
})

onKey(KeySpace, () => {
  broadcast("startMovement")
})

onClick(() => {
  broadcast("startMovement")
})
