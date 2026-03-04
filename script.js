// PROFILE POPUP
const profilePic = document.getElementById("profilePic");
const profilePopup = document.getElementById("profilePopup");

profilePic.addEventListener("click", () => {
profilePopup.style.display =
profilePopup.style.display === "block" ? "none" : "block";
});

window.addEventListener("click", function(e) {
if (!profilePic.contains(e.target) && !profilePopup.contains(e.target)) {
profilePopup.style.display = "none";
}
});
