const schedule = require('node-schedule');
const { events } = require('./items');


//* Reverse Strings should be called after the events are scheduled.
function reverseString(str) {
    return str.split('').reduce((a, b) => b + a)
}
// console.log(reverseString('hello'))


//* Run the function for each item in the array of events after 7seconds.
function scheduleItems(el) {
    const job = schedule.scheduleJob(`*/7 * * * * *`, () => {

        job.cancel(); //* Cancel the job after it has been run.
        
        console.log(reverseString(el.text))
    })
}

//* Execute the function to schedule each item in the array of events
events.forEach(el => { scheduleItems(el) })
