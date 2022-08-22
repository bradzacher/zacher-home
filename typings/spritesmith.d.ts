declare module 'spritesmith' {
  type Result = {
    image: Buffer;
    coordinates: Record<
      string,
      {
        x: number;
        y: number;
        width: number;
        height: number;
      }
    >;
    properties: {
      width: number;
      height: number;
    };
  };
  type Opts = {
    src: Array<string>;
    layout: string;
  };

  type Runner = {
    run: (opts: Opts, cb: (err: Error | null, result: Result) => void) => void;
  };

  const exprt: Runner;
  export = exprt;
}
