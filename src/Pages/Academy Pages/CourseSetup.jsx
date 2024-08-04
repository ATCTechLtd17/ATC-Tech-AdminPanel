
import SubmitButton from "../../Components/Button/SubmitButton";
import ContainerMain from "../../Components/Container/ContainerMain";
import GridContainer from "../../Components/Container/GridContainer";
import TextInput from "../../Components/Input/TextInput";
import DropDownInput from "../../Components/Input/DropDownInput";
import HeadingPrimary from "../../Heading/HeadingPrimary";

const durationDropDowndata = [
  { value: '2 Months', label: '2 Months' },
  { value: '3 Months', label: '3 Months' },
  { value: '4 Months', label: '4 Months' },
  { value: '6 Months', label: '6 Months' },
  { value: '8 Months', label: '8 Months' },
];

const installmentDropDowndata = [
  { value: 'Show Fees', label: 'Show Fees' },
  { value: 'Installment Quantity', label: 'Installment Quantity' },

];




const CourseSetup = () => {

  return (
    <div>
      <ContainerMain>

        <HeadingPrimary text={"Course And Duration Setup"} />
        <GridContainer>
          <TextInput name={'courseName'} />
          <TextInput name={'entryDuration'} />
        </GridContainer>

        <HeadingPrimary text={'Fees Setup'} />
        <GridContainer>
          <TextInput name={'entryFees'} />
          <DropDownInput name={'duration'} options={durationDropDowndata} required={true} />
        </GridContainer>

        <HeadingPrimary text={'installmentSetup'} />
        <GridContainer>
          <DropDownInput name={'selectCourseName'} options={installmentDropDowndata}  required={true}/>
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
      </ContainerMain>

    </div >
  );
};

export default CourseSetup;