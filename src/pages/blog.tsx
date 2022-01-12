import React from "react";
import Layout from "../components/Layout";

interface BlogProps {}

const Blog: React.FC<BlogProps> = () => {
  return (
    <Layout pageTitle="Blog">
      <div className="min-h-screen px-20 py-24 bg-milk">
        Hello World this is a blog page
      </div>
    </Layout>
  )
}

export default Blog;