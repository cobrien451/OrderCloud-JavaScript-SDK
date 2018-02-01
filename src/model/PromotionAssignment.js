/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.PromotionAssignment = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PromotionAssignment model module.
   * @module model/PromotionAssignment
   * @version 1.0.58
   */

  /**
   * Constructs a new <code>PromotionAssignment</code>.
   * @alias module:model/PromotionAssignment
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PromotionAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PromotionAssignment} obj Optional instance to populate.
   * @return {module:model/PromotionAssignment} The populated <code>PromotionAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('PromotionID')) {
        obj['PromotionID'] = ApiClient.convertToType(data['PromotionID'], 'String');
      }
      if (data.hasOwnProperty('BuyerID')) {
        obj['BuyerID'] = ApiClient.convertToType(data['BuyerID'], 'String');
      }
      if (data.hasOwnProperty('UserGroupID')) {
        obj['UserGroupID'] = ApiClient.convertToType(data['UserGroupID'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} PromotionID
   */
  exports.prototype['PromotionID'] = undefined;
  /**
   * @member {String} BuyerID
   */
  exports.prototype['BuyerID'] = undefined;
  /**
   * @member {String} UserGroupID
   */
  exports.prototype['UserGroupID'] = undefined;



  return exports;
}));


