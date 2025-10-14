import React from 'react'
import { useQuery } from 'react-query'

function PostsComponent() {
   const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
        res.json(),
      ),
  })
    console.log(data)
  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      {data.map(post => (<div key={post.id}>
        <h1>{post.name}</h1>
        <p>{post.description}</p>
      </div>))}
    </div>
  )
}


export default PostsComponent;