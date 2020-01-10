//import logo from './logo.svg';
import Navbar from './components/navbar';
import './App.css';
import Counters from './components/counters';
import React, { Component } from 'react';

class App extends Component {
	state = {
		counters: [
			{ id: 1, value: 4 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 }
		]
	};

	constructor() {
		super();
		console.log('app constructor');
	}

	componentDidMount() {
		console.log('app mounted');
	}

	handleIncrement = counter => {
		console.log('increment handler called', counter);
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;
		this.setState({ counters });
	};

	handleDelete = counterId => {
		const counters = this.state.counters.filter(c => c.id !== counterId);
		console.log('event handler called', counterId);
		this.setState({ counters });
	};

	handleAdd = () => {
		const counters = [...this.state.counters];
		const id = counters[counters.length - 1].id;
		let newId = id + 1;

		const counter = { id: newId, value: 0 };
		counters.push(counter);
		console.log(counters);
		this.setState({ counters });
	};

	handleReset = () => {
		const counters = this.state.counters.map(c => {
			c.value = 0;
			return c;
		});
		this.setState({ counters });
	};
	render() {
		return (
			<React.Fragment>
				{' '}
				<Navbar
					totalCounters={this.state.counters.filter(c => c.value > 0).length}
				>
					{' '}
				</Navbar>
				<main className="container">
					<Counters
						onAdd={this.handleAdd}
						onReset={this.handleReset}
						onDelete={this.handleDelete}
						onIncrement={this.handleIncrement}
						counters={this.state.counters}
					/>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
