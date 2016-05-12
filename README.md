pointfree-jquery
=================

Curried a few common jQuery methods to allow them to be written in a point free fashion.

```js
import { compose, hide, show } from 'pointfree-jquery';
import $ from 'jquery';
import IO from 'fantasy-io';

const program = compose( 
    show('slow'),
    hide('fast'),
    IO
);

program(_ => $('body')).unsafePerform();

```

EFFECTS
--------

* `addClass`
* `css`
* `fadeIn`
* `fadeOut`
* `fadeTo`
* `fadeToggle`
* `hide`
* `show`
* `slideToggle`
* `slideUp`
* `toggle`

HANDLERS
--------

* `bind`
* `blur`
* `change`
* `click`
* `contextmenu`
* `dblclick`
* `die`
* `focus`
* `focusout`
* `keydown`
* `keypress`
* `keyup`
* `live`
* `load`
* `mousedown`
* `mouseenter`
* `mouseleave`
* `mousemove`
* `mouseup`
* `on`
* `resize`
* `scroll`
* `select`
* `submit`
* `unbind`
* `unload`

UTILS
--------

* `compose`
* `trace`
