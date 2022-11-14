import React from 'react'
import {Icon, Title, Content} from "./index";

const BlogList = (props) => {
  return (
    <>
      <Icon />
      <Title title={props.title} />
      <Content content={props.content} />
    </>
  )
}

export default BlogList
