import { urlAPI } from "../../static/ts/vars";

export default function SearchInput({parent, postIdName, inputId}) {
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

                    let postsPanel = document.getElementById(postIdName);
                    postsPanel.innerHTML = ''

                    posts.map((post) => {
                        postsPanel.innerHTML += `
                            <a href=${'/blog/' + post.slug} title=${post.title} class='block text-xs my-2 p-2 rounded-lg line-clamp-1 hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors'>${post.title}</a>
                        `
                    })
                    postsPanel.classList.remove('hidden')
                }
            }
        }
    }
    function removePostPanel() {
        const postsPanel = document.getElementById(postIdName);
        postsPanel.innerHTML = ''
        postsPanel.classList.add('hidden')
        listWords = [];
    }
    return (
        <>
            <div class="relative flex items-center" className={ parent === 'navbar' ? "mdl:hidden" : 'w-full'}>
                <form class="w-full" title="Buscar artículos">
                    <label for={inputId} class="hidden">Buscar artículo</label>
                    <input onFocus={getPosts} onBlur={removePostPanel} onInput={getPosts} type="text" placeholder="Buscar artículos" id={inputId} class="bg-zinc-100/80 text-sm mb-1 outline-none px-3 py-2 dark:bg-zinc-800 rounded-xl dark:text-zinc-300 w-full" />
                </form>
                <div id={postIdName} className={"hidden rounded-lg shadow px-3 py-2 w-80 max-h-[200px] absolute right-[-2rem] overflow-y-auto bg-white top-[100%] dark:bg-[#161616] dark:text-zinc-300"}></div>
            </div>
        </>
    )
}