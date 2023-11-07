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