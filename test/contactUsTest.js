const contactUs = require("./pageObjectModel/contactUs_page.js");
beforeEach(()=>{
    browser.url('/Contact-Us/contactus.html');
});
describe('test contact us form from wbe IO university', function(){
    // const res = request("GET","http://jsonplaceholder.typicode.com/posts/1/comments");
    // const contactUs = JSON.parse(res.getBody().toString("utf8"));
    // const firstName = "[name= 'first_name']";
    // const lastName = "[name= 'last_name']";
    // const email = "[name= 'email']";
    // const message = "[name= 'message']";
    // const submitButton = "[type= 'submit']";
    // const successfullSubmission = "#contact_reply h1";
    // const unSuccessfullSubmission = "body";
        
    it('it should be able to submit successfully via contact button ', function(done){
    //    setFirstName('joe');
    //    setLastName('blogs');
    //    setEmail("joe.blogs@mail.com");
    //    setMessage('how much does product x cost');
    //    setSubmitButton ();
    //    confirmSuccessfullSubmission ();
    //    console.log(pageTitle);
    //    expect(pageTitle).to.be.equal("Gianni Bruno - Designer");
    //    var text = browser.getText("#contact_reply h1");
    //    expect(text).to.be.equal("Thank You for your Message!");
    contactUs.submitAllTheEntries("joe","blogs", "joe.blogs@mail.com","how much does product x cost");
    });
    it('it should not be able to submit successfully via contact button with a missing message field', function(done){
    //    setFirstName('joe');
    //    setLastName('blogs');
    //    setEmail("joe.blogs@mail.com");
    //    setSubmitButton ();
    //    confirmUnsuccessfullSubmission ();
    contactUs.submitAllTheEntries("joe","blogs", "joe.blogs@mail.com", null);
    });
    it('it should not be able to submit successfully via contact button for a missing last name', function(done){
    contactUs.submitAllTheEntries("joe",null, "joe.blogs@mail.com","how much does product x cost");
        // setFirstName('joe');        
        // setEmail("joe.blogs@mail.com");
        // setMessage('how much does product x cost');
        // setSubmitButton ();
        // confirmUnsuccessfullSubmission ();
    });
    it('it should be able to submit successfully via contact button with a missing email', function(done){
        contactUs.submitAllTheEntries("joe","blogs",null,"how much does product x cost");
    //    setFirstName('joe');
    //    setLastName('blogs');
    //    setMessage('how much does product x cost');
    //    setSubmitButton ();
    //    confirmUnsuccessfullSubmission ();
    });
});