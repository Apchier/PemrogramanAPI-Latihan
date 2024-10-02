import CardList from "../components/Posts/CardList"
import ViewUserButton from "../components/Posts/ViewUserButton"

const base_url = "https://jsonplaceholder.typicode.com/posts"
interface Iposts {
    userId: number
    id: number
    title: string
    body: string
}

const Posts = async () => {
    const response = await fetch(base_url, {
        cache: "no-store",
    })
    const posts: Iposts[] = await response.json()

    return (
        <div>
        <p>{new Date().toLocaleTimeString()}</p>
            <h1 className="text-fuchsia-500 text-xl">Postingan Page</h1>
            {posts.map((post) => {
                return (
                    <CardList key={post.id}>
                        <p>{post.id}</p>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                        <ViewUserButton userId={post.userId}/>
                    </CardList>
                )
            })}
        </div>
    )
}

export default Posts