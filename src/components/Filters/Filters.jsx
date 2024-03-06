import React from "react";
import "./FilterStyles.css";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
  Button,
  MenuItem,
  Checkbox,
} from "@chakra-ui/react";
import { AiOutlineDown } from "react-icons/ai";
/* ------------------------------------------------------ */
const Filters = () => {
  return (
    <div className="filters_container">
      <div className="tabs">
        <Menu closeOnSelect={false}>
          <MenuButton
            as={Button}
            display="flex"
            rightIcon={<AiOutlineDown />}
            variant="outline"
            flexShrink="0"
          >
            <h6>الرائج</h6>
          </MenuButton>

          <MenuList minWidth="240px">
            <MenuOptionGroup title="عنوان" type="checkbox">
              <MenuItemOption value="option1">option1</MenuItemOption>
              <MenuItemOption value="option2">option2</MenuItemOption>
              <MenuItemOption value="option3"> option3</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>

        <Menu closeOnSelect={false}>
          <MenuButton
            as={Button}
            display="flex"
            rightIcon={<AiOutlineDown />}
            variant="outline"
            flexShrink="0"

          >
            <h6>المدينه</h6>
          </MenuButton>

          <MenuList minWidth="240px">
            <MenuOptionGroup title="عنوان" type="checkbox">
              <MenuItemOption value="option1" __hover>
                option1
              </MenuItemOption>
              <MenuItemOption value="option2">option2</MenuItemOption>
              <MenuItemOption value="option3"> option3</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>

        <Menu closeOnSelect={false}>
          <MenuButton
            as={Button}
            display="flex"
            rightIcon={<AiOutlineDown />}
            variant="outline"
            flexShrink="0"

          >
            <h6>1ر,س- 100ر,س</h6>
          </MenuButton>

          <MenuList minWidth="240px">
            <MenuOptionGroup title="عنوان" type="checkbox">
              <MenuItemOption value="option1" __hover>
                option1
              </MenuItemOption>
              <MenuItemOption value="option2">option2</MenuItemOption>
              <MenuItemOption value="option3"> option3</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>

        <Menu closeOnSelect={false}>
          <MenuButton
            as={Button}
            display="flex"
            rightIcon={<AiOutlineDown />}
            variant="outline"
            flexShrink="0"

          >
            <h6>سرير</h6>
          </MenuButton>

          <MenuList minWidth="240px">
            <MenuOptionGroup title="عنوان" type="checkbox">
              <MenuItemOption value="option1" __hover>
                option1
              </MenuItemOption>
              <MenuItemOption value="option2">option2</MenuItemOption>
              <MenuItemOption value="option3"> option3</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default Filters;
