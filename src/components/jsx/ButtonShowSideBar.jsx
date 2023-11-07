export default function ButtonShowSideBar() {
    let sideBar = document.getElementById('sideBar');
    let bloqueo = document.getElementById('bloqueo');
    
    function showSideBar() {
        sideBar.style.right = '0px';
        bloqueo.classList.replace('hidden', 'block');
    }
    return (
        <>
            <label class="swap swap-rotate">
                <input type="checkbox" onClick={showSideBar} />
                <svg class="swap-off fill-current w-7 h-7 text-zinc-800 dark:text-slate-200" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                <svg class="swap-on fill-current w-7 h-7 text-zinc-800 dark:text-slate-200" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
            </label>
        </>
    )
}