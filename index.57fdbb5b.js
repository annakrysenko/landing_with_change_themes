!function(){var e=document.querySelector(".theme__on"),t=document.querySelector(".theme__reset"),a=document.documentElement,s=(document.querySelector(".theme-container"),localStorage.getItem("user-theme"));function c(){var e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";a.classList.contains("light")?a.classList.toggle("light"):a.classList.toggle("dark"),a.classList.add(e),localStorage.removeItem("user-theme"),t.classList.remove("active")}function i(){var e,s=a.classList.contains("light")?"light":"dark";"light"===s?e="dark":"dark"===s&&(e="light"),a.classList.remove(s),a.classList.add(e),localStorage.setItem("user-theme",e),t.classList.add("active")}window.addEventListener("load",(function(){s?(a.classList.add(s),t.classList.add("active")):c(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",c),e.addEventListener("click",i),t.addEventListener("click",c)}))}();
//# sourceMappingURL=index.57fdbb5b.js.map
