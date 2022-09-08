import './index.scss';

const NewItem = () => {
  return (
    <div className='newItem'>
      <div className='newItem__create'>
        <div className='newItem__create__icon'>
          <div className='newItem__create__icon--default'>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12.5" cy="12.5" r="11.5" fill="white" stroke="#3D82EB" stroke-width="2" />
              <rect x="11.6666" y="6.66667" width="1.66667" height="11.6667" rx="0.833333" fill="#3D82EB" />
              <rect x="6.66663" y="13.3333" width="1.66667" height="11.6667" rx="0.833333" transform="rotate(-90 6.66663 13.3333)" fill="#3D82EB" />
            </svg>

          </div>
          <div className='newItem__create__icon--hovered'>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12.5" cy="12.5" r="11.5" fill="#3D82EB" stroke="#3D82EB" strokeWidth="2" />
              <rect x="11.6666" y="6.66667" width="1.66667" height="11.6667" rx="0.833333" fill="white" />
              <rect x="6.66663" y="13.3333" width="1.66667" height="11.6667" rx="0.833333" transform="rotate(-90 6.66663 13.3333)" fill="#3D82EB" />
            </svg>

          </div>
        </div>
      </div>
    </div>
  )
}

export default NewItem;