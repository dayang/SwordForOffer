//从上往下打印二叉树
/*
从上往下打印出二叉树的每个结点，同一层的结点
按照从左到右的顺序打印。
 */
//就是图的广度优先遍历 用队列实现
var TreeNode = require('./base').TreeNode;

function printTreeFromTopToBottom(root){
    if(!root) return;
    var queue = [], treeNode;
    queue.push(root);
    while(queue.length > 0){
        treeNode = queue.shift();
        console.log(treeNode.val);

        if(treeNode.left)
            queue.push(treeNode.left);
        if(treeNode.right)
            queue.push(treeNode.right);
    }
}
