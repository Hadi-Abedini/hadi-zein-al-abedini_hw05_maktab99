let stepCounter = {
  steps: 0,
  increase: function () {
    this.steps++;
  },
  decrease: function () {
    this.steps--;
  },
  reset: function () {
    this.steps = 0;
  },
  read: function () {
    console.log(`steps: ${this.steps}`);
  }
}