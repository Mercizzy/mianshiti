/**
 * 1. promise是一个构造函数，接受一个函数executor作为参数，
 * 2. 这个函数又接收两个参数，一个resolve，一个reject
 * 3. resolve和reject也是俩函数，用来更改promise的状态
 * 4. promise有三种状态，分别是pending，fulfilled，rejected，状态一旦改变，就不可以再变化
 * 5. promsie的then方法，接收两个函数作为参数，一个成功回调 successCallback，一个失败回调 failCallback
 * 6. successCallback和failCallback也接收一个参数，由resolve或reject传递
 * 7. 当executor中有异步方法时，异步方法其实是在then方法后面执行的，此时then方法里的status仍然是penging状态
 *    此时需要将then里的successCallback或者failCallback方法存储起来，当异步执行结束，也就是status变化之后执行，也就是在resolve或者reject方法的最后执行
 * 8. then方法可以多次调用，每次的successCallback和failCallback方法都有可能不一样，所以我们要存在数组里
 * 9. then方法的链式调用是解决回调地狱的关键，我们只需要在then方法的最后返回一个新的promise就可以了
 * 10.这个新的promise称为promise2，它的status由返回它的then方法的successCallback或者failCallback的返回值 result 决定
 * 11.result如果不是promise，那么直接resolve(result)，如果是result是promise，则需要执行这个result.then，根据result的status来决定是resolve还是reject
 * 12.如果result等于promise2，会导致死循环，所以需要判断一下
 * 13.then方法的两个参数如果不是函数的话，会自动转化为value => value函数
 * 14.在可能出现有问题的地方加上try/catch
 * 15.Promise.all是一个静态方法，接收一个数组，返回一个promise，数组全部resolve会返回一个数组，包含所有的成功回调的value，如果失败，则直接reject当前的失败。数组中如果不是promise类型，则直接resolve
 */

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
    constructor (executor) {
        try {
            executor(this.resolve, this.reject)
        } catch (error) {
            this.reject(error)
        }
    }
    status = PENDING
    reason = undefined
    successCallback = []
    failCallback = []
    resolve = (reason) => {
        if (this.status !== PENDING) return
        this.status = FULFILLED
        this.reason = reason

        while (this.successCallback.length) this.successCallback.shift()()
    }
    reject = (reason) => {
        if (this.status !== PENDING) return
        this.status = REJECTED
        this.reason = reason

        while (this.failCallback.length) this.failCallback.shift()()
    }

    then = (successCallback, failCallback) => {
        if (typeof successCallback !== 'function') successCallback = value => value
        if (typeof failCallback !== 'function') failCallback = value => value
        const promise2 = new MyPromise((resolve2, reject2) => {
            try {
                setTimeout(() => {
                    if (this.status === FULFILLED) {
                        const result = successCallback(this.reason)
                        this.judgeResult(promise2, resolve2, reject2, result)
                    } else if (this.status === REJECTED){
                        const result = failCallback(this.reason)
                        this.judgeResult(promise2, resolve2, reject2, result)
                    } else {
                        this.successCallback.push(() => {
                            const result = successCallback(this.reason)
                            this.judgeResult(promise2, resolve2, reject2, result)
                        })
                        this.failCallback.push(() => {
                            const result = failCallback(this.reason)
                            this.judgeResult(promise2, resolve2, reject2, result)
                        })
                    }
                }, 0)
            } catch (error) {
                reject2(error)
            }
        })

        return promise2
    }
    judgeResult = (promise2, resolve, reject, result) => {
        if (promise2 === result) {
            return reject('请不要返回自己')
        }
        if (result instanceof MyPromise) {
            result.then(value => resolve(value), error => reject(error))
        } else {
            resolve(result)
        }
    }

    static all = (arr) => {
        if (!arr instanceof Array) {
            throw new Error('请传入一个数组')
        }
        if (arr.length === 0) {
            throw new Error('请传入一个非空数组')
        }

        let resultArr = []
        let length = arr.length
        let count = 0
        judgeIsAll = (index, value, resolve) => {
            resultArr[index] = value
            if (++count === length) resolve(resultArr)
        }
        return new MyPromise((resolve, reject) => {
            try {
                for(let i = 0; i < length; i++) {
                    if (arr[i] instanceof MyPromise) {
                        arr[i].then(value => {
                            judgeIsAll(i, value, resolve)
                        }, error => reject(error))
                    } else {
                        judgeIsAll(i, arr[i], resolve)
                    }
                }
            } catch (error) {
                reject(error)
            }
        })
    }

    static race = (arr) => {
        // arr的判断...
        return new MyPromise((resolve, reject) => {
            arr.forEach(fn => {
                if (fn instanceof MyPromise) {
                    fn.then(value => resolve(value), error => reject(error))
                } else {
                    resolve(fn)
                }
            });
        })
    }
}


// let p = new MyPromise((res, rej) => {
//     res()
// })
// p.then(res => {
//     console.log(111);
// }).then(res => {
//     console.log(res);
// }).then(res => {
//     return new MyPromise((res, rej) => {
//         setTimeout(() => {
//             console.log(222);
//             res(4444)
//         }, 500)
//     })
// }).then((res) => {
//     console.log(res);
// })

// let p2 = new MyPromise((res, rej) => {
//     res("success")
//   })
// p2.then().then("b").then(value => console.log(value))

// let p1 = new Promise((res, rej) => {
//     res(1)
// })

// setTimeout(() => {
//     console.log('settimeout');
// }, 0)
// p1.then((data) => {
//     console.log('p1', data);
//     return data
// }).then((data) => {
//     // setTimeout(() => {
//     //     console.log('p2', data);
//     //     return data
//     // })
//     return new Promise((res, rej) => {
//         console.log('p2', data);
//         res(data)
//     })
// }).then((data) => {
//     console.log('p3', data);
//     return data
// })

// setTimeout(() => {
//     console.log('settimeout');
// }, 0)
// let p1 = new MyPromise((res, rej) => {
//     res('p1')
// })
// p1.then((data) => console.log(data))

// Promise.resolve(1)
//   .then(2)
//   .then(Promise.resolve(3))
//   .then(console.log)

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('success')
//     }, 1000)
//   })
//   const promise2 = promise1.then(() => {
//     throw new Error('error!!!')
//   })
//   console.log('promise1', promise1)
//   console.log('promise2', promise2)
//   setTimeout(() => {
//     console.log('promise1', promise1)
//     console.log('promise2', promise2)
//   }, 2000)


// Promise.resolve().then(() => {
//     return new Error('error!!!')
//   }).then(res => {
//     console.log("then: ", res)
//   }).catch(err => {
//     console.log("catch: ", err)
//   })

let arr = [1,2,3,4,5]
for (let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}
