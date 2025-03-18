function addRecommendation() {
    const input = document.getElementById("new-recommendation").value;
    if (input) {
        const list = document.getElementById("recommendation-list");
        const newItem = document.createElement("li");
        newItem.textContent = input;
        list.appendChild(newItem);
        alert("Recommendation added successfully!");
    }
}
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
