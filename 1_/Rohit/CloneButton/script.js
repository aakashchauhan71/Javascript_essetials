const btn = document.getElementById("btn");
const clone = document.getElementById("clone");
btn.addEventListener("click", cloneBtn);
function cloneBtn() {
	clone.innerHTML = `<div class="container d-flex justify-content-center align-items-center">
			<h1>Button Clone</h1>
			<button class="btn btn-dark m-3 border border-info" id="btn">
				Hello
			</button>
		</div>`;
}
