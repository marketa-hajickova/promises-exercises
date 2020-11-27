/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer){
  return new Promise((resolve, reject) => {
    /* IMPLEMENT ME!! */
    promise.catch((error) => {
      reject(error)
    });

    let result = promise.then((response) =>{
      return transformer(response);
    });

      resolve(result);
      reject(result);
  });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise){
  return numberPromise
    .then(/* IMPLEMENT ME! */ (arg) => {
      return new Promise((resolve, reject) => {

          if(typeof(arg) === "number" && isNaN(Number(arg)) === false)
          {
            resolve(arg * arg);
          }
          if(typeof(arg) === "string" && !isNaN(Number(arg)))
          {
             let newArg = Number(arg);
             resolve(newArg * newArg);  
          }

          if (isNaN(Number(arg))) {
            reject("Cannot convert 'abc' to a number!");
          }     
        
    });
  })
};
    



/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise){
  return squarePromise(promise)
    .catch(err=>0)
    .catch(err=>reject(err));

}

/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
function switcheroo(promise){
  return new Promise((resolve,reject)=>{
    promise
    .then(res=>{
      reject(res)
  })
    .catch(err=>{
      resolve(err)
    })

  });
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};