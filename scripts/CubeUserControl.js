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

dust.rubikube.CubeUserControl = function (parentSelector, rubikGame, faceColors) {
    var $parent;
    var $cube;

    var faceL;
    var faceR;
    var faceU;
    var faceD;
    var faceF;
    var faceB;

    function refreshCube() {
        var cells = rubikGame.toCellArray();

        faceL.refreshCells(cells.slice(1, 10));
        faceR.refreshCells(cells.slice(10, 19));
        faceU.refreshCells(cells.slice(19, 28));
        faceD.refreshCells(cells.slice(28, 37));
        faceF.refreshCells(cells.slice(37, 46));
        faceB.refreshCells(cells.slice(46));
    }

    function onCubeChanged() {
        refreshCube();
    }

    function createUi() {

        $cube = createTable(3, 4);
        $cube
            .addClass("cube")
            .attr("tabindex", "1")
            .mouseenter(onMouseEnter);

        var $cubeCells = $cube.find("td");

        faceL.setParent($cubeCells.get(4));
        faceR.setParent($cubeCells.get(6));
        faceU.setParent($cubeCells.get(1));
        faceD.setParent($cubeCells.get(9));
        faceF.setParent($cubeCells.get(5));
        faceB.setParent($cubeCells.get(7));

        faceF.allowTurnCube(true);

        $parent.append($cube);
    }

    function onMouseEnter() {
        $cube.focus();
    }

    function createTable(rowCount, columnCount) {
        var sb = [];

        sb.push("<table>");

        for (var i = 0; i < rowCount; i++) {
            sb.push("<tr>");

            for (var j = 0; j < columnCount; j++)
                sb.push("<td></td>");

            sb.push("</tr>");
        }

        sb.push("</table>");

        return $(sb.join(''));
    }

    function onKeyup(ev) {
        ev.preventDefault();

        // Propagate KeyUp event to sub controls.
        faceL.keyUp(ev);
        faceR.keyUp(ev);
        faceU.keyUp(ev);
        faceD.keyUp(ev);
        faceF.keyUp(ev);
        faceB.keyUp(ev);
    }

    function onKeydown(ev) {
        ev.preventDefault();

        // Propagate KeyDown event to sub controls.
        faceL.keyDown(ev);
        faceR.keyDown(ev);
        faceU.keyDown(ev);
        faceD.keyDown(ev);
        faceF.keyDown(ev);
        faceB.keyDown(ev);

        handlekeyControls(ev);
        handleKeyPadControls(ev);
    }

    function handlekeyControls(ev) {
        switch (ev.which) {
            case 76: // l
                if (ev.shiftKey)
                    rubikGame.move(dust.rubikube.CubeMove.leftInverse);
                else
                    rubikGame.move(dust.rubikube.CubeMove.left);
                break;

            case 82: // r
                if (ev.shiftKey)
                    rubikGame.move(dust.rubikube.CubeMove.rightInverse);
                else
                    rubikGame.move(dust.rubikube.CubeMove.right);
                break;

            case 85: // u
                if (ev.shiftKey)
                    rubikGame.move(dust.rubikube.CubeMove.upInverse);
                else
                    rubikGame.move(dust.rubikube.CubeMove.up);
                break;

            case 68: // d
                if (ev.shiftKey)
                    rubikGame.move(dust.rubikube.CubeMove.downInverse);
                else
                    rubikGame.move(dust.rubikube.CubeMove.down);
                break;

            case 70: // f
                if (ev.shiftKey)
                    rubikGame.move(dust.rubikube.CubeMove.frontInverse);
                else
                    rubikGame.move(dust.rubikube.CubeMove.front);
                break;

            case 66: // b
                if (ev.shiftKey)
                    rubikGame.move(dust.rubikube.CubeMove.backInverse);
                else
                    rubikGame.move(dust.rubikube.CubeMove.back);
                break;

            case 37: // left arrow
                if (!ev.shiftKey)
                    rubikGame.move(dust.rubikube.CubeMove.turnY);
                break;

            case 38: // up arrow
                if (!ev.shiftKey)
                    rubikGame.move(dust.rubikube.CubeMove.turnX);
                break;

            case 39: // right arrow
                if (!ev.shiftKey)
                    rubikGame.move(dust.rubikube.CubeMove.turnYInverse);
                break;

            case 40: // down arrow
                if (!ev.shiftKey)
                    rubikGame.move(dust.rubikube.CubeMove.turnXInverse);
                break;
        }
    }

    function handleKeyPadControls(ev) {
        console.log(ev.which);

        switch (ev.which) {
            case 100: // keypad 4
                if (ev.ctrlKey)
                    rubikGame.move(dust.rubikube.CubeMove.turnY);
                else if (ev.shiftKey)
                    rubikGame.move(dust.rubikube.CubeMove.leftInverse);
                else
                    rubikGame.move(dust.rubikube.CubeMove.left);
                break;

            case 102: // keypad 6
                if (ev.ctrlKey)
                    rubikGame.move(dust.rubikube.CubeMove.turnYInverse);
                else if (ev.shiftKey)
                    rubikGame.move(dust.rubikube.CubeMove.rightInverse);
                else
                    rubikGame.move(dust.rubikube.CubeMove.right);
                break;

            case 104: // keypad 8
                if (ev.ctrlKey)
                    rubikGame.move(dust.rubikube.CubeMove.turnX);
                else if (ev.shiftKey)
                    rubikGame.move(dust.rubikube.CubeMove.upInverse);
                else
                    rubikGame.move(dust.rubikube.CubeMove.up);
                break;

            case 98: // keypad 2
                if (ev.ctrlKey)
                    rubikGame.move(dust.rubikube.CubeMove.turnXInverse);
                else if (ev.shiftKey)
                    rubikGame.move(dust.rubikube.CubeMove.downInverse);
                else
                    rubikGame.move(dust.rubikube.CubeMove.down);
                break;

            case 101: // keypad 5
                if (ev.ctrlKey)
                    break;
                else if (ev.shiftKey)
                    rubikGame.move(dust.rubikube.CubeMove.frontInverse);
                else
                    rubikGame.move(dust.rubikube.CubeMove.front);
                break;

            case 105: // keypad 9
                if (ev.ctrlKey)
                    break;
                else if (ev.shiftKey)
                    rubikGame.move(dust.rubikube.CubeMove.backInverse);
                else
                    rubikGame.move(dust.rubikube.CubeMove.back);
                break;

            case 37: // left arrow
                if (ev.shiftKey)
                    rubikGame.move(dust.rubikube.CubeMove.leftInverse);
                break;

            case 38: // up arrow
                if (ev.shiftKey)
                    rubikGame.move(dust.rubikube.CubeMove.upInverse);
                break;

            case 39: // right arrow
                if (ev.shiftKey)
                    rubikGame.move(dust.rubikube.CubeMove.rightInverse);
                break;

            case 40: // down arrow
                if (ev.shiftKey)
                    rubikGame.move(dust.rubikube.CubeMove.downInverse);
                break;
        }
    }

    (function initialize() {
        $parent = $(parentSelector);

        faceL = new dust.rubikube.CubeFaceUserControl(rubikGame, dust.rubikube.CubeFace.left, faceColors);
        faceR = new dust.rubikube.CubeFaceUserControl(rubikGame, dust.rubikube.CubeFace.right, faceColors);
        faceU = new dust.rubikube.CubeFaceUserControl(rubikGame, dust.rubikube.CubeFace.up, faceColors);
        faceD = new dust.rubikube.CubeFaceUserControl(rubikGame, dust.rubikube.CubeFace.down, faceColors);
        faceF = new dust.rubikube.CubeFaceUserControl(rubikGame, dust.rubikube.CubeFace.front, faceColors);
        faceB = new dust.rubikube.CubeFaceUserControl(rubikGame, dust.rubikube.CubeFace.back, faceColors);

        createUi();

        rubikGame.cubeChanged.subscribe(onCubeChanged);

        $cube.keydown(onKeydown);
        $cube.keyup(onKeyup);

        refreshCube();
    }());

};