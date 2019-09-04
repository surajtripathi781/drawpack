import { Raph } from "./Raph.class";
export class Paper extends Raph {

  constructor(p) {
    super(p);
    this.drawAxis(10, 3, 1, 800, 800, true);
  }

  public drawAxis(gridGap, offset, ratio, containerWidth, containerHeight, isDrawGrid) {
    console.log("Width=",this.paper);
    let paperWidth = this.paper.width,
      paperHeight = this.paper.height,
      paperCenterOfX = containerWidth / 2,
      paperCenterOfY = containerHeight / 2;
    this.drawXAxis(gridGap, offset, ratio, containerWidth, containerHeight, isDrawGrid, paperCenterOfY)
    this.drawYAxis(gridGap, offset, ratio, containerWidth, containerHeight, isDrawGrid, paperWidth, paperHeight, paperCenterOfX)
  }

  private drawXAxis(gridGap, offset, ratio, containerWidth, containerHeight, isDrawGrid, paperCenterOfY) {
    for (var i = gridGap * ratio * -30, j = -33; i <= containerWidth; i += gridGap * ratio, j++) {
      if (j % 5 == 0) {
        if (isDrawGrid) {
          this.paper.path("M" + i + ",0L" + i + "," + (containerHeight + (gridGap * ratio * 30))).attr({ "stroke": "#696969", "stroke-width": 0.50 });
        }
        // paper.text(i,5,i.toFixed(1)).attr({"fill": "red", "stroke-width":1}); // for x
        let xAxisPoints = this.paper.text(i, paperCenterOfY, j * gridGap).attr({ "fill": "blue", "font-size": 10 });
        xAxisPoints.transform('t0,' + (paperCenterOfY - 10));
        //this.paperConfig.xLabels.push(xAxisPoints);
      }
      else {
        if (isDrawGrid) {
          this.paper.path("M" + i + ",0L" + i + "," + (containerHeight + (gridGap * ratio * 30))).attr({ "stroke": "#696969", "stroke-width": 0.25 });
        }
      }
    }
  }


  private drawYAxis(gridGap, offset, ratio, containerWidth, containerHeight, isDrawGrid, paperWidth, paperHeight, paperCenterOfX) {
    for (var i = gridGap * ratio * -30, j = -33; i <= containerHeight; i += gridGap * ratio, j++) {
      if (j % 5 == 0) {
        if (isDrawGrid) {
          this.paper.path("M" + (gridGap * ratio * -30) + "," + (paperHeight - i) + "L" + paperWidth + "," + (paperHeight - i)).attr({ "stroke": "#696969", "stroke-width": 0.50 });
        }
        // paper.text(containerWidth-10,(containerHeight-i),(containerHeight-i).toFixed(1)).attr("fill", "red"); // for y
        let yAxisPoints = this.paper.text(paperCenterOfX, (paperHeight - i), j * gridGap).attr({ "fill": "blue", "font-size": 10 });
        yAxisPoints.transform('t' + (-paperCenterOfX + 10) + ",0");
        //this.paperConfig.yLabels.push(yAxisPoints);
      }
      else {
        if (isDrawGrid) {
          this.paper.path("M" + (gridGap * ratio * -30) + "," + (paperHeight - i) + "L" + paperWidth + "," + (paperHeight - i)).attr({ "stroke": "#696969", "stroke-width": 0.25 });
        }
      }
    }
  }

}
