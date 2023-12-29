import React from 'react'; 
import BlogTileSingle from "./BlogTileSingle"
import style from "./blogTiles.module.css"

function BlogTiles(){

    const blogTileData=[
        {
            title: 'Seeking mindfulness throughout the day',
            snippet: 'Opportunities for mindfulness blossom everywhere, from savoring a warm cup of tea to observing the changing shades of a sunset. Every moment holds the potential for present-moment awareness, waiting to be cultivated.', 
            imageFilePath: '' ,
            postDate: '11/15/2023'
        },
        {
            title: 'Advantages of Evidence-based therepy',
            snippet: "Unlike anecdotal methods or personal opinions, evidence-based therapies are rigorously researched and proven effective through clinical trials. This means theyre not relying on chance or guesswork, but on a solid foundation of data and scientific understanding.",
            imageFilePath: '' ,
            postDate: '11/30/2023'
        },
        {
            title: 'Difficult relationships can truly be challenging',
            snippet: "Acknowledging your situation is a fantastic first step. Here are some pieces of advice that might be helpfu",
            imageFilePath: '' ,
            postDate: '12/06/2023'
        },
        {
            title: 'Unraveling the Anxiety Knot',
            snippet: "t can manifest in a million ways, from the racing heart of social gatherings to the suffocating grip of panic attacks. But here's the truth: anxiety is not our enemy, it's a messenger. It's our body's alarm system, albeit a bit overzealous at times. Understanding this is the first step towards untangling its knot and reclaiming control.",
            imageFilePath: '' ,
            postDate: '12/06/2023'
        },
        
        
        
        

    ]

    return(<>
    <div className={style.blogContainerFull}>

    <h5 className={style.blogTitle}>What's happening with our blog</h5>

<div className={style.allTilesContainer}>


 { blogTileData.map((tile, idx) => (
      <BlogTileSingle key={idx} indexInput={idx} tile={tile} />
      ))}   


</div>
</div>
    </>)
}


export default BlogTiles; 