/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const list = document.querySelector('#list');

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

/**
 * for testing if the id is unique
 **/

const size = 1000000
const set = new Set(new Array(size)
    .fill(0)
    .map(() => shuffle(uid2())))

// console.log(
//     size === set.size ? 'all ids are unique' : `not unique records ${size - set.size}`
// )
// console.log("the length of uid is", shuffle(uid2()).length)
// console.log(shuffle(uid2()))
// console.log(Date.now().toString(36).substring(2, 10))