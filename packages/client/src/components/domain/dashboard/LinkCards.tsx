import React from 'react'

interface ILinkCardsProps {
  children: JSX.Element | JSX.Element[] | null
}

const LinkCards: React.FC<ILinkCardsProps> = ({ children }) => {
  return <div className="flex flex-center">
      <div className="flex flex-wrap">{children}</div>
  </div>
}

export default LinkCards
