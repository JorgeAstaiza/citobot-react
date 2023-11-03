import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Menu,
  MenuButton,
  Button,
  MenuItem,
  MenuList,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Stack,
  Select,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import { BiLeftArrow, BiRightArrow, BiSolidAddToQueue } from "react-icons/bi";

type TableData = {
  columns: string[];
  data: any[];
};

function TableComponent({ columns, data }: TableData) {
  console.log(data);
  const [itemPerPage, setItemPerPage] = useState(5);
  const optionsItemsPerPage = [5, 10, 25, 50];
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      w="100%"
      background="white"
    >
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              {columns.map((item, index) => (
                <Th key={index}>{item}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => (
              <Tr key={index}>
                <Td pt={1} pb={1}>
                  {item.per_identificacion}
                </Td>
                <Td pt={1} pb={1}>
                  {item.per_primer_nombre}
                </Td>
                <Td pt={1} pb={1}>
                  {item.per_primer_apellido}
                </Td>
                <Td pt={1} pb={1} mb="-1px" display="flex">
                  <Button padding={2} variant="ghost" colorScheme="blue">
                    {" "}
                    <BiSolidAddToQueue />
                  </Button>
                  <Button padding={2} variant="ghost" colorScheme="blue">
                    {" "}
                    <AiTwotoneEdit />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <div className="w-full flex items-center justify-end mt-3 mb-3">
          <Box display="flex" flexDir="row" alignItems="center">
            <p className="text-sm mr-3">Items por pagina:</p>
            <Select mr={3}>
              {optionsItemsPerPage.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </Box>
          <p className="mr-5 text-sm">1-10 de 28</p>
          <Stack mr={5} direction="row">
            <Button variant="ghost" p={1} m={0}>
              <BiLeftArrow />
            </Button>
            <Button variant="ghost" p={1} m={0}>
              <BiRightArrow />
            </Button>
          </Stack>
        </div>
      </TableContainer>
    </Box>
  );
}

export default TableComponent;
