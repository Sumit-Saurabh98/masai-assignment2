let car = {
    brand: "Tesla",
    getBrand(){
        return this.brand
    }
}

const output = car.getBrand.bind(car)

console.log(output());
