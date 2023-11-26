import { useToast } from "@chakra-ui/react";
import { ToastProps } from "./interfaces/toast.interface";

export function ToastAlert({
  title,
  description,
  status,
  duration,
  isClosable,
}: ToastProps) {
  const toast = useToast();
  return toast({
    title,
    description,
    status,
    duration,
    isClosable,
  });
}
