import { PropsWithChildren } from "react";
import { ButtonComponent } from "./Button.styles";

const Button = ({
  onClick,
  children,
}: PropsWithChildren<{ onClick?: () => void }>) => {
  return (
    <ButtonComponent onClick={onClick} type="button">
      {children}
    </ButtonComponent>
  );
};

export { Button };
