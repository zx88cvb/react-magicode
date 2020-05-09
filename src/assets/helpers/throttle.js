/**
 * create a throttle callback
 * @param callback
 * @param delay
 * @param thisArg
 */
export const createThrottle = (
  callback, 
  delay, 
  thisArg)  =>{
  let lastInvokeTime= Date.now();
  const _delay = Number(delay) || 200
  return (...args) =>{
    const now = Date.now()
    if (now - _delay <= lastInvokeTime) {
      return;
    }
    lastInvokeTime = now;
    callback.call(thisArg, ...args)
  }
}