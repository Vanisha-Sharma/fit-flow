import React from "react";
import FeaturedBlog from "./FeaturedBlog";
import FormTipsSection from "./FormTipsSection";
import ImageCarousel from "./ImageCarousel";
import BlogArticle from "./BlogArticle";

const Blog = () => {
  return (
    <>
      <FeaturedBlog />
      <BlogArticle />
      <ImageCarousel />
      <FormTipsSection />
    </>
  );
};

export default Blog;
