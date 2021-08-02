
// structure of the tree object as individual nodes
class treeNode {
    constructor(info) {
        this.info = info;
        this.right = null;
        this.left = null;
    }
}

// creates and inserts new values to the nodes
function insertNode(mainNode, x)
{
    var newNode = new treeNode(x);
    if(this.info === null)
        this.info = newNode;

    else
        if(x > newNode.info)
        {
            if(mainNode.left === null)
                mainNode.left = newNode;
            else
                this.insereNode(mainNode.left, x);
        }
        else
        {
            if(mainNode.right === null)
                mainNode.right = newNode;
            else
                this.insereNode(mainNode.right, x);    
        }
        
}

// performs a traversal on the tree, increasing order
function inOrder(mainNode)
{
    if(mainNode !== null)
    {
        this.inOrder(mainNode.left);
        console.log(mainNode.info);
        this.inOrder(mainNode.right);
    }
}

var tree = new treeNode;
insereNode(tree, 1);
insereNode(tree, 2);

inOrder(tree)