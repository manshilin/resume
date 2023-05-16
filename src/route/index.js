// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
  name: {
    firstname: 'Vasil',
    lastname: 'Karpenko',
    position: 'Junior Fullstack JS Developer',
    salary: '600$ в місяц',
    address: 'Kyiv, Velika Zchitomirska, 33',
  },

};

var footer = {
  social: {
    email: {
      href: 'mailto:dmytro@mail.com',
      text: 'vasil@mail.com',
    },
    phone: {
      href: 'tel:+380670000123',
      text: '+380503663252',
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/dmytro-test',
      text: 'LinkedIn',
    },
  },
};
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {

  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    page: {
      title: 'Resume | Summary',
    },
    header,

    main: {
      summary:
      {
        title: 'Summary',
        big: true,
        text: `Open-minded for new technologies, with 1 years of experience in development.
       Whenever I start to work on a new project I learn the domain and try to understand 
       the idea of the project. Good teamplayer, every colleague is a friend to me.`,
      },
      experience:
      {
        title: 'Other experience',
        big: false,
        text: `Pet project for parsing sport betting data from different platforms ( odds )
        and sport statistics (tournament position, goals etc), analyzing by simple mathematics 
        models and preparing probability for such events like: money line - first win / draw /
          second win, totals etc.`,
      },
    },
    footer,

  })
})

// ================================================================
router.get('/skills', function (req, res) {
  res.render('skills', {
    page: {
      title: 'Resume | Skills',
    },
    sectionHobbies: {
      title: 'My hobbies',
      big: false,
    },
    sectionSkills: {
      title: 'My skills',
      big: true,
    },
    header,
    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'CSS',
          point: 7,
          isTop: false,
        },
        {
          name: 'Headlebars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS code',
          point: 8,
          isTop: false,
        },
        {
          name: 'React JS',
          point: 0,

        },
        {
          name: 'PHP',
          point: null,

        },
      ],
      hobbies: [
        {
          name: 'chess',
          isMain: true,
        },
        {
          name: 'swimming',
          isMain: false,
        },
        {
          name: 'football',
          isMain: true,
        },
      ]
    },
    footer,
  })
})


router.get('/education', function (req, res) {
  res.render('education', {
    page: {
      title: 'Resum | Education',
    },
    titleEducation: {
      title: 'Education',
      big: true,
    },
    titleCertificates: {
      title: 'Certificates',
      big: false,
    },
    header,
    main: {
      educations: [
        {
          name: 'Національний технічний університет України (КПІ)',
          isEnd: true,
        },
        {
          name: 'КНЕУ імені Вадима Гетьмана (КНЕУ)',
          isEnd: false
        },
        {
          name: 'Києво-Могилянська академія (КМА)',
          isEnd: true,
        },
      ],
      certificates: [
        {
          name: 'Kurs 1',
          id: 1786,
        },
        {
          name: 'Kurs 2',
          id: 3245,
        },
        {
          name: 'Kurs 3',
          id: 3288
        },
      ]
    },
    footer,
  })
})

router.get('/work', function (req, res) {
  res.render('work', {
    layout: 'big',
    page: {
      title: 'Resum | Work',
    },
    titleCertificates: {
      title: 'Certificates',
      big: false,
    },
    header,
    main: {
      sectionWork: {
        title: 'Works history',
        big: true,
      },
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '02.02.2022',
            to: null,
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: null,
              about: 'Resume with handlebars 2023 ',
              stackAmount: 4,
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML, CSS',
                },
                {
                  name: 'Node.js',
                }
              ],
              awardsAmount: 2,
              awards: [
                { name: 'Good job!' },
                { name: 'Very good/ perfomance!' },
              ],
            },

          ],

        },

      ],
     },
    footer,
  })
})
// ====================================================================================================
//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout: 'person',
    page: {
      title:'Person',
    },
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
        
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
