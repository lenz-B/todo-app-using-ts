interface Rectangle {
  length: number;
  width: number;
}
``
interface ColoredRectangle extends Rectangle{
  color: string;
}


let x: unknown = 'Labeeb'

let y = x as string

console.log(y.length);