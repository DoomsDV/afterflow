import { urlAPI } from "../../static/ts/vars";

export default function SearchInput() {
    let inputText = '';
    let listWords = [];
    async function getPosts(e) {
            
        if (e.target.value !== '') {
            inputText = e.target.value
            listWords.push(inputText)
            
            if (listWords.length > 0) {

                /* Comparamos si la longitud de la palabra actual que se escribio 
                es mayor a la última palabra que escribio el usuario y que esta guardado en 
                listWords. Si se cumple se hace la petición si no significa que la palabra 
                actual tiene una longitud menor por lo tanto significa que se elimino 
                un caracter y no realiza la petición.*/ 

                if (inputText.length >= listWords[listWords.length-1].length) {
                    const request = await fetch(urlAPI + `/search/posts/${e.target.value}/`);
                    const posts = await request.json();

                    let postsPanel = document.getElementById('posts');
                    postsPanel.innerHTML = ''

                    posts.map((post) => {
                        postsPanel.innerHTML += `
                            <a href=${'/blog/' + post.slug} title=${post.title} class='block text-xs my-1 p-2 rounded-lg line-clamp-1 hover:bg-slate-50'>${post.title}</a>
                        `
                    })
                    postsPanel.classList.remove('hidden')
                }
            }
        }
    }
    function removePostPanel() {
        const postsPanel = document.getElementById('posts');
        postsPanel.innerHTML = ''
        postsPanel.classList.add('hidden')
        listWords = [];
    }
    return (
        <>
            <div className={"relative flex items-center"}>
                <form class="w-full" title="Buscar artículos" aria-label="Buscar artículos">
                    <label for="search" class="hidden">Buscar artículo</label>
                    <input onFocus={getPosts} onBlur={removePostPanel} onInput={getPosts} type="text" placeholder="Buscar artículos" id="search" class="bg-zinc-100/80 text-sm placeholder:text-zinc-400 placeholder:text-sm px-3 h-9 rounded-lg w-full outline-[1px] outline-slate-100 dark:bg-zinc-900 dark:outline-[1px] dark:outline-zinc-800 dark:placeholder:text-zinc-200 dark:text-zinc-200" />
                </form>
                <div id={"posts"} className={"hidden rounded-lg shadow px-3 py-2 w-80 max-h-[200px] absolute right-[-2rem] overflow-y-auto bg-white"}></div>
            </div>
        </>
    )
}