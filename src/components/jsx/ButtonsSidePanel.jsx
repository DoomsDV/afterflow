export function ButtonShowSideBar() {
    let sideBar = document.getElementById('sideBar');
    let bloqueo = document.getElementById('bloqueo');

    function showSideBar() {
        sideBar.style.right = '0px';
        bloqueo.classList.replace('hidden', 'block');
    }
    return (
        <>
            <button onClick={showSideBar} className={"mdl:block hidden"} title={"Menú"}>
                <svg class="swap-off fill-current w-7 h-7 text-zinc-800 dark:text-slate-200" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
            </button>
        </>
    )
}

export function ButtonShowMenuCategories({parent}) {
    return (
        <ul class="text-gray-700" className={parent === 'sideBar' ? "pl-6 mt-3" : ""}>
            <li><a href="/categoria/astro-js" title={"Astro JS"} className={"text-slate-200 block dark:hover:bg-zinc-800 dark:hover:text-zinc-200 p-2 rounded-lg hover:bg-zinc-100"}>Astro JS</a></li>
        </ul>
    )
}

export function BlockDiv() {
    function hideSideBar(event) {
        let sideBar = document.getElementById('sideBar');
        sideBar.style.right = '-20rem';
        event.target.classList.replace('block', 'hidden');
    }

    return (
        <div id="bloqueo" onClick={hideSideBar} class="w-full h-full fixed top-0 z-[100] md:visible invisible bg-black/30 hidden"></div>
    )
}