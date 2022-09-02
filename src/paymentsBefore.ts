export default function (
  context: any,
  callback: (errorMessage?: string) => void
) {
  console.log("Before2");
  callback();
}
