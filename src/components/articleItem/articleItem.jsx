import "./articleItem.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdOutlineAccessTime } from "react-icons/md";
import { TiArrowLeftThick } from "react-icons/ti";
import { Link } from "react-router-dom";

function ArticleItem({ id, image, title, text, writter, readingTime }) {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="py-2">{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Link className="text-decoration-none myarticleitemLink" to={`/article/${id}`}>
          <span className="readmore">
            <span>ادامه مقاله</span>
            <TiArrowLeftThick />
          </span>
        </Link>
      </Card.Body>
      <hr />
      <Card.Footer className="d-flex justify-content-between align-items-center py-3">
        <span className="d-flex justify-content-center align-items-center">
          {" "}
          نویسنده : {writter}
        </span>
        <span className="d-flex justify-content-between align-items-center">
          <MdOutlineAccessTime size="20px" className="mx-1" /> {readingTime}{" "}
          دقیقه
        </span>
      </Card.Footer>
    </Card>
  );
}

export default ArticleItem;
