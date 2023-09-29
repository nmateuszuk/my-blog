import { Link } from "react-router-dom";
import "./post.css";
import React from 'react'

export default function PostPage() {

  const [data, setData] = React.useState(null);
  
  React.useEffect(() => {
      fetch("/api/post/latest")
        .then((response) => response.json())
        .then((data) => setData(data))
    }, []);

  const postPage = (post) => {
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
          <Link to="/post/abc" className="link">
          <p>{!post ? "Loading..." : post["title"]}</p>
          </Link>
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
  );}

  // TODO work with this as in example
  // const postsPage = ({posts}) => {}
  //
  // const postsPage = (data) => (
  //     <ul className='main-container'>
  //       {data.map(post => postPage(post))}
  //     </ul>
  // );

  return (
  <ul className='main-container'>
      {!data ? "<p>Loading...</p>" : data.map(post => postPage(post))}
  </ul>)
};
