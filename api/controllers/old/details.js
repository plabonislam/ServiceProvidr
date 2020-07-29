module.exports = {


    friendlyName: 'View details',


    description: 'Display "details" page.',


    exits: {

        success: {
            viewTemplatePath: 'pages/details'
        }

    },


    fn: async function() {

        // Respond with view.
        return {};

    }


};