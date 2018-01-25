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
    define(['ApiClient', 'model/Address', 'model/LineItem', 'model/ListLineItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Address'), require('../model/LineItem'), require('../model/ListLineItem'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.LineItems = factory(root.OrderCloud.ApiClient, root.OrderCloud.Address, root.OrderCloud.LineItem, root.OrderCloud.ListLineItem);
  }
}(this, function(ApiClient, Address, LineItem, ListLineItem) {
  'use strict';

  /**
   * LineItem service.
   * @module api/LineItems
   * @version 1.0.56
   */

  /**
   * Constructs a new LineItems. 
   * @alias module:api/LineItems
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {String} direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param {String} orderID ID of the order.
     * @param {module:model/LineItem} lineItem 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LineItem}
     */
    this.Create = function(direction, orderID, lineItem) {
      var postBody = lineItem;

      // verify the required parameter 'direction' is set
      if (direction == undefined || direction == null) {
        throw new Error("Missing the required parameter 'direction' when calling Create");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Create");
      }

      // verify the required parameter 'lineItem' is set
      if (lineItem == undefined || lineItem == null) {
        throw new Error("Missing the required parameter 'lineItem' when calling Create");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = LineItem;

      return this.apiClient.callApi(
        '/orders/{direction}/{orderID}/lineitems', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param {String} orderID ID of the order.
     * @param {String} lineItemID ID of the line item.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(direction, orderID, lineItemID) {
      var postBody = null;

      // verify the required parameter 'direction' is set
      if (direction == undefined || direction == null) {
        throw new Error("Missing the required parameter 'direction' when calling Delete");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Delete");
      }

      // verify the required parameter 'lineItemID' is set
      if (lineItemID == undefined || lineItemID == null) {
        throw new Error("Missing the required parameter 'lineItemID' when calling Delete");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID,
        'lineItemID': lineItemID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/orders/{direction}/{orderID}/lineitems/{lineItemID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param {String} orderID ID of the order.
     * @param {String} lineItemID ID of the line item.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LineItem}
     */
    this.Get = function(direction, orderID, lineItemID) {
      var postBody = null;

      // verify the required parameter 'direction' is set
      if (direction == undefined || direction == null) {
        throw new Error("Missing the required parameter 'direction' when calling Get");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Get");
      }

      // verify the required parameter 'lineItemID' is set
      if (lineItemID == undefined || lineItemID == null) {
        throw new Error("Missing the required parameter 'lineItemID' when calling Get");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID,
        'lineItemID': lineItemID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = LineItem;

      return this.apiClient.callApi(
        '/orders/{direction}/{orderID}/lineitems/{lineItemID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param {String} orderID ID of the order.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListLineItem}
     */
    this.List = function(direction, orderID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'direction' is set
      if (direction == undefined || direction == null) {
        throw new Error("Missing the required parameter 'direction' when calling List");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling List");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListLineItem;

      return this.apiClient.callApi(
        '/orders/{direction}/{orderID}/lineitems', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param {String} orderID ID of the order.
     * @param {String} lineItemID ID of the line item.
     * @param {module:model/LineItem} partialLineItem 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LineItem}
     */
    this.Patch = function(direction, orderID, lineItemID, partialLineItem) {
      var postBody = partialLineItem;

      // verify the required parameter 'direction' is set
      if (direction == undefined || direction == null) {
        throw new Error("Missing the required parameter 'direction' when calling Patch");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Patch");
      }

      // verify the required parameter 'lineItemID' is set
      if (lineItemID == undefined || lineItemID == null) {
        throw new Error("Missing the required parameter 'lineItemID' when calling Patch");
      }

      // verify the required parameter 'partialLineItem' is set
      if (partialLineItem == undefined || partialLineItem == null) {
        throw new Error("Missing the required parameter 'partialLineItem' when calling Patch");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID,
        'lineItemID': lineItemID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = LineItem;

      return this.apiClient.callApi(
        '/orders/{direction}/{orderID}/lineitems/{lineItemID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param {String} orderID ID of the order.
     * @param {String} lineItemID ID of the line item.
     * @param {module:model/Address} partialAddress 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LineItem}
     */
    this.PatchShippingAddress = function(direction, orderID, lineItemID, partialAddress) {
      var postBody = partialAddress;

      // verify the required parameter 'direction' is set
      if (direction == undefined || direction == null) {
        throw new Error("Missing the required parameter 'direction' when calling PatchShippingAddress");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling PatchShippingAddress");
      }

      // verify the required parameter 'lineItemID' is set
      if (lineItemID == undefined || lineItemID == null) {
        throw new Error("Missing the required parameter 'lineItemID' when calling PatchShippingAddress");
      }

      // verify the required parameter 'partialAddress' is set
      if (partialAddress == undefined || partialAddress == null) {
        throw new Error("Missing the required parameter 'partialAddress' when calling PatchShippingAddress");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID,
        'lineItemID': lineItemID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = LineItem;

      return this.apiClient.callApi(
        '/orders/{direction}/{orderID}/lineitems/{lineItemID}/shipto', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param {String} orderID ID of the order.
     * @param {String} lineItemID ID of the line item.
     * @param {module:model/Address} address 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LineItem}
     */
    this.SetShippingAddress = function(direction, orderID, lineItemID, address) {
      var postBody = address;

      // verify the required parameter 'direction' is set
      if (direction == undefined || direction == null) {
        throw new Error("Missing the required parameter 'direction' when calling SetShippingAddress");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling SetShippingAddress");
      }

      // verify the required parameter 'lineItemID' is set
      if (lineItemID == undefined || lineItemID == null) {
        throw new Error("Missing the required parameter 'lineItemID' when calling SetShippingAddress");
      }

      // verify the required parameter 'address' is set
      if (address == undefined || address == null) {
        throw new Error("Missing the required parameter 'address' when calling SetShippingAddress");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID,
        'lineItemID': lineItemID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = LineItem;

      return this.apiClient.callApi(
        '/orders/{direction}/{orderID}/lineitems/{lineItemID}/shipto', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param {String} orderID ID of the order.
     * @param {String} lineItemID ID of the line item.
     * @param {module:model/LineItem} lineItem 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LineItem}
     */
    this.Update = function(direction, orderID, lineItemID, lineItem) {
      var postBody = lineItem;

      // verify the required parameter 'direction' is set
      if (direction == undefined || direction == null) {
        throw new Error("Missing the required parameter 'direction' when calling Update");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Update");
      }

      // verify the required parameter 'lineItemID' is set
      if (lineItemID == undefined || lineItemID == null) {
        throw new Error("Missing the required parameter 'lineItemID' when calling Update");
      }

      // verify the required parameter 'lineItem' is set
      if (lineItem == undefined || lineItem == null) {
        throw new Error("Missing the required parameter 'lineItem' when calling Update");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID,
        'lineItemID': lineItemID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = LineItem;

      return this.apiClient.callApi(
        '/orders/{direction}/{orderID}/lineitems/{lineItemID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
