// shared code cannot use traditional npm packages and cannot use browser API
export default class Demo_Main_Shared {
    // function imported from Demo_Main_Plugin_Shared
    fnPluginShared

    constructor(spec) {
        // get ES6 module from container
        const mod = spec.Demo_Main_Plugin_Shared;
        // get 'default' export from ES6 module
        this.fnPluginShared = mod.default;
        // alternative:
        // const mod = spec['Demo_Main_Plugin_Shared#'];
    }

    out(param) {
        const plugin = this.fnPluginShared(param);
        return {mainShared: plugin};
    }
}
