const createSteps = (board) => {
    const steps = [];
    for (let i = 0; i <= 5; i++ ) {
        const random = Math.floor(Math.random() * Math.floor(board.length))
        steps.push(random);
    }
    return steps;
}

export default createSteps;