import { Image } from "@chakra-ui/react";

function ContainerBox({ children }: { children: JSX.Element }) {
  return (
    <div
      className="h-screen flex flex-col  justify-start items-center pt-10"
      style={{
        background: "rgba(235, 237, 239 ,1)",
        width: "100%",
      }}
    >
      <div className="flex  w-4/5 justify-start">
        <Image
          boxSize="50px"
          objectFit="contain"
          src="../../src/assets/icono-nuevo-paciente.png"
          alt="nuevo paciente"
        />
      </div>
      <div className="flex flex-col bg-white w-4/5 rounded-md p-4">
        {children}
      </div>
    </div>
  );
}

export default ContainerBox;
