import { Link,useParams } from "react-router-dom";
import "./postSingle.css";
import React from "react";
import "./post.css";
import { CommentsSection} from '@slydragonn/react-easy-comments'
import Comments from '../helper/comments'
import User from '../helper/user'


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
        <h1>My Comments Section</h1>
      <CommentsSection
        currentUser={{
          id: User.id,
          name: User.name,
          likes: User.likes,
          dislikes: User.dislikes,
          avartarUrl: User.avatarUrl
        }}
        initialComments={[
          Comments,
          (commentElement) => ({
            commentId: commentElement.id,
            userId: commentElement.userId,
            username: commentElement.username,
            comment: commentElement.text,
            creationDate: commentElement.date,
            likes: commentElement.likes,
            dislikes: commentElement.dislikes,
            avatarUrl: commentElement.image,
            profileLink: commentElement.link
          })
        ]}
        listeners={{
          onSubmit: (comment) => (console.log(comment)),
          onUpdate: (comment) => (console.log(comment)),
          onDelete: (comment) => (console.log(comment))
        }}
        options={{}}
      />
      </div>
    );
  }

  return postPageMain(data);
}
