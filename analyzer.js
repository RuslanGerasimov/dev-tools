const log = require('./lifehacke-log.js');

const requests = {
};
const { entries } = log;
const duplicate = new Map();

entries.forEach(({ request }) => {
    const method = request.method;
    if(method !== 'GET') {
        return;
    }
    const url = request.url;
    if(duplicate.has(url)) {
        duplicate.set(url, duplicate.get(url) + 1);
    } else {
        duplicate.set(url, 1);
    }
});

duplicate.forEach((counter, url) => {
   if(counter < 2) {
       duplicate.delete(url);
   } else {
       console.log(url, counter)
   }
});