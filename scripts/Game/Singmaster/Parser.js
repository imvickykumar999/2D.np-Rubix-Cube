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
dust.rubikube.singmaster = dust.rubikube.singmaster || {};

dust.rubikube.singmaster.Parser = function () {
    var moves;

    this.parse = function (str) {
        moves = [];
        var items = str.split(" ");

        for (var i = 0; i < items.length; i++) {
            parseOne(items[i]);
        }

        return moves;
    };

    function parseOne(moveId) {
        switch (moveId.toUpperCase()) {
            case "L":
                moves.push(dust.rubikube.CubeMove.left);
                break;

            case "L'":
                moves.push(dust.rubikube.CubeMove.leftInverse);
                break;

            case "L2":
                moves.push(dust.rubikube.CubeMove.left);
                moves.push(dust.rubikube.CubeMove.left);
                break;

            case "R":
                moves.push(dust.rubikube.CubeMove.right);
                break;

            case "R'":
                moves.push(dust.rubikube.CubeMove.rightInverse);
                break;

            case "R2":
                moves.push(dust.rubikube.CubeMove.right);
                moves.push(dust.rubikube.CubeMove.right);
                break;

            case "U":
                moves.push(dust.rubikube.CubeMove.up);
                break;

            case "U'":
                moves.push(dust.rubikube.CubeMove.upInverse);
                break;

            case "U2":
                moves.push(dust.rubikube.CubeMove.up);
                moves.push(dust.rubikube.CubeMove.up);
                break;

            case "D":
                moves.push(dust.rubikube.CubeMove.down);
                break;

            case "D'":
                moves.push(dust.rubikube.CubeMove.downInverse);
                break;

            case "D2":
                moves.push(dust.rubikube.CubeMove.down);
                moves.push(dust.rubikube.CubeMove.down);
                break;

            case "F":
                moves.push(dust.rubikube.CubeMove.front);
                break;

            case "F'":
                moves.push(dust.rubikube.CubeMove.frontInverse);
                break;

            case "F2":
                moves.push(dust.rubikube.CubeMove.front);
                moves.push(dust.rubikube.CubeMove.front);
                break;

            case "B":
                moves.push(dust.rubikube.CubeMove.back);
                break;

            case "B'":
                moves.push(dust.rubikube.CubeMove.backInverse);
                break;

            case "B2":
                moves.push(dust.rubikube.CubeMove.back);
                moves.push(dust.rubikube.CubeMove.back);
                break;

            case "X":
                moves.push(dust.rubikube.CubeMove.turnX);
                break;

            case "X'":
                moves.push(dust.rubikube.CubeMove.turnXInverse);
                break;

            case "X2":
                moves.push(dust.rubikube.CubeMove.turnX);
                moves.push(dust.rubikube.CubeMove.turnX);
                break;

            case "Y":
                moves.push(dust.rubikube.CubeMove.turnY);
                break;

            case "Y'":
                moves.push(dust.rubikube.CubeMove.turnYInverse);
                break;

            case "Y2":
                moves.push(dust.rubikube.CubeMove.turnY);
                moves.push(dust.rubikube.CubeMove.turnY);
                break;

            case "Z":
                moves.push(dust.rubikube.CubeMove.turnZ);
                break;

            case "Z'":
                moves.push(dust.rubikube.CubeMove.turnZInverse);
                break;

            case "Z2":
                moves.push(dust.rubikube.CubeMove.turnZ);
                moves.push(dust.rubikube.CubeMove.turnZ);
                break;

            case "M":
                moves.push(dust.rubikube.CubeMove.middle);
                break;

            case "M'":
                moves.push(dust.rubikube.CubeMove.middleInverse);
                break;

            case "M2":
                moves.push(dust.rubikube.CubeMove.middle);
                moves.push(dust.rubikube.CubeMove.middle);
                break;

            case "E":
                moves.push(dust.rubikube.CubeMove.equator);
                break;

            case "E'":
                moves.push(dust.rubikube.CubeMove.equatorInverse);
                break;

            case "E2":
                moves.push(dust.rubikube.CubeMove.equator);
                moves.push(dust.rubikube.CubeMove.equator);
                break;

            case "S":
                moves.push(dust.rubikube.CubeMove.standing);
                break;

            case "S'":
                moves.push(dust.rubikube.CubeMove.standingInverse);
                break;

            case "S2":
                moves.push(dust.rubikube.CubeMove.standing);
                moves.push(dust.rubikube.CubeMove.standing);
                break;

            default:
                moves.push(dust.rubikube.CubeMove.none);
                break;
        }
    }
};