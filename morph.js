var module = module || {};

function Morph() {
    var morphs = [].slice.call(arguments);

    return function() {
        var argv = [].slice.call(arguments),
            matchedMorphs = morphs.filter(function(morph) {
                var args = morph.slice(0, morph.length - 1);

                return args.length === argv.length && args.every(function(checks, i) {
                    return checks.every(function(check) {
                        return check.call(check, argv[i]);
                    });
                });
            });

        if (matchedMorphs.length === 0) {
            throw new Error('No morph case found.');
        }

        if (matchedMorphs.length !== 1) {
            throw new Error('Multiple morph cases found.');
        }

        return matchedMorphs[0][matchedMorphs[0].length - 1].apply(this, argv);
    };
}

module.exports = Morph;
