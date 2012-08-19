# lorem

Filler text generator compatible with Node.js, Require.js and plain-old &lt;script/&gt;.<br/>

Even though JQuery is optional, including it before lorem will allow lorem JQuery plugin to be automatically registered,
making ipsum() available for $(selector) objects (which is exactly what is needed most of the time).

In a nutshell, lorem does the following:
- locates all tags (within $(selector)) with class attribute containing lorem_&lt;options&gt;
- replaces html (src in case of &lt;img/&gt;) within such tags according to &lt;options&gt;

# Why?

One of the prototypes I worked on (single-page application with dozens of nested views wired up with require.js and
knockout.js) had lot of filler text all over the pages (some of it was retrieved from Node.js/Express-based server).
Everything was great up to the point when amount of such payload became unbearable making it hard to navigate through
the source code. As the result, github got lorem and I got rid of the mess inside HTML/template files ^_^.

## Getting Started

### Plain-Old &lt;script/&gt;

    <div id="container">
        <p>Generated using JQuery plugin:</p>
        <span class="lorem_s">
            <!-- expecting one sentence here -->
        </span>
        <div class="lorem_p2" style="background-color: black; color: white">
            <!-- expecting two paragraphs here -->
        </div>
        <!-- expecting image below -->
        <img class="lorem_i256x46"/>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script src="https://raw.github.com/shyiko/lorem/master/src/library/lorem.js"></script>
    <script>
        (function($) {
            $('#container').ipsum();
            $(document.body).append('Generated not using JQuery plugin: "' + lorem.ipsum('lorem_w') + '"');
        }(jQuery));
    </script>

> Live demo: http://jsfiddle.net/shyiko/x8KAv

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

    <lorem class prefix>_p[<number>[_<minimum number of sentences>[x<maximum number of sentences>]]]
    <lorem class prefix>_s[<number>[_<minimum number of words>[x<maximum number of words>]]]
    <lorem class prefix>_w[<number>]
    <lorem class prefix>_i<width>[x<height>]

    Examples (assuming default options):
    lorem_p # generates single paragraph, same as lorem_p1
    lorem_p2 # generates two paragraphs
    lorem_s # generates single sentence, same as lorem_s1
    lorem_s3 # generates three sentences
    lorem_w # generates single word, same as lorem_w1
    lorem_w4 # generates four words
    lorem_i300x100 # generates 300x100 image

### Options

    Defaults:

    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <TRUNCATED>' +
              'See lorem.js for complete value',
        wordDelimiter: /\s|[,.]/, // used to tokenize text
        numberOfSentencesPerParagraph: {min: 4, max: 7},
        numberOfWordsPerSentence: {min: 4, max: 9},
        imageURL: 'http://placehold.it/${w}x${h}',
        offlineImage: 'data:image/gif;base64,R0lGODdhAQABAIABAMzMzP///ywAAAAAAQABAAACAkQBADs=', // unsupported under IE<8
        useOfflineImage: false, // enabling this option will result in offlineImage being used instead of imageURL
        prefix: 'lorem_',
        markerClass: 'lorem-marker' // optional. added to all lorem-classified DOM elements
    }

    Defaults can be overridden either globally:

        lorem.overrideDefaults(options) // e.g. lorem.overrideDefaults({ prefix: 'custom_prefix_' })

    or per-request:

        $('container').ipsum({ prefix: 'custom_prefix_' }); // lorem.ipsum(className, options) works as well

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.<br/>
Ideally add unit tests for any new or changed functionality.<br/>
Lint and test your code using [grunt](https://github.com/cowboy/grunt).

## License
Copyright (c) 2012 Stanley Shyiko
Licensed under the MIT license.
