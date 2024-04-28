import React from 'react'
import { Stack } from '@mui/material'
import {categories}from "../utils/constants"


const Sidebar = ( {selectedCategory, setSelectedCategory}) => 
   (
    <Stack direction="row"
    sx={{height:{sx:"auto",md:"95%"},overflowY:"auto",flexDirection:{md:"column"}}}>

{categories.map((category)=>(
<button className='category-btn' 
onClick={()=>setSelectedCategory(category.name)}
style={{background:category.name===selectedCategory && '#FC1503',color:"white"}}
key={category.name}>
    <span style={{color:category.name===selectedCategory? "white":"red",marginRight:"10px"}}>{category.icon}</span>
    <span>{category.name}</span>
</button>

))}
    </Stack>
  )

export default Sidebar