import React,{useState,useEffect} from 'react';
import NewsCard from '../NewsCard/NewsCard';
import {Grid,Grow,Typography} from '@material-ui/core';
import useStyles from './Style.js';


const infoCards = [
    { color: '#00838f', title: 'Latest News', inst:'For any news , Click the "bottom-right" button of pages then try to saying as per "Try Saying" Command.', text: 'Give me the latest news' },
    { color: '#283593', title: 'News by Categories', info: 'General, Health, Science, Sports, Technology,Business, Entertainment', text: 'Give me the latest Sports news' },
    { color: '#195070', title: 'News by Terms', info: 'Covid-19 , Bangladesh , Cricket , wrestling , Mushfiqur Rahim , (Say any terms) ...', text: 'What\'s up with Mushfiqur Rahim' },
    { color: '#1565c0', title: 'News by Sources', info: 'CNN , ABC News , BBC News , reuters , Time , ESPN , Buzzfeed...', text: 'Give me the news from CNN' },
  ];
  //#1565c0
const NewsCards =({articles,activeArticle})=> {
    console.log('articles',articles);
    const classes = useStyles();
    
    if(!articles.length){
        return(
            <Grow in>
               <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {infoCards.map((infoCard)=>(
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                        <div className={classes.card} style={{background:infoCard.color}}>
                              <Typography variant="h6">{infoCard.title}</Typography>
                              {infoCard.info?(<Typography variant="h7"><strong><u>{infoCard.title.split(' ')[2]}</u></strong><br/>{infoCard.info}</Typography>):(<Typography variant="h7"><strong><u>Instruction</u></strong><br/>{infoCard.inst}</Typography>)}
                              <Typography variant="h7">Try Saying :<br/><i>{infoCard.text}</i></Typography>

                        </div>

                    </Grid>

                ))}
               </Grid>
               </Grow>
        );
    }
    return (
        <div>
           <Grow in>
               <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {(()=>{
                    let articlePush= [];
                    for(let i=0; i< articles?.length;i++){
                      articlePush.push(
                          <Grid item xs={12} md={6} lg={3} style={{display:"flex"}}>
                         <NewsCard article={articles[i]} i={i} activeArticle={activeArticle}></NewsCard>
                         </Grid>
                      )
                    }
                    return articlePush;

                })()}
                </Grid>
            </Grow>
                
            
        </div>
    );
}

export default NewsCards;