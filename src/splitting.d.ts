declare module "splitting" {
  interface SplittingOptions {
    target?: Element | string;
    by?: string;
    key?: string;
  }

  interface SplittingInstance {
    el: Element;
    words: Element[];
    chars: Element[];
  }

  function Splitting(options?: SplittingOptions): SplittingInstance[];

  export default Splitting;
}
