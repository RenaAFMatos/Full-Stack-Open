import { useState } from "react";

const Button = ({ handleClick, text }) => (
	<button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => {
	return (
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
	);
};

const Statistics = ({ good, neutral, bad }) => {
	console.log(good, neutral, bad);
	let all = good + neutral + bad;
	let average = (good - bad) / all; // good is 1, bad is -1, neutral is 0. If we have (good - bad) x1 is the same as (good x1 + neutral x0 + bad x-1)
	let positive = (good / all) * 100;
	console.log(all, average, positive);
	if (all === 0) {
		return (
			<>
				<h1>statistics</h1>
				<p>No feedback given</p>
			</>
		);
	}
	return (
		<>
			<h1>statistics</h1>
			<table>
				<tbody>
					<StatisticLine text="good" value={good} />
					<StatisticLine text="neutral" value={neutral} />
					<StatisticLine text="bad" value={bad} />
					<StatisticLine text="all" value={all} />
					<StatisticLine text="average" value={average} />
					<StatisticLine text="positive" value={positive + " %"} />
				</tbody>
			</table>
		</>
	);
};

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<>
			<h1>give feedback</h1>
			<Button handleClick={() => setGood(good + 1)} text="good" />
			<Button
				handleClick={() => setNeutral(neutral + 1)}
				text="neutral"
			/>
			<Button handleClick={() => setBad(bad + 1)} text="bad" />
			<Statistics good={good} neutral={neutral} bad={bad} />
		</>
	);
};

export default App;
