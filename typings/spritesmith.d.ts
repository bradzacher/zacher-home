declare module 'spritesmith' {
    interface Result {
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
    }
    interface Opts {
        src: Array<string>;
        layout: string;
    }

    interface Runner {
        run(opts: Opts, cb: (err: Error | null, result: Result) => void): void;
    }

    const exprt: Runner;
    export = exprt;
}
