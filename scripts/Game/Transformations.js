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
Contains a hard-coded collection of cube transformations.
 */
dust.rubikube.Transformations = function () {
    var transformations;

    var left = "1-3;2-6;3-9;4-2;6-8;7-1;8-4;9-7;" +
        "19-37;22-40;25-43;" +
        "37-28;40-31;43-34;" +
        "28-54;31-51;34-48;" +
        "48-25;51-22;54-19";

    var leftInverse = "1-7;2-4;3-1;4-8;6-2;7-9;8-6;9-3;" +
        "19-54;22-51;25-48;" +
        "37-19;40-22;43-25;" +
        "28-37;31-40;34-43;" +
        "48-34;51-31;54-28";

    var right = "10-12;11-15;12-18;13-11;15-17;16-10;17-13;18-16;" +
        "21-52;24-49;27-46;" +
        "39-21;42-24;45-27;" +
        "30-39;33-42;36-45;" +
        "46-36;49-33;52-30";

    var rightInverse = "10-16;11-13;12-10;13-17;15-11;16-18;17-15;18-12;" +
        "21-39;24-42;27-45;" +
        "39-30;42-33;45-36;" +
        "30-52;33-49;36-46;" +
        "46-27;49-24;52-21";

    var up = "19-21;20-24;21-27;22-20;24-26;25-19;26-22;27-25;" +
        "37-1;38-2;39-3;" +
        "1-46;2-47;3-48;" +
        "46-10;47-11;48-12;" +
        "10-37;11-38;12-39";

    var upInverse = "19-25;20-22;21-19;22-26;24-20;25-27;26-24;27-21;" +
        "37-10;38-11;39-12;" +
        "1-37;2-38;3-39;" +
        "46-1;47-2;48-3;" +
        "10-46;11-47;12-48";

    var down = "28-30;29-33;30-36;31-29;33-35;34-28;35-31;36-34;" +
        "43-16;44-17;45-18;" +
        "16-52;17-53;18-54;" +
        "52-7;53-8;54-9;" +
        "7-43;8-44;9-45";

    var downInverse = "28-34;29-31;30-28;31-35;33-29;34-36;35-33;36-30;" +
        "43-7;44-8;45-9;" +
        "16-43;17-44;18-45;" +
        "52-16;53-17;54-18;" +
        "7-52;8-53;9-54";

    var front = "37-39;38-42;39-45;40-38;42-44;43-37;44-40;45-43;" +
        "25-10;26-13;27-16;" +
        "10-30;13-29;16-28;" +
        "28-3;29-6;30-9;" +
        "3-27;6-26;9-25";

    var frontInverse = "37-43;38-40;39-37;40-44;42-38;43-45;44-42;45-39;" +
        "25-9;26-6;27-3;" +
        "10-25;13-26;16-27;" +
        "28-16;29-13;30-10;" +
        "3-28;6-29;9-30";

    var back = "46-48;47-51;48-54;49-47;51-53;52-46;53-49;54-52;" +
        "19-7;20-4;21-1;" +
        "1-34;4-35;7-36;" +
        "34-18;35-15;36-12;" +
        "12-19;15-20;18-21";

    var backInverse = "46-52;47-49;48-46;49-53;51-47;52-54;53-51;54-48;" +
        "19-12;20-15;21-18;" +
        "1-21;4-20;7-19;" +
        "34-1;35-4;36-7;" +
        "12-36;15-35;18-34";

    var turnX = "1-7;2-4;3-1;4-8;5-5;6-2;7-9;8-6;9-3;" +
        "10-12;11-15;12-18;13-11;14-14;15-17;16-10;17-13;18-16;" +
        "19-54;20-53;21-52;22-51;23-50;24-49;25-48;26-47;27-46;" +
        "28-37;29-38;30-39;31-40;32-41;33-42;34-43;35-44;36-45;" +
        "37-19;38-20;39-21;40-22;41-23;42-24;43-25;44-26;45-27;" +
        "46-36;47-35;48-34;49-33;50-32;51-31;52-30;53-29;54-28";

    var turnXInverse = "1-3;2-6;3-9;4-2;5-5;6-8;7-1;8-4;9-7;" +
        "10-16;11-13;12-10;13-17;14-14;15-11;16-18;17-15;18-12;" +
        "19-37;20-38;21-39;22-40;23-41;24-42;25-43;26-44;27-45;" +
        "28-54;29-53;30-52;31-51;32-50;33-49;34-48;35-47;36-46;" +
        "37-28;38-29;39-30;40-31;41-32;42-33;43-34;44-35;45-36;" +
        "46-27;47-26;48-25;49-24;50-23;51-22;52-21;53-20;54-19";

    var turnY = "1-46;2-47;3-48;4-49;5-50;6-51;7-52;8-53;9-54;" +
        "10-37;11-38;12-39;13-40;14-41;15-42;16-43;17-44;18-45;" +
        "19-21;20-24;21-27;22-20;23-23;24-26;25-19;26-22;27-25;" +
        "28-34;29-31;30-28;31-35;32-32;33-29;34-36;35-33;36-30;" +
        "37-1;38-2;39-3;40-4;41-5;42-6;43-7;44-8;45-9;" +
        "46-10;47-11;48-12;49-13;50-14;51-15;52-16;53-17;54-18";

    var turnYInverse = "1-37;2-38;3-39;4-40;5-41;6-42;7-43;8-44;9-45;" +
        "10-46;11-47;12-48;13-49;14-50;15-51;16-52;17-53;18-54;" +
        "19-25;20-22;21-19;22-26;23-23;24-20;25-27;26-24;27-21;" +
        "28-30;29-33;30-36;31-29;32-32;33-35;34-28;35-31;36-34;" +
        "37-10;38-11;39-12;40-13;41-14;42-15;43-16;44-17;45-18;" +
        "46-1;47-2;48-3;49-4;50-5;51-6;52-7;53-8;54-9";

    var turnZ = "1-21;2-24;3-27;4-20;5-23;6-26;7-19;8-22;9-25;" +
        "10-30;11-33;12-36;13-29;14-32;15-35;16-28;17-31;18-34;" +
        "19-12;20-15;21-18;22-11;23-14;24-17;25-10;26-13;27-16;" +
        "28-3;29-6;30-9;31-2;32-5;33-8;34-1;35-4;36-7;" +
        "37-39;38-42;39-45;40-38;41-41;42-44;43-37;44-40;45-43;" +
        "46-52;47-49;48-46;49-53;50-50;51-47;52-54;53-51;54-48";

    var turnZInverse = "1-34;2-31;3-28;4-35;5-32;6-29;7-36;8-33;9-30;" +
        "10-25;11-22;12-19;13-26;14-23;15-20;16-27;17-24;18-21;" +
        "19-7;20-4;21-1;22-8;23-5;24-2;25-9;26-6;27-3;" +
        "28-16;29-13;30-10;31-17;32-14;33-11;34-18;35-15;36-12;" +
        "37-43;38-40;39-37;40-44;41-41;42-38;43-45;44-42;45-39;" +
        "46-48;47-51;48-54;49-47;50-50;51-53;52-46;53-49;54-52";

    var middle = "20-38;23-41;26-44;" +
        "29-53;32-50;35-47;" +
        "38-29;41-32;44-35;" +
        "47-26;50-23;53-20";

    var middleInverse = "20-53;23-50;26-47;" +
        "29-38;32-41;35-44;" +
        "38-20;41-23;44-26;" +
        "47-35;50-32;53-29";

    var equator = "4-40;5-41;6-42;" +
        "13-49;14-50;15-51;" +
        "40-13;41-14;42-15;" +
        "49-4;50-5;51-6";

    var equatorInverse = "4-49;5-50;6-51;" +
        "13-40;14-41;15-42;" +
        "40-4;41-5;42-6;" +
        "49-13;50-14;51-15";

    var standing = "2-24;5-23;8-22;" +
        "11-33;14-32;17-31;" +
        "22-11;23-14;24-17;" +
        "31-2;32-5;33-8";

    var standingInverse = "2-31;5-32;8-33;" +
        "11-22;14-23;17-24;" +
        "22-8;23-5;24-2;" +
        "31-17;32-14;33-11";

    this.get = function (cubeMove) {
        return transformations[cubeMove];
    };

    function parseTransformation(str) {
        var transformationArray = [];
        var items = str.split(";");

        for (var i = 0; i < items.length; i++) {
            var values = items[i].split("-");
            var oldVal = parseInt(values[0]);
            var newVal = parseInt(values[1]);

            transformationArray[newVal] = oldVal;
        }

        return transformationArray;
    }

    (function initialize() {
        transformations = [];
        transformations[dust.rubikube.CubeMove.left] = parseTransformation(left);
        transformations[dust.rubikube.CubeMove.leftInverse] = parseTransformation(leftInverse);
        transformations[dust.rubikube.CubeMove.right] = parseTransformation(right);
        transformations[dust.rubikube.CubeMove.rightInverse] = parseTransformation(rightInverse);
        transformations[dust.rubikube.CubeMove.up] = parseTransformation(up);
        transformations[dust.rubikube.CubeMove.upInverse] = parseTransformation(upInverse);
        transformations[dust.rubikube.CubeMove.down] = parseTransformation(down);
        transformations[dust.rubikube.CubeMove.downInverse] = parseTransformation(downInverse);
        transformations[dust.rubikube.CubeMove.front] = parseTransformation(front);
        transformations[dust.rubikube.CubeMove.frontInverse] = parseTransformation(frontInverse);
        transformations[dust.rubikube.CubeMove.back] = parseTransformation(back);
        transformations[dust.rubikube.CubeMove.backInverse] = parseTransformation(backInverse);

        transformations[dust.rubikube.CubeMove.turnX] = parseTransformation(turnX);
        transformations[dust.rubikube.CubeMove.turnXInverse] = parseTransformation(turnXInverse);
        transformations[dust.rubikube.CubeMove.turnY] = parseTransformation(turnY);
        transformations[dust.rubikube.CubeMove.turnYInverse] = parseTransformation(turnYInverse);
        transformations[dust.rubikube.CubeMove.turnZ] = parseTransformation(turnZ);
        transformations[dust.rubikube.CubeMove.turnZInverse] = parseTransformation(turnZInverse);

        transformations[dust.rubikube.CubeMove.middle] = parseTransformation(middle);
        transformations[dust.rubikube.CubeMove.middleInverse] = parseTransformation(middleInverse);
        transformations[dust.rubikube.CubeMove.equator] = parseTransformation(equator);
        transformations[dust.rubikube.CubeMove.equatorInverse] = parseTransformation(equatorInverse);
        transformations[dust.rubikube.CubeMove.standing] = parseTransformation(standing);
        transformations[dust.rubikube.CubeMove.standingInverse] = parseTransformation(standingInverse);
    }());
};