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
dust.rubikube.wolstenholme = dust.rubikube.wolstenholme || {};

dust.rubikube.wolstenholme.Stringifier = function (options) {
    var previous;
    var previousIsTwice;
    var sb = [];

    this.toString = function (moveIds) {
        switch (typeof moveIds) {
            case 'number':
                return stringifyOne(moveIds);

            case 'object':
                previous = null;
                previousIsTwice = false;
                sb.length = 0;

                stringifyArray(moveIds);

                return sb.join(' ');

            default:
                return '';
        }
    };

    function stringifyArray(moveIds) {
        if (moveIds.length === undefined)
            return;

        for (var i = 0; i < moveIds.length; i++) {
            push(moveIds[i]);
        }

        if (previous !== null) {
            sb.push(stringifyOne(previous, previousIsTwice));
        }
    }

    function isFaceRotation(moveId) {
        return moveId === dust.rubikube.CubeMove.left ||
            moveId === dust.rubikube.CubeMove.leftInverse ||
            moveId === dust.rubikube.CubeMove.right ||
            moveId === dust.rubikube.CubeMove.rightInverse ||
            moveId === dust.rubikube.CubeMove.up ||
            moveId === dust.rubikube.CubeMove.upInverse ||
            moveId === dust.rubikube.CubeMove.down ||
            moveId === dust.rubikube.CubeMove.downInverse ||
            moveId === dust.rubikube.CubeMove.front ||
            moveId === dust.rubikube.CubeMove.frontInverse ||
            moveId === dust.rubikube.CubeMove.back ||
            moveId === dust.rubikube.CubeMove.backInverse;
    }

    function push(moveId) {
        if (isFaceRotation(moveId)) {
            // >>> is face rotation

            if (previous === null) {
                previous = moveId;
            } else {
                if (previous === moveId && !previousIsTwice) {
                    previousIsTwice = true;
                } else {
                    sb.push(stringifyOne(previous, previousIsTwice) + stringifyOne(moveId));
                    previous = null;
                    previousIsTwice = false;
                }
            }
        } else {
            // >>> is other typw of move

            if (previous !== null) {
                sb.push(stringifyOne(previous, previousIsTwice));
            }

            sb.push(stringifyOne(moveId));
        }
    }

    function stringifyOne(moveId, twice) {
        if (twice === undefined)
            twice = false;

        switch (moveId) {
            case dust.rubikube.CubeMove.left:
                return twice ? 'LI' : 'LO';
                
            case dust.rubikube.CubeMove.leftInverse:
                return twice ? 'LI' : 'LA';
                
            case dust.rubikube.CubeMove.right:
                return twice ? 'RI' : 'RO';
                
            case dust.rubikube.CubeMove.rightInverse:
                return twice ? 'RI' : 'RA';
                
            case dust.rubikube.CubeMove.up:
                return twice ? 'TI' : 'TO';
                
            case dust.rubikube.CubeMove.upInverse:
                return twice ? 'TI' : 'TA';
                
            case dust.rubikube.CubeMove.down:
                return twice ? 'DI' : 'DO';
                
            case dust.rubikube.CubeMove.downInverse:
                return twice ? 'DI' : 'DA';
                
            case dust.rubikube.CubeMove.front:
                return twice ? 'FI' : 'FO';
                
            case dust.rubikube.CubeMove.frontInverse:
                return twice ? 'FI' : 'FA';
                
            case dust.rubikube.CubeMove.back:
                return twice ? 'BI' : 'BO';
                
            case dust.rubikube.CubeMove.backInverse:
                return twice ? 'BI' : 'BA';
                
            case dust.rubikube.CubeMove.turnX:
                return 'ROC';
                
            case dust.rubikube.CubeMove.turnXInverse:
                return 'RAC';
                
            case dust.rubikube.CubeMove.turnY:
                return 'TOC';
                
            case dust.rubikube.CubeMove.turnYInverse:
                return 'TAC';
                
            case dust.rubikube.CubeMove.turnZ:
                return 'FOC';
                
            case dust.rubikube.CubeMove.turnZInverse:
                return 'FAC';
                
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