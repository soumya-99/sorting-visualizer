import React, { Component } from "react"
import "./SortingVisualizer.css"

export default class SortingVisualizer extends Component {
	state = {
		array: [],
	}

	componentDidMount() {
		this.resetArray()
	}

	resetArray = () => {
		const array = []
		for (let i = 0; i < 310; i++) {
			array.push(this.randomIntForInterval(5, 500))
		}
		this.setState({ array })
	}

	mergeSort = () => {}

	quickSort = () => {}

	heapSort = () => {}

	bubbleSort = () => {}

	render() {
		const { array } = this.state
		return (
			<div className="array-container">
				{array.map((value, id) => (
					<div
						className="array-bar"
						key={id}
						style={{ height: `${value}px` }}
					></div>
				))}
				<button onClick={() => this.resetArray()}>New Array</button>
				<button onClick={() => this.mergeSort()}>Merge Sort</button>
				<button onClick={() => this.quickSort()}>Quick Sort</button>
				<button onClick={() => this.heapSort()}>Heap Sort</button>
				<button onClick={() => this.bubbleSort()}>Bubble Sort</button>
			</div>
		)
	}
	randomIntForInterval = (min, max) =>
		Math.floor(Math.random() * (max - min + 1) + min)
}
