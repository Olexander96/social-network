import { useState } from 'react';
import styles from './Paginator.module.css';
import classNames from 'classnames';


const Paginator = ( {totalItemsCount, pageSize, currentPage, onChangePage, portionSize} ) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(totalItemsCount / portionSize); 
    const [portionNumber, setPortionNumber] = useState(1);
    let leftPositionPageNumber = (portionNumber - 1) * portionSize;
    let rightPositionPageNumber = portionNumber * portionSize;

    return (
        <div>
            {portionNumber > 1 
                ? <button onClick={ () => {setPortionNumber(portionNumber - 1)}}>Prev</button>
                : null
            }
            {
                pages
                    .filter(p => p >= leftPositionPageNumber && p < rightPositionPageNumber)
                    .map(page => {
                    return <span className={classNames(styles.page, {[styles.selectedPage]: currentPage === page}) }//currentPage === page то застосується клас styles.selectedPage
                                onClick={() => onChangePage(page) } 
                                key={page}>{ page }
                            </span>
                    })
            }
            {portionNumber < portionCount
                ? <button onClick={ () => {setPortionNumber(portionNumber + 1)}}>Next</button>
                : null
            }       
        </div>
    )
}

export default Paginator;