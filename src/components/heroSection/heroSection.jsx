import "./heroSection.css";
import headerIntroImg from "../../assets/img/header-intro.png";

function HeroSection() {
  return (
    <div className="textcolor">
      <section className="heroSecSpacing">
        <div className="container myHero rounded rounded-4">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 ps-lg-5 mx-lg-auto">
              <h3 className="fs-1 lalezarc text-center text-md-start">
               به دنیایی از مقالات پر کاربرد و متنوع خوش آمدید !
              </h3>
              <p className="my-5">
                دنیایی از مقالات رایگان و متنوع ! توسط استاد هایی باتجربه و
                باورنکردنی . برای ورود به دنیای برنامه نویسی همین حالا مشفول
                جست و جوی مقالات در وب سایت پرهام آرتیکل شوید!
              </p>
              <div className="text-center text-md-start">
                <a href="#articles">
                  <button className="btn btn-primary rounded-4 px-4">
                    مشاهده مقالات
                  </button>
                </a>
                <button className="btn btn-outline-primary rounded-4 px-4 my-3 ms-3 ms-md-0 ms-lg-3">
                  نظرات دانشجویان
                </button>
              </div>
            </div>
            <div className="col-12 col-md-6 offset-md-1">
              <img src={headerIntroImg} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
