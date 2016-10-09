//二叉树的深度
/*
题目一：
输入一棵二叉树的根节点，求该树的深度。从根结点到叶结点一次经过的结点
(含根、叶结点)形成树的一条路径，最长路径的长度为树的深度
 */
var TreeNode = require('./base').TreeNode;

function TreeDepth(root){
    if(root == null)
        return 0;
    return Math.max(TreeDepth(root.left), TreeDepth(root.right)) + 1;
}

var root = new TreeNode(0);
root.left = new TreeNode(1);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);

console.log(TreeDepth(root));

/*
题目二：
输入一个二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意结点
的左右子树的深度相差不超过1，那么它就是一颗平衡二叉树。
 */
function isBalanced(root){
    var depth = 0;
    return isBalancedHelper(root);
}
