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

dust.rubikube.singmaster.XYZRemover = function () {
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
                case dust.rubikube.CubeMove.turnX:
                    transformer.moveViewPortXInverse();
                    break;

                case dust.rubikube.CubeMove.turnXInverse:
                    transformer.moveViewPortX();
                    break;

                case dust.rubikube.CubeMove.turnY:
                    transformer.moveViewPortYInverse();
                    break;

                case dust.rubikube.CubeMove.turnYInverse:
                    transformer.moveViewPortY();
                    break;

                case dust.rubikube.CubeMove.turnZ:
                    transformer.moveViewPortZInverse();
                    break;

                case dust.rubikube.CubeMove.turnZInverse:
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

    (function initialize(){
        transformer = new dust.rubikube.singmaster.CubeMoveTransformer();
    }());
};