import { forwardRef } from "react";

const Input = forwardRef(({ value }) => {
  return (
    <input type="text" placeholder="enter user name" value={value} ref={ref} />
  );
});

export default Input;
