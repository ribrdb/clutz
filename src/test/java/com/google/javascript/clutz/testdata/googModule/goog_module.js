goog.module('googmodule.TheModule');

var Required = goog.require('googmodule.Required');
var RequiredDefault = goog.require('googmodule.requiredModuleDefault');
var requiredModule = goog.require('googmodule.requiredModule');
let {MissingClass} = goog.require('missing.module');

/** @type {number} */
exports.a = 1;

/** @const */
exports.b = requiredModule.rm;

/** @type {typeof Required} */
exports.Required = Required;

/** @type {!Required} */
exports.requiredInstance = new Required();

/** @type {typeof RequiredDefault} */
exports.RequiredDefault = RequiredDefault;

/** @type {!RequiredDefault} */
exports.requiredDefaultInstance = new RequiredDefault();

/**
 * @param {typeof RequiredDefault} requiredDefaultCtor
 * @return {!RequiredDefault}
 */
exports.instantiateRequiredDefault = function(requiredDefaultCtor) {
  return new requiredDefaultCtor();
};

/** @type {!typeof MissingClass} */
exports.MissingClass = MissingClass;

/** @type {!MissingClass} */
exports.missingClassInstance = new MissingClass();

/**
 * @param {typeof MissingClass} missingClassCtor
 * @return {!MissingClass}
 */
exports.instantiateMissingClass = function(missingClassCtor) {
  return new missingClassCtor();
};

exports.ExportedClass = class {
  /** @param {typeof MissingClass} missingClassCtor */
  constructor(missingClassCtor) {
    /** @const {typeof MissingClass}*/
    this.missingClassCtor = missingClassCtor;
  }
};

/** @type {number} */
var scopedVariable;
