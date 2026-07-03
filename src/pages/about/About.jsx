import './About.css'
import { Col, Container, Row } from "react-bootstrap";
import aboutImg from "../../assets/img/developers-doing-discussion-about-wireframe.jpg";
import PureCounter from "@srexi/purecounterjs";
import { useEffect } from "react";
import Counting from "../../components/pure-Counter/counter";
import Header from "../../components/navbar/Navbar";
import BottomNav from "../../components/navbar/bottomNav";
import Footer from '../../components/footer/Footer';

function About() {
  useEffect(() => {
    new PureCounter();
  }, []);

  return (
    <>
      {/* header */}
      <Header />
      <BottomNav />

      {/* about us */}
      <Container className="textcolor AboutSpacing">
        <Row className="align-items-center mt-4 gy-3">
        <Col className="text-center" xs={12} lg={7} >
            <img src={aboutImg} className="img-fluid rounded rounded-5 overflow-hidden" />
          </Col>
          <Col xs={12} lg={5} className="pe-md-4 pt-lg-5"> 
            <h2 style={{ fontFamily: "Lalezar" }}>درباره ما</h2>
            <p style={{ textAlign: "justify" }} className="fs-6">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجل در
              ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>

            <hr className=" text-light border-2 my-4"/>
          </Col>
        </Row>
        <Row className="flex-column justify-content-center align-items-center my-lg-5">
          
          <Col className="text-center my-4">
            <Row xs={1} md={2} lg={3} xl={4} className="fixing-Row">
              <Col className="my-3">
                <Counting start={0} end={13} durition={1.8} text='سال تجربه'/>
              </Col>
              <Col className="my-3">
                <Counting start={0} end={17} durition={1.8} text='مدرس'/>
              </Col>
              <Col className="my-3">
                <Counting start={0} end={200} durition={1.8} text='دانشجو'/>
              </Col>
              <Col className="my-3">
               <Counting start={0} end={30} durition={1.8} text='دوره آموزشی'/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>


      {/* footer */}
      <Footer />
    </>
  );
}

export default About;
