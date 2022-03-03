var add = (function() {
    var factory = function(value) {
        var fn = function(num) {
            return factory(value + num);
        };
        fn.toString = function() {
            return value;
        };
        return fn;
    };
    return factory(0);
})();