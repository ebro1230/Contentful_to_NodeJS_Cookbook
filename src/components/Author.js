const Author = () => {

  const author = { id: 1, name: "John Doe", age: "30" }
  return (
    <div className="author"
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        width: "200px",
      }}>
      <h2>Author</h2>
      <p>{author.name}</p>
      <p>{author.age}</p>
    </div>
  );
}

export default Author;