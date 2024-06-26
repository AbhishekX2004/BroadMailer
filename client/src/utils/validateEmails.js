//regular expression
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validateEmails(emails) {
    const invalidEmailsArray = emails
        .split(',')
        .map(email => email.trim())
        .filter(email => re.test(email) === false);
    
    if(invalidEmailsArray.length){
        if (invalidEmailsArray.includes("")) {
            return "There is a trailing comma";
        }
        return `These emails are invalid :: ${invalidEmailsArray}`;
    }
    return;
}

export default validateEmails;