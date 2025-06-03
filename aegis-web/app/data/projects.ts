interface Project {
  id: string;
  imageSrc: string;
  funder: string;
  period: string;
  title: string;
  intro?: string[];
  heading2: string;
  content2?: string[];
  heading3: string;
  content3?: string[];
}

const projects: Project[] = [
  {
    id: 'youth-physcial-and-mental-health',
    imageSrc: '/project-1.png',
    funder: 'Anne',
    period: '2024',
    title: 'Building Cultures Of Peace In Rwandan Schools',
    intro: [
      'The overarching theme of this network was to develop a shared understanding of what policies and practices lead to “cultures of positive peace” in Rwandan primary and secondary schools. The purpose of the network is to bring together researchers from multiple disciplines, with policy-makers, practitioners and children themselves, to develop shared understandings around what Positive Peace would look like in the context of Rwandan primary and secondary schools. It also intends to enhance the capacity of researchers and practitioners in Rwanda to continue to address these issues through evidence-based research and practice. It aims finally at de-colonizing global knowledge in this field, amplifying the voices of Rwandan researchers within International and Comparative Education Studies.'
    ],
    heading2: 'Application Process',
    content2: [
      'Research Seminars',
      'Research seminars are organized by thematic working groups to facilitate discussions with influential stakeholders via policy seminar and per one thematic area.',
      'International Conference',
      'The international conference intends to support network members to present their work and research findings at major conferences by also promoting the network.',
    ],
    heading3: 'NEWS',
    content3: [
      'Group members meet and discuss upcoming activities',
      'On May 7th 2021, the members of the group working on Gender transformative learning & socioeconomic disparities held a meeting with participants from different backgrounds all involved in matters related to education. The participants included postgraduate students most of whom are employed as teachers, NGOs workers & Government employees, in total there were 17 participants. The workshop aimed at:   To introduce the participants to the BCP Network and to the Gender Thematic Group in particular, To share knowledge and understanding of the 2 sub-themes: Inclusive Education & Gender Transformative Learning, To provide space for participants to network and get to know each other.',
      'Working groups collect data from the field to inform their reflection',
      'From 9th to 12th June 2021, Theme 3 Group Leaders (Dr. Joly Rubagiza & Ms. Jane Umutoni) travelled to Bugesera, Rilima Sector for the field data collection exercise. Two schools in this sector were selected for this activity as follow: GS Rilima Catholique – Day Secondary Section (in a 12YBE System) GS Rilima – Mixed Boarding School. In the two schools, data was collected from Parents, Head Teachers, Teachers, administrative staff like Head Teachers & Directors of Studies (DOS) & Students. Data collection methods included FGDs (mixed & single sex) and individual interviews. Additional interviews were held with one CPD Advisor from Inspire, Educate, Empower (IEE) as well as the District Director of Education (DDE) of Bugesera District.'
    ]
  }
];

export default projects;