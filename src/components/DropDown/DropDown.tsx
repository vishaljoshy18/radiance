import React, { ChangeEvent, ReactElement } from "react";

interface Props {
  id: string;
  label: string;
  options: any;
  selectedValue?:any;
  handleChange(e: ChangeEvent<HTMLSelectElement>): void;
}

function DropDown({ id, options, label, selectedValue , handleChange }: Props): ReactElement {
  const optionKeys = Object.keys(options);
  return (
    <div className={style.container}>
      <label htmlFor={id}>{label}</label>
      <select className={style.select} name={id} id={id} onChange={handleChange} value={selectedValue}>
        {optionKeys.map((key, index) => (
          <option key={index} value={options[key]}>
            {key}
          </option>
        ))}
      </select>
    </div>
  );
}
const style = {
  container: "flex justify-between p-2 2-80",
  select: "w-40 ml-6 bg-white border",
};

export default DropDown;
