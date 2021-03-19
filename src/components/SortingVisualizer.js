import React, { Component } from "react"
import "./SortingVisualizer.css"
import { getMergeSortAnimations } from "../utils/sortingAlgorithms"

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

	mergeSort = () => {
		const animations = mergeSort(this.state.array)
		for (let i = 0; i < animations.length; i++) {
			const { comparison, swap } = animations[i]

			setTimeout(() => {
				const arrayBars = document.getElementsByClassName("array-bar")
				arrayBars[comparison[1]].style.backgroundColor = "red"
				arrayBars[comparison[0]].style.backgroundColor = "red"

				setTimeout(() => {
					arrayBars[comparison[1]].style.backgroundColor = "turquoise"
					arrayBars[comparison[0]].style.backgroundColor = "turquoise"
				}, (i + 1) * 10)
			}, i * 10)
		}
	}

	quickSort = () => {}

	heapSort = () => {}

	bubbleSort = () => {
		// const javascriptSortedArray = this.state.array.slice().sort((a, b) => a - b)
		// const sortedArray = bubbleSort(this.state.array)
		// console.log(sortedArray)
		// console.log(this.arraysAreEqual(javascriptSortedArray, sortedArray))
	}

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
	// For creating random integers
	randomIntForInterval = (min, max) =>
		Math.floor(Math.random() * (max - min + 1) + min)

	// For testing application
	arraysAreEqual = (arr1, arr2) => {
		if (arr1.length !== arr2.length) return false
		for (let i = 0; i < arr1.length; i++) {
			if (arr1[i] !== arr2[i]) return false
		}
		return true
	}
}
