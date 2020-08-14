import React from 'react';
import {create} from 'react-test-renderer';
import Paginator from './Paginator';

describe('Paginator component test', () => {
	it('pages count is 12 should be showed only 11', () => {
		const component = create(<Paginator totalItemsCount={12} pageSize={1} portionSize={10} />);
		const root = component.root;
		const spans = root.findAllByType('span');
		expect(spans.length).toBe(12);
	});
	// it('pages count is 12 should be showed buttons', () => {
	// 	const component = create(<Paginator totalItemsCount={12} pageSize={1} portionSize={10} />);
	// 	const root = component.root;
	// 	const spans = root.findAllByType('button');
	// 	expect(spans.length).toBe(2);
	// });
});