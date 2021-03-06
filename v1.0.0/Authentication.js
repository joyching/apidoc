/**
 * @api {POST} /v1/login 用戶登入
 *
 * @apiVersion 1.0.0
 * @apiName login
 * @apiGroup Authentication
 *
 * @apiParam {string} email 電子郵箱
 * @apiParam {string} password 密碼
 *
 * @apiSuccess {string}  access_token 核准的Token
 * @apiSuccess {string}  token_type   Token類型(目前僅為Bearer)
 * @apiSuccess {integer} expires_in   Token有效秒數
 * @apiSuccess {array}   user         使用者資訊
 * @apiSuccess {integer} user.id      使用者編號
 * @apiSuccess {string}  user.email   使用者Email
 *
 * @apiSuccessExample Success-Response:
 * {
 *    "access_token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkuam95bGluLmRldi1zbWFydC1lYmlrZS4zLjAuMTkyLjI2Lm5pcC5pb1wvXC92MVwvcmVnaXN0ZXIiLCJpYXQiOjE1NTA1NDI3MDUsIm5iZiI6MTU1MDU0MjcwNSwianRpIjoia3lTUGVCdXFKNFhqcklQMyIsInN1YiI6MTgsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJzaWduYXR1cmUiOiI0Yjc4MDE5OC04MzNlLTQ0MGUtOGEzZi1mYTkwM2ZhMzFmMjQifQ.WT8MLNB-LnblRVBzAQrSVuutYw2si36Ocs9GJuHjYms",
 *    "token_type" : "Bearer",
 *    "expires_in" : 31536000,
 *    "user" : {
 *        "id" : 312465,
 *        "email" : "test@example.com"
 *    }
 * }
 *
 * @apiError (Error 401) Invalid-Credential 帳號或密碼錯誤
 *
 * @apiErrorExample Invalid-Credential:
 * {
 *    "message": "Authorization Error",
 *    "errors": [
 *      {
 *        "code": "E0102",
 *        "description": "Invalid Credential."
 *      }
 *    ]
 * }
 */

/**
 * @api {GET} /v1/logout 用戶登出
 *
 * @apiVersion 1.0.0
 * @apiName logout
 * @apiGroup Authentication
 *
 * @apiHeader {String="Bearer {token}"}  Authorization   系統發行的Token
 *
 * @apiSuccess {integer} logout_time 登出時間(UTC+0 時間戳)
 *
 * @apiSuccessExample Success-Response:
 * {
 *    "logout_time" : 1550214153
 * }
 */
