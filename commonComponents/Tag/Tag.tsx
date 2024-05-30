import React, { ReactNode } from 'react'


const Tag = ({children}:{children: ReactNode}) => {
  return (
    <span className="border border-cyan-600 rounded-full px-3 py-2 text-cyan-600">{children}</span>
  )
}

Tag.propTypes = {}

export default Tag