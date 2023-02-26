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

/*
 Represents a Rubik's cube game.
 Contains a cube and a history.
 */
dust.rubikube.RubikGame = function () {
    var cube;
    var history;

    Object.defineProperty(this, "cube", {
        configurable: false,
        enumerable: true,
        get: function () {
            return cube;
        }
    });

    var cubeChangedEvent = new dust.Event();
    this.cubeChanged = cubeChangedEvent.client;

    this.move = function (moveId) {
        move(moveId);
    };

    function move(moveId) {
        var type = $.type(moveId);
        switch (type) {
            case "number":
                createAndRunMoveCommand(moveId);
                break;

            case "array":
                for (var i = 0; i < moveId.length; i++) {
                    //if ($.type(moveId[i]) === "number")
                    createAndRunMoveCommand(moveId[i]);
                }
        }
    }

    function createAndRunMoveCommand(moveId) {
        var command = new dust.rubikube.MoveCommand({
            performMove: cube.move,
            moveId: moveId
        });

        history.add(command);
    }

    this.undoLastMove = function () {
        history.undoLastMove();
    };

    this.isUndoAvailable = function () {
        return history.isUndoAvailable();
    };

    this.redoMove = function () {
        history.redoMove();
    };

    this.isRedoAvailable = function () {
        return history.isRedoAvailable();
    };

    this.toCellArray = function () {
        return cube.toCellArray();
    };

    this.getHistory = function (notationType, options) {
        return history.toString(notationType, options);
    };

    this.reset = function () {
        history.reset();
        cube.reset();

        cubeChangedEvent.raise(this, null);
    };

    this.import = function (text) {
        var parser = new dust.rubikube.singmaster.Parser();
        var moves =  parser.parse(text);
        cube.reset();
        move(moves);
    };

    function onCubeChanged(ev) {
        cubeChangedEvent.raise(this, ev);
    }

    (function initialize() {
        cube = new dust.rubikube.Cube();
        history = new dust.rubikube.History();

        cube.cubeChanged.subscribe(onCubeChanged);
    }());
};