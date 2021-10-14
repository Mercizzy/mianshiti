/**
 * eat(str: string) 

sleep(num: number)

user.eat('aa').sleep(10).sleep(5).eat('bb').eat('cc').sleep(100).eat('aa')

user.eat('a').eat('b').eat('c')
console.log('qqq')

// qqq
// a
// b
// c

// a
// b
// c
// qqq

// => aa
// wait 10s
// wait 5s
// => bb
// => cc
// wait 100
// => aa
 */

class User {
  p = null
  eat(str) {
    if (this.p) {
      this.p = this.p.then(() => {
        console.log(str);
      })
    } else {
      console.log(str);
    }
    return this
  }
  sleep(num) {
    if (this.p) {
      this.p = this.p.then(() => {
        return new Promise(res => {
          setTimeout(() => {
            res()
          }, num * 1000)
        })
      })
    } else {
      this.p = new Promise(res => {
        setTimeout(() => {
          res()
        }, num * 1000)
      })
    }
    return this
  }
}

let user = new User()
user.eat('aa').sleep(2).sleep(5).eat('bb').eat('cc').sleep(4).eat('dd')
console.log('normal');