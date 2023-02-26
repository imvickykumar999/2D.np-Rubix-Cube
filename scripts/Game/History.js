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

dust.rubikube.History = function () {
    var history = [];
    var redoList = [];

    this.add = function (command) {
        history.push(command);
        redoList.length = 0;

        command.execute();
    };

    this.undoLastMove = function () {
        if (history.length == 0)
            return;

        var command = history.pop();
        redoList.push(command);

        command.undo();
    };

    this.isUndoAvailable = function () {
        return history.length > 0;
    };

    this.redoMove = function () {
        if (redoList.length == 0)
            return;

        var command = redoList.pop();
        history.push(command);

        command.execute();
    };

    this.isRedoAvailable = function () {
        return redoList.length > 0;
    };

    this.reset = function () {
        history.length = 0;
        redoList.length = 0;
    };

    this.toString = function (notationType, options) {
        var moveIds = [];

        history.forEach(function (item, index, array) {
            moveIds.push(item.getMoveId());
        });

        var stringifier = createStringifier(notationType, options);
        return stringifier.toString(moveIds);
    };

    function createStringifier(notationType, options) {
        switch (notationType) {
            default:
            case "singmaster":
                return new dust.rubikube.singmaster.Stringifier(options);

            case "wolstenholme":
                return new dust.rubikube.wolstenholme.Stringifier(options);
        }
    }
};