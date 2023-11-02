export default function SearchInput() {
    function getPosts() {

    }
    return (
        <>
            <div className={"relative"}>
                <form class="w-full" title="Buscar artículos" aria-label="Buscar artículos" className={"mb-2"}>
                    <label for="search" class="hidden">Buscar artículo</label>
                    <input onInput={getPosts} type="text" placeholder="Buscar artículos" id="search" class="bg-zinc-100/80 text-sm placeholder:text-zinc-400 placeholder:text-sm px-3 h-9 rounded-lg w-full outline-[1px] outline-slate-100" />
                </form>
                <div className={"hidden rounded-lg shadow px-3 py-2 w-80 h-56 absolute right-[-2rem] bg-white"}></div>
            </div>
        </>
    )
}