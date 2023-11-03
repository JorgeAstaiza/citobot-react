import { InputGroup } from "@chakra-ui/react";
import { ReactNode, useRef } from "react";

type FileUploadProps = {
  multiple?: boolean;
  children?: ReactNode;
  onFileChange: (base64String: string) => void;
};

const FileUpload = (props: FileUploadProps) => {
  const { multiple, children, onFileChange } = props;
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => inputRef.current?.click();

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Accede al archivo desde el evento

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const base64String = event.target.result; // Obtiene la imagen en formato base64
        onFileChange(base64String);
      };

      reader.readAsDataURL(file); // Lee el archivo y dispara el evento onload
    }
  };
  return (
    <InputGroup onClick={handleClick}>
      <input
        type={"file"}
        multiple={multiple || false}
        hidden
        ref={inputRef}
        onChange={handleFileChange}
      />
      <>{children}</>
    </InputGroup>
  );
};

export default FileUpload;
