export const wfm = {
  delay(ms = 1000){
    return new Promise ((resolve, reject) => {
      setTimeout(()=>{
        resolve()
      }, ms)
    })
  },

  isUndefined(d){
    return typeof d === 'undefined'
  },

  isEmpty(d){
    return d.length && d.length === 0
  }
}
