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

dust.rubikube.singmaster.SingmasterNotation = {};

dust.rubikube.singmaster.SingmasterNotation.toString = function (moveId) {
    var stringifier = new dust.rubikube.singmaster.Stringifier();
    return stringifier.toString(moveId);
};

dust.rubikube.singmaster.SingmasterNotation.parse = function (str) {
    var parser = new dust.rubikube.singmaster.Parser();
    return parser.parse(str);
};

dust.rubikube.singmaster.SingmasterNotation.removeXYZ = function (str) {
    var remover = new dust.rubikube.singmaster.XYZRemover();
    return remover.execute(str);
};