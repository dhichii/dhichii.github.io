import echoLogo from './assets/images/echo.svg';
import fiberLogo from './assets/images/fiber.svg';
import gormLogo from './assets/images/gorm.svg';
import expressLogo from './assets/images/express.svg';
import mysqlLogo from './assets/images/mysql.svg';

const projects = [
  {
    id: 1,
    title: 'Wedding Invitation',
    description: 'A wedding invitation website',
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'JQuery'],
    tags: ['frontend'],
    code: '',
    src: 'https://yoknikah.vercel.app/stifan-nathania/index.html?to=Penerima',
  },
  {
    id: 2,
    title: 'Assessment Okupasi API',
    description: 'A RESTful API to assess the suitability of vocational school graduate competencies with industry',
    tech: ['TypeScript', 'Node.js', 'Express.js', 'Prisma ORM', 'PostgreSQL'],
    tags: ['backend'],
    code: 'https://github.com/dhichii/assessment-okupasi-api',
    src: 'https://assessment-okupasi.vercel.app',
  },
  {
    id: 3,
    title: 'Product gRPC Service',
    description: 'Product services with gRPC',
    tech: ['Golang', 'gRPC'],
    tags: ['backend'],
    code: 'https://github.com/dhichii/tokped-workshop-grpc',
    src: '',
  },
  {
    id: 4,
    title: 'MyCampus API',
    description: 'A RESTful API to register for college in one portal',
    tech: ['TypeScript', 'Node.js', 'Express.js', 'Prisma ORM', 'PostgreSQL'],
    tags: ['backend'],
    code: 'https://github.com/dhichii/mycampus-api',
    src: '',
  },
  {
    id: 5,
    title: 'Universitas Negeri Manado KPI 1 API',
    description: 'A RESTful API to manage the alumni tracer',
    tech: ['Golang', 'Echo (Go)', 'GORM (Go)', 'MySQL'],
    tags: ['backend'],
    code: 'https://github.com/IKU-UNIMA/BE-1',
    src: '',
  },
  {
    id: 6,
    title: 'Universitas Negeri Manado KPI 2 API',
    description: 'A RESTful API to manage student activities and achievements',
    tech: ['Golang', 'Echo (Go)', 'GORM (Go)', 'MySQL', 'Google Drive API'],
    tags: ['backend'],
    code: 'https://github.com/IKU-UNIMA/BE-2',
    src: '',
  },
  {
    id: 7,
    title: 'Universitas Negeri Manado KPI 5 API',
    description: 'A RESTful API to manage the lecturer research',
    tech: ['Golang', 'Echo (Go)', 'GORM (Go)', 'MySQL', 'Google Drive API'],
    tags: ['backend'],
    code: 'https://github.com/IKU-UNIMA/BE-5',
    src: '',
  },
  {
    id: 8,
    title: 'Universitas Negeri Manado KPI 6 API',
    description: 'A RESTful API to manage the partner collaborations',
    tech: ['Golang', 'Echo (Go)', 'GORM (Go)', 'MySQL'],
    tags: ['backend'],
    code: 'https://github.com/IKU-UNIMA/BE-6',
    src: '',
  },
  {
    id: 9,
    title: 'Forum API',
    description: 'A RESTful API to discuss a topic in threads using Clean Architecture',
    tech: ['JavaScript', 'Node.js', 'Hapi.js', 'PostgreSQL', 'GitHub Action'],
    tags: ['backend'],
    code: 'https://github.com/dhichii/forum-api',
    src: '',
  },
  {
    id: 10,
    title: 'OpenMusic API',
    description: 'A RESTful API to adding and collaborating on a playlist',
    tech: ['JavaScript', 'Node.js', 'Hapi.js', 'Amazon (EC2, S3)', 'PostgreSQL', 'Redis'],
    tags: ['backend'],
    code: 'https://github.com/dhichii/openmusic-api',
    src: '',
  },
  {
    id: 11,
    title: 'Clinic Management API',
    description: 'A RESTful API to manage doctor, nurse, queue, and prescriptions',
    tech: ['Golang', 'Echo (Go)', 'GORM (Go)', 'MySQL', 'Docker', 'Amazon EC2', 'GitHub Action', 'OpenAPI'],
    tags: ['backend'],
    code: 'https://github.com/ALTERA-CAPSTON-41/backend',
    src: '',
  },
  {
    id: 12,
    title: 'Plant API',
    description: 'A RESTful API to manage shop and selling products',
    tech: ['Golang', 'Echo (Go)', 'GORM (Go)', 'MySQL', 'Docker', 'Amazon EC2', 'GitHub Action', 'Swagger'],
    tags: ['backend'],
    code: 'https://github.com/dhichii/plant-api',
    src: '',
  },
  {
    id: 13,
    title: 'Shop API',
    description: 'A RESTful API to manage shop and selling products',
    tech: ['Golang', 'Fiber (Go)', 'GORM (Go)', 'MySQL'],
    tags: ['backend'],
    code: 'https://github.com/dhichii/shop-api',
    src: '',
  },
  {
    id: 14,
    title: 'MyGram API',
    description: 'A social media RESTful API to posting and commenting on photos',
    tech: ['Golang', 'Gin (Go)', 'GORM (Go)', 'PostgreSQL'],
    tags: ['backend'],
    code: 'https://github.com/dhichii/mygram-api',
    src: '',
  },
  {
    id: 15,
    title: 'Order API',
    description: 'A RESTful API to order items',
    tech: ['Golang', 'Gin (Go)', 'GORM (Go)', 'PostgreSQL'],
    tags: ['backend'],
    code: 'https://github.com/dhichii/order-api',
    src: '',
  },
  {
    id: 16,
    title: 'Self-Payroll API',
    description: 'A RESTful API that allow employees to do salary withdrawals independently every month',
    tech: ['Golang', 'Echo (Go)', 'GORM (Go)', 'PostgreSQL'],
    tags: ['backend'],
    code: 'https://github.com/dhichii/order-api',
    src: '',
  },
];

const getAllProject = () => projects;

const skills = [
  {
    id: 1,
    title: 'Golang',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg',
  },
  {
    id: 2,
    title: 'JavaScript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  },
  {
    id: 3,
    title: 'TypeScript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  },
  {
    id: 4,
    title: 'Echo (Go)',
    src: echoLogo,
  },
  {
    id: 5,
    title: 'Gin (Go)',
    src: 'https://raw.githubusercontent.com/gin-gonic/logo/master/color.png',
  },
  {
    id: 6,
    title: 'Fiber (Go)',
    src: fiberLogo,
  },
  {
    id: 7,
    title: 'GORM (Go)',
    src: gormLogo,
  },
  {
    id: 8,
    title: 'Node.js',
    src: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg',
  },
  {
    id: 9,
    title: 'Express.js',
    src: expressLogo,
  },
  {
    id: 10,
    title: 'Hapi.js',
    src: 'https://www.vectorlogo.zone/logos/hapijs/hapijs-icon.svg',
  },
  {
    id: 11,
    title: 'Jest',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
  },
  {
    id: 12,
    title: 'MySQL',
    src: mysqlLogo,
  },
  {
    id: 13,
    title: 'PostgreSQL',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  },
  {
    id: 14,
    title: 'Git',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  },
  {
    id: 15,
    title: 'Redis',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
  },
  {
    id: 16,
    title: 'Docker',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  },
  {
    id: 17,
    title: 'GitHub Action',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg',
  },
  {
    id: 18,
    title: 'Amazon Web Services (AWS)',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
  },
  {
    id: 19,
    title: 'Google Cloud Platform (GCP)',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg',
  },
  {
    id: 20,
    title: 'Postman',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
  },
  {
    id: 21,
    title: 'gRPC',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grpc/grpc-original.svg',
  },
  {
    id: 22,
    title: 'Swagger',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg',
  },
]

const getAllSkill = () => skills;

export {getAllProject, getAllSkill}