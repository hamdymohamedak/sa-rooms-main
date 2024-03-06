import { Step, Steps, useSteps } from "chakra-ui-steps";
import { Flex, Button } from "@chakra-ui/react";
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { Alert } from 'antd';
import "./AddDepartment.css";
import "./signup/signup.css"
import LoginPhone from "./signup/Signup"
import Verify from "./signup/verify"
import PlaceType from "./Place1";
import Place3 from "./place3"
import Ditails from "./place4"
import Roomdetails from "./place5"
import Flatdetails from "./place6"
import Kitchendetails from "./place7"
import Bathdetails from "./place8"
import PlacePrice from "./Place10";
import PlaceLocation from "./Place2";
import PlaceInfo from "./Place11";
import PlaceImages from "./PlaceImages";
import PlaceFeatures from "./Place";
import { GoVerified } from "react-icons/go";

const steps = [
  { label: "", content: <LoginPhone /> },
  { label: "", content: <Verify /> },
  { label: "", content: <PlaceType /> },
  { label: "", content: <PlaceLocation /> },
  { label: "", content: <Place3 /> },
  { label: "", content: <Ditails /> },
  { label: "", content: <Roomdetails /> },
  { label: "", content: <Flatdetails /> },
  { label: "", content: <Kitchendetails /> },
  { label: "", content: <Bathdetails /> },
  { label: "", content: <PlaceFeatures /> },
  { label: "", content: <PlaceInfo /> },
  { label: "", content: <PlaceImages /> },
  { label: "", content: <PlacePrice /> },
];

const AddDepartment = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../lootie/party.json')
    })
  }, [])

  return (
    <div style={{ height: '90vh', overflowY: 'hidden' }}>
      <Flex flexDir="column" width="100%" mt="3rem">
        <Steps activeStep={activeStep}>
          {steps.map(({ label, content }) => (
            <Step label={label} key={label}>
              {content}
            </Step>
          ))}
        </Steps>
        {activeStep === steps.length ? (
          <div className="center colmun ">
            <Alert dir="rtl" className="fs-4 fw-bold bg-green mt-2" message="تم نشر عقارك اضغط متابعة لتjحكم به" type="success  " closeText="X" />

            <div style={{ width: '100%', height: '635px' }} className="contain" ref={container}></div>
            <Flex dir="ltr" p={4} justifyContent="center" gap="1rem">
              <Button size="lg">متابعة</Button>
            </Flex>
          </div>
        ) :
          <div dir="ltr" className="container " style={{ position: 'fixed', bottom: '10px' }}>
            <Flex width="100%" bottom="0" justify="flex-start" gap="1rem">
              <Button
                isDisabled={activeStep === -0}
                mr={4}
                onClick={prevStep}
                size="lg"
                variant="ghost"
                mt="2rem"
              >
                رجوع
              </Button>
              <Button size="lg" onClick={nextStep} mt="2rem">
                {activeStep === steps.length - 0 ? "Finish" : "واصل"}
              </Button>
            </Flex>

          </div>
        }
      </Flex>
    </div>
  );
};

export default AddDepartment;
