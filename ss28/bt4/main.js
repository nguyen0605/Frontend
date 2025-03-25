const rectangle = {
    width: 10,
    height: 5,
    getArea() {
        return this.width * this.height;
    }
}

area = rectangle.getArea();

console.log(area);

