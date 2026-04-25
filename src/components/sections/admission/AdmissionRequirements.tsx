export default function AdmissionRequirements() {
    return (
        <>
            <div className="admission-content-top">
                <h3 className="rts-section-title">
                    New Student Admissions
                </h3>

                <div className="admission-big-thumb">
                    <img src="/assets/images/course/admission-bg.jpg" alt="admission" />
                </div>

                <div className="requirement-deadline">
                    <h3 className="rts-section-title">General Requirements</h3>
                    <div className="requirement-deadline__content">
                        <ul>
                            <li className="single-requirement">Completed Application Form</li>
                            <li className="single-requirement">Copy of Birth Certificate / Age Proof</li>
                            <li className="single-requirement">Previous School Records / Report Card (if applicable)</li>
                            <li className="single-requirement">Transfer Certificate from previous school</li>
                            <li className="single-requirement">Passport-size photographs of the child and parents</li>
                            <li className="single-requirement">Parent / Guardian ID Proof (Aadhaar / Passport)</li>
                            <li className="single-requirement">Immunization and Medical Fitness Certificate</li>
                        </ul>
                    </div>
                </div>
                <div className="application-deadline">
                    <h3 className="rts-section-title">Admission Timeline</h3>
                    <div className="application-deadline__content">
                        <div className="application-deadline__content--table">
                            <table className="table">
                                <thead className="table-theme">
                                    <tr>
                                        <td>Event</td>
                                        <td>Phase 1 (Early)</td>
                                        <td>Phase 2 (Regular)</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Registration Begins</td>
                                        <td>October 15</td>
                                        <td>January 15</td>
                                    </tr>
                                    <tr>
                                        <td>Last Date to Apply</td>
                                        <td>December 10</td>
                                        <td>March 10</td>
                                    </tr>
                                    <tr>
                                        <td>Interaction / Assessment</td>
                                        <td>Mid-December</td>
                                        <td>Mid-March</td>
                                    </tr>
                                    <tr>
                                        <td>Classes Begin</td>
                                        <td>March / April</td>
                                        <td>March / April</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p> Kashmir Cambridge reserves the right to evaluate an application and render a final
                            decision based on seat availability and assessment results.</p>
                        <p className="w-95 mx-0">If you have any questions regarding the application process, please reach out to our admission office directly. We encourage early applications as seats fill up quickly.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
