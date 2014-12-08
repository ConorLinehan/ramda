var _curry2 = require('./internal/_curry2');
var _foldl = require('./internal/_foldl');
var keys = require('./keys');


/**
 * Map, but for objects. Creates an object with the same keys as `obj` and values
 * generated by running each property of `obj` through `fn`. `fn` is passed one argument:
 * *(value)*.
 *
 * @func
 * @memberOf R
 * @category List
 * @sig (v -> v) -> {k: v} -> {k: v}
 * @param {Function} fn A function called for each property in `obj`. Its return value will
 * become a new property on the return object.
 * @param {Object} obj The object to iterate over.
 * @return {Object} A new object with the same keys as `obj` and values that are the result
 *         of running each property through `fn`.
 * @example
 *
 *      var values = { x: 1, y: 2, z: 3 };
 *      var double = function(num) {
 *        return num * 2;
 *      };
 *
 *      R.mapObj(double, values); //=> { x: 2, y: 4, z: 6 }
 */
module.exports = _curry2(function mapObject(fn, obj) {
    return _foldl(function(acc, key) {
        acc[key] = fn(obj[key]);
        return acc;
    }, {}, keys(obj));
});