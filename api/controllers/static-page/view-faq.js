module.exports = {


    friendlyName: 'View faq',


    description: 'Display "FAQ" page.',


    exits: {

        success: {
            viewTemplatePath: 'static-page/faq'
        }

    },


    fn: async function() {

        // Respond with view.
        return {};

    }


};