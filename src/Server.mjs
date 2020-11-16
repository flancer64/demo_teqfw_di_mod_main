// server side code can use traditional npm packages
import $path from 'path';
import $url from 'url';

// use server side stuff (just useless demo)
const {path: currentScript} = $url.parse(import.meta.url);
const pathScript = $path.dirname(currentScript);

export default function Demo_Main_Server(spec) {
    const fnPlugin = spec['Demo_Main_Plugin_Shared#'];
    // get default export as singleton (class)
    /** @type {Demo_Main_Shared} */
    const instMain = spec.Demo_Main_Shared$;

    // handler for 'express' requests
    return function (req, res) {
        // then use injected function and class instance
        const plugin = fnPlugin(pathScript);
        const main = instMain.out(pathScript);
        // compose response
        res.setHeader('Content-Type', 'application/json; charset=UTF-8');
        res.end(JSON.stringify({main, plugin}));
    }
}
