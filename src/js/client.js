import React from "react";
import ReactDom from "react-dom";

class Layout extends React.Component {
	render() {
		let name = "ひよこ"
		let number01 = 100
		let number02 = 150
		return (
			<div>
				<h1>It works!</h1>
				<h2>subtitleh2</h2>
				{/* 変数と文字列の組み合わせ */}
				<h1>It,s {name}!</h1>
				{/* 括弧内で計算 */}
				<h2>足し算{1+2}</h2>
				{/* 括弧内で変数通しを計算 */}
				<h2>kake算{number01 * number02}</h2>
				{/* 関数の呼び出し*/}
				<p>total_numberは{this.total_number(3,5)}</p>
			</div>
		);
	}
	// 関数　renderの外に定義
	total_number(num01,num02) {
		return num01 + num02;
	}
}

const app = document.getElementById('app');
ReactDom.render(<Layout/>, app);