export type TInputProps = Pick<HTMLInputElement, 'type' | 'placeholder'> & {
  label: string;
  id: string;
  onChange: (value: number) => void;
  value: number;
}

export const Input = ({ label, id, onChange, value, ...inputProps }: TInputProps) => {
  return (
    <div>
      <label htmlFor={id}>
        {label}
      </label>
      <input id={id} className="py-3 pl-6 pr-3 w-full bg-white" onChange={(evt) => {
        onChange(parseFloat(evt.target.value))
      }} value={value} {...inputProps} />
    </div>
  )
};
