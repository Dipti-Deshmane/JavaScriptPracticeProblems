//Variables declared with let or const inside a block (denoted by {}) are block-scoped and can only be accessed within that block. Variables declared with var are not block-scoped.
{
    let greeting ="good afternoon";
    console.log(greeting);
}

{
    const greet ="good evening";
    console.log(greet);
}
