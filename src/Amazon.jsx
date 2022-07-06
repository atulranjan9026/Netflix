import React from "react";
import Card  from "./Cards";
import Seriesdata from "./Seriesdata";

const Amazon =()=>{
    return(
        <Card 
            key={Seriesdata[3].id}
            imgsrc={Seriesdata[3].imgsrc}   
            title={Seriesdata[3].title}
            sname={Seriesdata[3].sname}
            link={Seriesdata[3].link}
        />
       );

}

export default Amazon;