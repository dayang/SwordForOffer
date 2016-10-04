//二叉树的镜像
/*
请完成一个函数，输入一个二叉树，该函数输出它的镜像
 */

//递归版
function MirrorBinaryTree(root){
    if(root == null || (root.left == null && root.right == null))
        return;
    var tempNode;
    tempNode = root.left;
    root.left = root.right;
    root.right = tempNode;
    if(root.left !== null){
        MirrorBinaryTree(root.left);
    }
    if(root.right !== null){
        MirrorBinaryTree(root.right);
    }
}

//循环版
function MirrorBinaryTree2(root){
    if(root == null || (root.left == null && root.right == null))
        return;
    var stack = [], temp;
    stack.push(root);
    while(stack.length > 0){
        root = stack.pop();
        temp = root.left;
        root.left = root.right;
        root.right = temp;
        if(root.right)
            stack.push(root.right);
        if(root.left)
            stack.push(root.left);
    }
}