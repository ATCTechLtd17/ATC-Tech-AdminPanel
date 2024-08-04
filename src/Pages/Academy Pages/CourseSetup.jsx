
import SubmitButton from "../../Components/Button/SubmitButton";
import ContainerMain from "../../Components/Container/ContainerMain";
import GridContainer from "../../Components/Container/GridContainer";
import TextInput from "../../Components/Input/TextInput";
import DropDownInput from "../../Components/Input/DropDownInput";

const dropDowndata = [
  { value: '2 Months', label: '2 Months' },
  { value: '3 Months', label: '3 Months' },
  { value: '4 Months', label: '4 Months' },
  { value: '6 Months', label: '6 Months' },
  { value: '8 Months', label: '8 Months' },
];

const CourseSetup = () => {

  return (
    <div>
      <ContainerMain>
        <section>
          <GridContainer>
            {/* <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="course_name">
                Entry Course Name:
              </label>
              <input
                className="input input-bordered input-sm  hover:border-sky-600  "
                name="branchName"
                type="text"
              />
            </div>
             */}
            <TextInput name={'courseName'} />
            <TextInput name={'entryDuration'} />
            <TextInput name={'entryFees'} />
            <DropDownInput name={'duration'} options={dropDowndata}  required={true} />


            {/* <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="occupation">
                Duration:
              </label>
              <select className="input input-bordered input-sm  hover:border-sky-600  ">
                <option>---Select---</option>
                <option>2 Months</option>
                <option>3 Months</option>
                <option>4 Months</option>
                <option>6 Months</option>
                <option>8 Months</option>
              </select>
            </div> */}

          </GridContainer>


          <SubmitButton />


          <div className="md:m-2 xl:m-8">
            <table className="w-full mb-24">
              <tr className="grid grid-cols-3   text-xs md:text-base bg-gray-500  py-2 text-white md:grid-cols-9 items-center justify-center gap-1 text-center">
                <th>SL No.</th>
                <th className="col-span-2 hidden md:block">Course Name</th>
                <th className="col-span-2">Duration</th>
              </tr>
            </table>
          </div>

        </section>
      </ContainerMain>

    </div>
  );
};

export default CourseSetup;