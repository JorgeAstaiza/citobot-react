export interface ToastProps {
  title: string;
  description: string;
  status: "success" | "error" | "info" | "warning";
  duration: number;
  isClosable: boolean;
}
