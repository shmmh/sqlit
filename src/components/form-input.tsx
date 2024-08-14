export function FormInput({
  id,
  name,
  type,
  placeholder,
  autoComplete,
  required,
  className,
}: {
  id: string
  name: string
  type: string
  placeholder?: string
  autoComplete: string
  required: boolean
  className: string
}) {
  return (
    <>
      <label htmlFor={id} className="block text-xs text-gray-600 uppercase">
        {name.toLocaleUpperCase()}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className={className}
      />
    </>
  )
}
