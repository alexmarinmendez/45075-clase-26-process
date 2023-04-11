const operacion = () => {
    let result = 0
    for (let i=0; i<5e9*5; i++) {
        result += i
    }
    process.send(result)
}