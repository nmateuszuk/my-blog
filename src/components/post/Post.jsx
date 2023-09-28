import { Link } from "react-router-dom";
import "./post.css";
import React from 'react'

export default function Post() {

  const [data, setData] = React.useState(null);
  

  React.useEffect(() => {
      fetch("/api/post")
        .then((response) => response.json())
        .then((data) => setData(data))
    }, []);

  return (
    
    <div className="post">
      <img
        className="postImg"
        src={!data ? "Loading..." : data["imageLink"]}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
          <p>{!data ? "Loading..." : data["title"]}</p>
          </Link>
        </span>
        <hr />
        <span className="postDate">
          <p>{!data ? "Loading..." : data["createdAt"]}</p>
          </span>
      </div>
      <p className="postDesc">
      <p>{!data ? "Loading..." : data["body"]}</p>
      </p>
    </div>
  );
}