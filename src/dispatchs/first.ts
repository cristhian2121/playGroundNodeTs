import { firstEvent$ } from "../events/firstEvent";

export function dispatchFirst() {
  let count = 1
  setInterval(() => {
    firstEvent$.emit('first', count)
    count++
  }, 1000);
}