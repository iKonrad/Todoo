var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {

	it('should exist', () => {
		expect(TodoSearch).toExist();
	});

	it('should call onSearch on text change', () => {
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

		ReactDOM.findDOMNode(todoSearch.refs.searchText).value = 'dog';
		TestUtils.Simulate.change(ReactDOM.findDOMNode(todoSearch.refs.searchText));
		expect(spy).toHaveBeenCalledWith(false, 'dog');

	});

	it('should call onSearch on checkbox change', () => {
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

		ReactDOM.findDOMNode(todoSearch.refs.showCompleted).checked = true;
		TestUtils.Simulate.change(todoSearch.refs.showCompleted);
		expect(spy).toHaveBeenCalledWith(true, '');
		
	});

});
