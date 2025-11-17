import InputField from "./InputField";
import { FormBtnContext } from "../Contexts/ContactBtnContext";
import { useContext } from "react";import { useForm } from "react-hook-form";
;

export default function ContactForm() {
  const { IsClosed } = useContext(FormBtnContext);
  const data = [
    {
      name: "name",
      label: "Name",
      type: "text",
      input : ""
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      input : ""
    },
    {
      name: "mobileNo",
      label: "Mobile Number",
      type: "tel",
      input : "numeric"
    },
  ];

  const {register , reset , handleSubmit } = useForm();
  function onSubmit(formData){
    console.log(formData);
    reset()
    IsClosed()
  }
  return (
    <div
      onClick={IsClosed}
      className="fixed flex inset-0 justify-center bg-black/60 backdrop-blur-[7px] items-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-[#111111] text-white rounded-[1vw] w-[45vw] max-sm:w-[85vw] max-sm:h-fit max-sm:rounded-[5vw] max-sm:p-[8vw] max-w-[500px] p-[2vw] shadow-2xl flex flex-col gap-[1.5vw] animate-fadeIn"
      >
        <button
          onClick={IsClosed}
          type="button"
          className="h-[2vw] w-[2vw] max-sm:h-[10vw] max-sm:w-[10vw] bg-black rounded-full absolute top-[2%] right-[5%] text-white text-[1vw] hover:text-[#7ae444] transition max-sm:text-[3vw]"
        >
          ❌
        </button>

        <form
          className="flex flex-col gap-[1vw]"
          onSubmit={handleSubmit(onSubmit)}
        >
          {data.map((ele, idx) => (
            <InputField data={ele} register = {register} key={idx} />
          ))}

          <div>
            <label className="flex mb-[0.5vw] text-[1vw] font-medium capitalize text-white max-sm:mt-[6vw] max-sm:mb-[2vw]">
              <span className="max-sm:text-[4vw]">Description</span>
              <span className="text-red-700 ml-1 max-sm:text-[4vw]">*</span>
            </label>
            <textarea
            {...register("Description" , {required : true})}
              className="resize-y h-[15vw] max-sm:rounded-[2vw] max-sm:h-[40vw] min-h-[5vw] overflow-auto rounded-[0.5vw] w-full bg-[#1a1a1a] text-white p-2 focus:outline-none focus:border-2 focus:border-[#7ae444]"
              placeholder="Type something..."
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#7ae444] h-[2.5vw] max-sm:h-[7vw] rounded-[1.5vw] w-[8vw] max-sm:w-[20vw] max-sm:mt-2 max-sm:text-[3vw] text-black font-semibold hover:bg-[#9fff5f] transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
