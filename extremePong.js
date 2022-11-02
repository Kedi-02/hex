//Game settings default
const playerWidth = 10,
  playerHeight = 100,
  p1Lives = 3,
  p2Lives = 3,
  p1X = 10,
  p1Y = canvas.height / 2 - playerHeight / 2,
  p2X = canvas.width - 10 - playerWidth,
  p2Y = canvas.height / 2 - playerHeight / 2,
  move = 5,
  ballRadius = 15;
///Player and ball movement defaults
const P1up = false,
  P1down = false,
  P2up = false,
  P2down = false,
  P1Ball = false,
  P2Ball = false,
  P1moveAdjustmentX = 0,
  P1moveAdjustmentY = 0,
  P2moveAdjustmentX = 0,
  P2moveAdjustmentY = 0;
//Ball default positions
const p1BX = p1X + playerWidth + ballRadius,
  p1BY = p1Y + playerHeight / 2,
  p2BX = p2X + playerWidth + ballRadius,
  p2BY = p1Y + playerHeight / 2;
