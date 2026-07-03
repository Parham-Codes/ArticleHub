import Home from "./pages/home/Home";
import Article from "./pages/article/Article";
import About from "./pages/about/About";
import AddArticle from "./pages/addArticle/AddArticle";
import EditArticle from "./pages/editArticle/EditArticle";
import NotFound from "./components/not-found/notFound";

const Routing = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/add-article", element: <AddArticle /> },
  { path: "/article/:articleId", element: <Article /> },
  { path: "/edit-article/:articleId", element: <EditArticle /> },
  { path: "/not-found" , element: <NotFound />},
  {path: "*" , element: <NotFound />
  }
];

export default Routing;
