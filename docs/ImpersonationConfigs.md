# OrderCloud.ImpersonationConfigs

All URIs are relative to *https://api.ordercloud.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Create**](ImpersonationConfigs.md#Create) | **POST** /impersonationconfig | 
[**Delete**](ImpersonationConfigs.md#Delete) | **DELETE** /impersonationconfig/{impersonationConfigID} | 
[**Get**](ImpersonationConfigs.md#Get) | **GET** /impersonationconfig/{impersonationConfigID} | 
[**List**](ImpersonationConfigs.md#List) | **GET** /impersonationconfig | 
[**Patch**](ImpersonationConfigs.md#Patch) | **PATCH** /impersonationconfig/{impersonationConfigID} | 
[**Update**](ImpersonationConfigs.md#Update) | **PUT** /impersonationconfig/{impersonationConfigID} | 


<a name="Create"></a>
# **Create**
> ImpersonationConfig Create(impersonationConfig)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ImpersonationConfigs();

var impersonationConfig = new OrderCloud.ImpersonationConfig(); // ImpersonationConfig | 

apiInstance.Create(impersonationConfig).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **impersonationConfig** | [**ImpersonationConfig**](ImpersonationConfig.md)|  | 

### Return type

[**ImpersonationConfig**](ImpersonationConfig.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Delete"></a>
# **Delete**
> Delete(impersonationConfigID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ImpersonationConfigs();

var impersonationConfigID = "impersonationConfigID_example"; // String | ID of the impersonation config.

apiInstance.Delete(impersonationConfigID).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **impersonationConfigID** | **String**| ID of the impersonation config. | 

### Return type

null (empty response body)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Get"></a>
# **Get**
> ImpersonationConfig Get(impersonationConfigID)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ImpersonationConfigs();

var impersonationConfigID = "impersonationConfigID_example"; // String | ID of the impersonation config.

apiInstance.Get(impersonationConfigID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **impersonationConfigID** | **String**| ID of the impersonation config. | 

### Return type

[**ImpersonationConfig**](ImpersonationConfig.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="List"></a>
# **List**
> ListImpersonationConfig List(opts)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ImpersonationConfigs();

var opts = { 
  'search': "search_example", // String | Word or phrase to search for.
  'searchOn': "searchOn_example", // String | Comma-delimited list of fields to search on.
  'sortBy': "sortBy_example", // String | Comma-delimited list of fields to sort by.
  'page': 56, // Number | Page of results to return. Default: 1
  'pageSize': 56, // Number | Number of results to return per page. Default: 20, max: 100.
  'filters': {key: "filters_example"} // {String: String} | Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
};
apiInstance.List(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**| Word or phrase to search for. | [optional] 
 **searchOn** | **String**| Comma-delimited list of fields to search on. | [optional] 
 **sortBy** | **String**| Comma-delimited list of fields to sort by. | [optional] 
 **page** | **Number**| Page of results to return. Default: 1 | [optional] 
 **pageSize** | **Number**| Number of results to return per page. Default: 20, max: 100. | [optional] 
 **filters** | [**{String: String}**](String.md)| Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39; | [optional] 

### Return type

[**ListImpersonationConfig**](ListImpersonationConfig.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Patch"></a>
# **Patch**
> ImpersonationConfig Patch(impersonationConfigID, partialImpersonationConfig)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ImpersonationConfigs();

var impersonationConfigID = "impersonationConfigID_example"; // String | ID of the impersonation config.

var partialImpersonationConfig = new OrderCloud.ImpersonationConfig(); // ImpersonationConfig | 

apiInstance.Patch(impersonationConfigID, partialImpersonationConfig).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **impersonationConfigID** | **String**| ID of the impersonation config. | 
 **partialImpersonationConfig** | [**ImpersonationConfig**](ImpersonationConfig.md)|  | 

### Return type

[**ImpersonationConfig**](ImpersonationConfig.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

<a name="Update"></a>
# **Update**
> ImpersonationConfig Update(impersonationConfigID, impersonationConfig)



### Example
```javascript
var OrderCloud = require('OrderCloud');
var defaultClient = OrderCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new OrderCloud.ImpersonationConfigs();

var impersonationConfigID = "impersonationConfigID_example"; // String | ID of the impersonation config.

var impersonationConfig = new OrderCloud.ImpersonationConfig(); // ImpersonationConfig | 

apiInstance.Update(impersonationConfigID, impersonationConfig).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **impersonationConfigID** | **String**| ID of the impersonation config. | 
 **impersonationConfig** | [**ImpersonationConfig**](ImpersonationConfig.md)|  | 

### Return type

[**ImpersonationConfig**](ImpersonationConfig.md)

### Authorization



[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json

