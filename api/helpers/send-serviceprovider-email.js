module.exports = {


    friendlyName: 'Send template email',


    description: 'Send an email using a template.',


    extendedDescription: 'To ease testing and development, if the provided "to" email address ends in "@example.com", ' +
        'then the email message will be written to the terminal instead of actually being sent.' +
        '(Thanks [@simonratner](https://github.com/simonratner)!)',


    inputs: {

        template: {
            description: 'The relative path to an EJS template within our `views/emails/` folder -- WITHOUT the file extension.',
            extendedDescription: 'Use strings like "foo" or "foo/bar", but NEVER "foo/bar.ejs".  For example, ' +
                '"marketing/welcome" would send an email using the "views/emails/marketing/welcome.ejs" template.',
            example: 'email-reset-password',
            type: 'string',
            required: true
        },

        templateData: {
            description: 'A dictionary of data which will be accessible in the EJS template.',
            extendedDescription: 'Each key will be a local variable accessible in the template.  For instance, if you supply ' +
                'a dictionary with a \`friends\` key, and \`friends\` is an array like \`[{name:"Chandra"}, {name:"Mary"}]\`),' +
                'then you will be able to access \`friends\` from the template:\n' +
                '\`\`\`\n' +
                '<ul>\n' +
                '<% for (friend of friends){ %><li><%= friend.name %></li><% }); %>\n' +
                '</ul>\n' +
                '\`\`\`' +
                '\n' +
                'This is EJS, so use \`<%= %>\` to inject the HTML-escaped content of a variable, \`<%= %>\` to skip HTML-escaping ' +
                'and inject the data as-is, or \`<% %>\` to execute some JavaScript code such as an \`if\` statement or \`for\` loop.',
            type: {},
            defaultsTo: {}
        },

        to: {
            description: 'The email address of the primary recipient.',
            extendedDescription: 'If this is any address ending in "@example.com", then don\'t actually deliver the message. ' +
                'Instead, just log it to the console.',
            example: 'foo@bar.com',
            required: true
        },
        from: {
            description: 'The email address of the primary recipient.',
            extendedDescription: 'If this is any address ending in "@example.com", then don\'t actually deliver the message. ' +
                'Instead, just log it to the console.',
            example: 'foo@bar.com',
            required: true
        },

        subject: {
            description: 'The subject of the email.',
            example: 'Hello there.',
            defaultsTo: ''
        },

        layout: {
            description: 'Set to `false` to disable layouts altogether, or provide the path (relative ' +
                'from `views/layouts/`) to an override email layout.',
            defaultsTo: 'layout-email',
            custom: (layout) => layout === false || _.isString(layout)
        },

        ensureAck: {
            description: 'Whether to wait for acknowledgement (to hear back) that the email was successfully sent (or at least queued for sending) before returning.',
            extendedDescription: 'Otherwise by default, this returns immediately and delivers the request to deliver this email in the background.',
            type: 'boolean',
            defaultsTo: false
        }

    },


    exits: {

        success: {
            outputFriendlyName: 'Email delivery report',
            outputDescription: 'A dictionary of information about what went down.',
            outputType: {
                loggedInsteadOfSending: 'boolean'
            }
        }

    },

    semdEmailThroughMailgun: async function(){

    },

    fn: async function(inputs) {

        var path = require('path');
        var url = require('url');
        var util = require('util');


        if (!_.startsWith(path.basename(inputs.template), 'email-')) {
            sails.log.warn(
                'The "template" that was passed in to `sendTemplateEmail()` does not begin with ' +
                '"email-" -- but by convention, all email template files in `views/emails/` should ' +
                'be namespaced in this way.  (This makes it easier to look up email templates by ' +
                'filename; e.g. when using CMD/CTRL+P in Sublime Text.)\n' +
                'Continuing regardless...'
            );
        }

        if (_.startsWith(inputs.template, 'views/') || _.startsWith(inputs.template, 'emails/')) {
            throw new Error(
                'The "template" that was passed in to `sendTemplateEmail()` was prefixed with\n' +
                '`emails/` or `views/` -- but that part is supposed to be omitted.  Instead, please\n' +
                'just specify the path to the desired email template relative from `views/emails/`.\n' +
                'For example:\n' +
                '  template: \'email-reset-password\'\n' +
                'Or:\n' +
                '  template: \'admin/email-contact-form\'\n' +
                ' [?] If you\'re unsure or need advice, see https://sailsjs.com/support'
            );
        } //•

        // Determine appropriate email layout and template to use.
        var emailTemplatePath = path.join('emails/', inputs.template);
        console.log("emaitemplatepath",emailTemplatePath);
        console.log("emaitemplatepath",path.dirname(emailTemplatePath));
     //   return;
        var layout;
        if (inputs.layout) {
            layout = path.relative(path.dirname(emailTemplatePath), path.resolve('layouts/', inputs.layout));
        } else {
            layout = false;
        }
         console.log("layout",layout);
      //   return;
        // Compile HTML template.
        // > Note that we set the layout, provide access to core `url` package (for
        // > building links and image srcs, etc.), and also provide access to core
        // > `util` package (for dumping debug data in internal emails).
        var htmlEmailContents = await sails.renderView(
                emailTemplatePath,
                _.extend({
                  layout,
                    url,
                    util
                }, inputs.templateData)
            )
            .intercept((err) => {
                err.message =
                    'Could not compile view template.\n' +
                    '(Usually, this means the provided data is invalid, or missing a piece.)\n' +
                    'Details:\n' +
                    err.message;
                return err;
            });

        // Sometimes only log info to the console about the email that WOULD have been sent.
        // Specifically, if the "To" email address is anything "@example.com".
        //
        // > This is used below when determining whether to actually send the email,
        // > for convenience during development, but also for safety.  (For example,
        // > a special-cased version of "user@example.com" is used by Trend Micro Mars
        // > scanner to "check apks for malware".)
        var isToAddressConsideredFake = Boolean(inputs.to.match(/@example\.com$/i));

        // If that's the case, or if we're in the "test" environment, then log
        // the email instead of sending it:
        var dontActuallySend = (
            sails.config.environment === 'test' || isToAddressConsideredFake
        );
        if (dontActuallySend) {
            sails.log(
                'Skipped sending email, either because the "To" email address ended in "@example.com"\n' +
                'or because the current \`sails.config.environment\` is set to "test".\n' +
                '\n' +
                'But anyway, here is what WOULD have been sent:\n' +
                '-=-=-=-=-=-=-=-=-=-=-=-=-= Email log =-=-=-=-=-=-=-=-=-=-=-=-=-\n' +
                'To: ' + inputs.to + '\n' +
                'Subject: ' + inputs.subject + '\n' +
                '\n' +
                'Body:\n' +
                htmlEmailContents + '\n' +
                '-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-'
            );
        } else {
            // Otherwise, we'll check that all required Mailgun credentials are set up
            // and, if so, continue to actually send the email.


            // template, data, options, cb
            // if (inputs.ensureAck) {
            //     // console.log("++++++++++++++++++++++++htmlEmailContents",htmlEmailContents);
            //     await sails.hooks.email.send(
            //         "test",
            //       //  "layouts",
            //         inputs.templateData,
            //         {
            //             to: inputs.to,
            //             subject: inputs.subject
            //         },
            //         function(err) //{console.log(err || "It worked!");}
            //         {
            //             if (err) {
            //                 sails.log.error(
            //                     'Background instruction failed:  Could not deliver email:\n' +
            //                     util.inspect(inputs, {
            //                         depth: null
            //                     }) + '\n',
            //                     'Error details:\n' +
            //                     util.inspect(err)
            //                 );
            //             } else {
            //                 sails.log.info(
            //                     'Background instruction complete:  Email sent (or at least queued):\n' +
            //                     util.inspect(inputs, {
            //                         depth: null
            //                     })
            //                 );
            //             }
            //         }
            //     );
            // } else {
            //     sails.hooks.email.send(
            //         htmlEmailContents,
            //         {},
            //         {
            //             to: inputs.to,
            //             subject: inputs.subject
            //         },
            //         function(err) //{console.log(err || "It worked!");}
            //         {
            //             if (err) {
            //                 sails.log.error(
            //                     'Background instruction failed:  Could not deliver email:\n' +
            //                     util.inspect(inputs, {
            //                         depth: null
            //                     }) + '\n',
            //                     'Error details:\n' +
            //                     util.inspect(err)
            //                 );
            //             } else {
            //                 sails.log.info(
            //                     'Background instruction complete:  Email sent (or at least queued):\n' +
            //                     util.inspect(inputs, {
            //                         depth: null
            //                     })
            //                 );
            //             }
            //         }
            //     );
            // } 
            
            //ﬁ




            if (!sails.config.custom.mailgunSecret || !sails.config.custom.mailgunDomain) {
                throw new Error(
                    'Cannot deliver email to "' + inputs.to + '" because:\n' +
                    (() => {
                        let problems = [];
                        if (!sails.config.custom.mailgunSecret) {
                            problems.push(' • Mailgun secret is missing from this app\'s configuration (`sails.config.custom.mailgunSecret`)');
                        }
                        if (!sails.config.custom.mailgunDomain) {
                            problems.push(' • Mailgun domain is missing from this app\'s configuration (`sails.config.custom.mailgunDomain`)');
                        }
                        return problems.join('\n');
                    })() +
                    '\n' +
                    'To resolve these configuration issues, add the missing config variables to\n' +
                    '\`config/custom.js\`-- or in staging/production, set them up as system\n' +
                    'environment vars.  (If you don\'t have a Mailgun domain or secret, you can\n' +
                    'sign up for free at https://mailgun.com to receive sandbox credentials.)\n' +
                    '\n' +
                    '> Note that, for convenience during development, there is another alternative:\n' +
                    '> In lieu of setting up real Mailgun credentials, you can "fake" email\n' +
                    '> delivery by using any email address that ends in "@example.com".  This will\n' +
                    '> write automated emails to your logs rather than actually sending them.\n' +
                    '> (To simulate clicking on a link from an email, just copy and paste the link\n' +
                    '> from the terminal output into your browser.)\n' +
                    '\n' +
                    '[?] If you\'re unsure, visit https://sailsjs.com/support'
                );
            }

            
            
       


            const mailgun = require("mailgun-js");
            const api_key = "8ca1957b0d8d78525c8202d3c94bee32-2ae2c6f3-36f4c134";
            const DOMAIN =  "sandbox53b24bf78a234c959bb169e3e1709788.mailgun.org";
            const mg = mailgun({apiKey: api_key, domain: DOMAIN});
            const data = {
                from: inputs.from,
                to: inputs.to,
                subject: inputs.subject,
               // text: 'hellow world',
                html:`${htmlEmailContents}`
            
            };
            mg.messages().send(data, function (error, body) {
                if(error){
                    console.log("mailgun error ==================error",error);
                }
                console.log("mailgun body",body);
            });


            // if (inputs.ensureAck) {
            //     await deferred;
            // } else {
            //     // FUTURE: take advantage of .background() here instead (when available)
            //     deferred.exec((err) => {
            //         if (err) {
            //             sails.log.error(
            //                 'Background instruction failed:  Could not deliver email:\n' +
            //                 util.inspect(inputs, {
            //                     depth: null
            //                 }) + '\n',
            //                 'Error details:\n' +
            //                 util.inspect(err)
            //             );
            //         } else {
            //             sails.log.info(
            //                 'Background instruction complete:  Email sent (or at least queued):\n' +
            //                 util.inspect(inputs, {
            //                     depth: null
            //                 })
            //             );
            //         }
            //     }); //_∏_
            // } //ﬁ







        } //ﬁ

        // All done!
        return {
            loggedInsteadOfSending: dontActuallySend
        };

    }

};