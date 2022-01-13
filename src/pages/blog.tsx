import React from "react";
import Layout from "../components/Layout";

interface BlogProps {}

const Blog: React.FC<BlogProps> = () => {
  return (
    <Layout pageTitle="Blog">
      <div className="min-h-screen px-20 py-24 bg-milk">
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-pink-400 sm:text-5xl sm:leading-none">
          Blog{" "}
          <span className="relative px-1">
            <div className="absolute inset-x-0 bottom-0 h-2 transform -skew-x-12 bg-pink-500" />
            <span className="relative inline-block">Articles</span>
          </span>
        </h2>
        <p className="font-bold text-lg pt-4 pb-8">
          Articles featuring Project HeartCode
        </p>
      </div>
    </Layout>
  )
}

export default Blog;