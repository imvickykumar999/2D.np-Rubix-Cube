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

dust.rubikube.MoveCommand = function (options) {
    function calculateUndoMove() {
        return dust.rubikube.CubeMove.inverse(options.moveId);
    }

    this.execute = function () {
        options.performMove(options.moveId);
    };

    this.undo = function () {
        var undoMoveId = calculateUndoMove();
        options.performMove(undoMoveId);
    };

    this.toString = function () {
        var stringifier = new dust.rubikube.singmaster.Stringifier();
        return stringifier.toString(options.moveId);
    };

    this.getMoveId = function () {
        return options.moveId;
    };

    (function initialize() {
        if (typeof options !== "object")
            throw "options are not provided.";

        if (typeof options.performMove !== "function")
            throw "options does not contain the move function.";

        if (typeof options.moveId !== "number")
            throw "options does not contain the move id to be performed.";
    }());
};