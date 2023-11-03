import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Switch,
} from "@chakra-ui/react";
import ContainerBox from "../../shared/ContainerBox";

function Configuracion() {
  const handleSubmiteForm = (e) => {
    console.log(e);
  };
  return (
    <ContainerBox>
      <form onSubmit={handleSubmiteForm}>
        <Box border="1px" borderColor="gray.100" shadow="base" mb="5">
          <Box p="3" bg="gray.100" border="1px" borderColor="gray.200">
            <p className="text-xl" style={{ fontWeight: "bold" }}>
              Configuración
            </p>
          </Box>
          <Box
            p={6}
            maxWidth="100%"
            display="flex"
            flexDirection="column"
            alignItems="normal"
            justifyContent="space-around"
            gap={6}
          >
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="email-alerts" mb="0" w="64">
                Habilitar Vph
              </FormLabel>
              <Switch id="email-alerts" />
              <p className="ml-3">(Si)</p>
            </FormControl>
            <Divider />
            <RadioGroup defaultValue="2">
              <Stack spacing={5} direction="row">
                <p className="w-60 font-semibold mr-2">Modo</p>
                <Radio colorScheme="red" value="1">
                  Validación
                </Radio>
                <Radio colorScheme="green" value="2">
                  Entrenamiento
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Button colorScheme="blue" type="submit" width="100px" m={3}>
            Guardar
          </Button>
        </Box>
      </form>
    </ContainerBox>
  );
}

export default Configuracion;
