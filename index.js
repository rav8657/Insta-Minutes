const schedule = require('node-schedule');
const { events } = require('./items');
//* setting Time delay for each item in the array of events 
const timeDelay = time => new Promise(resolve => setTimeout(resolve, time));


//* Reverse Strings should be called after the events are scheduled.
function reverseString(str) {
    return str.split('').reduce((a, b) => b + a)
}
// console.log(reverseString('hello'))


//* Run the function for each item in the array of events 
function scheduleItems(el) {
    const job = schedule.scheduleJob(`*/${el.text.length} * * * * *`, async () => {
        job.cancel();
        await timeDelay(el.text.length * 1000).then(() => {
            console.log(reverseString(el.text))
        })
    })
}

//* Execute the function to schedule each item in the array of events
events.forEach(el => { scheduleItems(el) })
