import { SnackbarProvider as SnackbarProviderNotistack } from "notistack";
import { FC, ReactNode } from "react";

interface SnackbarProviderProps {
  children?: ReactNode;
}

export const SnackbarProvider: FC<SnackbarProviderProps> = ({ children }) => {
  return (
    <SnackbarProviderNotistack
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      autoHideDuration={3000}
      maxSnack={2}
      style={{ fontFamily: "Aria" }}
    >
      {children}
    </SnackbarProviderNotistack>
  );
};
