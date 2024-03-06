import React from "react";
import "./DepartmentStyles.css";
// import { useParams, Link } from "react-router-dom";
import { RxShare2 } from "react-icons/rx";
import { AiFillStar } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { MdOutlineChair, MdVerifiedUser } from "react-icons/md";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

import { BsImages } from "react-icons/bs";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { Avatar } from "@chakra-ui/react";
import Footer from "../../components/Footer/Footer";
/* ------------------------------------------------------ */
const Department = () => {
  // const params = useParams();
  // const {id} = params  ;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    
    <div className="department_container">
      {/* header */}
      <div className="department_header">
        <h3>شقة بغرفة نوم و غرفة جلوس</h3>
        <div className="details">
          <ul className="properties">
            <li>
              <AiFillStar />
              <span>4,89 (15 تقييم)</span>
            </li>
            <li>
              <ImLocation />
              <span>جدة حي المروة</span>
            </li>
          </ul>

          <ul className="actions">
            <li>
              <RxShare2 />
              <span>المشاركة</span>
            </li>
          </ul>
        </div>
      </div>

      {/* mobile slider */}
      <Slider className="slider mobile" duration="100ms">
        <div>
          <img src="/images/flats/1.jpg" alt="" />
        </div>
        <div>
          <img src="/images/flats/2.jpg" alt="" />
        </div>
        <div>
          <img src="/images/flats/3.jpg" alt="" />
        </div>
        <div>
          <img src="/images/flats/4.jpg" alt="" />
        </div>
      </Slider>

      {/* images */}
      <div className="department_images">
        <Button
          onClick={onOpen}
          leftIcon={<BsImages />}
          className="showPics_button"
          size="lg"
        >
          عرض الصور
        </Button>

        <div className="image-1">
          <img src="/images/flats/1.jpg" alt="" />
        </div>
        <div className="image-2">
          <img src="/images/flats/2.jpg" alt="" />
        </div>
        <div className="image-3">
          <img src="/images/flats/3.jpg" alt="" />
        </div>
        <div className="image-4">
          <img src="/images/flats/4.jpg" alt="" />
        </div>
      </div>

      {/* content */}
      <div className="department_content">
        {/* details */}
        <div className="details">
          <div className="details_description">
            <h3>الوصف </h3>
            <p>
              هذه المنزل هو مكان الإقامة الرائع الذي يوفر لك الراحة والاسترخاء.
              يحتوي على غرف مريحة ومفروشة بشكل جيد وتحتوي على العديد من المرافق
              المنزلية المتاحة للاستخدام الفوري. يضم هذا المنزل مطبخًا مجهزًا
              بالكامل وغرفة جلوس واسعة وحمامات نظيفة ومريحة. كما يتمتع بموقع
              رائع ومناسب في منطقة هادئة وآمنة، ما يجعله مثاليًا للاسترخاء
              والاستمتاع بالهدوء والراحة.
            </p>
          </div>

          <div className="details_tabs">
            <Tabs size="md" variant="enclosed" colorScheme="brand">
              <TabList flexWrap="wrap">
                <Tab
                  _selected={{ bg: "brand.500", color: "white" }}
                  fontSize="1.2rem"
                >
                  المواصفات و المميزات
                </Tab>
                <Tab
                  _selected={{ bg: "brand.500", color: "white" }}
                  fontSize="1.2rem"
                >
                  تقييمات
                </Tab>
                <Tab
                  _selected={{ bg: "brand.500", color: "white" }}
                  fontSize="1.2rem"
                >
                  الموقع و الخريطة
                </Tab>
                <Tab
                  _selected={{ bg: "brand.500", color: "white" }}
                  fontSize="1.2rem"
                >
                  صاحب البيت
                </Tab>
              </TabList>

              <TabPanels className="tab_panels">
                <TabPanel>
                  <div className="feature">
                    <h4>
                      <MdOutlineChair />
                      المجالس
                    </h4>
                    <ul>
                      <li>مجلس رئيسى يسع ل 20 شخص</li>
                      <li>جلسة خارجيه تتسع ل 10 شخص</li>
                      <li>طاولة طعام تسع ل 8 شخص</li>
                    </ul>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="reviews">
                    <h4>تقييمات الزبائن</h4>

                    <div className="ratings">
                      <div className="rate">
                        <h5>التقييم العام</h5>
                        <div className="bar">
                          <span>4.89</span>
                          <div className="precentage">
                            <span></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="review">
                      <div className="person_info">
                        <Avatar size="md" />
                        <div className="content">
                          <h5>احمد ايمن</h5>
                          <div className="date">منذ شهر</div>
                        </div>
                      </div>
                      <p className="review_content">
                        مكان جميل ومرتب ونظيف الله يعطيهم العافية على الاستضافة
                        الجميلة
                      </p>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="location">
                    <h4>الموقع والخريطة</h4>
                    <div>
                      <p>الموقع فى مدينة الرياض ،حي القيروان</p>
                      <p>تظهر معلومات الموقع الدقيقة بعد تأكيد الحجز.</p>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="owner">
                    <h4>صاحب البيت</h4>

                    <div className="owner_details">
                      <Avatar size="lg" />
                      <div className="details">
                        <h4>احمد ايمن</h4>
                        <h6>عضو منذ فبراير 2018</h6>
                        <div className="badges">
                          <div className="badge">
                            <AiFillStar />
                            <span>410 تعليق</span>
                          </div>
                          <div className="badge">
                            <MdVerifiedUser />
                            <span> الهوية محققة</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p>
                      زود الخدمة الرئيسي لدينا الذي يقدم لك مجموعة متنوعة من
                      المنازل لامتلاكه خبرة واسعة في هذا المجال، ويقدم خدماته
                      بشكل احترافي ودقيق، بما يضمن رضاك الكامل. إذا كنت تبحث عن
                      بيت أحلامك، ويضمن لك تجربة سهلة ومريحة من البداية حتى
                      النهاية. تواصل معه الآن للاستفسار عن خدماتنا والحصول على
                      المساعدة التي تحتاج إليها لإيجاد المنزل المثالي لك."
                    </p>

                    <div className="owner_features">
                      <div className="owner_feature">
                        <h6>اللغات </h6>
                        <p> فرنسية , انجليزية , اسبانية</p>
                      </div>
                      <div className="owner_feature">
                        <h6>وقت الاجابة </h6>
                        <p>ساعة</p>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
        {/* sidebar */}
        <div className="sidebar">
          <h4>ليله واحده</h4>

          <div className="details_parts">
            <div className="part">
              <div className="item">
                <h5> تاريخ الوصول </h5>
                <p>الاحد 12 مارس</p>
              </div>
              <div className="item">
                <h5>تاريخ المغادره</h5>
                <p>الاحد 12 مارس</p>
              </div>
            </div>

            <div className="divider"></div>

            <div className="part">
              <div className="item">
                <h5>وقت الوصول</h5>
                <p>02 مساءا</p>
              </div>
              <div className="item">
                <h5>وقت المغادرة</h5>
                <p>06:00 مساءا</p>
              </div>
            </div>

            <div className="divider"></div>

            <div className="part horizontal_items">
              <div className="hItem">
                <h5>ليلة واحدة</h5>
                <h5>1400 ر,س</h5>
              </div>

              <div className="hItem">
                <h5>1400 ر,س</h5>
                <h5>26 ر,س</h5>
              </div>

              <div className="hItem">
                <h5>رسوم النضافة</h5>
                <h5>15 ر,س</h5>
              </div>

              <div className="divider"></div>

              <div className="part horizontal_items">
                <div className="hItem">
                  <h5>المجموع</h5>
                  <h5>1441 ر,س</h5>
                </div>
              </div>
            </div>

            <Button size="lg" mt="1rem">
              الدفع
            </Button>
          </div>
        </div>
      </div>

      {/* Modal */}

      <Modal isOpen={isOpen} onClose={onClose} isCentered size={"4xl"}>
        <ModalOverlay />
        <ModalContent borderRadius="20px">
          <ModalCloseButton className="closeIcon" />

          <ModalBody padding=".5rem">
            <Slider className="slider" duration="100ms">
              <div>
                <img src="/images/flats/1.jpg" alt="" />
              </div>
              <div>
                <img src="/images/flats/2.jpg" alt="" />
              </div>
              <div>
                <img src="/images/flats/3.jpg" alt="" />
              </div>
              <div>
                <img src="/images/flats/4.jpg" alt="" />
              </div>
            </Slider>
          </ModalBody>
        </ModalContent>
      </Modal>
      
    </div>
    <div className="divider" style={{ marginTop: "8rem" }}></div>
          <div className="container">
            <Footer />
          </div>
    </>
  );
};

export default Department;
