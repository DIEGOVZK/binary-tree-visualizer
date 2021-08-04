// structure of the tree object as individual nodes
class treeNode {
    constructor(info) {
        this.info = info;
        this.right = undefined;
        this.left = undefined;
    }
}

const ant = {

    // creates and inserts new values to the nodes
    insertNode(tree, x)
    {
        if (tree.info === undefined)
        {
            tree.info = x;
            tree.left = new treeNode;
            tree.right = new treeNode;
        } 
        else
        {
            if (tree.info > x) 
                this.insertNode(tree.left, x);
            else
                this.insertNode(tree.right, x);
        }  
    },

    // creates many nodes with unknown amount of numbers
    putMany(tree, ...x)
    {
        const items = x;
        for (let index = 0; index < items.length; index++)
            this.insertNode(tree, items[index]);
    },

    // performs a traversal on the tree, in increasing order
    inOrder(tree)
    {
        if(tree.info !== undefined)
        {
            this.inOrder(tree.left);
            console.log(tree.info);
            this.inOrder(tree.right);
        }
    }
}


// creates a tree, inserts new nodes, output values
let tree_1 = new treeNode;

ant.insertNode(tree_1, 1);
ant.putMany(tree_1, 3, 2, 4, 7, 5, 6);
ant.inOrder(tree_1);

console.log(tree_1);