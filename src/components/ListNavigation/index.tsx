import { MouseEvent } from 'react'

const ListNavigation = (
  {
    items,
    views,
    handleListNavigationEllipsisClick,
    handleListNavigationItemClick,
  }: {
    items: {
      completed: (string | undefined)[];
      inProgress: (string | undefined)[];
      removed: (string | undefined)[];
    },
    views: {
      open: boolean;
      selected: string;
    },
    handleListNavigationEllipsisClick: (event: MouseEvent<HTMLDivElement>) => void;
    handleListNavigationItemClick: (event: MouseEvent<HTMLLIElement>) => void;
  }) => {
  const { open, selected } = views
  return (
    <div className={[
      "listnavigation",
      open && "listnavigation--open",
    ].filter(className => Boolean(className)).join(" ")
    }>
      <div
        className='listnavigation__ellipsis'
        onClick={handleListNavigationEllipsisClick}
      >
        <div className='listnavigation__ellipsis--default'>
          <svg width="19" height="5" viewBox="0 0 19 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2.83337" cy="2.5" r="2.5" fill="#C4C4C4" />
            <circle cx="9.5" cy="2.5" r="2.5" fill="#C4C4C4" />
            <circle cx="16.1667" cy="2.5" r="2.5" fill="#C4C4C4" />
          </svg>
        </div>
        <div className='listnavigation__ellipsis--hovered'>
          <svg width="19" height="5" viewBox="0 0 19 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2.83337" cy="2.5" r="2.5" fill="#4E4E4E" />
            <circle cx="9.5" cy="2.5" r="2.5" fill="#4E4E4E" />
            <circle cx="16.1667" cy="2.5" r="2.5" fill="#4E4E4E" />
          </svg>
        </div>
      </div>
      <ul className='listnavigation__items'>
        {Object.getOwnPropertyNames(items).map(viewsName =>
          <li
            data-viewname={viewsName}
            key={viewsName}
            className={[
              "listnavigation__items__name",
              (selected === viewsName) && "listnavigation__items__name--selected"
            ].filter(className => Boolean(className)).join(" ")
            }
            onClick={handleListNavigationItemClick}
          >
            {viewsName === "inProgress" ? "in progress" : viewsName}
          </li>
        )}
      </ul>
    </div>
  )
}

export default ListNavigation;