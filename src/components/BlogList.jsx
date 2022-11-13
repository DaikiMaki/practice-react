import React from 'react'

const BlogList = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </>
  )
}

export default BlogList
