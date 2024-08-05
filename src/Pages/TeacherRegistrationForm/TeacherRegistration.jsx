import PrintButton from "../../Components/Button/PrintButton";
import SubmitButton from "../../Components/Button/SubmitButton";
import ContainerMain from "../../Components/Container/ContainerMain";
import React, { useState } from 'react';



const TeacherRegistration = () => {

  const [idType, setIdType] = useState("");

  const handleIdTypeChange = (event) => {
    setIdType(event.target.value);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);

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

            <h3 className="text-xl font-semibold mb-4 text-center">Teacher Registration Form</h3>
            <p className="mb-6 text-center">FORMXXIV-II</p>

            <div className="mb-6">
              <label className="block mb-2 font-semibold">Applicant Photo: Attach</label>
              <input type="file" className="block w-full border border-gray-300 p-2 rounded-md" />
            </div>

            <table className="min-w-full bg-white border border-gray-300">
              <tbody>

                <div className="mb-6">
                  <label className="block mt-6 ml-4 text-xl font-semibold">Personal Details</label>
                </div>

                <tr className="border-t border-gray-300">
                  <td className="p-2">Applicant Name</td>
                  <td className="p-2"><input type="text" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                  <td className="p-2">Mobile</td>
                  <td className="p-2"><input type="text" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="p-2">Father Name</td>
                  <td className="p-2"><input type="text" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                  <td className="p-2">Mobile</td>
                  <td className="p-2"><input type="text" className="border border-gray-300 p-2 w-full rounded-md" /></td>
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
                  <td className="p-2">Email</td>
                  <td className="p-2"><input type="email" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                  <td className="p-2">Reference Name</td>
                  <td className="p-2"><input type="text" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="p-2">Mobile</td>
                  <td className="p-2" colSpan="3"><input type="text" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                </tr>

                <tr className="border-t border-gray-300">
                  <div className="mb-6">
                    <label className="block mt-6 ml-4 text-xl font-semibold">Educational Background</label>
                  </div>
                </tr>


                <tr className="border-t border-gray-300">
                  <td className="p-2">Last Degree</td>
                  <td className="p-2"><input type="text" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                  <td className="p-2">Details</td>
                  <td className="p-2"><input type="text" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="p-2">Technical Degree</td>
                  <td className="p-2"><input type="text" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                  <td className="p-2">Details</td>
                  <td className="p-2"><input type="text" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="p-2">Experience Year</td>
                  <td className="p-2" colSpan="3"><input type="text" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="p-2">Specialty</td>
                  <td className="p-2" colSpan="3"><input type="text" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                </tr>

                <tr className="border-t border-gray-300">
                  <div className="mb-6">
                    <label className="block mt-6 ml-4 text-xl font-semibold">Expectation</label>
                  </div>
                </tr>

                <tr className="border-t border-gray-300">
                  <td className="p-2">Expectation Monthly</td>
                  <td className="p-2"><input type="text" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                  <td className="p-2">Expectation Per Class</td>
                  <td className="p-2"><input type="text" className="border border-gray-300 p-2 w-full rounded-md" /></td>
                </tr>

                <tr className="border-t border-gray-300">
                  <div className="mb-6">
                    <label className="block mt-6 ml-4 text-xl font-semibold">Reason</label>
                  </div>
                </tr>

                <tr className="border-t border-gray-300">
                  <td className="p-2">Why Should You Join ATC? (5 Reasons)</td>
                  <td className="p-2" colSpan="3"><textarea className="border border-gray-300 p-2 w-full rounded-md"></textarea></td>
                </tr>
              </tbody>
            </table>

            <div className="mt-16 mb-10">
              <div>
                <tr className="border-t border-gray-300">
                  <td className="pr-2">Applicant's Signature: </td>
                  <td className=""><input type="file" className="border border-gray-300 w-full rounded-md mb-4" /></td>
                </tr>
              </div>
              <div>
                <tr className="border-t border-gray-300">
                  <td className="pr-11">Office Signature: </td>
                  <td className=""><input type="file" className="border border-gray-300 w-full rounded-md" /></td>
                </tr>
              </div>
            </div>

            <SubmitButton />
            <PrintButton />
          </div>

        </section>
      </ContainerMain>
    </div>

  );
};

export default TeacherRegistration;