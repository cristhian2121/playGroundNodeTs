// Libs
import EventEmitter from "events"
import { dispatchFirst } from "./dispatchs/first";
// Events
import { firstEvent$ } from "./events/firstEvent"

firstEvent$.on('first', data => {
  console.log('data: ', data);
})

// Only listener the first chunk of data
firstEvent$.once('second', data => {
  console.log('once: ', data);
})

dispatchFirst()

