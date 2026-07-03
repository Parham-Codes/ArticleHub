import "./Article.css";
import BottomNav from "../../components/navbar/bottomNav";
import Header from "../../components/navbar/Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BsPencilSquare } from "react-icons/bs";
import { BiCategoryAlt, BiTimeFive } from "react-icons/bi";
import { MdDelete, MdOutlineEditCalendar } from "react-icons/md";
import Swal from "sweetalert2";
import Footer from "../../components/footer/Footer";
import DbHttpAddress from "../../dbHttpAddress";

function Article() {
  let myArticleId = useParams().articleId;

  let [articleData, setArticleData] = useState({});

  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${DbHttpAddress}/articles/${myArticleId}`)
      .then((response) => setArticleData(response.data))
      .catch((error) => {
        if (error.response?.status === 404) {
          navigate("/not-found");
        } else {
          Swal.fire({
            icon: "error",
            title: "مشکلی پیش آمده",
            text: "ارتباط با سرور برقرار نشد!",
            background: "rgb(57, 62, 70)",
            color: "#d4d1d1",
            confirmButtonColor: "#0d6efd",
            customClass: "alertfont",
          }).then(() => navigate("/"));
        }
      });
  }, [myArticleId, navigate]);

  const deleteArticleHandler = () => {
    Swal.fire({
      title: "آیا از حذف مقاله اطمینان دارید ؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "بله حذفش کن!",
      cancelButtonText: "منصرف شدم",
      background: "rgb(57, 62, 70)",
      color: "#d4d1d1",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${DbHttpAddress}/articles/${myArticleId}`)
          .then(navigate("/"))
          .then(() => {
            Swal.fire({
              title: "مقاله با موفقیت حذف شد",
              icon: "success",
              timer: 1500,
              timerProgressBar: true,
              background: "rgb(57, 62, 70)",
              color: "#d4d1d1",
              showConfirmButton: false,
            });
          })
          .catch((error) => {
            if (error.response?.status === 404) {
              navigate("/not-found");
            } else {
              Swal.fire({
                icon: "error",
                title: "مشکلی پیش آمده",
                text: "ارتباط با سرور برقرار نشد!",
                background: "rgb(57, 62, 70)",
                color: "#d4d1d1",
                confirmButtonColor: "#0d6efd",
                customClass: "alertfont",
              }).then(() => navigate("/"));
            }
          });
      }
    });
  };

  const editArticleHandler = () => {
    navigate(`/edit-article/${myArticleId}`);
  };

  return (
    <>
      <Header />
      <BottomNav />

      <Container className="articleSpacing">
        <Row className="justify-content-center">
          <Col lg={4} className="textcolor" style={{ marginTop: "100px" }}>
            <div className="articleCardContainer">
              <div className="cardHeader">
                <img src={articleData.image} />
                <h4>{articleData.title}</h4>
              </div>
              <div className="cardBody">
                <p>
                  <BsPencilSquare size="20px" />
                  نویسنده : <b>{articleData.writter}</b>
                </p>
                <p>
                  <BiTimeFive size="20px" />
                  مدت زمان : <b>{articleData.readingTime} دقیقه</b>
                </p>
                <p>
                  <BiCategoryAlt size="20px" />
                  دسته بندی : <b>{articleData.category}</b>
                </p>
              </div>
              <div className="cardFooter">
                <Button onClick={deleteArticleHandler} variant="outline-danger">
                  <MdDelete /> حذف مقاله
                </Button>
                <Button onClick={editArticleHandler} variant="outline-primary">
                  <MdOutlineEditCalendar /> ویرایش مقاله
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={8} className="textcolor textJustify mt-5">
            <p>{articleData.longDesc}</p>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Article;
