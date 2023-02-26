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

dust.rubikube.singmaster.Stringifier = function (options) {

    this.toString = function (moveIds) {
        switch (typeof moveIds) {
            case 'number':
                return stringifyOne(moveIds);

            case 'object':
                return stringifyArray(moveIds);
        }
    };

    function stringifyArray(moveIds) {
        if (moveIds.length === undefined)
            return '';

        if (options && options.allowXYZ === false) {
            var xyzRemover = new dust.rubikube.singmaster.XYZRemover();
            moveIds = xyzRemover.execute(moveIds);
        }

        if (options && options.allowMES === false) {
            var mesRemover = new dust.rubikube.singmaster.MESRemover();
            moveIds = mesRemover.execute(moveIds);
        }

        var sb = [];

        for (var i = 0; i < moveIds.length; i++) {
            var s = stringifyOne(moveIds[i]);
            sb.push(s);
        }

        return sb.join(' ');
    }

    function stringifyOne(moveId) {
        switch (moveId) {
            case dust.rubikube.CubeMove.left:
                return 'L';

            case dust.rubikube.CubeMove.leftInverse:
                return 'L\'';

            case dust.rubikube.CubeMove.right:
                return 'R';

            case dust.rubikube.CubeMove.rightInverse:
                return 'R\'';

            case dust.rubikube.CubeMove.up:
                return 'U';

            case dust.rubikube.CubeMove.upInverse:
                return 'U\'';

            case dust.rubikube.CubeMove.down:
                return 'D';

            case dust.rubikube.CubeMove.downInverse:
                return 'D\'';

            case dust.rubikube.CubeMove.front:
                return 'F';

            case dust.rubikube.CubeMove.frontInverse:
                return 'F\'';

            case dust.rubikube.CubeMove.back:
                return 'B';

            case dust.rubikube.CubeMove.backInverse:
                return 'B\'';

            case dust.rubikube.CubeMove.turnX:
                //return '\u25B2';
                return 'X';

            case dust.rubikube.CubeMove.turnXInverse:
                //return '\u25BC';
                return 'X\'';

            case dust.rubikube.CubeMove.turnY:
                //return '\u25C0';
                return 'Y';

            case dust.rubikube.CubeMove.turnYInverse:
                //return '\u25B6';
                return 'Y\'';

            case dust.rubikube.CubeMove.turnZ:
                return 'Z';

            case dust.rubikube.CubeMove.turnZInverse:
                return 'Z\'';

            case dust.rubikube.CubeMove.middle:
                return 'M';

            case dust.rubikube.CubeMove.middleInverse:
                return 'M\'';

            case dust.rubikube.CubeMove.equator:
                return 'E';

            case dust.rubikube.CubeMove.equatorInverse:
                return 'E\'';

            case dust.rubikube.CubeMove.standing:
                return 'S';

            case dust.rubikube.CubeMove.standingInverse:
                return 'S\'';

            default:
                return '?';
        }
    }
};