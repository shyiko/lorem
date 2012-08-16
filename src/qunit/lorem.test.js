test('jquery plugin - direct substitution', function() {
    var $fixture = $('#qunit-fixture');
    $fixture.html('<div id="lorem_direct" class="lorem_w"></div>');
    $('#lorem_direct', $fixture).ipsum();
    ok($('#lorem_direct', $fixture).text().length > 0, 'lorem_w direct substitution failed');
});

test('jquery plugin - nested substitution', function() {
    var $fixture = $('#qunit-fixture');
    $fixture.html(
        '<div id="lorem_root"><div id="lorem_root_nested" class="lorem_w"></div></div>' +
        '<div id="lorem_direct" class="lorem_w"></div>'
    );
    $('#lorem_root', $fixture).ipsum();
    ok($('#lorem_root_nested', $fixture).text().length > 0, 'lorem_w nested substitution failed');
    equal($('#lorem_direct', $fixture).text(), '', 'lorem_w nested substitution overflow');
});
