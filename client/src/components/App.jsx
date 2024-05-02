import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CategoryEntry from './CategoryEntry.jsx';
import languageLogo from '../../dist/assets/language.png';
import PromotionPage from './PromotionPage.jsx';

const App = () => {

  const [language, setLanguage] = useState(localStorage.getItem('language') || '');
  const [categoryList, setCategoryList] = useState([]);
  const [openPromoPage, setOpenPromoPage] = useState(true);

  const loadCategories = () => {
    axios.get('/api/getCategories')
    .then(({data}) => setCategoryList(data));
  };

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
      {openPromoPage && <PromotionPage closeModal={() => setOpenPromoPage(false)} language={language}/>}
    </>
  )
}

export default App;