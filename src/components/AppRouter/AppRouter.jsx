import { Routes, Route } from "react-router-dom";
import { AddPost, FullPost, Home, Login, Registration } from "../../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts/:id" element={<FullPost />} />
      <Route path="/add-post" element={<AddPost />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
    </Routes>
  );
};
