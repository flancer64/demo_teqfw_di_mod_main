// frontend code cannot use traditional npm packages
export default class Demo_Main_Front {
    /** @type {Demo_Main_Shared} */
    singleMainShared

    constructor(spec) {
        // get default export as singleton (class)
        this.singleMainShared = spec.Demo_Main_Shared$;
    }

    out(param) {
        const plugin = this.singleMainShared.out(param);
        const elOut = self.document.querySelector('#out');
        elOut.innerHTML = JSON.stringify({front: plugin});
    }
}
