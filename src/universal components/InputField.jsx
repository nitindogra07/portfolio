export default function InputField({ data, register}) {
  return (
    <div>
      <label className="flex mb-[0.5vw] max-sm:text-[4vw] text-[1vw] font-medium capitalize text-white">
        <span>{data.label}</span>
        <span className="text-red-700 ml-1">*</span>
      </label>
      <input
      {...register(data.name , {required : true})}
      autoComplete="off"
        type={data.type}
        inputMode={data.input}
        className="rounded-[0.5vw] w-full bg-[#1a1a1a] text-white p-2 focus:outline-none focus:border-2 focus:border-[#7ae444]"
      />
    </div>
  );
}
 