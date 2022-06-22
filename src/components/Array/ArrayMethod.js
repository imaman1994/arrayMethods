import React from 'react'
import arr from './Content'


function ArrayMethod() {

 arr.push({color:'hii',value:'#786'}) // use Push method in array arr

const arr1 = [143,54,76,67,37,98,87,86]

 arr1.sort((a,b)=> a-b)    // Sorting array in accending order


 const reduce1 = arr1.reduce((acc,curr)=> acc+curr) // use reduce method for total sum

 const filterMethod = arr1.filter((a)=> a < 60 )   // used filter method to filter no.
 const filtrColor = arr.filter((a)=> a.color == 'red' )
 
 console.log(filtrColor)
 console.log(filterMethod )
 console.log(arr1.pop())

  return (
    <div style={{color:'white', display:'flex'}}>
      <div>
      <h1 color='red'>{arr1[1]}</h1>
       <h1>{reduce1}</h1>
      </div>
       
      { arr.map((row,index)=> // use map method for listing the array
      <ul key={index}>
      <li>{row.color}</li>
    </ul>
      )
      }
    </div>
  )
}

export default ArrayMethod
