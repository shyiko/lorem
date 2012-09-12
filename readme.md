# lorem <a href="http://travis-ci.org/shyiko/lorem"><img src="https://secure.travis-ci.org/shyiko/lorem.png" alt="Build Status" style="max-width:100%;"></a>

Filler text generator compatible with Node.js, Require.js and plain-old &lt;script/&gt;.<br/>

Even though JQuery (>= 1.6) is optional, including it before lorem will allow lorem JQuery plugin to be automatically registered,
making ipsum() available for $(selector) objects (which is exactly what is needed most of the time).

In a nutshell, lorem does the following:
- locates all tags (within $(selector)) with class attribute containing lorem_&lt;options&gt;
- replaces html (src in case of &lt;img/&gt;) within such tags according to &lt;options&gt;

## Getting Started

### Plain-Old &lt;script/&gt;

```html
<div id="container">
    <p>Generated using JQuery plugin:</p>
    <span class="lorem_s">
        <!-- expecting one sentence here -->
    </span>
    <div style="background-color: black; color: white" data-lorem="p2">
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
        $(document.body).append('Generated not using JQuery plugin: "' + lorem.ipsum('w') + '"');
    }(jQuery));
</script>
```

> Live demo: http://jsfiddle.net/shyiko/x8KAv

### Require.js

```js
require(['lorem'], function(lorem) {
    var paragraphAsAString = lorem.ipsum('p');
    ...
});
```    

### Node.js
Install the module with: `npm install lorem`

```js
var lorem = require('lorem');
...
var paragraphAsAString = lorem.ipsum('p');
```    

## Documentation

### Classes

    <lorem class prefix>_p[<number>[_<minimum number of sentences>[x<maximum number of sentences>]]]
    <lorem class prefix>_s[<number>[_<minimum number of words>[x<maximum number of words>]]][$<maximum number of characters>]
    <lorem class prefix>_w[<number>][$<maximum number of characters>]
    <lorem class prefix>_i<width>[x<height>]

Examples (assuming default options):

```sh
lorem_p # single paragraph, same as lorem_p1
lorem_p2 # two paragraphs
lorem_s # single sentence, same as lorem_s1
lorem_s3$120 # three sentences, with maximum overall length <= 120 characters
lorem_w$5 # single word, maximum 5 characters long. same as lorem_w1$3.
lorem_w4 # four words
lorem_i300x100 # 300x100 image
```

### Options

Defaults:

```js
{
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <TRUNCATED>' +
          'See lorem.js for complete value',
    /* used to tokenize text */          
    wordDelimiter: /\s|[,.]/, 
    numberOfSentencesPerParagraph: {min: 4, max: 7},
    numberOfWordsPerSentence: {min: 4, max: 9},
    imageURL: 'http://placehold.it/${w}x${h}',
    /* unsupported under IE<8 */
    offlineImage: 'data:image/gif;base64,R0lGODdhAQABAIABAMzMzP///ywAAAAAAQABAAACAkQBADs=', 
    /* indicates whether to use offlineImage instead of imageURL */
    useOfflineImage: false, 
    prefix: 'lorem_',
    /* optional. automatically added by lorem to all affected DOM elements */
    markerClass: 'lorem-marker',
    /* data-* attribute to apply lorem to */
    dataAttribute: 'lorem'
}
```
    
Defaults can be overridden either globally:
```js    
lorem.overrideDefaults(options) // e.g. lorem.overrideDefaults({ prefix: 'custom_prefix_' })
```
or per-request:
```js
$('container').ipsum({ prefix: 'custom_prefix_' }); // lorem.ipsum(className, options) works as well
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.<br/>
Ideally add unit tests for any new or changed functionality.<br/>
Executing '[grunt](https://github.com/cowboy/grunt)' within project directory should not produce any lint or test errors.

## License
Copyright (c) 2012 Stanley Shyiko
Licensed under the MIT license.
