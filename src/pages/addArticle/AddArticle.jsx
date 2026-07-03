import BottomNav from "../../components/navbar/bottomNav";
import Header from "../../components/navbar/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import DbHttpAddress from "../../dbHttpAddress";
import "./AddArticle.css";


function AddArticle() {
  let [formData, setFormData] = useState({
    title: "",
    desc: "",
    image: "",
    writter: "",
    category: "",
    readingTime: "",
    longDesc: "",
  });

  const resetFrom = () => {
    setFormData({
      title: "",
      desc: "",
      image: "",
      writter: "",
      category: "",
      readingTime: "",
      longDesc: "",
    });
  };

  const formChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const dataAddHandler = () => {
    if (
      formData.title?.trim() &&
      formData.desc?.trim() &&
      formData.writter?.trim() &&
      formData.category?.trim() &&
      formData.image?.trim() &&
      formData.readingTime?.trim() &&
      formData.longDesc?.trim()
    ) {
      axios
        .post(`${DbHttpAddress}/articles`, formData)
        .then((response) => {
          if (response.status === 201) {
            Swal.fire({
              icon: "success",
              title: "ثبت شد",
              text: "اطلاعات با موفقیت در دیتابیس ثبت شد",
              timer: 1500,
              timerProgressBar: true,
              background: "rgb(57, 62, 70)",
              color: "#d4d1d1",
              showConfirmButton: false,
              position: "top-start",
              width: "300px",
            });
          }
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "مشکلی پیش آمده",
            text: "مقاله ساخته نشد",
            background: "rgb(57, 62, 70)",
            color: "#d4d1d1",
            confirmButtonColor: "#0d6efd",
            customClass: "alertfont",
          });
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "لطفا تمام فیلد ها را کامل نمایید",
        background: "rgb(57, 62, 70)",
        color: "#d4d1d1",
        confirmButtonColor: "#0d6efd",
      });
    }

    resetFrom();
  };

  let navigate = useNavigate()

  const cancleHandler = () => {
    navigate("/")
  }

  return (
    <>
      <Header />
      <BottomNav />

      <Container className="pt-sm-4 AddArticleSpacing">
        <div className="formContainer mx-lg-auto">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="textcolor">عنوان مقاله</Form.Label>
              <Form.Control
                value={formData.title}
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
                value={formData.desc}
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
                value={formData.longDesc}
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
                value={formData.writter}
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
                value={formData.category}
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
                value={formData.image}
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
                value={formData.readingTime}
                name="readingTime"
                onChange={formChangeHandler}
                className="text-start myInputs"
                type="number"
                placeholder="مدات زمان خواندن"
              />
            </Form.Group>

            <Button
              onClick={dataAddHandler}
              className="my-4"
              variant="primary"
              type="button"
            >
              ساخت مقاله
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

export default AddArticle;
