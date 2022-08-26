import { useMemo } from "react";

export const usePagination = (totalPages) => {

	const pagBtns = useMemo( () => {
		const buttons = [];

		for ( let i = 0; i < totalPages; i++) {
			buttons.push(i + 1);
		}

		return buttons;
	}, [totalPages]);

	return pagBtns;
}

