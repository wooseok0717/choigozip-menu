import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MenuEntry from './MenuEntry.jsx';
import {capitalize} from './helperfn';

const CategoryEntry = ({category, language}) => {

  const [menuList, setMenuList] = useState([]);

  const loadMenuList = () => {
    axios.get(`/api/loadMenuList/?id=${category.id}`)
    .then(({data}) => setMenuList(data));
  }

  useEffect(() => {
    loadMenuList();
  },[])

  return (
    <>
      <div className='category-name'>{language === 'kor' ? category.kor_name : capitalize(category.eng_name)}</div>
      <div className='category-container'>
        {menuList.map((menu, ind) => (<MenuEntry key={ind} menu={menu} lang={language}/>))}
      </div>
    </>
  )
}

export default CategoryEntry;