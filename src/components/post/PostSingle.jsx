import { Link,useParams } from "react-router-dom";
import "./postSingle.css";
import React from "react";
import "./post.css";

export default function PostSingle() {
  const { id } = useParams();
  const [data, setData] = React.useState(null);

  //TODO fetch by id

  React.useEffect(() => {
    fetch("/api/post/"+ id)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const postSinglePage = (post) => {
    return (
      <li key={post["id"]} className="post">
        <img
          className="postImg"
          src={!post ? "Loading..." : post["imageLink"]}
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
            <p>{!post ? "Loading..." : post["title"]}</p>
          </span>
          <hr />
          <span className="postDate">
            <p>{!post ? "Loading..." : post["createdAt"]}</p>
          </span>
        </div>
        <span className="postDesc">
          <p>{!post ? "Loading..." : post["body"]}</p>
        </span>
      </li>
    );
  };

  const postPageMain = (post) => {
    return (
      <div className="postContainer">
        {!post ? "<p>Loading...</p>" : postSinglePage(post)}
      </div>
    );
  }

  return postPageMain(data);
}
