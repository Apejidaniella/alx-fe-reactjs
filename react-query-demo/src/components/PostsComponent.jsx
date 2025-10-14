import React from 'react'
import { useQuery } from 'react-query'

function PostsComponent() {
   const { isPending, isLoading, isError, data:fetchPosts, refetch } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
        res.json(),
      ),
  }, {cacheTime: 2, staleTime: 2, refetchOnWindowFocus: false, keepPreviousData: false})
    console.log(data)
  if (isLoading) return 'Loading...'

  if (isError) return 'An error has occurred: ' + error.message

  return (
    <div>
      {fetchPosts.map(post => (<div key={post.id}>
        <h1>{post.name}</h1>
        <p>{post.description}</p>
      </div>))}
      <button onClick={() => refetch()}>Refetch</button>
    </div>
  )
}


export default PostsComponent;