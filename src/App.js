import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Post from "./components/pages/Post/Post";
import PostAdd from "./components/pages/PostAdd/PostAdd";
import PostEdit from "./components/pages/PostEddit/PostEddit";
import NotFound from "./components/pages/NotFound/NotFound";
import About from "./components/pages/About/About";
import { Container } from "react-bootstrap";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import Categories from "./components/pages/Categories/Categories";
import CategoriesPost from "./components/pages/CategoriesPost/CategoriesPost";


function App() {
  return (
    
    <Container>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/add" element={<PostAdd />} />
          <Route path="/post/edit/:id" element={<PostEdit />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:category" element={<CategoriesPost />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}



export default App;
