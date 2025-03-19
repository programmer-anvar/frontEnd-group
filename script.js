const students  = [
    {
        name:"Abror",
        age:18,
        number:"+998 77 707 0287",
        isMarrid:false,
        jobs:'Student',
        img:'./Abror2.jpg',
        telegram: 'https://t.me/inematov',
        instagram:'https://www.instagram.com/',
        linkedin: 'https://www.linkedin.com/in/arslonbekroziboyev/'
    },
    {
        name:"Diyorbek",
        age:18,
        number:"+998 77 023 0729",
        isMarrid:false,
        jobs:'Student',
        img:'./Diyor.jpg',
        telegram: 'https://t.me/diyorbek29_11',
        instagram:'https://www.instagram.com/',
        linkedin: 'https://www.linkedin.com/in/sultonqul/'
    },
    {
        name:"Azizbek",
        age:16,
        number:"+998 77 777 88 99",
        isMarrid:false,
        jobs:'Student',
        img:'./Azizbek.jpg',
        telegram: 'https://t.me/',
        instagram:'https://www.instagram.com/',
        linkedin: 'https://www.linkedin.com/feed/'
    },
    {
        name:"Farrux",
        age:18,
        number:"+998 77 707 0287",
        isMarrid:false,
        jobs:'Student',
        img:'./Farrux.jpg',
        telegram: 'https://t.me/',
        instagram:'https://www.instagram.com/',
        linkedin: 'https://www.linkedin.com/feed/'
    },
    {
        name:"Hojiakbar",
        age:18,
        number:"+998 77 707 0287",
        isMarrid:false,
        jobs:'Student',
        img:'./Hoji.jpg',
        telegram: 'https://t.me/Vakhabov01',
        instagram:'https://www.instagram.com/',
        linkedin: 'https://www.linkedin.com/feed/'
    },
    {
        name:"Abduraxmon",
        age:18,
        number:"+998 77 707 0287",
        isMarrid:false,
        jobs:'Student',
        img:'./Abror.png',
        telegram: 'https://t.me/sss_bekk',
        instagram:'https://www.instagram.com/',
        linkedin: 'https://www.linkedin.com/feed/'
    },
    
]

const root = document.querySelector('.root');
console.log(root);


students.forEach((user) =>{
    root.innerHTML += `
    <div class='card'>
       <img src=${user.img} alt=${user.name}/>
       <div class="card-body">
         <div class="name-wraper">
         <h3 class="name">${user.name}</h3>
         <h4 class="name"><b>Age: </b> ${user.age}</h4>
         </div>
         <div class="job-marrid">
         <h4>jobs: ${user.jobs}</h4>
         <h4><i>marrid:  </i> <b>${user.isMarrid}</b></h4>
         </div>

         <div class='socil'>
         <a href=${user.telegram}><i class="fa-brands fa-telegram"></i></a>
         <a href=${user.instagram}><i class="fa-brands fa-square-instagram"></i></a>
         <a href=${user.linkedin}><i class="fa-brands fa-linkedin"></i></a>
         </div>

         <button class="btn">Read more</but>
       </div>
    </div>
    
    `
})
