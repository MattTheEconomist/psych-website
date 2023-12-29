import React from 'react'; 
import styles from "./blogTiles.module.css"

function BlogTiles({tile}){

    const snippetFull=tile.snippet
    const snippetPiece = snippetFull.slice(0, 150)

    return(<>

<div className={styles.tileContainer}> 
<div className={styles.imageContainer}>image here </div>
    <p className={styles.titleText}>{tile.title}</p>
    <p className={styles.snippet}>{snippetPiece} ...</p>
    <p className={styles.postDate}>post date: {tile.postDate}</p>
    </div>



    </>)
}


export default BlogTiles; 