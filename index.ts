export function useDynamicSizeList() {
  if (!window) {
    throw new Error("You are not in a browser");
  }

  return {
    width: window.innerWidth,
    height: window.innerHeight,
    uuid: window.crypto.randomUUID(),
    message: "hello",
  };
}
