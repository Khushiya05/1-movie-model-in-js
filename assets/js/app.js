let cl = console.log;
const backDrop = document.getElementById("backDrop");
const ourModel = document.getElementById("ourModel");
const openmodel = document.getElementById("openmodel");
const closeModel = [...document.querySelectorAll(".closeModel")];
const movieModal = document.getElementById("movieModal");
const titleContol = document.getElementById("title");
const movieUrlControl = document.getElementById("movieUrl");
const ratingControl = document.getElementById("rating");


let movieArr = [{
    title: "rama",
    movieeUrl: "",
    rating: 5
}]

const onmovieSubmit = (ele) => {
    cl("submitted")
    ele.preventDefault()
    let obj = {
        title: titleContol.value,
        moveiUrl: movieUrlControl.value,
        rating: ratingControl.value

    }
    cl(obj)
    movieArr.push(obj);
    cl(movieArr)
    onmoviehandler()

}
const onmoviehandler = () => {
    cl("detected")
    backDrop.classList.toggle("active");
    ourModel.classList.toggle("active");
}
closeModel.forEach(ele => {
    ele.addEventListener("click", onmoviehandler)
})
movieModal.addEventListener("submit", onmovieSubmit);
openmodel.addEventListener("click", onmoviehandler);