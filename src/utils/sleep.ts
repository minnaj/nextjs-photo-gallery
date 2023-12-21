export default function sleep(delay: number) {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done!");
    }, delay);
  });
  return promise;
}
