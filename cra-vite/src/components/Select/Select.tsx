import { ChangeEventHandler, useCallback } from "react";

export interface IOption {
  icon: string;
  value: string;
  label: string;
};

export interface ISelectProps {
  options: IOption[];
  defaultValue: string;
  id: string;
  label: string;
  onChange: (value: string) => void;
};

export const Select = ({ options, defaultValue, id, label, onChange }: ISelectProps) => {
  const handleOnChange = useCallback<ChangeEventHandler<HTMLSelectElement>>((evt) => {
    onChange(evt.target.value)
  }, []);

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select defaultValue={defaultValue} id={id} onChange={handleOnChange}>
        {
          options.map(({ value, label }) => (
            <option value={value}>{label}</option>
          ))
        }
      </select>
    </div>
  )
};
