type Props = {
  value: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const DateInput = ({ label, value, onChange }: Props) => {
  return (
    <input
      type="date"
      onChange={onChange}
      name={label}
      id=""
      max="1972-12-31"
      value={value}
      placeholder="Select date"
      className="bg-transparent p-2 border border-black dark:border-white placeholder:text-sm placeholder:text-gray-500 focus:outline-none w-full md:w-2/3 cursor-pointer dark:[color-scheme:dark]"
    />
  );
};
export default DateInput;
