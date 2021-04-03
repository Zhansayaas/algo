def make_bricks(small, big, goal):
  br =goal-( 5 * min(big,goal / 5))
  return br - small <= 0