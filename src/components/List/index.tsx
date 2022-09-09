import { FocusEvent, KeyboardEvent, ChangeEvent } from 'react';
import NewItem from '../NewItem';

const List = ({
  handleNewItemInputOnBlur,
  handleNewItemInputOnChange,
  handleNewItemInputOnKeyUp,
  setNewItemInputRef,
}: {
  handleNewItemInputOnBlur: (event: FocusEvent<HTMLInputElement>) => void;
  handleNewItemInputOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleNewItemInputOnKeyUp: (event: KeyboardEvent<HTMLInputElement>) => void;
  setNewItemInputRef: (element: HTMLInputElement | null) => void;
}) => {
  return (
    <div className='list'>
      <div className='list__inProgress'>
        <NewItem
          handleNewItemInputOnBlur={handleNewItemInputOnBlur}
          handleNewItemInputOnChange={handleNewItemInputOnChange}
          handleNewItemInputOnKeyUp={handleNewItemInputOnKeyUp}
          setNewItemInputRef={setNewItemInputRef}
        />
      </div>
      <div className='list__completed'>

      </div>
      <div className='list__removed'>

      </div>

      List
    </div>
  )
}

export default List;