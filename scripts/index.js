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

(function () {
    var rubikGame;
    var cubeUserControl;

    var $history;
    var $buttonUndo;
    var $buttonRedo;

    var dialogHelp;
    var dialogImport;
    var dialogExport;
    var dialogAbout;

    function onButtonScrambleClicked() {
        scramble();
    }

    function onButtonUndoClicked() {
        rubikGame.undoLastMove();
    }

    function onButtonRedoClicked() {
        rubikGame.redoMove();
    }

    function onButtonResetClicked() {
        rubikGame.reset();
    }

    function refreshAllControls() {
        var text = rubikGame.getHistory();
        $history.text(text);

        var isUndoAvailable = rubikGame.isUndoAvailable();
        $buttonUndo.prop("disabled", !isUndoAvailable);

        var isRedoAvailable = rubikGame.isRedoAvailable();
        $buttonRedo.prop("disabled", !isRedoAvailable);
    }

    function onCubeChanged() {
        refreshAllControls();
    }

    function onButtonExportClick() {
        dialogExport.open();
    }

    function onButtonImportClick() {
        dialogImport.open();
    }

    function onButtonHelpClick() {
        dialogHelp.open();
    }

    function onButtonAboutClick() {
        dialogAbout.open();
    }

    function scramble() {
        var parser = new dust.rubikube.singmaster.Parser();
        var text = "D2 U2 R B D F' L2 F2 D U B' U2 D2 L2 B' L' F R L F2 U2 L2 U2 D' L2";
        var moves =  parser.parse(text);
        rubikGame.move(moves);
    }

    $(function () {
        rubikGame = new dust.rubikube.RubikGame();

        var faceColors = new dust.rubikube.CubeColors();
        cubeUserControl = new dust.rubikube.CubeUserControl("#cubeContainer", rubikGame, faceColors);

        rubikGame.cubeChanged.subscribe(onCubeChanged);

        var $buttonScramble = $("#buttonScramble");
        $buttonScramble.click(onButtonScrambleClicked);

        $buttonUndo = $("#buttonUndo");
        $buttonUndo.click(onButtonUndoClicked);

        $buttonRedo = $("#buttonRedo");
        $buttonRedo.click(onButtonRedoClicked);

        var $buttonReset = $("#buttonReset");
        $buttonReset.click(onButtonResetClicked);

        var $buttonExport = $("#buttonExport");
        $buttonExport.click(onButtonExportClick);

        var $buttonImport = $("#buttonImport");
        $buttonImport.click(onButtonImportClick);

        var $buttonHelp = $("#buttonHelp");
        $buttonHelp.click(onButtonHelpClick);

        var $buttonAbout = $("#buttonAbout");
        $buttonAbout.click(onButtonAboutClick);

        $history = $("#historyValue");

        dialogHelp = new dust.rubikube.HelpDialog("#dialogHelp");
        dialogImport = new dust.rubikube.ImportDialog("#dialogImport", rubikGame);
        dialogExport = new dust.rubikube.ExportDialog("#dialogExport", rubikGame);
        dialogAbout = new dust.rubikube.AboutDialog("#dialogAbout");

        refreshAllControls();

//        $("#test .rbk-cell.cell9")
//            .css({
//                "border-spacing": "90px",
//                left: "100px",
//                top: "100px"
//            })
//            .animate({
//                top: "50px"
//            }, {
//                duration: 300,
//                easing: "easeInQuart"
//            })
//            .animate({
//                path: new $.path.arc({
//                    center: [37 + 2 + 18 - 18, 37 + 2 + 18 - 18],
//                    radius: 37 + 2 + 18 - 18,
//                    start: 90,
//                    end: 180,
//                    dir: 1
//                }),
//                "border-spacing": 0
//            }, {
//                duration: 300,
//                easing: "linear",
//                step: function (now, fx) {
//                    //$(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
//                    //$(this).css('-moz-transform', 'rotate(' + now + 'deg)');
//                    $(this).css('transform', 'rotate(' + now + 'deg)');
//                }
//            })
//            .animate({
//                left: "0"
//            }, {
//                duration: 300,
//                easing: "easeOutQuart"
//            });
//
//        function layDownFace($cells) {
//            $cells.each(function (index) {
//                var $elem = $(this);
//
//                var cellHeight = $elem.height();
//                var cellWidth = $elem.width();
//
//                var borderTopWidth = parseInt($elem.css("border-top-width"), 10);
//                var borderBottomWidth = parseInt($elem.css("border-bottom-width"), 10);
//                var borderLeftWidth = parseInt($elem.css("border-left-width"), 10);
//                var borderRightWidth = parseInt($elem.css("border-right-width"), 10);
//                var cellSpace = 2;
//
//                $elem.css({
//                    top: Math.floor(index / 3) * (cellHeight + borderTopWidth + borderBottomWidth + cellSpace),
//                    left: (index % 3) * (cellWidth + borderLeftWidth + borderRightWidth + cellSpace)
//                });
//            });
//        }
//
//        layDownFace($(".rbk-cell"));
    });

}());