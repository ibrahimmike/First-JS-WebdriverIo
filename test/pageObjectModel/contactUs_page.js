class Contactus {
    get firstName (){return $("[name= 'first_name']")};
    get lastName  (){return $("[name= 'last_name']")}; 
    get email () {return $("[name= 'email']")};
    get message (){return $("[name= 'message']")};
    get submitButton (){return $("[type= 'submit']")};
    get successfullSubmission (){ return $("#contact_reply h1") };
    get unSuccessfullSubmission(){return $("body")};

//     setFirstName (fn){    
//     return this.firstName.setValue(fn);
//     };
//     setLastName (ln){    
//    return this.lastName.setValue(ln);
//     };
//     setEmail (mail){    
//    return this.email.setValue(email, mail);
//     };
//      setMessage (msg){    
//     return this.message.setValue(message, msg);
//     };
//     setSubmitButton (){    
//     return this.submitButton.click(submitButton);
//     };
    confirmSuccessfullSubmission (){
    const validateSubmission = browser.waitUntil(function(){
     const successfullSubmission = "#contact_reply h1";
     return browser.getText(successfullSubmission)== "Thank You for your Message!";
    },5000);
    expect(validateSubmission,"Error in the successful message").to.be.true
    };
    confirmUnsuccessfullSubmission (){
    const unSuccessfullSubmission = "body";
    const validateSubmission = browser.waitUntil(function(){
        return browser.getText(unSuccessfullSubmission);
    }, 5000); 
    expect(validateSubmission, "Error in the unsuccessful submission scenario").to.include("Error: all fields are required")
};
    submitAllTheEntries(firstName, lastName, email, comments){
    if(firstName){
        this.firstName.setValue(firstName);
    }
    if(lastName){
        this.lastName.setValue(lastName);
    }
    if(email){
        this.email.setValue(email);
    }
    if(comments){
        this.message.setValue(comments)
    }
    this.submitButton.click()
    if (firstName && lastName && email && comments){
        this.confirmSuccessfullSubmission();
    }else{
        this.confirmUnsuccessfullSubmission();
    }
    }
}
module.exports = new Contactus();