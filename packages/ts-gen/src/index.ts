import minimist from 'minimist';
import TsGen from './tsGen';

const args = minimist(process.argv.slice(2), {
    alias: {
        r: 'root',
        o: 'output',
        h: 'help'
    }
});

const gen = () => {
    new TsGen({
        root: args.root,
        output: args.output
    });
};

const help = () => {
    process.stdout.write(`
        Usage: ts-gen [options] [path]

        Options:

            -h, --help      Print cli usage
            -r, --root      the json source file path of swagger-ui
            -o, --output    the output path of services document
    `);
};

const init = () => {
    if(args.help) {
        help();
        return;
    }
    if(!args.root || !args.output) {
        process.stderr.write('need a current path');
        return;
    }
    gen();
};

init();