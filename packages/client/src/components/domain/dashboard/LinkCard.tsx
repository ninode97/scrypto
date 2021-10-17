import React from 'react'

interface ILinkCardProps {
  title?: string
  description?: string
  label?: string
  action?: () => void
  image?: string
  cardClass?: string
  cardBg?: string
  btnClass?: string
}

const LinkCard: React.FC<ILinkCardProps> = ({
  title = 'title',
  description = 'desc',
  label = 'label',
  action = () => null,
  image = '/placeholder.jpg',
  cardClass = 'card shadow-sm bg-neutral text-accent-content w-1/5 m-2 ml-12 p-1',
}) => {
  return (
    <div className={`${cardClass}`}>
      <figure>
        <img src={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button onClick={action} className={`btn btn-secondary`}>
            {label}
          </button>
        </div>
      </div>
    </div>
  )
}

export default LinkCard
