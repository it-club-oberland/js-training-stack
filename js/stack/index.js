

/**
 * Add a new item into the stack
 * @param  pItem, item to be added
 */
Array.prototype.add = function(pItem){
    this.push(pItem);
};

/**
 * Remove the first item/tos(top of the stack) from the stack
 */
Array.prototype.remove = function(){
    this.pop();
}

/**
 * Displays the first item/tos(top of stack) from the stack
 */
Array.prototype.peek = function(){
    return this[this.length-1];
}

/**
 * Delete all items from the stack
 */
Array.prototype.reset = function(){
    this.length = 0;
}

/**
 * Ask whether the stack is empty
 */
Array.prototype.isEmpty = function(){
    return this.length == 0;
}


/**
 * Creates a stack from a given array
 * @param pArray, the array which contains the elements to be added
 * @example stackInstance.$stackOf([7,8,9,11]]) 
 */
Array.prototype.$stackOf = function(pArray){
    for(let item of pArray){
        this.push(item);
    }
}


/**
 * Creates a stack from a the given parameters
 * @example stack._stackOf(1,2,3,5)
 * @warning Please do not change the function below!!!
 */
Array.prototype._stackOf = function(){}
