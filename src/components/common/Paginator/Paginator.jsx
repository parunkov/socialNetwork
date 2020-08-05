import React, {useState, useEffect} from 'react';
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

	const [editMode, setEditMode] = useState(false);
	const [inputValue, setInputValue] = useState(currentPage);
	useEffect(() => {
		setInputValue(currentPage);
	}, [currentPage]);
	const onInputChange = (e) => {
		setInputValue(e.currentTarget.value);
	}


	const CurrentPageElement = ({p}) => {
		if (!editMode) {
			return <span className={cn(styles.selectedPage, styles.pageNumber)} onClick={
				(e) => {setEditMode(true)}
			} key={p}>{p}</span>
		} else {
			return <input onChange={onInputChange} onBlur={
				(e) => {
					let inputNumber = Math.floor(+e.currentTarget.value);
					if (inputNumber < 1) inputNumber = 1;
					if (inputNumber > pagesCount) inputNumber = pagesCount;
					setEditMode(false);
					currentPage = inputNumber;
					onPageChanged(inputNumber);
					setPortionNumber(Math.ceil(inputNumber / portionSize));
				}
			} autoFocus={true} type="number" step="1" min="1" max="{pagesCount}" value={inputValue} />
		}
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
					.filter(p => p >= leftPortionPageNumber - 1 && p <= rightPortionPageNumber)
					.map(p => {	
						if (p === currentPage) {
							return <CurrentPageElement p={p} key={p} />
						} else {
							return <span className={styles.pageNumber} onClick={(e) => {onPageChanged(p)}} key={p}>{p}</span>
						}
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