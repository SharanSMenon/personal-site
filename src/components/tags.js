import React from 'react'

const Tags = ({ tags }) =>
  tags?.length > 0 && (
    <small className="">
      {tags.map((tag) => (
        <div key={tag} className="bg-gradient-to-r from-cyan-500 to-blue-500 inline-block mr-2 px-2 py-1 font-medium capitalize rounded-lg text-white">
          {tag}
        </div>
      ))}
    </small>
  )

export default Tags
