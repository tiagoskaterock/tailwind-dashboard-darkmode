import './App.css';
import Main from './components/Main'
import Footer from './components/Footer'
import React, { useEffect, useState } from 'react';

function App() {

    // document.addEventListener('DOMContentLoaded', function() {  

    //   console.log('aqui')

    //   const switcherTheme = document.querySelector('[data-id="swith-theme"]')
    //   const htmlTag = document.documentElement

    //   const storageThemeValue = localStorage.getItem('theme')

    //   if (storageThemeValue != null) {
    //     htmlTag.setAttribute('data-theme', storageThemeValue)
    //   }

    //   if (htmlTag.getAttribute('data-theme') == 'dark') {
    //     switcherTheme.checked = true
    //   }

    //   switcherTheme.addEventListener('click', () => toggleTheme() )

    //   const toggleTheme = () => {      
    //     const newTheme = switcherTheme.checked ? 'dark' : 'light'
    //     htmlTag.setAttribute('data-theme', newTheme)

    //     localStorage.setItem('theme', newTheme)
    //   }

    // })

  return (
    <div
      className="font-inter bg-white before:absolute before:inset-x-0 before:0 before:h-96 before:bg-very-pale-blue before:-z-10 text-very-dark-blue dark:bg-very-dark-blue dark:before:bg-very-dark-blue-top dark:text-white">
      
      <Main />  
      <Footer />  

    </div>
  );
}

export default App;
