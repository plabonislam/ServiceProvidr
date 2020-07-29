module.exports = {


    friendlyName: 'View contact',


    description: 'Display "Contact" page.',


    exits: {

        success: {
            viewTemplatePath: 'static-page/contact'
        }

    },


    fn: async function() {

        // Respond with view.
        return {};

    }


};