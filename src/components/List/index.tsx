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
    <div>
      <NewItem 
      handleNewItemInputOnBlur={handleNewItemInputOnBlur}
      handleNewItemInputOnChange={handleNewItemInputOnChange}
      handleNewItemInputOnKeyUp={handleNewItemInputOnKeyUp}
      setNewItemInputRef={setNewItemInputRef}
      />
      List
    </div>
  )
}

export default List;