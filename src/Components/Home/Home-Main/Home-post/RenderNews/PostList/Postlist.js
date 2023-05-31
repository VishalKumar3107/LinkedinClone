import "./Postlist.css";

export default function PostList({ posts }) {
    
    return (
        <div className="RenderPost">
            {posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    {post.image && <img src={URL.createObjectURL(post.image)} alt="post" />}
                </div>
            ))}
        </div>
    );
}