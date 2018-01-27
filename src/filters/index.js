export default angular.module('hrBase.filters', [])
    .filter('map', () => {
        return (array, field) => {
            let out = '';

            if (array && field && _.isArray(array)) {
                out = array.map((a) => {
                    return a[field];
                }).join(', ');
            }

            return out;
        }
    })
    .filter('search', ($filter) => {
            return (array, expression) => {

                function filter(array, expression) {
                    let out = [];
                    let temp = array;
                    for (var ff in expression) {
                        var searchValue = expression[ff];
                        var inside = [];
                        for (var ii = 0, ll = temp.length; ii < ll; ii++) {
                            var obj = temp[ii];
                            var obVal = obj[ff];
                            if (!obVal) {
                                continue;
                            }

                            if (_.isArray(obVal)) {
                                if (_.isArray(searchValue)) {
                                    if (searchValue.every(function (el) {
                                            return _.indexOf(obVal, el) !== -1
                                        })) {
                                        inside.push(obj);
                                    }
                                }
                            } else if (_.isString(obVal)) {
                                if (_.isString(searchValue)) {
                                    if (_.isEqual(searchValue, obVal)) {
                                        inside.push(obj);
                                    }
                                }
                            } else if (_.isObject(obVal)) {
                                if (_.isObject(searchValue)) {
                                    for (var bb in obVal) {
                                        if (_.isEqual(obVal[bb], searchValue[bb])) {
                                            inside.push(obj);
                                        }
                                    }
                                }
                            }
                        }
                        temp = inside;
                    }

                    out = temp;
                    return out;
                }

                return filter(array, expression.filter);
            }
        }
    )
    .filter('cleanPhoneNumber', () => input => input.replace(/\-|\s|\(|\)/g, '')).name;