import { FocusEvent, KeyboardEvent, ChangeEvent, MouseEvent } from 'react';
import NewItem from '../NewItem';

const List = ({
  items,
  views,
  handleListItemComplete,
  handleListItemEditOnKeyUp,
  handleListItemRemove,
  handleListItemRemovedRestore,
  handleNewItemInputOnBlur,
  handleNewItemInputOnChange,
  handleNewItemInputOnKeyUp,
  setListItemEditInputRef,
  setNewItemInputRef,
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
  handleListItemComplete: (event: MouseEvent<HTMLDivElement>) => void;
  handleListItemEditOnKeyUp: (event: KeyboardEvent<HTMLInputElement>) => void;
  handleListItemRemove: (event: MouseEvent<HTMLDivElement>) => void;
  handleListItemRemovedRestore: (event: MouseEvent<HTMLDivElement>) => void;
  handleNewItemInputOnBlur: (event: FocusEvent<HTMLInputElement>) => void;
  handleNewItemInputOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleNewItemInputOnKeyUp: (event: KeyboardEvent<HTMLInputElement>) => void;
  setListItemEditInputRef: (element: HTMLInputElement | null) => void;
  setNewItemInputRef: (element: HTMLInputElement | null) => void;
}) => {
  const { selected } = views;
  const { completed, inProgress, removed } = items;
  return (
    <div className='list'>
      <ul className={[
        'list__inProgress',
        (selected === 'inProgress') && 'list__inProgress--show'
      ].filter(className => Boolean(className)).join(" ")
      }>
        {inProgress.map((item, index) => (
          <li
            className={[
              "list__inProgress-item",
              completed.includes(item) && "list__inProgress--completed",
              removed.includes(item) && "list__inProgress--removed"
            ].filter(className => Boolean(className)).join(" ")}
            key={index}
          >
            <div
              className='list__inProgress__item__complete'
              data-index={index}
              onClick={handleListItemComplete}
            >
              <div className='list__inProgress__item__complete--default'>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12.5" cy="12.5" r="11.5" stroke="#CBCBCB" strokeWidth="2" />
                </svg>

              </div>
              <div className='list__inProgress__item__complete--hovered'>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12.5" cy="12.5" r="11.5" fill="#7C7C7C" stroke="#CBCBCB" strokeWidth="2" />
                </svg>

              </div>
            </div>
            <div className='list__inProgress__item__edit'>
              <input
                type="text"
                data-index={index}
                defaultValue={item}
                onKeyUp={handleListItemEditOnKeyUp}
                ref={setListItemEditInputRef}
              />
            </div>
            <div
              className='list__inProgress__item__remove'
              data-index={index}
              onClick={handleListItemRemove}
            >
              <div className='list__inProgress__item__remove--default'>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.6776" cy="17.6777" r="11.5" transform="rotate(45 17.6776 17.6777)" fill="#ffffff" stroke="#EB3D3D" strokeWidth="2" />
                  <rect x="21.2131" y="12.9636" width="1.66667" height="11.6667" rx="0.833333" transform="rotate(45 21.2131 12.9636)" fill="#EB3D3D" />
                  <rect x="12.9636" y="14.1422" width="1.66667" height="11.6667" rx="0.833333" transform="rotate(-45 12.9636 14.1422)" fill="#EB3D3D" />
                </svg>
              </div>
              <div className='list__inProgress__item__remove--hovered'>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.6776" cy="17.6777" r="11.5" transform="rotate(45 17.6776 17.6777)" fill="#EB3D3D" stroke="#EB3D3D" strokeWidth="2" />
                  <rect x="21.2131" y="12.9636" width="1.66667" height="11.6667" rx="0.833333" transform="rotate(45 21.2131 12.9636)" fill="white" />
                  <rect x="12.9636" y="14.1422" width="1.66667" height="11.6667" rx="0.833333" transform="rotate(-45 12.9636 14.1422)" fill="white" />
                </svg>
              </div>
            </div>
          </li>
        ))}
        <NewItem
          handleNewItemInputOnBlur={handleNewItemInputOnBlur}
          handleNewItemInputOnChange={handleNewItemInputOnChange}
          handleNewItemInputOnKeyUp={handleNewItemInputOnKeyUp}
          setNewItemInputRef={setNewItemInputRef}
        />
      </ul>
      <ul className={[
        'list__completed',
        (selected === 'completed') && 'list__completed--show'
      ].filter(className => Boolean(className)).join(" ")}
      >
        {completed.map((item, index) => (
          <li
            className='list__completed__item'
            key={index}
          >
            <div className='list__completed__item--check'>
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12.5" cy="12.5" r="12" fill="#4E4E4E" stroke="#4E4E4E" />
                <path d="M6.25 12.4999L10.4167 16.6666" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.4166 16.6667L18.75 8.33334" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className='list__completed__item__label'>
              {item}
            </div>
          </li>
        ))}
      </ul>
      <ul className={[
        'list__removed',
        (selected === 'removed') && 'list__removed--show'
      ].filter(className => Boolean(className)).join(" ")}
      >
        {removed.map((item, index) => (
          <li
            className='list__removed__item'
            key={index}
          >
            <div
              data-index={index}
              className="list__removed__item__restore"
              onClick={handleListItemRemovedRestore}
            >
              <div className='list__removed__item__restore--default'>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12.5" cy="12.5" r="11.5" fill="white" stroke="#3D82EB" strokeWidth="2" />
                  <rect x="11.6666" y="6.66667" width="1.66667" height="11.6667" rx="0.833333" fill="#3D82EB" />
                  <rect x="6.66663" y="13.3333" width="1.66667" height="11.6667" rx="0.833333" transform="rotate(-90 6.66663 13.3333)" fill="#3D82EB" />
                </svg>
              </div>
              <div className='list__removed__item__restore--hovered'>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12.5" cy="12.5" r="11.5" fill="#3D82EB" stroke="#3D82EB" strokeWidth="2" />
                  <rect x="11.6666" y="6.66667" width="1.66667" height="11.6667" rx="0.833333" fill="white" />
                  <rect x="6.66663" y="13.3333" width="1.66667" height="11.6667" rx="0.833333" transform="rotate(-90 6.66663 13.3333)" fill="white" />
                </svg>
              </div>
            </div>
            <div className='list__removed__item__label'>
              {item}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List;