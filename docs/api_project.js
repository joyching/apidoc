define({
  "name": "Laravel-API",
  "version": "1.0.0",
  "description": "Documentation for RESTful web APIs",
  "title": "Laravel-API Document",
  "header": {
    "content": "<style>\ntd {\n    padding: 8px;\n}\ntr:nth-child(even) {\n    background: #f2f2f2;\n}\n</style>\n<h1>OverView</h1>\n<h2>Success and Error Response</h2>\n<p>回傳分為五種狀態，分別是:</p>\n<p><strong>Success Response</strong></p>\n<p><code>HTTP Status: 200</code></p>\n<pre class=\"prettyprint\">{\n  \"field name\": \"value\"\n}\n</code></pre>\n<p><strong>Authorization Error Response</strong></p>\n<p><code>HTTP Status: 401</code></p>\n<pre class=\"prettyprint\">{\n  \"message\": \"Authorization Error\",\n  \"errors\": [\n    {\n      \"code\": \"Error Code\",\n      \"description\": \"Error Description\"\n    }\n  ]\n}\n</code></pre>\n<table>\n<thead>\n<tr>\n<th>錯誤代碼</th>\n<th>預設輸出</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>E0001</td>\n<td>Invalid Token!</td>\n<td>無效的token</td>\n</tr>\n<tr>\n<td>E0002</td>\n<td>Could not get user from token!</td>\n<td>token 格式正確，但無法解出相對應的使用者，可能該使用者已在其他裝置登入</td>\n</tr>\n</tbody>\n</table>\n<p><strong>Not Found Error Response</strong></p>\n<p><code>HTTP Status: 404</code></p>\n<pre class=\"prettyprint\">{\n  \"message\": \"Not Found Error\",\n  \"errors\": [\n    {\n      \"code\": \"Error Code\",\n      \"description\": \"Error Description\"\n    }\n  ]\n}\n</code></pre>\n<table>\n<thead>\n<tr>\n<th>錯誤代碼</th>\n<th>預設輸出</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>E9001</td>\n<td>Resource not found!</td>\n<td>請求目標的API 服務並未存在任何資源</td>\n</tr>\n<tr>\n<td>E9002</td>\n<td>HTTP not found!</td>\n<td>請求了未存在的API 服務</td>\n</tr>\n</tbody>\n</table>\n<p><strong>Validation Error Response</strong></p>\n<p><code>HTTP Status: 422</code></p>\n<pre class=\"prettyprint\">{\n  \"message\": \"Validation Error\",\n  \"errors\": [\n    {\n      \"field\": \"distance\",\n      \"description\": \"The distance field is required.\"\n    },\n    {\n      \"field\": \"max_speed\",\n      \"description\": \"The max_speed field is required.\"\n    }\n  ]\n}\n</code></pre>\n<p><strong>Other Error Response</strong></p>\n<p><code>HTTP Status: 500</code></p>\n<pre class=\"prettyprint\">{\n  \"message\": \"XXX Error\",\n  \"errors\": [\n    {\n      \"code\": \"Error Code\",\n      \"description\": \"Error Description\"\n    }\n  ]\n}\n</code></pre>\n<table>\n<thead>\n<tr>\n<th>錯誤代碼</th>\n<th>預設輸出</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>E9999</td>\n<td>Unknown error occurred!</td>\n<td>發生未知錯誤</td>\n</tr>\n</tbody>\n</table>\n"
  },
  "template": {
    "forceLanguage": "en"
  },
  "sampleUrl": false,
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2020-02-09T11:55:34.030Z",
    "url": "http://apidocjs.com",
    "version": "0.20.0"
  }
});
