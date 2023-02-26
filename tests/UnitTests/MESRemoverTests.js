/// <reference path="../../libraries/jasmine/jasmine.js" />
/// <reference path="../../scripts/Game/CubeMove.js" />
/// <reference path="../../scripts/Game/Singmaster/Parser.js" />
/// <reference path="../../scripts/Game/Singmaster/Stringifier.js" />
/// <reference path="../../scripts/Game/Singmaster/CubeMoveTransformer.js" />
/// <reference path="../../scripts/Game/Singmaster/MESRemover.js" />

(function () {

    describe('MESRemover', function () {
        var mesRemover;

        beforeEach(function () {
            mesRemover = new dust.rubikube.singmaster.MESRemover();
        });

        it("transforms M into L' R.", function () {
            var actual = mesRemover.execute('M');

            expect(actual).toBe("L' R");
        });

        it("transforms M U into L' R B.", function () {
            var actual = mesRemover.execute('M U');

            expect(actual).toBe("L' R B");
        });
    });

}());