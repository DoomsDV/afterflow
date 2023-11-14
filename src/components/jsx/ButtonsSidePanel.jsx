export function ButtonShowSideBar() {
	let sideBar = document.getElementById("sideBar");
	let bloqueo = document.getElementById("bloqueo");

	function showSideBar() {
		sideBar.style.right = "0px";
		bloqueo.classList.replace("hidden", "block");
	}
	return (
		<>
			<button
				onClick={showSideBar}
				className={"hidden mdl:block"}
				title={"Menú"}>
				<svg
					class="swap-off h-7 w-7 fill-current text-zinc-800 dark:text-slate-200"
					viewBox="0 0 512 512">
					<path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
				</svg>
			</button>
		</>
	);
}

export function BlockDiv() {
	function hideSideBar(event) {
		let sideBar = document.getElementById("sideBar");
		sideBar.style.right = "-20rem";
		event.target.classList.replace("block", "hidden");
	}

	return (
		<div
			id="bloqueo"
			onClick={hideSideBar}
			class="invisible fixed top-0 z-[100] hidden h-full w-full bg-black/30 md:visible"></div>
	);
}
