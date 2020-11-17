// frontend code cannot use traditional npm packages but can use browser API
export default class Demo_Main_Front {
    /** @type {Demo_Main_Shared} */
    singleMainShared
    /** @type {Demo_Main_Plugin_Front} */
    instPluginFront

    constructor(spec) {
        // get default export as singleton (class)
        this.singleMainShared = spec.Demo_Main_Shared$;
        // get default export as new instance (class)
        this.instPluginFront = spec.Demo_Main_Plugin_Front$$;
    }

    out(cssMain, cssPlugin) {
        const shared = this.singleMainShared.out('main front');
        const elOut = self.document.querySelector(cssMain);
        elOut.innerHTML = JSON.stringify({frontMain: shared});
        this.instPluginFront.out(cssPlugin);
    }
}
