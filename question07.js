//用两个栈实现队列   -->  用两个队列模拟栈
/*
用两个栈实现一个队列，队列的声明如下，请实现它的
两个函数appendTail和deleteHead，分别完成在队列
尾部插入节点和在队列头部删除结点的功能
 */
function Queue(){
    this.stack1 = [];
    this.stack2 = [];
}

Queue.prototype.appendTail = function(n){
    this.stack1.push(n);
};

Queue.prototype.deleteHead = function(){
    if(this.stack2.length <= 0){
        while(this.stack1.length > 0){
            this.stack2.push(this.stack1.pop());
        }
    }
    if(this.stack2.length <= 0){
        throw new Error("Queue is empty")
    }
    return this.stack2.pop();
};

var q = new Queue();
q.appendTail(3);
q.appendTail(5);
q.appendTail(8);
console.log(q.deleteHead());
console.log(q.deleteHead());
console.log(q.deleteHead());
console.log(q.deleteHead());