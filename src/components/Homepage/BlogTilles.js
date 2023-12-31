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
    <div className={style.waveContainer}>


      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#c9e9f6" fill-opacity="1" d="M0,288L60,272C120,256,240,224,360,229.3C480,235,600,277,720,277.3C840,277,960,235,1080,224C1200,213,1320,235,1380,245.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </div>
    <div className={style.blogContainerFull}>

  

    <h5 className={style.blogTitle}>What's new with our blog</h5>

<div className={style.allTilesContainer}>


 { blogTileData.map((tile, idx) => (
      <BlogTileSingle key={idx} indexInput={idx} tile={tile} />
      ))}   


</div>
</div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#c9e9f6" fill-opacity="1" d="M0,288L60,272C120,256,240,224,360,229.3C480,235,600,277,720,277.3C840,277,960,235,1080,224C1200,213,1320,235,1380,245.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    </>)
}


export default BlogTiles; 