module.exports = () => {
    // Proccess all command line args
    const args = {
        verbose: false,
        env: 'dev' // The default environment is the development env
    }

    process.argv.forEach( arg => {
        switch (arg) {
            case 'verbose':
            case 'v':
                args.verbose = true;
                break;
            case 'dev':
            case 'd':
                args.env = 'dev';
                break;
            case 'prod':
            case 'p':
                args.env = 'prod';
                break;
            case 'help':
            case 'h':
                console.log(`Usage:\n\tnpm <start>\nOptions:\n\t[v / verbose]\n\t[d / dev]\n\t[p / prod]\n\t[h / help]`);
                process.exit();
                break;
        }
    })

    return args;
}