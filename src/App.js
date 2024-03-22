import Header from './Header';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import AddItem from './AddItem';

function App() {
  const[items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')));

  const setAndSave = (newItems) => {
    setItems(newItems);
      localStorage.setItem('shoppingList', JSON.stringify(newItems));
  } 

  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id, checked: false, items: item}
    const listItems = [...items, myNewItem]
    setAndSave(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    console.log(newItem);
    addItem(newItem)
    setNewItem('')
  }

  const handleCheck = (id) => {
    const listItems = items.map((items) => items.id === id ? { ...items, checked: !items.checked} : items);
    setAndSave(listItems)
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSave(listItems)
  }
  
  return (
    <div className="App">
      <Header title = 'Groceries'/>
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <SearchItem 
        search = {search}
        setSearch = {setSearch}
      />
      <Content
        items = {items.filter((items) => (items.items).toLowerCase().includes(search.toLowerCase()))}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      <Footer length = {items.length} />
    </div>
  );
}

export default App;
 