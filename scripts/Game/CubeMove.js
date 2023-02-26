// Rubikube
// Copyright (C) 2014 Dust in the Wind
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <http://www.gnu.org/licenses/>.

window.dust = window.dust || {};
dust.rubikube = dust.rubikube || {};

dust.rubikube.CubeMove = {
    none: 0,

    // rotates the left face clockwise
    left: 1,

    // rotates the left face counter-clockwise
    leftInverse: 2,

    // rotates the right face clockwise
    right: 3,

    // rotates the right face counter-clockwise
    rightInverse: 4,

    // rotates the up face clockwise
    up: 5,

    // rotates the up face counter-clockwise
    upInverse: 6,

    // rotates the down face clockwise
    down: 7,

    // rotates the down face counter-clockwise
    downInverse: 8,

    // rotates the front face clockwise
    front: 9,

    // rotates the front face counter-clockwise
    frontInverse: 10,

    // rotates the back face clockwise
    back: 11,

    // rotates the back face counter-clockwise
    backInverse: 12,

    // rotates the whole cube clockwise on the R face (on the x axis)
    turnX: 13,

    // rotates the whole cube counter-clockwise on the R face (on the x axis)
    turnXInverse: 14,

    // rotates the whole cube clockwise on the U face (on the y axis)
    turnY: 15,

    // rotates the whole cube counter-clockwise on the U face (on the y axis)
    turnYInverse: 16,

    // rotates the whole cube clockwise on the F face (on the z axis)
    turnZ: 17,

    // rotates the whole cube counter-clockwise on the F face (on the z axis)
    turnZInverse: 18,

    // rotates the layer between L and R, turn direction as L
    middle: 19,

    // rotates the layer between L and R, turn direction as L'
    middleInverse: 20,

    // rotates the layer between U and D, turn direction as D
    equator: 21,

    // rotates the layer between U and D, turn direction as D'
    equatorInverse: 22,

    // rotates the layer between F and B, turn direction as F
    standing: 23,

    // rotates the layer between F and B, turn direction as F'
    standingInverse: 24
};

dust.rubikube.CubeMove.inverse = function (moveId) {
    switch (moveId) {
        case dust.rubikube.CubeMove.left:
            return dust.rubikube.CubeMove.leftInverse;

        case dust.rubikube.CubeMove.leftInverse:
            return dust.rubikube.CubeMove.left;

        case dust.rubikube.CubeMove.right:
            return dust.rubikube.CubeMove.rightInverse;

        case dust.rubikube.CubeMove.rightInverse:
            return dust.rubikube.CubeMove.right;

        case dust.rubikube.CubeMove.up:
            return dust.rubikube.CubeMove.upInverse;

        case dust.rubikube.CubeMove.upInverse:
            return dust.rubikube.CubeMove.up;

        case dust.rubikube.CubeMove.down:
            return dust.rubikube.CubeMove.downInverse;

        case dust.rubikube.CubeMove.downInverse:
            return dust.rubikube.CubeMove.down;

        case dust.rubikube.CubeMove.front:
            return dust.rubikube.CubeMove.frontInverse;

        case dust.rubikube.CubeMove.frontInverse:
            return dust.rubikube.CubeMove.front;

        case dust.rubikube.CubeMove.back:
            return dust.rubikube.CubeMove.backInverse;

        case dust.rubikube.CubeMove.backInverse:
            return dust.rubikube.CubeMove.back;

        case dust.rubikube.CubeMove.turnX:
            return dust.rubikube.CubeMove.turnXInverse;

        case dust.rubikube.CubeMove.turnXInverse:
            return dust.rubikube.CubeMove.turnX;

        case dust.rubikube.CubeMove.turnY:
            return dust.rubikube.CubeMove.turnYInverse;

        case dust.rubikube.CubeMove.turnYInverse:
            return dust.rubikube.CubeMove.turnY;

        case dust.rubikube.CubeMove.turnZ:
            return dust.rubikube.CubeMove.turnZInverse;

        case dust.rubikube.CubeMove.turnZInverse:
            return dust.rubikube.CubeMove.turnZ;

        case dust.rubikube.CubeMove.middle:
            return dust.rubikube.CubeMove.middleInverse;

        case dust.rubikube.CubeMove.middleInverse:
            return dust.rubikube.CubeMove.middle;

        case dust.rubikube.CubeMove.equator:
            return dust.rubikube.CubeMove.equatorInverse;

        case dust.rubikube.CubeMove.equatorInverse:
            return dust.rubikube.CubeMove.equator;

        case dust.rubikube.CubeMove.standing:
            return dust.rubikube.CubeMove.standingInverse;

        case dust.rubikube.CubeMove.standingInverse:
            return dust.rubikube.CubeMove.standing;

        default:
            return dust.rubikube.CubeMove.none;
    }
}