import React from 'react';

class About extends React.Component{
    render() {
    return (
    <div>
      <h1>About</h1>
  
      <p>Car Store in Sewickley, PA treats the needs of each individual customer with paramount concern. We know that you have high expectations, and as a car dealer we enjoy the challenge of meeting and exceeding those standards each and every time. Allow us to demonstrate our commitment to excellence!</p>
      <p>Our experienced sales staff is eager to share its knowledge and enthusiasm with you. We encourage you to browse our online inventory, schedule a test drive and investigate financing options. You can also request more information about a vehicle using our online form or by calling (844) 725-2275.</p>
      <p>If you don't see a particular vehicle, click on CarFinder and complete the form. We will gladly inform you when a matching car arrives. If you'd like to see a vehicle in person, click on Dealership: Directions for step-by-step driving instructions to our site, or give us a call. We look forward to serving you!</p>

      <br /><br />
      <form encType="multipart/form-data" autoComplete="off">
      <div className="input-field">
          <input type="text" name="name" />
          <label htmlFor="name" className="active">Full Name:</label>
      </div>
      <br/><br/>
      <div className="input-field col s12">
      <textarea id="textarea1" className="materialize-textarea"></textarea>
      <label htmlFor="textarea1" className="active">Textarea</label>
      </div>
      </form>
    </div>
    )}
}
  
  export default About;