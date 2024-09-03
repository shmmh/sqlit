import React from "react"
import {
  RadioGroup,
  Radio,
  useRadio,
  VisuallyHidden,
  RadioProps,
  cn,
} from "@nextui-org/react"

export const CustomRadio = (props: RadioProps) => {
  const {
    Component,
    children,
    isSelected,
    description,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
    getControlProps,
  } = useRadio(props)

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        "group inline-flex items-center justify-between hover:bg-content2 flex-row-reverse",
        "cursor-pointer border-2 border-default rounded-full gap-4",
        "data-[selected=true]:border-primary"
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      {/* <span {...getWrapperProps()}>
        <span {...getControlProps()} />
      </span> */}
      <div>
        {/* {children && <span {...getLabelProps()}>{children}</span>} */}
        {/* {description && (
          <span className="text-small text-foreground opacity-70">
            {props.value}
          </span>
        )} */}
        {children}
      </div>
    </Component>
  )
}
