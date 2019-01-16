function makeSanduich(bread, cheese, sauce) {
    console.log(`Your sandwitch with ${bread} bread, ${cheese} cheese and ${sauce} is done!`);
}

const ingredientes = ['white', 'cheddar', 'barbecue'];

makeSanduich(...ingredientes);
