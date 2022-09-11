import { FocusEvent, KeyboardEvent, ChangeEvent, MouseEvent } from 'react';
import NewItem from '../NewItem';

const List = ({
  items,
  views,
  handleListItemComplete,
  handleNewItemInputOnBlur,
  handleNewItemInputOnChange,
  handleNewItemInputOnKeyUp,
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
  handleNewItemInputOnBlur: (event: FocusEvent<HTMLInputElement>) => void;
  handleNewItemInputOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleNewItemInputOnKeyUp: (event: KeyboardEvent<HTMLInputElement>) => void;
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
          </li>
        ))}
        <NewItem
          handleNewItemInputOnBlur={handleNewItemInputOnBlur}
          handleNewItemInputOnChange={handleNewItemInputOnChange}
          handleNewItemInputOnKeyUp={handleNewItemInputOnKeyUp}
          setNewItemInputRef={setNewItemInputRef}
        />
      </ul>
      <div className='list__completed'>

      </div>
      <div className='list__removed'>

      </div>

      List
    </div>
  )
}

export default List;