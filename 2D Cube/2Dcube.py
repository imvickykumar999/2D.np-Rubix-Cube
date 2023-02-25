
import numpy as np

empty = np.chararray((3, 3))
red = np.chararray((3, 3))
white = np.chararray((3, 3))
green = np.chararray((3, 3))
yellow = np.chararray((3, 3))
blue = np.chararray((3, 3))
orange = np.chararray((3, 3))

empty[:] = ' '
red[:] = 'R'
white[:] = 'W'
green[:] = 'G'
yellow[:] = 'Y'
blue[:] = 'B'
orange[:] = 'O'

layer1 = np.hstack((empty, red, empty, empty))
layer2 = np.hstack((white, green, yellow, blue))
layer3 = np.hstack((empty, orange, empty, empty))
board = np.vstack((layer1, layer2, layer3))

print('\nCube before twist middle layer toward left\n')
print(board)

temp = np.copy(board[4, 0:3])
board[4, 0:3] = board[4, 3:6]
board[4, 3:6] = board[4, 6:9]
board[4, 6:9] = board[4, 9:12]
board[4, 9:12] = temp

print('\nCube after twist middle layer toward left\n')
print(board)
