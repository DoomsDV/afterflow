import {useRef, useEffect} from "preact/hooks"

export default function BtnChangeTheme(event) {
    const inputRef = useRef();

    useEffect(() => {
        let html = document.getElementById('html');
        let themeMessage = document.getElementById('themeMessage');
        if (localStorage.getItem("theme") === null) localStorage.setItem("theme", "dark");
        if (localStorage.getItem("theme") === "dark") {
            html.classList.add("dark");
            themeMessage.innerHTML = "Dark";
            inputRef.current.checked = true;
        } else {
            html.classList.remove("dark");
            themeMessage.innerHTML = "Light";
            inputRef.current.checked = false;
        }
    }, []);
    function changeTheme() {
        if (html.classList.toString().includes("dark") ) {
            html.classList.remove("dark");
            themeMessage.innerHTML = "Light";
            localStorage.setItem("theme", "light");
            return;
        } else {
            html.classList.add("dark");
            themeMessage.innerHTML = "Dark";
            localStorage.setItem("theme", "dark");
            return;
        }
    }
    return (
        <label class="relative inline-flex items-center cursor-pointer">
            <input ref={inputRef} type="checkbox" value="theme" class="sr-only peer" onClick={changeTheme}/>
            <div class="w-11 h-6 bg-blue-100 rounded-full peer peer-checked:bg-zinc-700 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
        </label>
    )
}