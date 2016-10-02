//重建二叉树
/*
输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
假设输入的谦虚遍历和中序遍历的结果中都不含重复的数字。例如输入
前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6},
则重建出如下二叉树并输出它的头节点。
        1
       / \
      2   3
     /   / \
    4   5  6
     \    /
      7  8
 */
var TreeNode = require("./base").TreeNode;

function construt(pre, mid){
    if(pre.length === 0) return null;
    var root = new TreeNode(pre[0]);
    var index = mid.indexOf(pre[0]);
    if(index === -1){
        throw new Error("invalid input");
    }
    root.left = construt(pre.slice(1,index + 1), mid.slice(0,index));
    root.right = construt(pre.slice(index + 1), mid.slice(index + 1));
    return root;
}

var pre = [1,2,4,7,3,5,6,8];
var mid = [4,7,2,1,5,3,8,6];
var root = construt(pre, mid);

function preOrder(root){
    if(root != null){
        console.log(root.val);
        preOrder(root.left);
        preOrder(root.right);
    }
}

preOrder(root);