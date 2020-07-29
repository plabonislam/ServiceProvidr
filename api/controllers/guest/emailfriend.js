module.exports = {


    friendlyName: 'Send password recovery email',
  
  
    description: 'Send a password recovery notification to the user with the specified email address.',
  
  
    inputs: {
  
        receiverEmail: {
        description: 'The email address of the alleged user who wants to recover their password.',
        example: 'rydahl@example.com',
        type: 'string',
        required: true
      },
      senderEmail: {
        description: 'The email address of the alleged user who wants to recover their password.',
        example: 'rydahl@example.com',
        type: 'string',
        required: true
      },
      subject: {
        description: 'The email address of the alleged user who wants to recover their password.',
        example: 'welcome',
        type: 'string',
        required: true
      },
      description: {
        description: 'The email address of the alleged user who wants to recover their password.',
        example: 'this is a message',
        type: 'string',
        required: true
      }
  
    },
  
  
    exits: {
  
      success: {
        description: 'The email address might have matched a user in the database.  (If so, a recovery email was sent.)'
      },
  
    },
  
  
    fn: async function (inputs) {
  
    console.log("inputs",inputs);
     this.res.ok();
     var token=1234455;
      await sails.helpers.sendTemplateEmail.with({
        to: inputs.receiverEmail,
        from:inputs.senderEmail,
        subject: `Catchthereview: ${inputs.subject}`,
        template: 'email-serviceprovider',
        
        templateData: {
          description: inputs.description,
          token: token
        },
        // layout:'html',
        layout:'layout-email',
        ensureAck:true
         
      });
  
    }
  
  
  };
  