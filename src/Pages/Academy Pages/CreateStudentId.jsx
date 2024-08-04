import React, { useState } from 'react';
import PrintButton from "../../Components/Button/PrintButton";
import SubmitButton from "../../Components/Button/SubmitButton";
import ContainerMain from "../../Components/Container/ContainerMain";

const CreateStudentId = () => {
  const [idType, setIdType] = useState("");

  const handleIdTypeChange = (event) => {
    setIdType(event.target.value);
  };

  return (
    <div>
      <ContainerMain>
        <section>
          <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
            <div className="grid grid-cols-6 items-center space-x-4">

              <div className="w-25 h-17 pt-8 pl-8">
                <img src="/src/assets/Logo/ATC LOGO3-01.jpg" alt="ATC Logo" className="object-cover" />
              </div>

              <div className="col-span-4 text-center mb-2">
                <h1 className="text-3xl font-bold mb-2">ATC Tech Limited</h1>
                <h2 className="text-lg">ATC ACADEMY: Level-7, Suit-A, BSMHTP, RAJSHAHI</h2>
              </div>

            </div>

            <h3 className="text-xl font-semibold mb-4 text-center">Student Admission Form</h3>
            <p className="mb-6 text-center">FORMXXIV-I</p>

            <div className="mb-6">
              <label className="block mb-2 font-semibold">Applicant Photo: Attach</label>
              <input type="file" className="block w-full border border-gray-300 p-2 rounded-md" />
            </div>

            <table className="min-w-full bg-white border border-gray-300">
              <tbody>
                <tr className="border-t border-gray-300">
                  <td className="p-2">Applicant Name</td>
                  <td className="p-2"><input type="text" placeholder="Auto field" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                  <td className="p-2">Mobile</td>
                  <td className="p-2"><input type="text" placeholder="Auto field" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                </tr>
                <tr>
                  <td className="p-2">Email</td>
                  <td className="p-2"><input type="text" placeholder="Auto field" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="p-2">Father Name</td>
                  <td className="p-2"><input type="text" placeholder="Auto field" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                  <td className="p-2">Mobile</td>
                  <td className="p-2"><input type="text" placeholder="Auto field" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="p-2">Mother Name</td>
                  <td className="p-2"><input type="text" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                  <td className="p-2">Mobile</td>
                  <td className="p-2"><input type="text" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="p-2">Guardian Name</td>
                  <td className="p-2"><input type="text" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                  <td className="p-2">Mobile</td>
                  <td className="p-2"><input type="text" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="p-2">Address</td>
                  <td className="p-2" colSpan="3"><input type="text" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="p-2">Institute Name</td>
                  <td className="p-2"><input type="text" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                  <td className="p-2">Present Class</td>
                  <td className="p-2"><input type="text" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="p-2">Date of Birth</td>
                  <td className="p-2"><input type="date" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                  <td className="p-2">NID/Birth Certificate</td>
                  <td className="p-2">
                    <select className="border border-gray-300 p-2 w-full rounded-md" value={idType} onChange={handleIdTypeChange}>
                      <option value="">--Select--</option>
                      <option value="NID">NID</option>
                      <option value="Birth Certificate">Birth Certificate</option>
                    </select>
                  </td>
                </tr>
                {idType === "NID" && (
                  <>
                    <tr className="border-t border-gray-300">
                      <td className="p-2">NID Photo (Front)</td>
                      <td className="p-2"><input type="file" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                    </tr>
                    <tr className="border-t border-gray-300">
                      <td className="p-2">NID Photo (Back)</td>
                      <td className="p-2"><input type="file" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                    </tr>
                  </>
                )}
                {idType === "Birth Certificate" && (
                  <tr className="border-t border-gray-300">
                    <td className="p-2">Birth Certificate</td>
                    <td className="p-2"><input type="file" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                  </tr>
                )}
                <tr className="border-t border-gray-300">
                  <td className="p-2">Course Name</td>
                  <td className="p-2">
                    <select className="border border-gray-300 p-2 w-full rounded-md">
                      <option>--Select--</option>
                      <option>Basic</option>
                      <option>Basic Pro</option>
                      <option>Primary</option>
                      <option>Primary Pro</option>
                      <option>Intermediate</option>
                      <option>Intermediate Pro</option>
                      <option>Job Preparation</option>
                      <option>Advance</option>
                      <option>Cyber Security</option>
                    </select>
                  </td>
                  <td className="p-2">Duration</td>
                  <td className="p-2"><input type="text" placeholder="Auto field" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="p-2">Course Fee</td>
                  <td className="p-2"><input type="text" placeholder="Auto show" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                  <td className="p-2">Payment Method</td>
                  <td className="p-2">
                    <select className="border border-gray-300 p-2 w-full rounded-md">
                      <option>At a time</option>
                      <option>Installment</option>
                    </select>
                  </td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="p-2">Payment Amount</td>
                  <td className="p-2"><input type="text" placeholder="Auto show" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                  <td className="p-2">Course Starting of</td>
                  <td className="p-2"><input type="text" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                </tr>
              </tbody>
            </table>

            <div className="flex justify-between mt-16 mb-10">
              <div>
                <label className="block">Applicant Signature:</label>
              </div>
              <div>
                <label className="mr-52">Office:</label>
              </div>
            </div>

            <SubmitButton />
          </div>
        </section>
      </ContainerMain>
    </div>
  );
};

export default CreateStudentId;
