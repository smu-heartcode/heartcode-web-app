import React from "react";
import Layout from "../components/Layout";
import blogData from "../components/Data/blogData";
import moment from "moment";

interface BlogProps {}

const Blog: React.FC<BlogProps> = () => {
  const { posts } = blogData;

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
        <div className="mb-10 border-t border-b divide-y">
          {posts.map((post) => (
            <div key={post.title} className="grid py-8 sm:grid-cols-4">
              <div className="mb-4 sm:mb-0">
                <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                  <div
                    className="transition-colors duration-200 text-pink-600"
                    aria-label="Category"
                  >
                    {post.author}
                  </div>
                  <p className="text-gray-600">{moment(post.date).format("MMMM DD YYYY")}</p>
                </div>
              </div>
              <div className="sm:col-span-3 lg:col-span-2">
                <div className="mb-3">
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Article"
                    className="inline-block text-black transition-colors duration-200 hover:text-pink-400"
                  >
                    <p className="text-2xl font-extrabold leading-none sm:text-3xl xl:text-3xl">
                      {post.title}
                    </p>
                  </a>
                </div>
                <p className="text-gray-700">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
