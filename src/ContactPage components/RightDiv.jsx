import InputField from "../universal components/InputField";
import { useForm } from "react-hook-form";
export default function RightDiv() {
  const { register, reset, handleSubmit } = useForm();
  const data = [
    {
      name: "name",
      label: "Name",
      type: "text",
      input: "",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      input: "",
    },
    {
      name: "mobileNo",
      label: "Mobile Number",
      type: "tel",
      input: "numeric",
    },
  ];

  function onSubmit(formData) {
    console.log(formData);
    reset();
  }
  return (
    <div className="w-full h-full max-sm:p-[1vw_5vw_8vw_5vw]">
      <div className=" w-full h-full p-[0_10vw_0_0vw] max-sm:p-[3vw]">
        <form
          className="flex flex-col gap-[2vw] max-sm:gap-[5vw] "
          onSubmit={handleSubmit(onSubmit)}
        >
          {data.map((ele, idx) => (
            <InputField data={ele} register={register} key={idx} />
          ))}

          <div>
            <label className="flex mb-[0.5vw] text-[1vw] font-medium capitalize text-white max-sm:mb-[2vw]">
              <span className="max-sm:text-[4vw]">Description</span>
              <span className="text-red-700 ml-1 max-sm:text-[4vw]">*</span>
            </label>
            <textarea
              {...register("Description", { required: true })}
              className="resize-y h-[8vw] max-h-[20vw] max-sm:rounded-[2vw] max-sm:h-[40vw] min-h-[5vw] overflow-auto rounded-[0.5vw] w-full bg-[#1a1a1a] text-white p-2 focus:outline-none focus:border-2 focus:border-[#7ae444]"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#7ae444] h-[2.5vw] max-sm:h-[9vw] rounded-[1.5vw] max-sm:rounded-[6vw] w-[6vw] max-sm:w-[20vw] max-sm:mt-2 max-sm:text-[3vw] text-black font-semibold hover:bg-[#9fff5f] transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
