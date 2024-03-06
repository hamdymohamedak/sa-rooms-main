import React from "react";
import "./HomeStyles.css";
import Categories from "../../components/Categories/Categories";
import { departments } from "../../Data/departments";
import Card from "../../components/card/Card";
import Footer from "../../components/Footer/Footer";

/* ------------------------------------------------------ */
function Home() {
  console.log(departments);
  return (
    <>
      {/* cateogories */}
      <Categories />

      {/* titles */}
      <div className="titles">
        <h1>
          ابحث عن ملاذك المفضل بين باقة واسعة من البيوت والفنادق بكل السعودية
        </h1>
        <p>
          تمتع بتجربة فريدة واستثنائية مع خدماتنا الاستثنائية وعروضنا المميزة
          بأفضل العروض على الفنادق والمنتجعات والرحلات السياحية والمزيد لجعل
          رحلتك لا تُنسى.
        </p>
      </div>

      {/* cards */}
      <div className="cards_container">
        {departments.map((flat) => (
          <Card flat={flat} key={flat.id} />
        ))}
      </div>

      {/* Features */}
      <div className="features_container">
        <div className="right_container">
          <div className="title">
            <h2>نقدم لك أفضل الخدمات السياحية في المملكة </h2>
            <p>
              توفر لك خدماتنا السياحية أفضل الخيارات لتجربة سفر لا تنسى بالإضافة
              إلى خدمة العملاء المميزة التي تهتم بكل تفاصيل رحلتك وتضمن لك رحلة
              مريحة وممتعة.
            </p>
          </div>

          <div className="features">
            <div className="feature">
              <div className="icon">
                <img src="./images/check-mark 1.png" alt="" />
              </div>
              <div className="content">
                <h4>حجوزات الفنادق والإقامة</h4>
                <p>
                  يمكن للزوار حجز الفنادق والشقق وغيرها من خيارات الإقامة عبر
                  الإنترنت.
                </p>
              </div>
            </div>

            <div className="feature">
              <div className="icon">
                <img src="./images/tour-guide (2) 1.png" alt="" />
              </div>
              <div className="content">
                <h4> استكشف الأماكن السياحية </h4>
                <p>
                  فرصة للاستكشاف والتعرف على المعالم السياحية والثقافية في
                  المملكة.
                </p>
              </div>
            </div>

            <div className="feature">
              <div className="icon">
                <img src="./images/bulb 1.png" alt="" />
              </div>
              <div className="content">
                <h4>بحث متقدم وذكي</h4>
                <p>تامين الرحلات السياحيه بافضل الخدمات الامنيه</p>
              </div>
            </div>
            <div className="feature">
              <div className="icon">
                <img src="./images/customer 1.png" alt="" />
              </div>
              <div className="content">
                <h4> خدمة عملاء</h4>
                <p>دعمك الدائم والفعال</p>
              </div>
            </div>
            <div className="feature">
              <div className="icon">
                <img src="./images/4305677 1.png" alt="" />
              </div>
              <div className="content">
                <h4>دفع آمن ومريح لخدماتنا</h4>
                <p>نحن نقدم لك طرق دفع آمنة وسهلة لتجربة خدماتنا بكل راحة</p>
              </div>
            </div>
          </div>
        </div>
        <div className="left_container">
          <img src="./images/FeaturesImg.png" alt="" />
        </div>
      </div>
      <div className="divider" style={{ marginTop: "8rem" }}></div>
          <div className="container">
            <Footer />
          </div>
    </>
  );
}

export default Home;
