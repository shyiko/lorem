var lorem = require('../library/lorem.js');

function testIpsum(test, cls, html, options) {
    test.expect(1);
    test.equal(lorem.ipsum(cls, options), html);
    test.done();
}

exports['ipsum'] = {
    setUp: function(callback) {
        this.mathRandom = Math.random;
        var pseudoRandom = 0;
        Math.random = function() {
            return pseudoRandom = pseudoRandom < 0.9 ? pseudoRandom + 0.1 : 0;
        };
        callback();
    },
    tearDown: function(callback) {
        Math.random = this.mathRandom;
        callback();
    },
    'w': function(test) {
        testIpsum(test, 'w', 'et');
    },
    'lorem_w': function(test) {
        testIpsum(test, 'lorem_w', 'et');
    },
    'lorem_w1': function(test) {
        testIpsum(test, 'lorem_w1', 'et');
    },
    'lorem_w4$5': function(test) {
        testIpsum(test, 'lorem_w4$5', 'et ni');
    },
    'lorem_w2': function(test) {
        testIpsum(test, 'lorem_w2', 'et nisi');
    },
    's$4': function(test) {
        testIpsum(test, 's$4', 'Nisi');
    },
    'lorem_s': function(test) {
        testIpsum(test, 'lorem_s', 'Nisi velit in et et.');
    },
    'lorem_s1': function(test) {
        testIpsum(test, 'lorem_s1', 'Nisi velit in et et.');
    },
    'lorem_s2': function(test) {
        testIpsum(test, 'lorem_s2', 'Nisi velit in et et. Et impedit repellendus lorem et nisi velit in.');
    },
    'lorem_s$1': function(test) {
        testIpsum(test, 'lorem_s2$1', 'N');
    },
    'lorem_s$10': function(test) {
        testIpsum(test, 'lorem_s2$10', 'Nisi velit');
    },
    'lorem_s$': function(test) {
        testIpsum(test, 'lorem_s2$x', 'Nisi velit in et et. Et impedit repellendus lorem et nisi velit in.');
    },
    'lorem_p': function(test) {
        testIpsum(test, 'lorem_p', '<p>Velit in et et deserunt. Impedit repellendus lorem et nisi velit in et. ' +
            'Deserunt et impedit repellendus lorem et nisi. In et et deserunt et impedit.</p>');
    },
    'lorem_p1': function(test) {
        testIpsum(test, 'lorem_p1', '<p>Velit in et et deserunt. Impedit repellendus lorem et nisi velit in et. ' +
            'Deserunt et impedit repellendus lorem et nisi. In et et deserunt et impedit.</p>');
    },
    'lorem_p2': function(test) {
        testIpsum(test, 'lorem_p2', '<p>Velit in et et deserunt. Impedit repellendus lorem et nisi velit in et. ' +
            'Deserunt et impedit repellendus lorem et nisi. In et et deserunt et impedit.</p><p>Et nisi velit in. ' +
            'Et deserunt et impedit repellendus lorem et. Velit in et et deserunt. Impedit repellendus lorem et nisi velit in et. ' +
            'Deserunt et impedit repellendus lorem et nisi. In et et deserunt et impedit. Lorem et nisi velit in et et deserunt et.</p>');
    },
    'lorem_i1x100': function(test) {
        testIpsum(test, 'lorem_i1x100', 'http://placehold.it/1x100');
    },
    'lorem_unsupported_suffix': function(test) {
        testIpsum(test, 'lorem_');
    },
    'custom_lorem_w': function(test) {
        testIpsum(test, 'custom_lorem_w');
    },
    'custom_lorem_w with prefix adjusted': function(test) {
        testIpsum(test, 'custom_lorem_w', 'et', { prefix: 'custom_lorem_' });
    },
    'custom_lorem_w with text modified': function(test) {
        testIpsum(test, 'lorem_w', 'a', { text: 'a b c' });
    },
    'lorem_w with overridden defaults (prefix)': function(test) {
        var defaultPrefix = lorem.defaults().prefix;
        try {
            lorem.overrideDefaults({ prefix: 'custom_lorem_' });
            testIpsum(test, 'custom_lorem_w', 'et');
        } finally {
            lorem.overrideDefaults({ prefix: defaultPrefix });
        }
    },
    'lorem_w with overridden defaults (text)': function(test) {
        var defaultText = lorem.defaults().text;
        try {
            lorem.overrideDefaults({ text: 'a b c' });
            testIpsum(test, 'lorem_w', 'a');
        } finally {
            lorem.overrideDefaults({ text: defaultText });
        }
    }
};
