import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CategoryEntry from './CategoryEntry.jsx';
import languageLogo from '../../dist/assets/language.png'

const App = () => {

  const [language, setLanguage] = useState(localStorage.getItem('language') || '');
  const [categoryList, setCategoryList] = useState([]);

  const loadCategories = () => {
    axios.get('/api/getCategories')
    .then(({data}) => setCategoryList(data));
  }

  const resetLanguage = () => {
    localStorage.removeItem('language');
    setLanguage('');
  }

  const handleLanguage = (language) => {
    localStorage.setItem('language',language);
    setLanguage(language);
  }

  useEffect(() => {
    loadCategories();
  },[]);

  if (language === '') {
    return (
      <>
        <h1>ChoiGoZip</h1>
        <h3>SELECT A LANGUAGE</h3>
        <button onClick={() => handleLanguage('kor')}>한국어</button>
        <button onClick={() => handleLanguage('eng')}>English</button>
      </>
    )
  }

  return (
    <>
      <div className='logo'>ChoiGoZip</div>
      <img onClick={resetLanguage} src={languageLogo}/>
      {categoryList.map((category, ind) => (<CategoryEntry key={ind} category={category} language={language}/>))}
    </>
  )
}

export default App;