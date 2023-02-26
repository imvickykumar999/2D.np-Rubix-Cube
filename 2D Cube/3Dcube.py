# !pip install pygame

import pygame
import math
import numpy as np
import sys

'''
Not really sure but I think pygame needs to run under Python 3.6

Here is what I used:
Pycharm - Community Version
Python Ver:3.6
Pygame Ver:2.0.1
Numpy Ver: 1.19.3

Good Luck!
'''
print()
print("Python Ver: " + str(sys.version_info.major) + '.' + str(sys.version_info.minor))
print("Pygame Ver: " + pygame.__version__)
print("Numpy Ver:  " + np.__version__)

BLACK = (  0,   0,   0)
WHITE = (255, 255, 255)
GREEN = (  0, 255,   0)
RED   = (  0,   0, 255)

WDT = 640
HGT = 480

pygame.init()                                     # Set up pygame parameters
pygame.display.set_caption("Rotating 3D Cube Projection in PYGame")
screen = pygame.display.set_mode((WDT, HGT))

points = [n for n in range(8)]                   # Define 3D cube

points[0] = [[-1], [-1],  [1]]
points[1] = [[1],  [-1],  [1]]
points[2] = [[1],   [1],  [1]]
points[3] = [[-1],  [1],  [1]]
points[4] = [[-1], [-1], [-1]]
points[5] = [[1],  [-1], [-1]]
points[6] = [[1],   [1], [-1]]
points[7] = [[-1],  [1], [-1]]


def draw_line(i, j, k):                   # Draw lines between edges of cube
    a = k[i]
    b = k[j]
    pygame.draw.line(screen, GREEN, (a[0], a[1]), (b[0], b[1]), 2)


angle_x = 0                    # starting x position
angle_y = 0                    # starting y position
angle_z = 0                    # starting z position

cube_size = 600                # 300 = small   900 = large
distance_from_cube = 5         # view point distance - MUST BE GREATER THAN 1

while True:
    screen.fill(BLACK)

    for event in pygame.event.get():
        if event.type == pygame.QUIT:    pygame.quit()
        if event.type == pygame.KEYDOWN: pygame.quit()

    projected_points = [j for j in range(len(points))]

    rotation_x = [[1,                 0,                  0],
                  [0, math.cos(angle_x), -math.sin(angle_x)],
                  [0, math.sin(angle_x),  math.cos(angle_x)]]

    rotation_y = [[math.cos(angle_y), 0, -math.sin(angle_y)],
                  [0,                 1,                  0],
                  [math.sin(angle_y), 0, math.cos(angle_y)]]

    rotation_z = [[math.cos(angle_z), -math.sin(angle_z), 0],
                  [math.sin(angle_z),  math.cos(angle_z), 0],
                  [0,              0,                     1]]

    index = 0
    for point in points:
        rotated_y = np.matmul(rotation_y, point)        # Cube rotation in y axis
        rotated_x = np.matmul(rotation_x, rotated_y)    # Cube rotation in yx axis
        rotated_xyz = np.matmul(rotation_z, rotated_x)  # Cube rotation in yxz axis

        z = 1 / (distance_from_cube - rotated_xyz[2][0])
        projection_matrix = [[z, 0, 0], [0, z, 0]]
        projected_2d = np.matmul(projection_matrix, rotated_xyz)

        x = int(projected_2d[0][0] * cube_size) + WDT // 2   # x,y 2D projection
        y = int(projected_2d[1][0] * cube_size) + HGT // 2

        projected_points[index] = [x, y]
        index += 1
        pygame.draw.circle(screen, RED, (x, y), 4)

    for m in range(4):                                 # Draw lines to connect dots/circles
        draw_line(m,       (m+1)%4, projected_points)
        draw_line(m+4, (m+1)%4 + 4, projected_points)
        draw_line(m,           m+4, projected_points)

    angle_x += 0.00030       # Rotation speed about x axis
    angle_y += 0.00020       # Rotation speed about y axis
    angle_z += 0.00010       # Rotation speed about z axis

    pygame.display.update()
