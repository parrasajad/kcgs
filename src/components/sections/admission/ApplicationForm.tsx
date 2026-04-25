export default function ApplicationForm() {
    return (
        <>
            <div className="rts-ap-section">
                <h3 className="rts-section-title mb--30">Application Details</h3>
                <div className="rts-application-form">
                    <form action="#">
                        <div className="single-form-part">
                            <h5 className="form-title">Personal Information</h5>
                            <div className="single-input">
                                <div className="single-input-item">
                                    <label htmlFor="fname">First Name</label>
                                    <input type="text" id="fname" placeholder="First name" />
                                </div>
                                <div className="single-input-item">
                                    <label htmlFor="lname">Last Name</label>
                                    <input type="text" id="lname" placeholder="Last name" />
                                </div>
                            </div>
                            <div className="single-input">
                                <div className="single-input-item">
                                    <label htmlFor="email2">Enter your mail</label>
                                    <input type="email" id="email2" placeholder="Enter your mail" />
                                </div>
                                <div className="single-input-item">
                                    <label htmlFor="phone">Enter Phone Number</label>
                                    <input type="tel" id="phone" placeholder="Enter Phone Number" />
                                </div>
                            </div>
                            <div className="single-input">
                                <div className="single-input-item">
                                    <label htmlFor="dob">Date of Birth</label>
                                    <input type="text" id="datepicker" placeholder="dd/mm/yy" />
                                </div>
                                <div className="single-input-item">
                                    <label htmlFor="gender">Gender</label>
                                    <select name="gender" id="gender">
                                        <option value="*">Gender</option>
                                        <option value="*">Male</option>
                                        <option value="*">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="single-input">
                                <div className="single-input-item">
                                    <label htmlFor="country">Select your Country </label>
                                    <input id="country" type="text" placeholder="Country" />
                                </div>
                            </div>
                        </div>
                        <div className="single-form-part">
                            <h5 className="form-title">Previous School Information</h5>
                            <div className="single-input">
                                <div className="single-input-item">
                                    <label htmlFor="cname">Previous School Name</label>
                                    <input id="cname" type="text" placeholder="School Name" />
                                </div>
                                <div className="single-input-item">
                                    <label htmlFor="grade">Last Grade Attended</label>
                                    <input id="grade" type="text" placeholder="e.g. Grade 4" />
                                </div>
                            </div>
                            <div className="single-input">
                                <div className="single-input-item">
                                    <label htmlFor="year">Year of Leaving</label>
                                    <input id="year" type="text" placeholder="e.g. 2023" />
                                </div>
                                <div className="single-input-item">
                                    <label htmlFor="board">Board (if applicable)</label>
                                    <input type="text" id="board" placeholder="e.g. CBSE / State Board" />
                                </div>
                            </div>
                        </div>
                        <div className="single-form-part">
                            <h5 className="form-title">Parent / Guardian Details</h5>
                            <div className="single-input">
                                <div className="single-input-item">
                                    <label htmlFor="fname_parent">Father's Name</label>
                                    <input type="text" id="fname_parent" placeholder="Father's Full Name" />
                                </div>
                                <div className="single-input-item">
                                    <label htmlFor="foccupation">Father's Occupation</label>
                                    <input type="text" id="foccupation" placeholder="Occupation" />
                                </div>
                            </div>
                            <div className="single-input">
                                <div className="single-input-item">
                                    <label htmlFor="mname_parent">Mother's Name</label>
                                    <input type="text" id="mname_parent" placeholder="Mother's Full Name" />
                                </div>
                                <div className="single-input-item">
                                    <label htmlFor="moccupation">Mother's Occupation</label>
                                    <input type="text" id="moccupation" placeholder="Occupation" />
                                </div>
                            </div>

                        </div>
                        <div className="single-form-part">
                            <h5 className="form-title">Agreement and Submission</h5>
                            <p>By submitting this application, I confirm that all information provided is
                                accurate and complete. I understand that any false
                                information may result in the disqualification of my application.
                            </p>
                            <div className="single-input-item">
                                <label htmlFor="sub">Upload Birth Certificate / Previous Record:</label>
                                <input type="file" id="sub" />
                            </div>

                            <div className="d-flex align-items-center single-checkbox mt--20">
                                <input type="checkbox" id="exampleCheck1" />
                                <label htmlFor="exampleCheck1">By submitting this form, you agree to the Kashmir
                                    Cambridge Group of Schools Privacy Notice</label>
                            </div>
                        </div>
                        <button type="submit" className="rts-theme-btn primary with-arrow">Submit
                            Application<span><i className="fa-thin fa-arrow-right"></i></span></button>
                    </form>

                </div>
            </div>
        </>
    );
}
