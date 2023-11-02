import { urlAPI } from "../../static/ts/vars";

export default function SearchInput() {
    async function getPosts(e) {
        if (e.target.value !== '') {
            let coincidences = [];
            const request = await fetch(urlAPI + `/search/posts/${e.target.value}/`);
            const posts = await request.json();

            posts.map(post => {
                if (coincidences.includes(post) === false) {
                    coincidences.push(post);
                }
            })

            let postsPanel = document.getElementById('posts');
            postsPanel.innerHTML = ''

            coincidences.map((post) => {
                postsPanel.innerHTML += `
                    <a href=${'/blog/' + post.slug} class='block'>${post.title}</a>
                `
            })
            postsPanel.classList.remove('hidden')
        }
    }
    function removePostPanel() {
        const postsPanel = document.getElementById('posts');
        postsPanel.innerHTML = ''
        postsPanel.classList.add('hidden')
    }
    return (
        <>
            <div className={"relative"}>
                <form class="w-full" title="Buscar artículos" aria-label="Buscar artículos" className={"mb-2"}>
                    <label for="search" class="hidden">Buscar artículo</label>
                    <input onFocus={getPosts} onBlur={removePostPanel} onInput={getPosts} type="text" placeholder="Buscar artículos" id="search" class="bg-zinc-100/80 text-sm placeholder:text-zinc-400 placeholder:text-sm px-3 h-9 rounded-lg w-full outline-[1px] outline-slate-100" />
                </form>
                <div id={"posts"} className={"hidden rounded-lg shadow px-3 py-2 w-80 h-auto absolute right-[-2rem] overflow-y-auto bg-white"}></div>
            </div>
        </>
    )
}