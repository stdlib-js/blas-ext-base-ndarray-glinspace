<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# glinspace

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Fill a one-dimensional ndarray with linearly spaced values over a specified interval.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import glinspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ndarray-glinspace@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/blas-ext-base-ndarray-glinspace/tags). For example,

```javascript
import glinspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ndarray-glinspace@v0.1.0-deno/mod.js';
```

#### glinspace( arrays )

Fills a one-dimensional ndarray with linearly spaced values over a specified interval.

```javascript
import scalar2ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-from-scalar@deno/mod.js';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@deno/mod.js';
import ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ctor@deno/mod.js';

var xbuf = [ 0.0, 0.0, 0.0, 0.0 ];
var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );

var start = scalar2ndarray( 0.0, {
    'dtype': 'generic'
});

var end = scalar2ndarray( 3.0, {
    'dtype': 'generic'
});

var endpoint = scalar2ndarray( true, {
    'dtype': 'bool'
});

var out = glinspace( [ x, start, end, endpoint ] );
// returns <ndarray>

var arr = ndarray2array( out );
// returns [ 0.0, 1.0, 2.0, 3.0 ]
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays in order:

    1.  a one-dimensional input ndarray.
    2.  a zero-dimensional ndarray specifying the start of the interval.
    3.  a zero-dimensional ndarray specifying the end of the interval.
    4.  a zero-dimensional ndarray specifying whether to include the end of the interval when writing values to the input ndarray.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Let `M` be the number of generated values. The spacing between values is thus given by

    ```text
    Δ = (end-start)/(M-1)
    ```

-   If an input ndarray has a single element and the function is supposed to include the end of the interval, the set of values written to an input ndarray only includes the end of the interval, but not the start of the interval.

-   Otherwise, when an input ndarray has a single element and the function is not supposed to include the end of the interval, the set of values written to an input ndarray only includes the start of the interval, but not the end of the interval.

-   If the start of the interval is less than end of the interval, the set of values written to an input ndarray will be written in ascending order, and, if the start of the interval is greater than the end of the interval, the set of written values will be in descending order.

-   When an input ndarray contains at least two values and the function is supposed to include the end of the interval, the set of values written to an input ndarray is guaranteed to include the start and end interval values. Beware, however, that values between the interval bounds are subject to floating-point rounding errors.

-   The input ndarray is **mutated**.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@deno/mod.js';
import ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ctor@deno/mod.js';
import scalar2ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-from-scalar@deno/mod.js';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@deno/mod.js';
import ndarraylike2scalar from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ndarraylike2scalar@deno/mod.js';
import glinspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ndarray-glinspace@deno/mod.js';

var xbuf = discreteUniform( 10, -100, 100, {
    'dtype': 'generic'
});
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var start = scalar2ndarray( 0.0, {
    'dtype': 'generic'
});
console.log( 'Start: %d', ndarraylike2scalar( start ) );

var end = scalar2ndarray( 100.0, {
    'dtype': 'generic'
});
console.log( 'Stop: %d', ndarraylike2scalar( end ) );

var endpoint = scalar2ndarray( true, {
    'dtype': 'bool'
});
console.log( 'Endpoint: %s', ndarraylike2scalar( endpoint ) );

glinspace( [ x, start, end, endpoint ] );
console.log( ndarray2array( x ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-ndarray-glinspace.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-ndarray-glinspace

[test-image]: https://github.com/stdlib-js/blas-ext-base-ndarray-glinspace/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-glinspace/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-ndarray-glinspace/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-ndarray-glinspace?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-ndarray-glinspace.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-ndarray-glinspace/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-glinspace/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray-glinspace/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-glinspace/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray-glinspace/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-glinspace/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray-glinspace/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-glinspace/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-ndarray-glinspace/main/LICENSE

</section>

<!-- /.links -->
