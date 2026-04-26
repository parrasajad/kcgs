"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ApplicationForm() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

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
                  <input
                    type="email"
                    id="email2"
                    placeholder="Enter your mail"
                  />
                </div>
                <div className="single-input-item">
                  <label htmlFor="phone">Enter Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter Phone Number"
                  />
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
                  <input
                    type="text"
                    id="board"
                    placeholder="e.g. CBSE / State Board"
                  />
                </div>
              </div>
            </div>
            <div className="single-form-part">
              <h5 className="form-title">Parent / Guardian Details</h5>
              <div className="single-input">
                <div className="single-input-item">
                  <label htmlFor="fname_parent">Father's Name</label>
                  <input
                    type="text"
                    id="fname_parent"
                    placeholder="Father's Full Name"
                  />
                </div>
                <div className="single-input-item">
                  <label htmlFor="foccupation">Father's Occupation</label>
                  <input
                    type="text"
                    id="foccupation"
                    placeholder="Occupation"
                  />
                </div>
              </div>
              <div className="single-input">
                <div className="single-input-item">
                  <label htmlFor="mname_parent">Mother's Name</label>
                  <input
                    type="text"
                    id="mname_parent"
                    placeholder="Mother's Full Name"
                  />
                </div>
                <div className="single-input-item">
                  <label htmlFor="moccupation">Mother's Occupation</label>
                  <input
                    type="text"
                    id="moccupation"
                    placeholder="Occupation"
                  />
                </div>
              </div>
            </div>
            <div className="single-form-part">
              <h5 className="form-title">Agreement and Submission</h5>
              <p className="text-slate-500 text-sm leading-relaxed mt-2">
                By submitting this application, I confirm that all information
                provided is accurate and complete. I understand that any false
                information may result in the disqualification of my
                application.
              </p>

              {/* File Upload */}
              <div className="mt-5 grid w-full items-center gap-2">
                <label
                  htmlFor="sub"
                  className="flex px-4 items-center justify-center w-full cursor-pointer rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 py-6 text-sm text-slate-600 hover:bg-slate-100 transition"
                >
                  Click to upload or drag & drop files
                </label>

                <input
                  id="sub"
                  type="file"
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden"
                  onChange={(e) => {
                    const newFiles = Array.from(e.target.files || []);
                    setUploadedFiles((prev) => {
                      const existingNames = new Set(prev.map((f) => f.name));
                      return [
                        ...prev,
                        ...newFiles.filter((f) => !existingNames.has(f.name)),
                      ];
                    });
                  }}
                />
                {uploadedFiles.length > 0 && (
                  <ul className="mt-1 space-y-1.5">
                    {uploadedFiles.map((file, idx) => (
                      <li
                        key={idx}
                        className="flex w-fit items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-lg">📄</span>
                          <span className="truncate text-sm text-slate-700">
                            {file.name}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                          <span className="text-xs text-slate-400">
                            {(file.size / 1024).toFixed(0)} KB
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              setUploadedFiles(
                                uploadedFiles.filter((_, i) => i !== idx),
                              )
                            }
                            className="text-slate-400 hover:text-red-500 transition text-sm"
                          >
                            ✕
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3 mt-5">
                <input
                  type="checkbox"
                  id="exampleCheck1"
                  className="mt-0.5 w-4 h-4 accent-[#cba73d] cursor-pointer"
                />
                <label
                  htmlFor="exampleCheck1"
                  className="text-sm text-slate-600 cursor-pointer"
                >
                  By submitting this form, you agree to the Kashmir Cambridge
                  Group of Schools Privacy Notice
                </label>
              </div>
            </div>
            <button type="submit" className="rts-theme-btn primary with-arrow">
              Submit Application
              <span>
                <i className="fa-thin fa-arrow-right"></i>
              </span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
