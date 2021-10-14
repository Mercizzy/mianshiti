let reg = /^A((?!(c|cd)).)*B$/

let str = 'AdB'
console.log(reg.test(str));


let str2 = `
<p>
<span style="font-style:italic">
<pre>A</pre>
</span>
10
</p>
<p>
<span style="font-style:italic">
<b>B</b>
</span>
11
</p>
`

// let reg2 = /<(\/?)(?!p|\/p).*?>/g
let reg2 = /<(\/?)(((?!p|\/p).*?)|((p|\/p)(.+)))>/g
let reg3 = /\s|[\r\n]/g
let con = str2.replace(reg2, '').replace(reg3, '')
console.log(con);
