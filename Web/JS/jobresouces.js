const jobs = [
    {
      title: "Software Engineer",
      image: "https://freepngimg.com/save/97171-computer-engineer-png-download-free/512x512",
      details:
        "Responsible for designing, developing and maintaining software systems and applications.",
      
      link: "https://in.indeed.com/q-fresher-software-engineer-jobs.html?vjk=f29873d5eda6cc2b&mna=&aceid=&gclid=CjwKCAjw4ZWkBhA4EiwAVJXwqZ7dcyeb84icyTUvloPi2ZgcLf3LqtIvRoF0MQOd6kcAIkwpQN6-XRoCDOEQAvD_BwE&gclsrc=aw.ds",
    },
  
    {
        title: "Freelancer",
        image: "https://static.thenounproject.com/png/1861058-200.png",
        details:
          "Responsible for designing, developing and maintaining software systems and applications.",
       
        link: "https://in.indeed.com/jobs?q=freelancer&l=&vjk=137d819295fa5d63",
      },
      

      {
        title: "Designer",
        image: "https://cdn-icons-png.flaticon.com/512/2422/2422085.png",
        details:
          "Responsible for designing, developing and maintaining software systems and applications.",
        
        link: "https://in.indeed.com/jobs?q=designer&l=&vjk=f92ce759559661f4",
      },

      {
        title: "Developer",
        image: "https://cdn-icons-png.flaticon.com/512/1803/1803671.png",
        details:
          "Responsible for designing, developing and maintaining software systems and applications.",
        
        link: "https://in.indeed.com/jobs?q=developer&l=&vjk=054422af57497f94",
      },

      {
        title: "Full-stack Developer",
        image: "https://static.vecteezy.com/system/resources/previews/016/835/252/original/full-stack-developer-line-gradient-circle-background-icon-vector.jpg",
        details:
          "Responsible for designing, developing and maintaining software systems and applications.",
       
        link: "https://in.indeed.com/jobs?q=full+stack+developer&l=&vjk=e757fbd3e4bf16a0",
      },
    {
      title: "Data Scientist",
      image: "https://static.vecteezy.com/system/resources/previews/016/002/153/original/data-science-icon-free-vector.jpg",
      details:
        "Responsible for collecting, analyzing and interpreting large data sets to help organizations make better decisions.",
      
      link: "https://in.indeed.com/jobs?q=data+scientist&l=&vjk=5ce5da8b4b074c2b",
    },
  
    {
      title: "Project Manager",
      image: "https://cdn-icons-png.flaticon.com/512/7124/7124675.png",
      details:
        "Responsible for planning, executing and closing projects on time and within budget.",
    
      link: "https://in.indeed.com/jobs?q=project+manager&l=&vjk=23566a15759edd2c",
    },
  
    {
      title: "Product Manager",
      image: "https://static.thenounproject.com/png/1844963-200.png",
      details:
        "Responsible for managing the entire product life cycle, from ideation to launch and post-launch maintenance.",
     
      link: "https://in.indeed.com/jobs?q=product+manager&l=&vjk=c1afe1e8b16fc2db",
    },
  
    {
      title: "Sales Representative",
      image: "https://www.freeiconspng.com/uploads/man-icon-png-29.png",
      details:
        "Responsible for reaching out to potential customers and closing sales deals.",
     
      link: "https://www.naukri.com/sales-representative-jobs",
    },
  
    {
      title: "Marketing Manager",
      image: "https://icon-library.com/images/sales-manager-icon/sales-manager-icon-2.jpg",
      details:
        "Responsible for creating and executing marketing strategies to promote a company or product.",
      
      link: "https://www.naukri.com/marketing-management-jobs?k=marketing%20management&nignbevent_src=jobsearchDeskGNB",
    },
  ];
  
  const jobsHeading = document.querySelector(".jobs-list-container h2");
  const jobsContainer = document.querySelector(".jobs-list-container .jobs");
  const jobSearch = document.querySelector(".jobs-list-container .job-search");
  
  let searchTerm = "";


  /*
  if (jobs.length == 1) {
    jobsHeading.innerHTML = `${jobs.length} Job Available`;
  } else {
    jobsHeading.innerHTML = `${jobs.length} Jobs Available`;
  }
  */
  
  
  const createJobListingCards = () => {
    jobsContainer.innerHTML = "";
  
    jobs.forEach((job) => {
      if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        let jobCard = document.createElement("div");
        jobCard.classList.add("job");
  
        let image = document.createElement("img");
        image.src = job.image;
  
        let title = document.createElement("h3");
        title.innerHTML = job.title;
        title.classList.add("job-title");
  
        let details = document.createElement("div");
        details.innerHTML = job.details;
        details.classList.add("details");
  
        let detailsBtn = document.createElement("a");
        detailsBtn.href = job.link;
        detailsBtn.innerHTML = "More Details";
        detailsBtn.classList.add("details-btn");
  
        
       
  
        
  
        jobCard.appendChild(image);
        jobCard.appendChild(title);
        jobCard.appendChild(details);
        jobCard.appendChild(detailsBtn);
       
  
        jobsContainer.appendChild(jobCard);
      }
    });
  };
  
  createJobListingCards();
  
  jobSearch.addEventListener("input", (e) => {
    searchTerm = e.target.value;
  
    createJobListingCards();
});
