import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './index.css';
import foo from './reducers'
// 上では、reducersからimportするものを本プログラム内部で扱う変数の名前をfooとリネームしてみました。
// 実は、この名前はreducerという名前である必要はないのです。
// なので、fooと書き換えても同じ様に動作することになります。
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import C, { B } from './examples'

console.log(`C: ${C}, B: ${B}`) // CはAの値と同じです。なぜならexport defaultの対象がA であるからです。

console.log(typeof foo)
// functionと出力されます。
// つまり、fooは関数であることが分かります。
// ということはリネームされる前のreducerもまた関数だったわけですね。
const store = createStore(foo)

// なぜ、(他の変数と名前が被らなければ)どんな名前でも良いのかというと
// import対象のもの(モジュールと言います。)がexportするときのexportのされ方には2種類あって
// default付きのものとdefault無しのものがあって、
// default付きの方でexportされた場合はそれをimportする場合には
// 名前を合わせなくてもdefaultでexportされたものがimportされるという決まりがあるからです。
// この辺りは、
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
// と
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
// 辺りを読まれるとスッキリご理解頂けるかと思います。

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
