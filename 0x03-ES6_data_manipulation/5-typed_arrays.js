export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw Error('Position outside range');
  const dataview = new DataView(new ArrayBuffer(length));
  dataview.setUint8(position, value);
  return dataview;
}
