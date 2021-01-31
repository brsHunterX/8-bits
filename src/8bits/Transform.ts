import Scale from "./Scale";
import Vector from "./Vector";

export default class Transform {
  constructor(
    public scale: Scale = Scale.zero,
    public position: Vector = Vector.zero,
  ) {}
}