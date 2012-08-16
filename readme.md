# lorem

JQuery-based placeholder (filler) text provider compatible with Node.js, Require.js and plain-old &lt;script/&gt;.

## Getting Started

### Plain-Old &lt;script/&gt;

    <div id="container">
        <h1 class="lorem_s">
            <!-- expecting one sentence here -->
        </h1>
        <div class="lorem_p2">
            <!-- expecting two paragraphs here -->
        </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script src="https://github.com/shyiko/lorem/blob/master/src/library/lorem.js"></script>
    <script>
        (function($) {
            $('container').ipsum();
            console.log('Random word ' + lorem.ipsum('lorem_w'));
        }(jQuery));
    </script>

> Live demo: http://jsfiddle.net/...

### Require.js

    require(['lorem'], function(lorem) {
        var paragraphAsAString = lorem.ipsum('lorem_p');
        ...
    });

### Node.js
Install the module with: `npm install lorem`

    var lorem = require('lorem');
    ...
    var paragraphAsAString = lorem.ipsum('lorem_p');

## Documentation

### Classes
### Options

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.
Ideally add unit tests for any new or changed functionality.
Lint and test your code using [grunt](https://github.com/cowboy/grunt).

## License
Copyright (c) 2012 Stanley Shyiko
Licensed under the MIT license.
