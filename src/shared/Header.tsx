import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { RxExit } from "react-icons/rx";

function Header() {
  return (
    <div
      className="flex justify-between h-16 items-center w-full"
      style={{ borderBottom: "1px solid #d8dbe0" }}
    >
      <div>
        <IconButton aria-label="Search database" icon={<HamburgerIcon />} />
      </div>
      <div>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<BiUserCircle />}
            variant="outline"
          />
          <MenuList>
            <MenuItem icon={<AiOutlineUser />} command="⌘T">
              Perfil
            </MenuItem>
            <MenuItem icon={<RxExit />} command="⌘N">
              Salir
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
