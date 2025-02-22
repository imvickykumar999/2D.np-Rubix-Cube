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

dust.rubikube.singmaster.MESRemover = function () {
    var transformer;

    this.execute = function (moves) {
        transformer.reset();

        switch (typeof moves) {
            case "string":
                return executeOnString(moves);

            case "object":
                if (moves.constructor === Array) {
                    return executeOnArray(moves);
                }
        }

        return moves;
    };

    function executeOnString(str) {
        var parser = new dust.rubikube.singmaster.Parser();
        var moveIds = parser.parse(str);

        var newMoveIds = executeOnArray(moveIds);

        var stringifier = new dust.rubikube.singmaster.Stringifier();
        return stringifier.toString(newMoveIds);
    }

    function executeOnArray(moveIds) {
        var newMoveIds = [];

        for (var i = 0; i < moveIds.length; i++) {
            switch (moveIds[i]) {
                case dust.rubikube.CubeMove.middle:
                    newMoveIds.push(dust.rubikube.CubeMove.leftInverse);
                    newMoveIds.push(dust.rubikube.CubeMove.right);
                    transformer.moveViewPortX();
                    break;

                case dust.rubikube.CubeMove.middleInverse:
                    newMoveIds.push(dust.rubikube.CubeMove.left);
                    newMoveIds.push(dust.rubikube.CubeMove.rightInverse);
                    transformer.moveViewPortXInverse();
                    break;

                case dust.rubikube.CubeMove.equator:
                    newMoveIds.push(dust.rubikube.CubeMove.up);
                    newMoveIds.push(dust.rubikube.CubeMove.downInverse);
                    transformer.moveViewPortY();
                    break;

                case dust.rubikube.CubeMove.equatorInverse:
                    newMoveIds.push(dust.rubikube.CubeMove.upInverse);
                    newMoveIds.push(dust.rubikube.CubeMove.down);
                    transformer.moveViewPortYInverse();
                    break;

                case dust.rubikube.CubeMove.standing:
                    newMoveIds.push(dust.rubikube.CubeMove.frontInverse);
                    newMoveIds.push(dust.rubikube.CubeMove.back);
                    transformer.moveViewPortZInverse();
                    break;

                case dust.rubikube.CubeMove.turnZInverse:
                    newMoveIds.push(dust.rubikube.CubeMove.front);
                    newMoveIds.push(dust.rubikube.CubeMove.backInverse);
                    transformer.moveViewPortZ();
                    break;

                default:
                    var newMoveId = transformer.toAbsolute(moveIds[i]);
                    newMoveIds.push(newMoveId);
                    break;
            }
        }

        return newMoveIds;
    }

    (function initialize() {
        transformer = new dust.rubikube.singmaster.CubeMoveTransformer();
    }());
};