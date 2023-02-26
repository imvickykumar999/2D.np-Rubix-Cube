/// <reference path="../../libraries/jasmine/jasmine.js" />
/// <reference path="../../scripts/Game/CubeMove.js" />
/// <reference path="../../scripts/Game/Singmaster/Parser.js" />
/// <reference path="../../scripts/Game/Singmaster/Stringifier.js" />
/// <reference path="../../scripts/Game/Singmaster/CubeMoveTransformer.js" />
/// <reference path="../../scripts/Game/Singmaster/XYZRemover.js" />

(function () {

    describe('XYZRemover', function () {
        var xyzRemover;

        beforeEach(function () {
            xyzRemover = new dust.rubikube.singmaster.XYZRemover();
        });

        it("leaves untouched L", function () {
            var actual = xyzRemover.execute("L");

            expect(actual).toBe("L");
        });

        it("removes X from the end of the string.", function () {
            var actual = xyzRemover.execute("L X");

            expect(actual).toBe("L");
        });

        it("transforms X U into F.", function () {
            var actual = xyzRemover.execute("X U");

            expect(actual).toBe("F");
        });
    });

}());