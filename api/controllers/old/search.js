module.exports = {


    friendlyName: 'View search',


    description: 'Display "search" page.',


    exits: {

        success: {
            viewTemplatePath: 'pages/search'
        }

    },


    fn: async function() {

        // Respond with view.
        return {};

    }


};