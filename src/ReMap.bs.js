// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

var make = Belt_Array.zip;

function makeL(keys, values) {
  return Belt_List.toArray(Belt_List.zip(keys, values));
}

function get(inst, key) {
  var match = Belt_Array.getBy(inst, (function (param) {
          return param[0] === key;
        }));
  if (match !== undefined) {
    return Caml_option.some(match[1]);
  }
  
}

function getOr(inst, key, def) {
  var match = Belt_Array.getBy(inst, (function (param) {
          return param[0] === key;
        }));
  if (match !== undefined) {
    return match[1];
  } else {
    return def;
  }
}

function getUnsafe(inst, key) {
  return Belt_Option.getExn(Belt_Array.getBy(inst, (function (param) {
                      return param[0] === key;
                    })))[1];
}

function remove(inst, key) {
  return Belt_Array.keep(inst, (function (param) {
                return key !== param[0];
              }));
}

function concat(inst, entries) {
  return Belt_Array.concat(inst, Belt_Array.keep(entries, (function (param) {
                    var k = param[0];
                    return !Belt_Array.some(inst, (function (param) {
                                  return k === param[0];
                                }));
                  })));
}

function push(inst, entry) {
  return concat(inst, /* array */[entry]);
}

function replace(inst, key, newVal) {
  return Belt_Array.map(inst, (function (param) {
                var k = param[0];
                var match = k === key;
                if (match) {
                  return /* tuple */[
                          k,
                          newVal
                        ];
                } else {
                  return /* tuple */[
                          k,
                          param[1]
                        ];
                }
              }));
}

function freplace(inst, key, foo) {
  return Belt_Array.map(inst, (function (param) {
                var v = param[1];
                var k = param[0];
                var match = k === key;
                if (match) {
                  return /* tuple */[
                          k,
                          Curry._1(foo, v)
                        ];
                } else {
                  return /* tuple */[
                          k,
                          v
                        ];
                }
              }));
}

function map(inst, foo) {
  return Belt_Array.map(inst, (function (param) {
                return Curry._2(foo, param[0], param[1]);
              }));
}

function collect(inst, keys) {
  return Belt_Array.keep(inst, (function (param) {
                var k = param[0];
                return Belt_Array.some(keys, (function (kc) {
                              return kc === k;
                            }));
              }));
}

function getRe(inst, key) {
  var match = Belt_Array.getBy(inst, (function (param) {
          return key.test(param[0]);
        }));
  if (match !== undefined) {
    return Caml_option.some(match[1]);
  }
  
}

function aggretage(inst, key) {
  return Belt_Array.keep(inst, (function (param) {
                return key.test(param[0]);
              }));
}

function $at$pipe(inst, param) {
  return getOr(inst, param[0], param[1]);
}

function $at$hash(inst, param) {
  return replace(inst, param[0], param[1]);
}

function $at$hash$great(inst, param) {
  return freplace(inst, param[0], param[1]);
}

var Operators = /* module */[
  /* @: */get,
  /* @| */$at$pipe,
  /* @:! */getUnsafe,
  /* @- */remove,
  /* @++ */concat,
  /* @+ */push,
  /* @# */$at$hash,
  /* @#> */$at$hash$great,
  /* @>>= */map,
  /* @>>: */collect,
  /* $: */getRe,
  /* $:: */aggretage
];

exports.make = make;
exports.makeL = makeL;
exports.get = get;
exports.getOr = getOr;
exports.getUnsafe = getUnsafe;
exports.remove = remove;
exports.concat = concat;
exports.push = push;
exports.replace = replace;
exports.freplace = freplace;
exports.map = map;
exports.collect = collect;
exports.getRe = getRe;
exports.aggretage = aggretage;
exports.Operators = Operators;
/* No side effect */
