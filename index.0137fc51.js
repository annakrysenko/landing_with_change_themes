!function(){var e=document.querySelector(".theme__on"),t=document.querySelector(".theme__reset"),a=document.documentElement,c=(document.querySelector(".theme-container"),localStorage.getItem("user-theme"));function s(){window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",o)}function o(){var e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";a.classList.contains("light")?a.classList.toggle("light"):a.classList.toggle("dark"),a.classList.add(e),localStorage.removeItem("user-theme"),t.classList.remove("active")}window.addEventListener("load",(function(){c?(a.classList.add(c),t.classList.add("active")):o(),localStorage||s();e.addEventListener("click",(function(){window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",o),function(){var e,s=a.classList.contains("light")?"light":"dark";"light"===s?e="dark":"dark"===s&&(e="light");a.classList.remove(s),a.classList.add(e),localStorage.setItem("user-theme",e),console.log(c),t.classList.add("active")}()})),t.addEventListener("click",(function(){s(),o()}))}))}();
//# sourceMappingURL=index.0137fc51.js.map
