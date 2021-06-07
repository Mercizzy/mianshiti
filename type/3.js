class Student{
    constructor(name) {
        this.name = 'Jarry'
    }
    getInfo() {
        return {
            name: 'Tom',
            getName() {
                return this.name
            }
        }
    }
}
const stu = new Student()
// 输出是什么？
console.log(stu.getInfo().getName());
// 如何改成输出Jarry
console.log(stu.getInfo().getName.call(stu));
