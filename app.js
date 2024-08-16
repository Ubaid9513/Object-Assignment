const students = {
  men1: {
    name: "Ubaid Aslam",
    semester: 2,
    father_name: "Aslam",
    isFeePaid: true,
    courses: ["Mathematics", "Physics", "Frontend"],
    image: "./Images/mypic.jpg",
  },
  men2: {
    name: "Uzaima Ali Bari",
    father_name: " Ali Bari",
    semester: 2,
    isFeePaid: true,
    courses: ["Biology", "Chemistry", "English"],
    image: "./Images/uzaima.jpg",
  },
  men3: {
    name: "Emily Johnson",
    father_name: "Johnson",
    semester: 1,
    isFeePaid: false,
    courses: ["Economics", "Statistics", "Marketing"],
    image: "./Images/men3.avif",
  },
  men4: {
    name: "Emily Johnson",
    father_name: "Johnson",
    semester: 4,
    isFeePaid: false,
    courses: ["Economics", "Statistics", "Marketing"],
    image: "./Images/men4.avif",
  },
  men5: {
    name: "Emily Johnson",
    father_name: "Johnson",
    semester: 2,
    isFeePaid: false,
    courses: ["Html5", "Css3", "Javascript"],
    image: "./Images/men5.avif",
  },
  men6: {
    name: "Emily Johnson",
    father_name: "Johnson",
    semester: 3,
    isFeePaid: true,
    courses: ["Biollogy", "Physics", "Math"],
    image: "./Images/men6.avif",
  },
  men7: {
    name: "Emily Johnson",
    father_name: "Johnson",
    semester: 2,
    isFeePaid: false,
    courses: ["Economics", "Statistics", "Marketing"],
    image: "./Images/men7.avif",
  },
  men8: {
    name: "Saqib",
    father_name: "Jilani",
    semester: 4,
    isFeePaid: true,
    courses: ["Math", "Physics", "Marketing"],
    image: "./Images/saqib.jpg",
  },
  men9: {
    name: "Ahab",
    father_name: "Sheikh",
    semester: 2,
    isFeePaid: true,
    courses: ["Html5", "Css3", "Marketing"],
    image: "./Images/men9.avif",
  },
  men10: {
    name: "Emily Johnson",
    father_name: "Johnson",
    semester: 4,
    isFeePaid: false,
    courses: ["Economics", "Statistics", "Marketing"],
    image: "./Images/men10.avif",
  },
};

var main = document.getElementById("main");
for (var key in students) {
  //   console.log(key);
  main.innerHTML += `
  <div class="col-12 col-sm-12 col-md-6 col-lg-3 my-2">
          <div class="card p-2" style="width: 100%; height:auto;">
                <img src="${
                  students[key].image
                }" class="card-img-top" alt="img">
                <div class="card-body">
                  <h5 class="card-title"><span>Name :</span> ${students[
                    key
                  ].name.toUpperCase()}</h5>
                  <p class="card-text"><span>Father Name :</span> ${students[
                    key
                  ].father_name.toUpperCase()}</p>
                  <p class="card-text"><span>Semester :</span> ${
                    students[key].semester
                  }</p>
                  <p class="card-text"><span>IS Fee Paid :</span> ${
                    students[key].isFeePaid
                  }</p>
                  <p class="card-text"><span>Courses :</span> ${
                    students[key].courses
                  }</p>
                  <div class = "d-flex gap-2"></div>
                </div>
              </div>
    </div>
`;
}
