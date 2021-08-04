function foo1() {
    return {
        bar: "hello"
    };
}

function foo2() {
    return {
        bar: "hello"
    };
}

console.log(foo1());
console.log(foo2());

/*
The values will be different.
In JS, if the statements are each a separate line, we can usually omit the semicolon (;) between the statements.
The JS parser will decide whether to automatically fill in the semicolon according to whether it can be compiled normally:
But for statements such as return, break, continue, etc., if followed by a newline, The parser will automatically fill in the semicolon (;)
Therefore, The rest of the code after return statement in foo2() will be ignored.

output -> 
{ bar: 'hello' }
undefined
*/