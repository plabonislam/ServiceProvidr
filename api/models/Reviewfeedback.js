/**
 * Reviewfeedback.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        idOriginal: {
            type: 'number'
        },
        is_helpful: {
            type: 'boolean'
        },
        user_id: {
            model: 'User'
        },
        service_post_id: {
            model: 'service_post'
        },
        review_id: {
            model: 'Review',
        }
    },

};