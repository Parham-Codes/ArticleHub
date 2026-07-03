import { Col, Container, Row } from "react-bootstrap";
import BottomNav from "../../components/navbar/bottomNav";
import Header from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import ArticleItem from "../../components/articleItem/articleItem";
import Footer from "../../components/footer/Footer";
import "./Home.css";
import HeroSection from "../../components/heroSection/heroSection";
import DbHttpAddress from "../../dbHttpAddress";
import Loading from "../../components/loading/loading";

function Home() {
  const [articlesData, SetArticlesData] = useState([]);
  let [isPending, setIsPending] = useState(true);

  useEffect(() => {
    axios.get(`${DbHttpAddress}/articles`).then((response) => {
      SetArticlesData(response.data);
      setIsPending(false);
    });
  }, []);

  return (
    <>
      {isPending ? (
        <Loading />
      ) : (
        <div>
          <Header />
          <BottomNav />

          <HeroSection />

          <Container className="mb-5 pb-5 pb-lg-0 mb-lg-0">
            <h1 id="articles" className="textcolor  pt-sm-3 mt-5 mb-3">
              لیست مقالات
            </h1>
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4">           
              {articlesData.map((item) => {
                return (
                  <Col key={item.id}>
                    <ArticleItem {...item} />
                  </Col>
                );
              })}
            </Row>
          </Container>

          <Footer />
        </div>
      )}
    </>
  );
}

export default Home;
