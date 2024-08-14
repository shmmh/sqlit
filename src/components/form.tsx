export default function Form({
  action,
  formType = "login",
  children,
}: {
  action: any
  formType: string
  children: React.ReactNode
}) {
  return (
    <form
      action={action}
      className="flex flex-col space-y-1 bg-gray-50 px-4 py-8 sm:px-16"
    >
      {formType === "register" && (
        <>
          <FormInput
            id="name"
            name="name"
            type="text"
            placeholder="enter your name"
            autoComplete="name"
            required
          />
          <FormInput
            id="username"
            name="username"
            type="text"
            placeholder="enter your username"
            autoComplete="username"
            required
          />
        </>
      )}
      <FormInput
        id="email"
        name="email"
        type="email"
        placeholder="enter your email"
        autoComplete="email"
        required
      />
      <FormInput
        id="password"
        name="password"
        type="password"
        placeholder="enter your password"
        autoComplete="current-password"
        required
      />
      {children}
    </form>
  )
}

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
  placeholder: string
  autoComplete: string
  required: boolean
  className?: string
}) {
  return (
    <>
      <label htmlFor={id} className="block text-md text-gray-800 capitalize">
        {name}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className={
          "block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm" +
          className
        }
      />
    </>
  )
}
