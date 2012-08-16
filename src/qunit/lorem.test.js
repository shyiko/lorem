test('jquery plugin - direct substitution', function() {
    var $fixture = $('#qunit-fixture');
    $fixture.html('<div id="lorem_direct" class="lorem_w"></div>');
    $('#lorem_direct', $fixture).ipsum();
    ok($('#lorem_direct', $fixture).text().length > 0, 'lorem_w direct substitution failed');
});

test('jquery plugin - direct substitution on multiple classes', function() {
    var $fixture = $('#qunit-fixture');
    $fixture.html('<p id="lorem_direct" class="lead lorem_s"></p>');
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

test('jquery plugin - nested substitution on multiple classes (lorem at the beginning)', function() {
    var $fixture = $('#qunit-fixture');
    $fixture.html('<div id="lorem_direct"><p class="lorem_s lead"></p></div>');
    $('#lorem_direct', $fixture).ipsum();
    ok($('#lorem_direct', $fixture).text().length > 0, 'lorem_w direct substitution failed');
});

test('jquery plugin - nested substitution on multiple classes (lorem at the end)', function() {
    var $fixture = $('#qunit-fixture');
    $fixture.html('<div id="lorem_direct"><p class="lead lorem_s"></p></div>');
    $('#lorem_direct', $fixture).ipsum();
    ok($('#lorem_direct', $fixture).text().length > 0, 'lorem_w direct substitution failed');
});
