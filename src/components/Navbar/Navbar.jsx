import React, { useState, useRef, useEffect } from "react";
import "./NavbarStyles.css";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BiSearchAlt2 } from "react-icons/bi";
import { GrLanguage } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";
import { BiChevronDown } from "react-icons/bi";
import {
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
  IconButton,
  Input,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
/* ------------------------------------------------------ */
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [sliderOpen, setSliderOpen] = useState(false);
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [leavingDate, setLeavingDate] = useState(new Date());

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const refOne = useRef();

  const handleClickOutside = (e) => {
    if (
      e.target?.parentElement?.classList.contains("search_button") ||
      e.target?.classList?.contains("search_button") ||
      e.target?.parentElement?.parentElement?.classList.contains(
        "search_button"
      )
    ) {
      return;
    } else if (!refOne.current?.contains(e.target)) {
      // console.log("outside");
      setSliderOpen(false);
    } else {
      // console.log("inside ");
      setSliderOpen(true);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      {/* main navbar  */}
      <div className="navbar_container">
        {/* right  */}
        <Link to="/">
          <div className="right_container">
            <div className="logo_container">
              <img src="/images/mainLogo.png" alt="" />
            </div>
            <div className="search_container">
              <div className="field">
                <h6>المكان</h6>
              </div>
              <div className="v_line"> </div>
              <div className="field">
                <h6>المده</h6>
              </div>
              <div className="v_line"> </div>
              <div className="field">
                <h6>اضافه المسافرين</h6>
              </div>

              <IconButton
                className="search_button"
                borderRadius="1000px"
                onClick={() => {
                  setSliderOpen(true);
                }}
                aria-label="Search database"
                icon={<BiSearchAlt2 />}
              />
            </div>
          </div>
        </Link>

        {/* middle */}
        <div className="middle_container">
          <div className="search_container">
            <div className="field">
              <h6>المكان</h6>
            </div>
            <div className="v_line"> </div>
            <div className="field">
              <h6>المده</h6>
            </div>
            <div className="v_line"> </div>
            <div className="field">
              <h6>اضافه المسافرين</h6>
            </div>

            <IconButton
              className="search_button"
              borderRadius="1000px"
              onClick={() => {
                if (!isMobile) {
                  setSliderOpen(true);
                  return;
                }
                onOpen();
              }}
              aria-label="Search database"
              icon={<BiSearchAlt2 />}
            />

            {/* search modal */}
            <Modal
              isOpen={isOpen}
              onClose={onClose}
              blockScrollOnMount={true}
              isCentered
            >
              <ModalOverlay />
              <ModalContent pt="2rem" mx="1rem">
                <ModalHeader>بحث</ModalHeader>
                <ModalCloseButton />
                <ModalBody display="flex" flexDir="column" gap="1rem">
                  <FormControl>
                    <FormLabel>المدينه</FormLabel>
                    <Input type="text" focusBorderColor="brand.500" />
                  </FormControl>

                  <FormControl>
                    <FormLabel>تاريخ الوصول</FormLabel>
                    <Input type="date" focusBorderColor="brand.500" />
                  </FormControl>

                  <FormControl>
                    <FormLabel>ناريخ المغادره</FormLabel>
                    <Input type="date" focusBorderColor="brand.500" />
                  </FormControl>

                  <FormControl>
                    <FormLabel> المسافرين</FormLabel>
                    {/* <Input type="text" focusBorderColor="brand.500" /> */}

                    <div className="types_container">
                      <div className="type_container">
                        <div className="right_container">
                          <h4>البالغون</h4>
                          <p>اكثر من 13 سنه</p>
                        </div>

                        <div className="left_container">
                          <IconButton
                            size="sm"
                            rounded="full"
                            variant="outline"
                            colorScheme="brand"
                            aria-label="Send email"
                            isDisabled
                            icon={<FiMinus />}
                          />
                          <div className="number">5</div>
                          <IconButton
                            size="sm"
                            rounded="full"
                            variant="outline"
                            colorScheme="brand"
                            aria-label="Send email"
                            icon={<BsPlus />}
                          />
                        </div>
                      </div>
                      <div className="type_container">
                        <div className="right_container">
                          <h4>البالغون</h4>
                          <p>اكثر من 13 سنه</p>
                        </div>

                        <div className="left_container">
                          <IconButton
                            size="sm"
                            rounded="full"
                            variant="outline"
                            colorScheme="brand"
                            aria-label="Send email"
                            isDisabled
                            icon={<FiMinus />}
                          />
                          <div className="number">5</div>
                          <IconButton
                            size="sm"
                            rounded="full"
                            variant="outline"
                            colorScheme="brand"
                            aria-label="Send email"
                            icon={<BsPlus />}
                          />
                        </div>
                      </div>
                      <div className="type_container">
                        <div className="right_container">
                          <h4>البالغون</h4>
                          <p>اكثر من 13 سنه</p>
                        </div>

                        <div className="left_container">
                          <IconButton
                            size="sm"
                            rounded="full"
                            variant="outline"
                            colorScheme="brand"
                            aria-label="Send email"
                            isDisabled
                            icon={<FiMinus />}
                          />
                          <div className="number">5</div>
                          <IconButton
                            size="sm"
                            rounded="full"
                            variant="outline"
                            colorScheme="brand"
                            aria-label="Send email"
                            icon={<BsPlus />}
                          />
                        </div>
                      </div>
                      <div className="type_container">
                        <div className="right_container">
                          <h4>البالغون</h4>
                          <p>اكثر من 13 سنه</p>
                        </div>

                        <div className="left_container">
                          <IconButton
                            size="sm"
                            rounded="full"
                            variant="outline"
                            colorScheme="brand"
                            aria-label="Send email"
                            isDisabled
                            icon={<FiMinus />}
                          />
                          <div className="number">5</div>
                          <IconButton
                            size="sm"
                            rounded="full"
                            variant="outline"
                            colorScheme="brand"
                            aria-label="Send email"
                            icon={<BsPlus />}
                          />
                        </div>
                      </div>
                    </div>
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button mr={3} onClick={onClose} variant="outline">
                    Close
                  </Button>
                  <Button mr={3}>Search</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </div>

        {/* left */}
        <div className="left_container">
          <Menu closeOnSelect={true}>
            <MenuButton
              as={Button}
              display="flex"
              leftIcon={<IoPersonCircleOutline />}
              rightIcon={<BiChevronDown />}
              variant="solid"
              fontWeight="normal"
              borderRadius="1000px"
              height="46.8px"
              px="1.685rem"
            >
              <h6> تسجيل الدخول</h6>
            </MenuButton>

            <MenuList minWidth="240px">
              <MenuItem>تسجيل الدخول</MenuItem>
              <MenuItem>انشاء حساب</MenuItem>
              <div className="divider"></div>

              <MenuItem onClick={() => navigate("/AddDepartment")}>
                اضافه عقار
              </MenuItem>
            </MenuList>
          </Menu>

          <div className="languages">
            <GrLanguage />
          </div>
        </div>
      </div>

      {/* navbar slider */}
      <div
        className={sliderOpen ? "navbar_slider show" : "navbar_slider"}
        ref={refOne}
      >
        <div className="container">
          <div className="top">
            {/* right  */}
            <div className="logo_container">
              <img src="/images/mainLogo.png" alt="" />
            </div>

            {/* left */}
            <div className="left_container">
              <Menu closeOnSelect={false}>
                <MenuButton
                  as={Button}
                  display="flex"
                  leftIcon={<IoPersonCircleOutline />}
                  rightIcon={<BiChevronDown />}
                  variant="solid"
                  fontWeight="normal"
                  borderRadius="1000px"
                  height="46.8px"
                  px="1.685rem"
                >
                  <h6> تسجيل الدخول</h6>
                </MenuButton>

                <MenuList minWidth="240px">
                  <MenuItem as="a" href="#">
                    تسجيل الدخول
                  </MenuItem>
                  <MenuItem as="a" href="#">
                    انشاء حساب
                  </MenuItem>
                  <div className="divider"></div>
                  <MenuItem as="a" href="#">
                    اضافه عقار
                  </MenuItem>
                </MenuList>
              </Menu>
              <div className="languages">
                <GrLanguage />
              </div>
            </div>
          </div>

          <div className="bottom">
            {/* middle */}
            <div className="search_container">
              <div className="field location">
                <h6>المكان</h6>
                <Menu>
                  <MenuButton color="brand.500" fontWeight="900">
                    ابحث عن مكان
                  </MenuButton>
                  <MenuList>
                    <Input
                      focusBorderColor="brand.500"
                      variant="outline"
                      placeholder="اسم المدينه"
                      mx=".5rem"
                      mb=".5rem"
                      width="90%"
                      fontWeight="default"
                      _placeholder={{ opacity: 1, color: "brand.500" }}
                    />

                    {/* MenuItems are not rendered unless Menu is open */}
                    <MenuItem>القاهره</MenuItem>
                    <MenuItem>الرياض</MenuItem>
                    <MenuItem>دبي</MenuItem>
                  </MenuList>
                </Menu>
              </div>

              <div className="v_line"> </div>

              <div className="field  arrival_date">
                <h6>الوصول</h6>

                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <DatePicker
                    selected={arrivalDate}
                    onChange={(date) => setArrivalDate(date)}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                  />
                </div>
              </div>

              <div className="v_line"> </div>

              <div className="field leaving_date">
                <h6>المغادره</h6>

                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <DatePicker
                    selected={leavingDate}
                    onChange={(date) => setLeavingDate(date)}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                  />
                </div>
              </div>
              <div className="v_line"> </div>
              <div className="field travellers">
                <h6>مسافرين</h6>

                <Menu>
                  <MenuButton color="brand.500" fontWeight="900">
                    اضافه المسافرين
                  </MenuButton>

                  <MenuList
                    px="1rem"
                    display="flex"
                    flexDirection="column"
                    gap=".5rem"
                  >
                    <div className="type_container">
                      <div className="right_container">
                        <h4>البالغون</h4>
                        <p>اكثر من 13 سنه</p>
                      </div>

                      <div className="left_container">
                        <IconButton
                          size="sm"
                          rounded="full"
                          variant="outline"
                          colorScheme="brand"
                          aria-label="Send email"
                          isDisabled
                          icon={<FiMinus />}
                        />
                        <div className="number">5</div>
                        <IconButton
                          size="sm"
                          rounded="full"
                          variant="outline"
                          colorScheme="brand"
                          aria-label="Send email"
                          icon={<BsPlus />}
                        />
                      </div>
                    </div>
                    <Divider />
                    <div className="type_container">
                      <div className="right_container">
                        <h4>البالغون</h4>
                        <p>اكثر من 13 سنه</p>
                      </div>

                      <div className="left_container">
                        <IconButton
                          size="sm"
                          rounded="full"
                          variant="outline"
                          colorScheme="brand"
                          aria-label="Send email"
                          isDisabled
                          icon={<FiMinus />}
                        />
                        <div className="number">5</div>
                        <IconButton
                          size="sm"
                          rounded="full"
                          variant="outline"
                          colorScheme="brand"
                          aria-label="Send email"
                          icon={<BsPlus />}
                        />
                      </div>
                    </div>
                    <Divider />
                    <div className="type_container">
                      <div className="right_container">
                        <h4>البالغون</h4>
                        <p>اكثر من 13 سنه</p>
                      </div>

                      <div className="left_container">
                        <IconButton
                          size="sm"
                          rounded="full"
                          variant="outline"
                          colorScheme="brand"
                          aria-label="Send email"
                          isDisabled
                          icon={<FiMinus />}
                        />
                        <div className="number">5</div>
                        <IconButton
                          size="sm"
                          rounded="full"
                          variant="outline"
                          colorScheme="brand"
                          aria-label="Send email"
                          icon={<BsPlus />}
                        />
                      </div>
                    </div>
                  </MenuList>
                </Menu>
              </div>

              <IconButton
                className="search_button"
                borderRadius="1000px"
                onClick={() => {
                  setSliderOpen(true);
                }}
                aria-label="Search database"
                icon={<BiSearchAlt2 />}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
