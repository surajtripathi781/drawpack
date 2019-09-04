declare const Raphael: any;
export class Raph {
  public paper:any;
  constructor(p){
    let h:number=800;
    let w:number=800;
    this.paper=Raphael('svg_paper',h,w);
  }

}
