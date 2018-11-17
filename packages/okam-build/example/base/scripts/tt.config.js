/**
 * @file Build wx mini program config
 * @author xxx
 */

'use strict';

const merge = require('../../../').merge;

module.exports = merge({}, require('./base.config'), {
    output: {
        dir: 'tt_dist',
        depDir: 'src/common'
    },
    localPolyfill: [
        'async',
        'promise'
    ]
});