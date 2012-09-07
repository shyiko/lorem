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
    equal($('.lead', $fixture).attr('id'), 'lorem_direct', 'lorem_w substitution lost non-lorem class during direct substitution');
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
    ok($('#lorem_direct', $fixture).text().length > 0, 'lorem_s nested substitution failed');
});

test('jquery plugin - nested substitution on multiple classes (lorem at the end)', function() {
    var $fixture = $('#qunit-fixture');
    $fixture.html('<div id="lorem_direct"><p class="lead lorem_s"></p></div>');
    $('#lorem_direct', $fixture).ipsum();
    ok($('#lorem_direct', $fixture).text().length > 0, 'lorem_s nested substitution failed');
});

test('jquery plugin - offline image generation', function() {
    var $fixture = $('#qunit-fixture');
    $fixture.html('<img class="lorem_i300x100"/>');
    $fixture.ipsum({ useOfflineImage: true });
    var $img = $fixture.find('img');
    equal($img.attr('width'), '300', 'offline image width assertion failed');
    equal($img.attr('height'), '100', 'offline image height assertion failed');
    equal($img.attr('src'), 'data:image/gif;base64,R0lGODdhAQABAIABAMzMzP///ywAAAAAAQABAAACAkQBADs=', 'offline image src assertion failed');
});

test('jquery plugin - input value substitution', function() {
    var $fixture = $('#qunit-fixture');
    $fixture.html('<input class="lorem_s" value="before ipsum"/>').ipsum();
    var inputValue = $fixture.find('input').val();
    notEqual(inputValue, 'before ipsum', 'lorem_s input substitution failed');
    ok(inputValue.length > 0, 'lorem_s input substitution failed');
});

test('jquery plugin - data-lorem substitution', function() {
    var $fixture = $('#qunit-fixture');
    $fixture.html('<input value="before ipsum" data-lorem="w2"/>').ipsum({ text: 'a' });
    var inputValue = $fixture.find('input').val();
    equal(inputValue, 'a a', 'lorem_s input substitution failed');
});

test('jquery plugin - data-lorem over lorem class substitution', function() {
    var $fixture = $('#qunit-fixture');
    $fixture.html('<input class="lorem_s" value="before ipsum" data-lorem="w2"/>').ipsum({ text: 'a' });
    var inputValue = $fixture.find('input').val();
    equal(inputValue, 'a a', 'lorem_s input substitution failed');
});

