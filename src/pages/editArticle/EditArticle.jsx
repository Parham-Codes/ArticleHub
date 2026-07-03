import { useEffect, useState } from "react";
import BottomNav from "../../components/navbar/bottomNav";
import Header from "../../components/navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import Footer from "../../components/footer/Footer";
import DbHttpAddress from "../../dbHttpAddress";
import './EditArticle.css'

function EditArticle() {
  let [articleData, setArticleData] = useState({
    title: "",
    desc: "",
    image: "",
    writter: "",
    category: "",
    readingTime: "",
    longDesc: "",
  });

  let navigate = useNavigate();

  let myArticleId = useParams().articleId;

  useEffect(() => {
    axios
      .get(`${DbHttpAddress}/articles/${myArticleId}`)
      .then((response) => setArticleData(response.data));
  }, [myArticleId]);

  const formChangeHandler = (e) => {
    setArticleData({ ...articleData, [e.target.name]: e.target.value });
  };

  const dataEditHandler = () => {
    Swal.fire({
      title: "آیا می خواهید مقاله تغییر کند ؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "بله ویرایش کن!",
      cancelButtonText: "منصرف شدم",
      background: "rgb(57, 62, 70)",
      color: "#d4d1d1",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(`${DbHttpAddress}/articles/${myArticleId}`, articleData)
          .then(navigate(`/article/${myArticleId}`))
          .then(() => {
            Swal.fire({
              title: "مقاله با موفقیت ویرایش شد",
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
              }).then(() => navigate(`/article/${myArticleId}`));
            }
          });
      }
    });

  };

  const cancleHandler = () => {
    navigate(`/article/${myArticleId}`)
  }

  return (
    <>
      <Header />
      <BottomNav />

      <Container className="pt-sm-4 editArticleSpacing">
        <div className="formContainer mx-lg-auto ">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="textcolor">عنوان مقاله</Form.Label>
              <Form.Control
                value={articleData.title}
                name="title"
                onChange={formChangeHandler}
                className="text-start myInputs"
                type="text"
                placeholder="عنوان مقاله را وارد کنید"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="textcolor">توضیح کوتاه</Form.Label>
              <Form.Control
                value={articleData.desc}
                name="desc"
                onChange={formChangeHandler}
                className="text-start myInputs"
                type="text"
                placeholder="توضیح کوتاه"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="textcolor">متن مقاله</Form.Label>
              <Form.Control
                value={articleData.longDesc}
                name="longDesc"
                onChange={formChangeHandler}
                className="text-start myInputs"
                type="textArea"
                as="textarea"
                placeholder="متن مقاله"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="textcolor">نویسنده مقاله</Form.Label>
              <Form.Control
                value={articleData.writter}
                name="writter"
                onChange={formChangeHandler}
                className="text-start myInputs"
                type="text"
                placeholder="نویسنده مقاله"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="textcolor">دسته بندی مقاله</Form.Label>
              <Form.Control
                value={articleData.category}
                name="category"
                onChange={formChangeHandler}
                className="text-start myInputs"
                type="text"
                placeholder="دسته بندی مقاله"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="textcolor">عکس مقاله</Form.Label>
              <Form.Control
                value={articleData.image}
                name="image"
                onChange={formChangeHandler}
                className="text-start myInputs"
                type="text"
                placeholder="عکس مقاله"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="textcolor">مدت زمان خواندن</Form.Label>
              <Form.Control
                value={articleData.readingTime}
                name="readingTime"
                onChange={formChangeHandler}
                className="myInputs"
                type="number"
                placeholder="مدات زمان خواندن"
              />
            </Form.Group>

            <Button
              onClick={dataEditHandler}
              className="my-4"
              variant="primary"
              type="button"
            >
              ویرایش اطلاعات مقاله
            </Button>
            <Button onClick={cancleHandler} type="button" className="mx-4" variant="secondary">
              بیخیال
            </Button>
          </Form>
        </div>
      </Container>
      
      <Footer />

    </>
  );
}

export default EditArticle;
