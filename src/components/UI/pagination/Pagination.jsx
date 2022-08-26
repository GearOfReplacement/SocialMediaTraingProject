import React from "react";
import { usePagination } from "../../../hooks/usePagination";
import { MyButton } from "../button/MyButton";
import cl from './Pagination.module.css';

export const Pagination = ({ totalPages, currentPage, changePage }) => {

	const pagBtns = usePagination( totalPages );

	return (
		<div className={ cl.pagination }>
			{
				pagBtns.map(( pageNum ) => 
				<MyButton
					key={ pageNum }
					className={ pageNum === currentPage 
											? `${cl.pag_btn} ${cl.pag_btn_active}`
											: `${cl.pag_btn}`
					}
					onClick={ () => { changePage( pageNum )} }
					
				>{ pageNum }</MyButton>)
			}
		</div>
	);
}