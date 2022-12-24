import React from 'react'
import { useNavigate } from 'react-router-dom'
import './directory.styles.jsx'
import { Body, DirectoryItemContainer, BackgroundImage } from './directory.styles.jsx'




const DirectoryItem = ({category}) =>{
  const {imageUrl, title, route} = category
  const navigate = useNavigate();

 const onNavigateHandler = () => navigate(route)
    
    return(
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl}/>
              <Body>
                <h2>{title.toUpperCase()}</h2>
                <p>Shop now</p>
              </Body>
                
              
        </DirectoryItemContainer>
          
      
    )

}

export default DirectoryItem;