define({ "api": [
  {
    "type": "POST",
    "url": "/v1/login",
    "title": "用戶登入",
    "version": "1.0.0",
    "name": "login",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>電子郵箱</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密碼</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "access_token",
            "description": "<p>核准的Token</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "token_type",
            "description": "<p>Token類型(目前僅為Bearer)</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "expires_in",
            "description": "<p>Token有效秒數</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "user",
            "description": "<p>使用者資訊</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "user.id",
            "description": "<p>使用者編號</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.email",
            "description": "<p>使用者Email</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"access_token\" : \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkuam95bGluLmRldi1zbWFydC1lYmlrZS4zLjAuMTkyLjI2Lm5pcC5pb1wvXC92MVwvcmVnaXN0ZXIiLCJpYXQiOjE1NTA1NDI3MDUsIm5iZiI6MTU1MDU0MjcwNSwianRpIjoia3lTUGVCdXFKNFhqcklQMyIsInN1YiI6MTgsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJzaWduYXR1cmUiOiI0Yjc4MDE5OC04MzNlLTQ0MGUtOGEzZi1mYTkwM2ZhMzFmMjQifQ.WT8MLNB-LnblRVBzAQrSVuutYw2si36Ocs9GJuHjYms\",\n   \"token_type\" : \"Bearer\",\n   \"expires_in\" : 31536000,\n   \"user\" : {\n       \"id\" : 312465,\n       \"email\" : \"test@example.com\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "optional": false,
            "field": "Invalid-Credential",
            "description": "<p>帳號或密碼錯誤</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid-Credential:",
          "content": "{\n   \"message\": \"Authorization Error\",\n   \"errors\": [\n     {\n       \"code\": \"E0102\",\n       \"description\": \"Invalid Credential.\"\n     }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1.0.0/Authentication.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "GET",
    "url": "/v1/logout",
    "title": "用戶登出",
    "version": "1.0.0",
    "name": "logout",
    "group": "Authentication",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"Bearer {token}\""
            ],
            "optional": false,
            "field": "Authorization",
            "description": "<p>系統發行的Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "logout_time",
            "description": "<p>登出時間(UTC+0 時間戳)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"logout_time\" : 1550214153\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1.0.0/Authentication.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "POST",
    "url": "/v1/register",
    "title": "用戶註冊",
    "version": "1.0.0",
    "name": "register",
    "group": "Register",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>電子郵箱</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>名稱</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密碼</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>確認密碼</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "access_token",
            "description": "<p>核准的Token</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "token_type",
            "description": "<p>Token類型(目前僅為Bearer)</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "expires_in",
            "description": "<p>Token有效秒數</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "user",
            "description": "<p>使用者資訊</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "user.id",
            "description": "<p>使用者編號</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.email",
            "description": "<p>使用者Email</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"access_token\" : \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkuam95bGluLmRldi1zbWFydC1lYmlrZS4zLjAuMTkyLjI2Lm5pcC5pb1wvXC92MVwvcmVnaXN0ZXIiLCJpYXQiOjE1NTA1NDI3MDUsIm5iZiI6MTU1MDU0MjcwNSwianRpIjoia3lTUGVCdXFKNFhqcklQMyIsInN1YiI6MTgsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJzaWduYXR1cmUiOiI0Yjc4MDE5OC04MzNlLTQ0MGUtOGEzZi1mYTkwM2ZhMzFmMjQifQ.WT8MLNB-LnblRVBzAQrSVuutYw2si36Ocs9GJuHjYms\",\n   \"token_type\" : \"Bearer\",\n   \"expires_in\" : 31536000,\n   \"user\" : {\n       \"id\" : 312465,\n       \"email\" : \"test@example.com\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 422": [
          {
            "group": "Error 422",
            "optional": false,
            "field": "Email-Was-Taken",
            "description": "<p>該組電子郵箱(帳號)已被使用</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Email-Was-Taken:",
          "content": "{\n   \"message\": \"Register Error\",\n   \"errors\": [\n     {\n       \"code\": \"E0101\",\n       \"description\": \"Email was taken.\"\n     }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1.0.0/Register.js",
    "groupTitle": "Register"
  },
  {
    "type": "GET",
    "url": "/v1/me",
    "title": "取得使用者資訊",
    "version": "1.0.0",
    "name": "profile",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"Bearer {token}\""
            ],
            "optional": false,
            "field": "Authorization",
            "description": "<p>系統發行的Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>使用者紀錄編號</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>使用者暱稱</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"id\" : 312465,\n   \"name\" : \"Tommy\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1.0.0/User.js",
    "groupTitle": "User"
  },
  {
    "type": "PUT",
    "url": "/v1/me",
    "title": "更新使用者資訊",
    "version": "1.0.0",
    "name": "updateProfile",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"Bearer {token}\""
            ],
            "optional": false,
            "field": "Authorization",
            "description": "<p>系統發行的Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>使用者暱稱</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>使用者紀錄編號</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>使用者暱稱</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"id\" : 312465,\n   \"name\" : \"Tommy\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./v1.0.0/User.js",
    "groupTitle": "User"
  }
] });
