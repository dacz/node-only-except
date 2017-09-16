
# only-except

[![Greenkeeper badge](https://badges.greenkeeper.io/dacz/node-only-except.svg)](https://greenkeeper.io/)

  Whitelist or blacklist properties of an object.

  Most of the code is copied from amazing TJ Holowaychuk's [node-only](https://github.com/tj/node-only).
  Check it, maybe you need this one.

  I've added the possibility to exclude properties.

## Installation

    $ npm install only-except

## API

 An array or space-delimited string may be given:

```js
import onlyExcept from 'only-except';

const obj = {
  name: 'tobi',
  last: 'holowaychuk',
  email: 'tobi@learnboost.com',
  _id: '12345'
};

const userOnly = onlyExcept(obj, 'name last email');
const userExclude = onlyExcept(obj, '-email');
```

yields:

```js
// userOnly
{
  name: 'tobi',
  last: 'holowaychuk',
  email: 'tobi@learnboost.com'
};

// userExclude
{
  name: 'tobi',
  last: 'holowaychuk',
  _id: '12345'
};
```


You can also use array form:
```js
const userOnly = onlyExclude(obj, ['name', 'last', 'email']);
const userExclude = onlyExclude(obj, ['-email']);
```

## Using with mongoose

  If you want to select all fields with [mongoose select](http://mongoosejs.com/docs/queries.html),
  just specify `"-dummy"` (or any other non-existent field).
  That will select all fields.


## License

(The MIT License)

Copyright (c) 2012 TJ Holowaychuk &lt;tj@vision-media.ca&gt;

Copyright (c) 2016 dacz @dacz.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
