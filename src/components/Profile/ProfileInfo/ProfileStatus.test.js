import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus component', () => {
	it('status from props should be in the state', () => {
		const component = create(<ProfileStatus status="test" />);
		const instance = component.getInstance();
		instance.activateEditMode();
		expect(instance.state.status).toBe('test');
	});
	it('after creation span should be in the component', () => {
		const component = create(<ProfileStatus status="test" />);
		const root = component.root;
		const span = root.findByType('span');
		expect(span).not.toBeNull();
	});
	it(`after creation input shouldn't be in the component`, () => {
		const component = create(<ProfileStatus status="test" />);
		const root = component.root;
		expect(() => {
			const input = root.findByType('input');
		}).toThrow();
	});
	it('after creation span text is true', () => {
		const component = create(<ProfileStatus status="test" />);
		const root = component.root;
		const span = root.findByType('span');
		expect(span.children[0]).toBe('test');
	});
	it('after edit mode input should be in the component', () => {
		const component = create(<ProfileStatus status="test" />);
		const root = component.root;
		const span = root.findByType('span');
		span.props.onDoubleClick();
		const input = root.findByType('input');
		expect(input).not.toBeNull();
	});
	it('callback sould be called', () => {
		const mockCallback = jest.fn();
		const component = create(<ProfileStatus status="test" updateStatus={mockCallback} />);
		const instance = component.getInstance();
		instance.deactivateEditMode();
		expect(mockCallback.mock.calls.length).toBe(1);
	});
});