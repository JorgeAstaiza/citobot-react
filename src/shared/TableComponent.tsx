import {
  Box,
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineArrowRight, AiTwotoneEdit } from "react-icons/ai";
import { BiLeftArrow, BiRightArrow, BiSolidAddToQueue } from "react-icons/bi";
import Moment from "react-moment";

import "./TableComponent.css";
import { Link, useNavigate } from "react-router-dom";
import { Persona } from "./interfaces/persona.interface";
import ReactPaginate from "react-paginate";

type TableData = {
  columns: string[];
  data: any[];
  type: string;
};

function TableComponent({ columns, data, type }: TableData) {
  const optionsItemsPerPage = [5, 10, 25, 50];
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const navigate = useNavigate();
  const createTamizaje = (paciente: Persona) => {
    navigate(`/dashboard/tamizaje/crear/${paciente.per_identificacion}`);
  };
  const changeItemsPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(+e.target.value);
  };
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
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
          <></>
          {(type === "pacientes" || type === "usuarios") && (
            <Tbody>
              {currentItems &&
                currentItems.map((item, index) => (
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
                    {type === "usuarios" && (
                      <>
                        <Td pt={1} pb={1}>
                          {item.usu_rol}
                        </Td>
                        <Td pt={1} pb={1}>
                          <p
                            className={
                              item.usu_estado.toLowerCase() === "activo"
                                ? "activo"
                                : "inactivo"
                            }
                          >
                            {item.usu_estado}
                          </p>
                        </Td>
                      </>
                    )}
                    <Td pt={1} pb={1} mb="-1px" display="flex">
                      {type === "pacientes" && (
                        <>
                          <Button
                            padding={2}
                            variant="ghost"
                            colorScheme="blue"
                            onClick={() => createTamizaje(item)}
                          >
                            {" "}
                            <BiSolidAddToQueue />
                          </Button>
                          <Link to={"/dashboard/tamizaje/crear"}></Link>
                        </>
                      )}
                      <Button padding={2} variant="ghost" colorScheme="blue">
                        {" "}
                        <AiTwotoneEdit />
                      </Button>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          )}
          {type === "tamizajes" && (
            <Tbody>
              {currentItems &&
                currentItems.map((item, index) => (
                  <Tr key={index}>
                    <Td pt={1} pb={1}>
                      {item.per_identificacion}
                    </Td>
                    <Td pt={1} pb={1}>
                      <Moment format="YYYY-MM-DD">{item.tam_fecha}</Moment>
                    </Td>

                    <Td pt={1} pb={1}>
                      <Moment format="hh:mm A">{item.tam_fecha}</Moment>
                    </Td>
                    <Td pt={1} pb={1}>
                      {item.niv_mensaje}
                    </Td>
                    <Td pt={1} pb={1} mb="-1px" display="flex">
                      <Button
                        padding={2}
                        variant="ghost"
                        colorScheme="blue"
                        onClick={() => createTamizaje(item)}
                      >
                        {" "}
                        <BiSolidAddToQueue />
                      </Button>
                      <Link to={"/dashboard/tamizaje/crear"}></Link>

                      <Button padding={2} variant="ghost" colorScheme="blue">
                        {" "}
                        <AiOutlineArrowRight />
                      </Button>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          )}
        </Table>
        <div className="w-full flex items-center justify-end mt-3 mb-3">
          <Box display="flex" flexDir="row" alignItems="center">
            <p className="text-sm mr-3">Items por pagina:</p>
            <Select mr={3} onChange={changeItemsPerPage}>
              {optionsItemsPerPage.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </Box>
          <ReactPaginate
            className="flex items-center justify-around mr-2"
            breakLabel="..."
            nextLabel={<BiRightArrow />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={<BiLeftArrow />}
            renderOnZeroPageCount={null}
          />
        </div>
      </TableContainer>
    </Box>
  );
}

export default TableComponent;
