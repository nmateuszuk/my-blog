import React from 'react'

function Blog(){

    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api/post")
          .then((response) => response.json())
          .then((data) => setData(data))
      }, []);

      return (
        <div className="App">
          <header className="App-header">
            <p>{!data ? "Loading..." : data["title"]}</p>
            <p>{!data ? "Loading..." : data["body"]}</p>
            <p>{!data ? "Loading..." : data["createdAt"]}</p>
            <p>{!data ? "Loading..." : data["id"]}</p>
          </header>
        </div>
      );
}

export default Blog;