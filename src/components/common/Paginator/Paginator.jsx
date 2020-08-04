import React, {useState} from 'react';
import styles from './Paginator.module.css';
import cn from 'classnames';

const Paginator = ({totalItemsCount, pageSize, currentPage, portionSize = 10, onPageChanged}) => {
	const pagesCount = Math.ceil(totalItemsCount / pageSize);
	const pages = [];
	for (let i = 1; i <= pagesCount ; i += 1) {
		pages.push(i);
	}

	const portionCount = Math.ceil(pagesCount / portionSize);
	const [portionNumber, setPortionNumber] = useState(1);
	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	const rightPortionPageNumber = portionNumber * portionSize;
	const onPortionCanged = (portionNumber) => {
		let currentPageNumber = 1;
		if (portionNumber === 1) {
			currentPageNumber = 1;
		} else if (portionNumber === portionSize) {
			currentPageNumber = pagesCount;
		} else {
			currentPageNumber = (portionNumber - 1) * portionSize + 5;
		}
		onPageChanged(currentPageNumber);
	}

	return(
		<div className={styles.pagination}>
			{
				portionNumber > 1 && 
				<span>
					<button className="" onClick={(e) => {
							onPageChanged(1);
							setPortionNumber(1);
						}}>1</button>
					<button onClick={() => {
						setPortionNumber(portionNumber - 1);
						onPortionCanged(portionNumber - 1);
					}}>Prev</button>
				</span>
			}
			{
				pages
					.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
					.map(p => {							
						return <span className={
							cn({
								[styles.selectedPage]: currentPage === p
							}, styles.pageNumber)
						} onClick={(e) => {onPageChanged(p)}} key={p}>{p}</span>
					})
			}
			{
				portionCount > portionNumber && 
				<span>
					<button onClick={() => {
						setPortionNumber(portionNumber + 1);
						onPortionCanged(portionNumber + 1);
					}}>Next</button>
					<button className="" onClick={(e) => {
						onPageChanged(pagesCount);
						setPortionNumber(portionCount);
					}}>{pagesCount}</button>
				</span>
			}
		</div>
	);
}

export default Paginator;