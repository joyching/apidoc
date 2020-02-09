/**
 * @api {PUT} /v1/me 更新使用者資訊
 *
 * @apiVersion 1.0.0
 * @apiName updateProfile
 * @apiGroup User
 *
 * @apiHeader {String="Bearer {token}"}  Authorization   系統發行的Token
 *
 * @apiParam   {string}   name          使用者暱稱
 *
 * @apiSuccess {string}   id            使用者紀錄編號
 * @apiSuccess {string}   name          使用者暱稱
 *
 * @apiSuccessExample Success-Response:
 * {
 *    "id" : 312465,
 *    "name" : "Tommy"
 * }
 */

/**
 * @api {GET} /v1/me 取得使用者資訊
 *
 * @apiVersion 1.0.0
 * @apiName profile
 * @apiGroup User
 *
 * @apiHeader {String="Bearer {token}"}  Authorization   系統發行的Token
 *
 * @apiSuccess {string}   id            使用者紀錄編號
 * @apiSuccess {string}   name          使用者暱稱
 *
 * @apiSuccessExample Success-Response:
 * {
 *    "id" : 312465,
 *    "name" : "Tommy"
 * }
 */
