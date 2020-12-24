import React,{useEffect,useState} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './Components/NewsCards/NewsCards';
import useStyles from './Styles';
import Project_Logo from './image/Project_Logo.png';
import wordsToNumbers from 'words-to-numbers';
import './App.css';
const alanKey = '097f4e20627d2546ac5f51821166645b2e956eca572e1d8b807a3e2338fdd0dc/stage';
const App =()=> {

const [NewsArticles,setNewsArticles] = useState([]);
const [activeArticles,setactiveArticles] = useState(-1);
const classes =  useStyles();
const alanLogoSrc = 'https://alan.app/voice/images/previews/preview.jpg';

useEffect(()=>{
 alanBtn({
    key: alanKey,
    onCommand:({command, articles,number})=>{
      if(command === 'newHeadlines'){
       setNewsArticles(articles);
       setactiveArticles(-1);
      }
      else if(command === 'highlight'){
        setactiveArticles((previousActiveArticle) => previousActiveArticle + 1);
      }
      else if(command === 'open'){
        const parseNumber =  number.length > 2 ? wordsToNumbers(number,{fuzzy:true}):number;
        const article = articles[parseNumber - 1];
        
        if(parseNumber > 20){
          alanBtn().playText("Please try that again")
        }
        else if(article){
          window.open(articles[number]?.url,'_blank');
          alanBtn().playText('opening ...')

        }

        

        
      }
    }
  })
},[]);

  return (
    
    <div className="App">
      
     <div  className={classes.logoContainer}>
        <img src={Project_Logo}  className={classes.alanLogo} alt="owner photo"/>
      </div> 
    
     <NewsCards articles={NewsArticles} activeArticle={activeArticles} />
     <p className={classes.creater}  style={{textAlign:"center"}}> Created by <a href="https://web.facebook.com/zafrulhasan.nasim" target="_blank"><b>Zafrul Hasan Nasim</b> </a></p>
    </div>
  );
}

export default App;
