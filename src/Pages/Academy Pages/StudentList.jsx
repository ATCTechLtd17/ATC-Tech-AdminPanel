import ContainerMain from "../../Components/Container/ContainerMain";

const StudentList = () => {
  return (
    <div>
      <ContainerMain>
        <section>
          <div className="border-2">
            <div className="flex border">
              <div>
                <img className="h-14 w-22" src="/src/assets/Logo/ATC LOGO3-01.jpg" />
              </div>
              <div>
                <p className="font-bold text-3xl">ATC TECH LIMITED</p>
              </div>
            </div>


            <div>
              <p >ATC ACADEMY: Level-7, Suit-A,BSMHTP, RAJSHAHI</p>
            </div>

            <div>
              <p className="font-semibold">Student Admission Form</p>
            </div>

            <div>
              <label
                className="font-medium"
                htmlFor="attach_photo"
              >
                Attach Photo:
              </label>
              <input

                className="input input_bordered  hover:border-teal-500 "
                id="attach_photo"
                type="file"
                name="attach_photo"
                required />

              <p>FORMXXIV-I</p>

            </div>







          </div>

        </section>
      </ContainerMain>
    </div>
  );
};

export default StudentList;