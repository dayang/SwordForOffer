//树的子结构
/*
输入两棵二叉树A和B，判断B是不是A的子结构。
 */
//判断root2是否是root1的子结构(不是子树)
var TreeNode = require('./base').TreeNode;

function isSubTree(root1, root2){
    var result = false;
    if(root1 !== null && root2 !== null){
        if(root1.val === root2.val){
            result = DoesTree1HaveTree2(root1, root2);
        }
        if(!result)
            result = isSubTree(root1.left, root2);
        if(!result)
            result = isSubTree(root1.right, root2)
    }
    return result;
}

function DoesTree1HaveTree2(root1, root2){
    if(root2 == null)
        return true;
    if(root1 == null)
        return false;
    if(root1.val !== root2.val)
        return false;
    return DoesTree1HaveTree2(root1.left, root2.left) &&
            DoesTree1HaveTree2(root1.right, root2.right);
}