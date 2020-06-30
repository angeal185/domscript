![](https://i.ibb.co/yRs6QW3/domscript.png)

#### A lightning fast dom query and manipulation lib for when speed matters.

![cd-img] ![dep-img] ![sz-img]

[![NPM Version][npm-img]][npm-url] ![lic-img]

# Documentation

- [about](#about)
- [installation](#installation)
- [build](#build)
- [performance](#performance)
- [API](#api)
- [id](#id)
- [class](#class)
- [tag](#tag)
- [qs](#qs)
- [qsa](#qsa)
- [name](#name)
- [addClass](#addClass)
- [rmClass](#rmClass)
- [tgClass](#rmClass)
- [hasClass](#hasClass)
- [attr](#attr)
- [rmAttr](#rmAttr)
- [tgAttr](#rmAttr)
- [getAttr](#getAttr)
- [child](#child)
- [parent](#parent)
- [after](#after)
- [before](#before)
- [first](#first)
- [last](#last)
- [clone](#clone)
- [append](#append)
- [prepend](#prepend)
- [next](#next)
- [prev](#prev)
- [rm](#rm)
- [empty](#empty)
- [replace](#replace)
- [html](#html)
- [txt](#txt)
- [each](#each)
- [filter](#filter)
- [on](#on)
- [off](#off)
- [addEvt](#addEvt)
- [rmEvt](#rmEvt)
- [css](#css)
- [eq](#eq)
- [click](#click)
- [submit](#submit)
- [focus](#focus)
- [blur](#blur)
- [cb](#cb)
- [set](#set)
- [create](#create)

# about

Domscript is a lightning fast dom query/manipulation tool that you can easily
customize to suit your needs.

The goal of domscript is to enable developers to rapidly chain
methods while achieving similar to vanilla js speed.

if you can query and manipulate the dom with javascript, you can already use domscript.

you should get the same results and errors as though you were writting vanilla js.

* all prototype methods are optional
* custom methods can be easily be built into the prototype chain
* current maximum build size of 3.1kb minified
* no regex/unsafe functions
* about as close to using vanilla js speed as it gets.

# installation

npm

stable release

```sh
$ npm install dom_script --save
```

dev release

git
```sh
$ git clone https://github.com/angeal185/domscript.git
```

browser

```html
<html>
  <head>
    <meta charset="utf-8">
    <script src="/path/to/domscript.mjs" type="module"></script>
    <!-- or -->
    <script src="/path/to/domscript.js"></script>
  </head>
</html>
```
- [index](#documentation)

# build

`$ npm run build` will build domscript into the `./dist` folder.

* the config file is located at `./build/config.json`.
* the build source is located at `./lib/index.js`.
* `config.includes` allows you to enable/disable prototype methods from the final build.
* You can also reorganize the order of the prototype chain based on your usage of the methods
* reorganization should be done with your most used methods at the top.
* you can also manually add custom methods to the prototype at `./lib/index.js`.
* the custom method names should be added and enabled to `config.includes`
* `config.export_as` controls the variable name used to call domscript.
* `config.module_name` controls the built output base name.
* `config.module_ext` controls the built output file extension.
* `config.iuclude_utils` controls adding the util function.
* if none of your methods use domscripts util function `config.iuclude_utils` will exclude it from the build.
* `config.is_module` controls the export method of domscript.
* if you are not using domscript as a module, `config.is_module` should be `false`
- [index](#documentation)

# performance

below is a very basic example of domscripts potential.
```js

// jquery
console.time('jquery')
for (let i = 0; i < 1000; i++) {
  $('#test-id').addClass('test1').text('test1');
}
console.timeEnd('jquery');

// zepto
console.time('zepto')
for (let i = 0; i < 1000; i++) {
  $('#test-id').addClass('test2').text('test2');
}
console.timeEnd('zepto');

// umbrella.js
console.time('umbrella')
for (let i = 0; i < 1000; i++) {
  u('#test-id').addClass('test3').text('test3');
}
console.timeEnd('umbrella');

// vanilla javascript
console.time('javascript')
for (let i = 0; i < 1000; i++) {
  let item = document.getElementById('test-id');
  item.classList.add('test4');
  item.textContent = 'test4';
}
console.timeEnd('javascript');

// domscript
console.time('domscript')
for (let i = 0; i < 1000; i++) {
  d.id('test-id').addClass('test5').txt('test5');
}
console.timeEnd('domscript');


// jquery 157.0546875ms
// zepto 145.590087890625ms
// umbrella 143.53515625ms

// javascript 14.052001953125ms
// domscript 18.84423828125ms

```

your end results should always have domscript running similar speed
to native js. the lower the amount of methods included in the domscript prototype,
the faster and closer it should be. if you don't use it, exclude it.

- [index](#documentation)

# id
get elementById

examples:
```js

// return element by id
d.id('test-id').r;


// get element by id, add class
d.id('test-id').addClass('test-class');


// get element by id, add class, add onclick event
d.id('test-id').addClass('test-class').on('click', function(evt){
  console.log(evt.target.id)
});

```
- [index](#documentation)

# class
get elementsByClassName

examples:
```js

// return HTMLCollection by class
d.class('test-class').r;

// return element by class and index
d.class('test-class', 0).r;

// get HTMLCollection by class, add id to each
d.class('test-class').each(function(ele, idx){
  ele.id = 'id-'+ idx
});

// get first element by class, add id
d.class('test-class', 0).id('test-id');


```
- [index](#documentation)

# tag
get elementsByTagName

examples:
```js

// return HTMLCollection by tag
d.tag('div').r;

// return element by tag and index
d.tag('div', 0).r;

// get HTMLCollection by tag, add id to each
d.tag('div').each(function(ele, idx){
  ele.id = 'id-'+ idx
});

// get first element by tag, add id
d.tag('tag', 0).id('test-id');


```
- [index](#documentation)

# qs
document querySelector

examples:
```js

// return element by selector
d.qs('#test-id p').r;

// remove element by selector
d.qs('#test-id p').rm();

// get element by selector and return textContent
d.qs('#test-id p').txt();

// get element by selector and edit textContent
d.qs('#test-id p').txt('new text');

// get element by selector and edit style
d.qs('#test-id p').css('color', 'red');


```
- [index](#documentation)

# qsa
document querySelectorAll

examples:
```js

// return HTMLCollection by selector
d.qsa('.test-class p');

// get elements by selector and edit textContent of each
d.qsa('.test-class p').each(function(ele,idx){
  ele.textContent = 'element '+ idx;
})

// get element by selector and remove all
d.qsa('.test-class p').each(function(ele, idx){
  ele.remove()
});


```
- [index](#documentation)

# name
get elementsByName

examples:
```js

// return HTMLCollection by name
d.name('test-name').r;

// return element by name and index
d.name('test-name', 0).r;

// get HTMLCollection by name, add id to each
d.name('test-name').each(function(ele, idx){
  ele.id = 'id-'+ idx
});

// get first element by name, add id
d.name('test-name', 0).id('test-id');


```
- [index](#documentation)

# addClass
add class/classlist to element

examples:
```js

// add a class
d.id('test-id').addClass('class1');

// add classes
d.id('test-id').addClass('class1','class2','class3');


```
- [index](#documentation)

# rmClass
remove class/classlist to element

examples:
```js

// remove a class
d.id('test-id').rmClass('class1');

// remove classes
d.id('test-id').rmClass('class1','class2','class3');


```
- [index](#documentation)

# tgClass
toggle class of element

examples:
```js

// remove/add class
d.id('test-id').tgClass('class1');


```
- [index](#documentation)

# hasClass
check if class exists

examples:
```js

// check if class exists
if(d.id('test-id').hasClass('class1')){
  console.log('class1 exists!')
} else {
  console.log('class1 does not exist!')
}

```
- [index](#documentation)

# attr
set attribute/s

examples:
```js

// add an attribute
d.id('some-input').attr('type', 'text');

// add multiple attributes
d.id('some-input').attr({
  type: 'text',
  placeHolder: 'some placeholder'
});

```
- [index](#documentation)

# rmAttr
remove attribute/s

examples:
```js

// remove an attribute
d.id('some-input').rmAttr('type');

// remove multiple attributes
d.id('some-input').rmAttr('type', 'placeHolder');

```
- [index](#documentation)

# tgAttr
toggle attribute/s

examples:
```js

// add/remove an attribute
d.id('some-input').tgAttr('readonly');

// force add/remove an attribute
d.id('some-input').tgAttr('readonly', true);

```
- [index](#documentation)

# getAttr
get an element attribute/s

examples:
```js

// get an attribute
console.log(
  d.id('some-input').getAttr('placeHolder')
)
// 'some placeholder'

// get multiple attributes
console.log(
  d.id('some-input').getAttr(['type', 'placeHolder'])
)
//{type:"text",placeHolder:"some placeholder"}

```
- [index](#documentation)

# child
get an element child/ren

examples:
```js

// return HTMLCollection of children
d.id('test-id').child().r

// get children HTMLCollection and add id to each
d.id('test-id').child().each(function(ele, idx){
  ele.id = 'id-'+ idx
});

// return child element by index
d.id('test-id').child(0).r

// return child element by index and return textContent
d.id('test-id').child(0).txt()

// return child element by index and edit textContent
d.id('test-id').child(0).txt('new text')



```
- [index](#documentation)

# parent
get an elements parent element

examples:
```js

// return element parent
d.id('test-id').parent().r

// edit element parent textContent
d.id('test-id').parent().txt('i am the parent')

// return element parent's textContent
d.id('test-id').parent().txt()

// remove all children of parent
d.id('test-id').parent().empty()

// remove parent
d.id('test-id').parent().rm()


```
- [index](#documentation)

# after
insert after element

examples:
```js

let item = d.create('div').r;

// insert elements and text after querySelected element
d.id('test-id')
.after(item.cloneNode(),item.cloneNode(), 'after')
.before(item.cloneNode(),item.cloneNode(), 'before')

```
- [index](#documentation)

# before
insert before element

examples:
```js

let item = d.create('div').r;

// insert elements and text before querySelected element
d.qs('#test-id')
.before(item.cloneNode(),item.cloneNode(), 'before')
.after(item.cloneNode(),item.cloneNode(), 'after')


```
- [index](#documentation)

# first
get elements first child

examples:
```js

// get firstChild of element
d.id('test-id').first().r

// remove firstChild of element
d.id('test-id').first().rm()

// empty firstChild of element
d.id('test-id').first().empty()


```
- [index](#documentation)

# last
get elements last child

examples:
```js

// get lastChild of element
d.id('test-id').last().r

// remove lastChild of element
d.id('test-id').last().rm()

// empty lastChild of element
d.id('test-id').last().empty()


```
- [index](#documentation)

# clone
clone an element

examples:
```js

// return a clone of selected element
d.id('test-id').clone().r

// return a deep clone of selected element
d.id('test-id').clone(true).r


```

- [index](#documentation)

# append
append to an element

examples:
```js

let item = d.create('div').r;

// append elements and text to querySelected element
d.qs('#test-id')
.append(item.cloneNode(),item.cloneNode(), 'appended')
.prepend(item.cloneNode(),item.cloneNode(), 'prepended')

```
- [index](#documentation)

# prepend
prepend to an element

examples:
```js

let item = d.create('div').r;

// prepend elements and text to querySelected element
d.qs('#test-id')
.prepend(item.cloneNode(),item.cloneNode(), 'prepended')
.append(item.cloneNode(),item.cloneNode(), 'appended')

```
- [index](#documentation)

# next
next sibling

examples:
```js

// return the direct nextSibling
d.id('test-id').next().r

// return the nextElementSibling
d.id('test-id').next(true).r
// or d.id('test-id').next(1).r

// change textContent of nextElementSibling
d.id('test-id').next(true).txt('ok')

// get textContent of nextElementSibling
d.id('test-id').next(true).txt()

// return a clone of the nextElementSibling
d.id('test-id').next(true).clone().r
```
- [index](#documentation)

# prev
previous sibling

examples:
```js

// return the direct previousSibling
d.id('test-id').prev().r

// return the previousElementSibling
d.id('test-id').prev(true).r
// or d.id('test-id').prev(1).r

// change textContent of previousElementSibling
d.id('test-id').prev(true).txt('ok')

// get textContent of previousElementSibling
d.id('test-id').prev(true).txt()

// return a clone of the previousElementSibling
d.id('test-id').prev(true).clone().r
```
- [index](#documentation)

# rm
remove element

examples:
```js

// remove selected element
d.id('test-id').rm();

// remove selected elements firstchild
d.id('test-id').first().rm();

```
- [index](#documentation)

# empty
empty element

examples:
```js

// remove all childnodes from selected element ~ loop
d.id('test-id').empty();

// remove all childnodes from selected element ~ innerHTML = ''
d.id('test-id').empty(true);
// or d.id('test-id').empty(1);

// remove all childnodes from selected elements lastchild
d.id('test-id').last().empty();

```
- [index](#documentation)

# replace
replace element

examples:
```js

let item = d.create('div').attr('id', 'replaced').r;


// replace an element with another element
d.id('test-id').replace(item)

// replace an element with another element and edit new element
d.id('test-id').replace(item).txt('replace success')

```
- [index](#documentation)

# html
add or return innerHTML

examples:
```js

// return innerHTML of element
d.id('test-id').html()

// replace or add innerHTML of element
d.id('test-id').html('<p>new innerHTML</p>');

```
- [index](#documentation)

# txt
add or return textContent

examples:
```js

// return textContent of element
d.id('test-id').txt()

// replace or add textContent of element
d.id('test-id').txt('new text');

```
- [index](#documentation)

# each
loop over elements
examples:
```js

// get HTMLCollection by class, add id to each
d.class('test-class').each(function(ele, idx){
  ele.id = 'id-'+ idx
});

d.qsa('.test-class p').each(function(ele,idx){
  ele.textContent = 'element '+ idx;
})

// get element by selector and remove all
d.qsa('.test-class p').each(function(ele, idx){
  ele.remove()
});

```
- [index](#documentation)

# filter
return filtered items

examples:
```js

// filter HTMLCollection
d.class('class1').filter(function(ele, idx){
  return ele.id !== 'id3';
}).each(function(ele, idx){
  ele.textContent = 'ok';
})

d.class('class1').filter(function(ele, idx){
  return ele.id !== 'id3';
}).r[0]


```
- [index](#documentation)

# on
attach single on* event to element

examples:
```js

// get element by id and add onclick event
d.id('test-id').on('click', function(evt){
  console.log(evt.target)
});

// get element by id and add onkeyup event
d.id('test-input').on('keyup', function(evt){
  console.log(evt.target)
});

// get element by id and add onload event
d.id('test-img').on('load', function(evt){
  console.log(evt.target)
});

```
- [index](#documentation)

# off
remove single on* event from element

examples:
```js

// get element by id and remove onclick event
d.id('test-id').off('click');

// get element by id and remove onkeyup event
d.id('test-input').off('keyup');

// get element by id and remove onload event
d.id('test-img').off('load');

```
- [index](#documentation)

# addEvt
attach event listener to element

examples:
```js

function clickEvt(){
  console.log('clicked')
}

function keyEvt(){
  console.log('keyup')
}

function loadEvt(){
  console.log('loaded')
}

// get element by id and add click event listener
d.id('test-id').addEvt('click', clickEvt);

// get element by id and add onkeyup event
d.id('test-input').addEvt('keyup', keyEvt);

// get element by id and add onload event
d.id('test-img').addEvt('load', loadEvt);

```
- [index](#documentation)

# rmEvt
remove event listener from element

examples:
```js

function clickEvt(){
  console.log('clicked')
}

function keyEvt(){
  console.log('keyup')
}

function loadEvt(){
  console.log('loaded')
}

// get element by id and remove click event listener
d.id('test-id').rmEvt('click', clickEvt);

// get element by id and remove onkeyup event
d.id('test-input').rmEvt('keyup', keyEvt);

// get element by id and remove onload event
d.id('test-img').rmEvt('load', loadEvt);

```
- [index](#documentation)

# css
add styles to element

examples:
```js

// get element by selector and add single style
d.id('test-id').css('color', 'red');

// get element by selector and add multiple styles
d.id('test-id').css({
  'color': 'red',
  'font-size': '96px'
});

```
- [index](#documentation)

# eq
select element by index

examples:
```js


d.class('test-class', 0).txt('index 0')
// or
d.class('test-class').eq(1).txt('index 1')

```
- [index](#documentation)

# click
click an element

examples:
```js

// get element by selector and add single style
d.id('some-button').click();
```
- [index](#documentation)

# submit
submit a form

examples:
```js

// get element by selector and add single style
d.id('some-form').submit();

```
- [index](#documentation)

# focus
focus an element

examples:
```js

//focus an element
d.id('some-input').focus();

d.id('some-input').focus().attr('type','text');

d.id('some-input').attr({
  placeHolder: 'test focus',
  type: 'text'
}).focus()

d.id('some-input').on('focus', function(evt){
  console.log('focus event')
}).focus();

```
- [index](#documentation)

# blur
blur an element

examples:
```js

//blur a focused element
d.id('some-input').focus();

d.id('some-input').on('blur', function(evt){
  console.log('blur event')
}).focus().blur();

```
- [index](#documentation)

# cb
add callback to an item containing current proto state

examples:
```js

// return element within callback function
d.id('some-element').cb(function(ele){
  if(ele){
    d.set(ele).attr('readonly', true)
  }
})

```
- [index](#documentation)

# set
set the current proto state

examples:
```js

// cached reference
let cached_item = d.id('some-input').r,
cached_item2 = d.id('other-input').r;

d.set(cached_item).attr('readonly', true)
d.set(cached_item2).attr('readonly', true)

```
- [index](#documentation)

# create
domscript was designed for query/manipulation.
It has a basic create function but domscript's sister lib clonecript
is a much better alternative and designed to work alongside domscript.

clonescript was made for creation and not query/manipulation
[clonescript](https://github.com/angeal185/clonescript)

examples:
```js

let item = d.create('div')
// get element by selector and add created div

d.id('test-id').append(item);

// do not add a proto within the proto
//d.id('test-id').append(d.create('div'));
```
- [index](#documentation)


[cd-img]: https://app.codacy.com/project/badge/Grade/01f54b0639df463f9526edb892b5e4ff
[npm-img]: https://badgen.net/npm/v/dom_script?style=flat-square
[dep-img]:https://badgen.net/david/dep/angeal185/domscript?style=flat-square
[sz-img]:https://badgen.net/packagephobia/publish/dom_script?style=flat-square
[lic-img]: https://badgen.net/github/license/angeal185/domscript?style=flat-square
[npm-url]: https://npmjs.org/package/dom_script
