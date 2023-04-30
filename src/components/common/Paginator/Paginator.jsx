import styles from './Paginator.module.css';


const Paginator = ( {totalUsersCount, pageSize, currentPage, onChangePage} ) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 30) { // бо дуже багато users
            pages.push(i)
        }
    }

    return (
        <div>
            {
                pages.map(page => {
                    return <span className={currentPage === page ? styles.selectedPage : styles.page}
                            onClick={() => onChangePage(page) } key={page}>{ page }</span>
                    })
            }
        </div>
    )
}

export default Paginator;