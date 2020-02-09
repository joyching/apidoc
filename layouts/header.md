<style>
td {
    padding: 8px;
}
tr:nth-child(even) {
    background: #f2f2f2;
}
</style>
# OverView

## Success and Error Response
回傳分為五種狀態，分別是:

**Success Response**

`HTTP Status: 200`
```
{
  "field name": "value"
}
```

**Authorization Error Response**

`HTTP Status: 401`
```
{
  "message": "Authorization Error",
  "errors": [
    {
      "code": "Error Code",
      "description": "Error Description"
    }
  ]
}
```

| 錯誤代碼 | 預設輸出 | 描述 |
| --------|------- | -----|
| E0001 | Invalid Token! | 無效的token |
| E0002 | Could not get user from token! | token 格式正確，但無法解出相對應的使用者，可能該使用者已在其他裝置登入 |

**Not Found Error Response**

`HTTP Status: 404`
```
{
  "message": "Not Found Error",
  "errors": [
    {
      "code": "Error Code",
      "description": "Error Description"
    }
  ]
}
```

| 錯誤代碼 | 預設輸出 | 描述 |
| --------|------- | -----|
| E9001 | Resource not found! | 請求目標的API 服務並未存在任何資源 |
| E9002 | HTTP not found! | 請求了未存在的API 服務 |

**Validation Error Response**

`HTTP Status: 422`
```
{
  "message": "Validation Error",
  "errors": [
    {
      "field": "distance",
      "description": "The distance field is required."
    },
    {
      "field": "max_speed",
      "description": "The max_speed field is required."
    }
  ]
}
```

**Other Error Response**

`HTTP Status: 500`
```
{
  "message": "XXX Error",
  "errors": [
    {
      "code": "Error Code",
      "description": "Error Description"
    }
  ]
}
```

| 錯誤代碼 | 預設輸出 | 描述 |
| --------|------- | -----|
| E9999 | Unknown error occurred! | 發生未知錯誤 |
