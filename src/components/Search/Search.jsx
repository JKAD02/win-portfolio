import React from 'react'
import styles from "./Search.module.css"

const Search = ({ search }) => {
    return (
        <div className={styles.search_menu} id={search ? styles.search_hide : null}>search</div>
    )
}

export default Search