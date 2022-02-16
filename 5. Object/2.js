const kvadrat = {
    width: 200,
    height: 200,
    maydan: {
        calcMaydan() {
            return this.width * this.height;
        }
    }
}
let a;
kvadrat.maydan.calcMaydan();
console.log(kvadrat.maydan)