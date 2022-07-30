/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import { nanoid } from 'nanoid'
/**
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex

 **/

type Task = {
    id: string,
    title: string,
    completed: boolean,
    createdAt: Date
}

const list = document.querySelector<HTMLDListElement>('#list');
const form = document.querySelector<HTMLFormElement>('#form');
const add = document.querySelector<HTMLInputElement>('#input-new-task-title');

form?.addEventListener('submit', (e) => {
    e.preventDefault();

    if(add?.value == '' || add?.value == null) return;

    const task: Task = {
        id: uid2(),
        title: add.value,
        completed: false,
        createdAt: new Date()
    };
    addListItem(task);
    add.value = '';
});

function addListItem(task: Task): void {
    const item = document.createElement('li');

    console.log(item.querySelector('#ch'));

    item.classList.add('list-item');
    item.innerHTML = `
        <input type="checkbox"  id="ch">
        <span class="title">${task.title}</span>
    `;
    list?.appendChild(item);
}



/**
 * below is for experimenting with generating a unique id
 */

const uid = () =>
    String(
        Date.now().toString(32) +
        Math.random().toString(16)
    ).replace(/\./g, '')


const shuffle = (str: any) => [...str].sort(()=>Math.random()-.5).join('');

const uid2 = () =>

    String(
        Date.now().toString(36).substring(2, 8) + Math.random().toString(16).substring(2, 10)
    ).replace(/\./g, '')

// @ts-ignore
/**
 * Gemerate a unique id using recursive method
 */
const generateId = (n = 1) => {
    n -= 1
    return Math.random().toString(36).substring(2)
        + (n > 0 ? generateId(n) : "")
}

/**
 * for testing if the id is unique
 **/

const size = 100000000
const set = new Set(new Array(size)
    .fill(0)
    .map(() => generateId()))

console.log(
    size === set.size ? 'all ids are unique' : `not unique records ${size - set.size}`
)
console.log("size", set.size)
// console.log(Date.now().toString(36).substring(2, 10))