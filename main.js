let password = document.querySelector(".head > input");
let lis = document.querySelectorAll("ul > li ");
let spans = document.querySelectorAll("ul > li > span");
password.focus();
let show = document.querySelector(".show");
show.addEventListener("click", () => {
  show.classList.toggle("show");
  show.classList.toggle("hide");
  if (show.classList.contains("hide")) {
    password.type = "text";
    password.focus();
  } else {
    password.type = "password";
    password.focus();
  }
});
password.oninput = () => {
  let pw = password.value;
  // First Check
  if (pw.length >= 8) {
    done(0);
  } else {
    notDone(0);
  }
  // Second Check
  if (pw !== "" && pw.match(/\d/g) !== null) {
    if (pw.match(/\d/g).length >= 1) {
      done(1);
    } else {
      notDone(1);
    }
  } else {
    notDone(1);
  }
  // Third Check
  if (pw !== "" && pw.match(/[a-z]/g) !== null) {
    if (pw.match(/[a-z]/g).length >= 1) {
      done(2);
    } else {
      notDone(2);
    }
  } else {
    notDone(2);
  }
  // Fourth Check
  if (pw !== "" && pw.match(/\W/g) !== null) {
    if (pw.match(/\W/g).length >= 1) {
      done(3);
    } else {
      notDone(3);
    }
  } else {
    notDone(3);
  }
  // Fifth Check
  if (pw !== "" && pw.match(/[A-Z]/g) !== null) {
    if (pw.match(/[A-Z]/g).length >= 1) {
      done(4);
    } else {
      notDone(4);
    }
  } else {
    notDone(4);
  }
  // Password strength level
  let paragraph = document.querySelector(".paragraph");
  let strength = document.querySelector(".strength");
  let arrOfLis = [];
  lis.forEach((li) => {
    if (li.classList.contains("checked")) {
      arrOfLis.push(li);
    }
  });
  // if only one condition is checked
  if (arrOfLis.length >= 1 && arrOfLis.length < 3) {
    paragraph.style.display = "block";
    paragraph.style.color = "rgb(217, 83, 79)";
    strength.textContent = "Weak";
  }
  // if at least three conditions are checked
  else if (arrOfLis.length >= 3 && arrOfLis.length < 5) {
    paragraph.style.display = "block";
    paragraph.style.color = "rgb(240, 173, 78)";
    strength.textContent = "Medium";
  }
  // if all the conditions are checked
  else if (arrOfLis.length == 5) {
    paragraph.style.display = "block";
    paragraph.style.color = "rgb(92, 184, 92)";
    strength.textContent = "Strong";
  } else {
    paragraph.style.display = "none";
  }
};

function done(index) {
  lis[index].classList.add("checked");
  spans[index].classList.remove("dot");
  spans[index].classList.add("check");
}
function notDone(index) {
  lis[index].classList.remove("checked");
  spans[index].classList.add("dot");
  spans[index].classList.remove("check");
}
