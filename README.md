<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# uncurryRight

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Transform a curried function into a function invoked with multiple arguments.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-uncurry-right
```

</section>

<section class="usage">

## Usage

```javascript
var uncurryRight = require( '@stdlib/utils-uncurry-right' );
```

#### uncurryRight( fcn\[, arity]\[, thisArg] )

Transforms a curried function into a function invoked with multiple arguments.

<!-- eslint-disable no-restricted-syntax -->

```javascript
function add( y ) {
    return function add( x ) {
        return x + y;
    };
}

var fcn = uncurryRight( add );

var sum = fcn( 3, 2 );
// returns 5
```

To enforce a fixed number of parameters, provide an `arity` argument.

<!-- run throws: true -->

<!-- eslint-disable no-restricted-syntax -->

```javascript
function add( y ) {
    return function add( x ) {
        return x + y;
    };
}

var fcn = uncurryRight( add, 2 );

var sum = fcn( 9 );
// throws <Error>
```

To specify an execution context, provide a `thisArg` argument.

<!-- eslint-disable no-invalid-this -->

```javascript
function addY( y ) {
    this.y = y;
    return addX;
}

function addX( x ) {
    return x + this.y;
}

var fcn = uncurryRight( addY, {} );

var sum = fcn( 3, 2 );
// returns 5
```

The function supports providing both an `arity` and execution context.

<!-- run throws: true -->

<!-- eslint-disable no-invalid-this -->

```javascript
function addY( y ) {
    this.y = y;
    return addX;
}

function addX( x ) {
    return x + this.y;
}

var fcn = uncurryRight( addY, 2, {} );

var sum = fcn( 3, 2 );
// returns 5

sum = fcn( 4 );
// throws <Error>
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The difference between this function and [`uncurry`][@stdlib/utils/uncurry] is the order in which arguments are applied. This function applies arguments starting from the right.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var fromCodePoint = require( '@stdlib/string-from-code-point' );
var curryRight = require( '@stdlib/utils-curry-right' );
var uncurryRight = require( '@stdlib/utils-uncurry-right' );

var uncurried;
var curried;
var abcs;
var out;
var a;
var i;

function concat() {
    var len;
    var out;
    var i;

    len = arguments.length;
    out = '';
    for ( i = 0; i < len; i++ ) {
        out += arguments[ i ];
        if ( i < len-1 ) {
            out += ',';
        }
    }
    return out;
}

// Character codes:
a = 97;

abcs = new Array( 26 );
for ( i = 0; i < abcs.length; i++ ) {
    abcs[ i ] = fromCodePoint( a + i );
}
out = concat.apply( null, abcs );
// returns 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'

// Transform `concat` into a right curried function:
curried = curryRight( concat, 26 );

out = curried;
for ( i = abcs.length-1; i >= 0; i-- ) {
    out = out( abcs[ i ] );
}
console.log( out );
// => 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'

// Uncurry a right curried function:
uncurried = uncurryRight( curried );

out = uncurried.apply( null, abcs );
// returns 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-uncurry-right.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-uncurry-right

[test-image]: https://github.com/stdlib-js/utils-uncurry-right/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/utils-uncurry-right/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-uncurry-right/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-uncurry-right?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-uncurry-right
[dependencies-url]: https://david-dm.org/stdlib-js/utils-uncurry-right/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-uncurry-right/main/LICENSE

[@stdlib/utils/uncurry]: https://github.com/stdlib-js/utils-uncurry

</section>

<!-- /.links -->
