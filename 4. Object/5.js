function Rect(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;

    this.area = function () {
        return this.width * this.height;
    };

    this.square = function () {
        return width === height;
    };
}
let rect = new Rect(30, 25, 'blue');