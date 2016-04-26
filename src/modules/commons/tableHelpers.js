
// FIXME: need to find out a better way to calculate a table dimensions.
// maybe we can set a different column width depending how wide a user screen is
export function setTableDimensions ({width, widthGutter, minHeight = 200, heightGutter}) {
  widthGutter = widthGutter || 20;
  heightGutter = heightGutter || 80;
  width = width || window.innerWidth - widthGutter;
  let height = window.innerHeight - heightGutter;
  return {
    width: width,
    height: height > minHeight ? height : minHeight
  }
}