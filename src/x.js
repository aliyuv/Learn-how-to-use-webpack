import './style/style.scss';
import './style/a.less';
import './style/x.styl';
import img from './img/下载.jpeg';
import _lzy from './print';
console.log(img)

const div = document.querySelector("#app");
div.innerHTML = `
<img src="${img}">
`;
const btn = document.querySelector("#btn");

btn.onclick = e => import('./print').then(module => {
  const print = module.default;
  print();
})
export default x = "xxxxxxxxx";


