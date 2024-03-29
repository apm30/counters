import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
	render() {
		return (
			<div>
				<button
					onClick={this.props.onAdd}
					className="btn btn-primary btn-sm m-2"
				>
					Add item
				</button>
				<button
					onClick={this.props.onReset}
					className="btn btn-danger btn-sm m-2"
				>
					Reset
				</button>

				{this.props.counters.map(counter => (
					<Counter
						key={counter.id}
						value={counter.value}
						onDelete={this.props.onDelete}
						onIncrement={this.props.onIncrement}
						id={counter.id}
						counter={counter}
					></Counter>
				))}
			</div>
		);
	}
}

export default Counters;
