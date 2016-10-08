//包含min函数的栈
/*
定义栈的数据结构，请在该类型中实现一个能得到
栈的最小元素的min函数。在该栈中，调用min,push
及pop的时间复杂度都是O(1)
 */
function MinStack(){
    this.stack = [];
    this.minStack = [];
    this.len = 0;
}

MinStack.prototype.push = function(val){
    this.stack.push(val);
    if(this.len <= 0 || val < this.minStack[this.len - 1]){
        this.minStack.push(val);
    }else{
        this.minStack.push(this.minStack[this.len - 1]);
    }
    this.len++;
};

MinStack.prototype.pop = function(){
    if(this.len > 0){
        this.stack.pop();
        this.minStack.pop();
        this.len --;
    }else{
        throw new Error("stack is empty");
    }
};

MinStack.prototype.min = function(){
    if(this.len <= 0) {
        throw new Error("stack is empty");
    }
    return this.minStack[this.len - 1];
};

var minStack = new MinStack();
minStack.push(12);
minStack.push(3);
console.log(minStack.min());
minStack.push(15);
console.log(minStack.min());
minStack.pop();
minStack.pop();
console.log(minStack.min());