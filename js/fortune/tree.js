"use strict";

define([], function(){

  function BinaryTree(item, parent, l, r){
    this.item=item;
    this.parent=parent;
    this.l=l;
    this.r=r;
  }

  BinaryTree.prototype.isRoot=function(){
    return this.parent===undefined;
  }

  BinaryTree.prototype.isLeaf=function(){
    return this.l===undefined && this.r===undefined;
  }

  BinaryTree.prototype.isLChild=function(){
    return !this.isRoot() && this.parent.l===this;
  }

  BinaryTree.prototype.isRChild=function(){
    return !this.isRoot() && this.parent.r===this;
  }

  BinaryTree.prototype.addLChild=function(child){
    this.l=child;
    child.parent=this;
  }

  BinaryTree.prototype.addRChild=function(child){
    this.r=child;
    child.parent=this;
  }

  BinaryTree.prototype.getLLeafAndLParent=function(leaf){
    var curNode=leaf||this;
    while(curNode.isLChild()) curNode=curNode.parent;
    if(curNode.isRoot()) return [undefined, undefined];
    var lparent=curNode.parent;
    curNode=curNode.parent.l;
    while(!curNode.isLeaf()) curNode=curNode.r;
    return [curNode, lparent]
  }

  BinaryTree.prototype.getRLeafAndRParent=function(leaf){
    var curNode=leaf||this;
    while(curNode.isRChild()) curNode=curNode.parent;
    if(curNode.isRoot()) return [undefined, undefined];
    var rparent=curNode.parent;
    curNode=curNode.parent.r;
    while(!curNode.isLeaf()) curNode=curNode.l;
    return [curNode, rparent]
  }

   //------------------------------------------------------------------------

  BinaryTree.prototype.str_tree=function(path){
    var path=path||"root";
    if(this.item==undefined) return "Empty beachline.\n";
    var node_string=path+". "+String(this.item)+"\n";
    if(!this.isLeaf()){
        node_string+=this.l.str_tree(path+"->l");
        node_string+=this.r.str_tree(path+"->r");
      };
    return node_string;
  }

  return BinaryTree;

})
