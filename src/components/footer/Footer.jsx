import { Col, Row } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="myWave"
      >
        <path
          fill="#222831"
          fillOpacity="1"
          d="M0,288L40,261.3C80,235,160,181,240,170.7C320,160,400,192,480,181.3C560,171,640,117,720,101.3C800,85,880,107,960,144C1040,181,1120,235,1200,218.7C1280,203,1360,117,1400,74.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>

      <footer className="pt-5 px-3 myfooter textcolor">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5">
              <h4 className="fw-bold">ParhamArticle.com</h4>
              <p>دنیایی از مقالات بروز برنامه نویسی و هوش مصنوعی</p>
            </div>
            <div className="col-lg-2 offset-lg-1">
              <h4 className="fw-bold borderColor px-2 pb-3 w-75">لینک ها</h4>
              <div className="px-2 mt-3">
                <p className="cursorPointer">
                  <i className="bi bi-caret-left"></i>
                  <span>صفحه اصلی</span>
                </p>
                <p className="cursorPointer">
                  <i className="bi bi-caret-left"></i>
                  <span>مقالات</span>
                </p>
                <p className="cursorPointer">
                  <i className="bi bi-caret-left"></i>
                  <span> درباره ی ما</span>
                </p>
                <p className="cursorPointer">
                  <i className="bi bi-caret-left"></i>
                  <span>خدمات</span>
                </p>
              </div>
            </div>
            <hr className="d-lg-none" />
            <div className="col-lg-2">
              <h4 className="fw-bold borderColor px-2 pb-3 w-75">خدمات</h4>
              <div className="px-2 mt-3">
                <p className="cursorPointer">
                  <i className="bi bi-caret-left"></i>
                  <span>صفحه اصلی</span>
                </p>
                <p className="cursorPointer">
                  <i className="bi bi-caret-left"></i>
                  <span>مقالات</span>
                </p>
                <p className="cursorPointer">
                  <i className="bi bi-caret-left"></i>
                  <span> درباره ی ما</span>
                </p>
                <p className="cursorPointer">
                  <i className="bi bi-caret-left"></i>
                  <span>خدمات</span>
                </p>
              </div>
            </div>
            <hr className="d-lg-none" />
            <div className="col-lg-2">
              <h4 className="fw-bold borderColor px-2 pb-3 w-75">ارتباط با ما</h4>
              <div className="px-2 mt-3">
                <p className="cursorPointer">
                  <i className="bi bi-caret-left"></i>
                  <span>صفحه اصلی</span>
                </p>
                <p className="cursorPointer">
                  <i className="bi bi-caret-left"></i>
                  <span>مقالات</span>
                </p>
                <p className="cursorPointer">
                  <i className="bi bi-caret-left"></i>
                  <span> درباره ی ما</span>
                </p>
                <p className="cursorPointer">
                  <i className="bi bi-caret-left"></i>
                  <span>خدمات</span>
                </p>
              </div>
            </div>
          </div>
          <div className=" copyrite pb-5 pb-lg-0">
            <Row xs={1} lg={2} className="pb-5 pb-lg-3 pt-5 mx-auto justify-content-center">
                <Col className="text-lg-end text-center rightcol mb-1 mb-lg-0">1404 - 1410</Col>
                <Col className="text-lg-start text-center leftcol">تمامی حقوق مادی و معنوی این سایت متعلق به پرهام آرتیکل می‌باشد.</Col>
            </Row>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
