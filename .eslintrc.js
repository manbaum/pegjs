"use strict";

module.exports = {

    "extends": [

        "@futagoza/node/8",

    ],

    "rules": {

        "no-duplicate-imports": [ "error", { "includeExports": false } ],
        "no-eval": 0,

    },

    "overrides": [ {

        "files": [
            "test/unit/compiler/passes/helpers.js",
            "*.spec.js",
            "*.test.js",
        ],
        "extends": "@futagoza/dev/test",
        "rules": {

            "func-names": 0,
            "no-mixed-operators": 0,

        },

    } ],

    "root": true,

};
