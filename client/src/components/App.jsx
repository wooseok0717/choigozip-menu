import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CategoryEntry from './CategoryEntry.jsx';
import languageLogo from '../../dist/assets/language.png';

const App = () => {

  const [language, setLanguage] = useState(localStorage.getItem('language') || '');
  const [categoryList, setCategoryList] = useState([]);

  const loadCategories = () => {
    axios.get('/api/getCategories')
    .then(({data}) => setCategoryList(data));
  };

  const loadPromos = () => {
    axios.get('/api/promos')
    .then(({data}) => console.log(data));
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
    loadPromos();
  },[]);

  if (language === '') {
    return (
      <>
        <div className='logo'>ChoiGoZip</div>
        <div className='lang-prompt'>SELECT A LANGUAGE</div>
        <div className='btn-ctn'>
          <button onClick={() => handleLanguage('kor')} className='btn-lang'>한국어</button>
          <button onClick={() => handleLanguage('eng')} className='btn-lang'>English</button>
        </div>
      </>
    )
  }

  return (
    <>
      <div className='logo'>ChoiGoZip</div>
      {/* <img onClick={resetLanguage} src={languageLogo}/> */}
      <div className='lang-btn-ctn'>
        <button className='language-btn' onClick={resetLanguage}>{language === 'kor' ? '언어 설정' : 'Language setting'}</button>
      </div>
      {categoryList.map((category, ind) => (<CategoryEntry key={ind} category={category} language={language}/>))}
    </>
  )
}

export default App;