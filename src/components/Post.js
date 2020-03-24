import React, { useEffect, useState } from "react";
import { getPost } from "../service/services";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

const Post = () => {
  const [listPost, setListPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getListPost = async () => {
    await getPost().then(res => {
      if (res.status === 200) {
        setListPost(res.data);
        setIsLoading(false);
      }
    });
  };
  const renderListPost = () => {
    let list = [];
    listPost.map(item => {
      list.push(
        <div className="list" key={item._id}>
          <div className="content">
            <p>{item.text}</p>
          </div>
          <div className="author">Author: {item.name}</div>
        </div>
      );
      return item;
    });
    return list;
  };

  useEffect(() => {
    getListPost();
  }, []);

  return (
    <div>
      <Header />
      <>
        {isLoading ? (
          <div className="isLoading">
            <div className="spinner-border text-warning"></div>
          </div>
        ) : (
          <div className="container mt-5 pt-5">
            <div className="post mt-5 pt-5">{renderListPost()}</div>
          </div>
        )}
      </>
      <Footer />
    </div>
  );
};
export default Post;
