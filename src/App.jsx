import React from "react";
import Seriesdata from "./Seriesdata"

import Card  from "./Cards";

const App=()=>( 
  <>
     <h1 className="heading_style"> List of top 6 Netflix Series in 2020</h1>
    {Seriesdata.map((val,index)=>{
  console.log(index);
  return(
    <Card
      key={val.id}
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  );
    })}  
  </>
 );
 
 export default App;



















// import React from "react";
// import Netflix from "./Netflix";
// import Amazon from "./Amazon";

// const favSeries ="Netflix";

// const App=()=>( 
//  <>
//     <h1 className="heading_style"> List of top 6 Netflix Series in 2020</h1>
    

//    {(favSeries ==="Netflix") ?  <Netflix/> : <Amazon/>}
//  </>
// );

// export default App;















// const FavS =()=> {
// if(favSeries ==="netflix") {
//     return  <Netflix />; 
//     }
// else {
//     return <Amazon/>;
//    }
// }  