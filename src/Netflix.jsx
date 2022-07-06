import React from "react";
import Card  from "./Cards";
import Seriesdata from "./Seriesdata";

const Netflix = ()=>{ 
    return(
    <Card 
        key={Seriesdata[1].id}
        imgsrc={Seriesdata[1].imgsrc}   
        title={Seriesdata[1].title}
        sname={Seriesdata[1].sname}
        link={Seriesdata[1].link}
    />
    );
}

export default Netflix;