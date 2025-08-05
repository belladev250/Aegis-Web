interface Article {
  id: string;
  imageSrc: string;
  title: string;
  content: string;
  extendedContent?: string[];
}

const articles: Article[] = [
  {
    id: 'aegis-trust-empowers-researchers',
    imageSrc: '/n-one.png',
    title: 'Aegis Trust empowers Rwandan researchers to take lessons to the world',
    content: 'Aegis Trust’s department for Research, Policy and Higher Education (RPHE) held a two-day capacity-building workshop to support Rwandan researchers',
    extendedContent: [
      'to share their knowledge and experience with the world. Themed ‘Research Methodologies, Publication, Dissemination and Uptake’, the workshop was attended',
      'by researchers, academics, policy-makers and practitioners. It took place at the Kigali Genocide Memorial Peace School, 28-29 March 2017',
      'During the first day of the gathering, participants shared insights on methods that contribute to produce robust, reliable and informative research results.',
      'Dr James Smith, CEO of Aegis Trust, opened the workshop by emphasising how important researchers are to the work of Aegis and also other peace building stakeholders',
      'in Rwanda and around the world.',
      '“As the medical world learned with cancer prevention, there is no ‘magic bullet’ for preventing atrocities – building peace is complex.All good practice and',
      'policy should be adapted and improved by evidence regarding effectiveness.The theories that underpin Aegis Trust’s peace education will benefit from the rigour of testing,”,',
      'Dr Smith said. “The research community is needed not only to evaluate outcomes and the impact of peace education but also to inform peace building with new ideas and evidence based approaches,” he added.',

      'The discussed topics included an analysis of research methods in the social sciences, using theories in research, and strategies for successful fieldwork.Great Lakes',
      'Programme Coordinator at Never Again Rwanda, Reverien Interayamahanga, gave an overview of approaches to research in social sciences including qualitative and quantitative',
      'methodologies.He underlined that research purposes are instrumental in knowing whether to use qualitative, quantitative, or mixed methods approaches.',

      'Other presenters contributed by discussing research ethics and how best to engage with fieldwork in different settings.On identifying appropriate theories to be used',
      'for a given research, experienced researcher and former Director of Aegis’ Research, Policy and Higher Education programme, Dr.Phil Clark, said that the researcher has',
      'the independence to use applied or tested theory but also to build tailored theories fitting the specific community or phenomena being studied.',
      '“Theory is not one - size - fits - all.Neither does it always come out of literature.It could involve day - to - day behaviour from people that are entirely involved in',
      'the phenomena being studied and include different variables,” Clark noted.',
      ' So far, the workshop has been a significant learning platform for participants who aspire to conduct impactful research in Rwanda.Dr Ibrahim Ndagijimana, a Rwandan researcher, commended the initiative:'
    ]
  },
  {
    id: 'africa-kommit-fellowship-program',
    imageSrc: '/n-two.png',
    title: 'AFRIKA KOMMT! FELLOWSHIP PROGRAM 2016 – 2018',
    content: 'AFRIKA KOMMT is an initiative of German Industry for Future Leaders from Sub-Saharan Africa. German businesses, including several leading companies in their respective sectors offer young African managers an insight into their operations and management methods. GIZ plans, organises and evaluates the programme.',
    extendedContent: [
      'During a 12-month stay in Germany, an 8-month internship in one of the participating companies forms the heat of the programme. The internship gives participants',
      'the opportunity to gain first-hand experience of management practice and to participate in economic, social and organisational change processes and will enable',
      'them to establish a network between cooperation partners from their home companies and German companies.<br /> AFRIKA KOMMT! is conducted in German and consists of the following key components:',
      '1. One-month home-based intensive German language preparation course',
      '2. One-year stay in Germany comprising of:',
      'Three-months intensive German language course',
      'Eight-months internship in a German partner company',
      'Three one-week training modules on international management and leadership competencies',
      'One-week study tour in Germany on relevant subjects, e.g. “Regional Economic Development”',
      'Weekend seminars on cultural and social subjects organised by the Robert Bosch Stiftung in<br /> Stuttgart and the ZEIT-Stiftung Ebelin und Gerd Bucerius in Hambur',
      'Cultural weekend activities organized by GIZ',
      '3. Six-months transfer phase after the stay in Germany via GIZ’s online platform <em>Global Campus 21</em>',
      '4. Refresher course in Africa, approx. 6-12 months after the stay in Germany, offering the former fellows to extend their networks with other alumni and to mutually benefit from their experiences.'
    ]
  },
  {
    id: 'next-goal-for-seeds-of-peace',
    imageSrc: '/n-thre.png',
    title: 'Next goal for Seeds of Peace: Putting campers to work',
    content: 'Seeds of Peace, a US-based organization with over two decades of experience in the Middle East, is expanding to include a wider spectrum of actors.',
    extendedContent: [
      'Seeds of Peace, a US-based organization with over two decades of experience in the Middle East, is expanding to include a wider spectrum of actors.',
      'DEAD SEA, JORDAN — This may not seem like a propitious time for peace in the Middle East.',
      'But Seeds of Peace, which has become one of the region’s most recognized peace-building initiatives since hosting its first summer camp for Israeli and Palestinian teens in 1993, is seeking to expand its reach.',
      'While the organization has yet to witness the spread of peaceful relations and treaties across the Middle East, it sees the maturing graduates of its camp',
      'program – more than 5,000 individuals – as an important resource to be tapped as it refines its goals. More than half of these graduates are moving into',
      'leadership roles in their respective fields. The organization now hopes to empower them to transform a wide variety of sectors in conflict areas – from',
      'women’s rights to technological innovation. Such progress, say Seeds of Peace officials, is a crucial prerequisite to any comprehensive, sustainable peace.'
    ]
  }
];

export default articles;