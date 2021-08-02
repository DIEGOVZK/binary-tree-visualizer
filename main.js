// structure of the tree object as individual nodes
class treeNode {
    constructor(info) {
        this.info = info;
        this.right = undefined;
        this.left = undefined;
    }
}

// creates and inserts new values to the nodes
function insertNode(node, x)
{
    if (node.info === undefined)
    {
        node.info = x;
        node.left = new treeNode;
        node.right = new treeNode;
    } 
    else
    {
        if (node.info > x) 
            insertNode(node.left, x);
        else
            insertNode(node.right, x);
            
    }      
}

// performs a traversal on the tree, in increasing order
function inOrder(node)
{
    if(node.info !== undefined)
    {
        this.inOrder(node.left);
        console.log(node.info);
        this.inOrder(node.right);
    }
}

// creates a tree, inserts new nodes, output values
var tree = new treeNode;

insertNode(tree, 1);
insertNode(tree, 3);
insertNode(tree, 2);
insertNode(tree, 4);

console.log(tree);

inOrder(tree);