interface Paper {
  id: string;
  imageSrc: string;
  title: string;
  author: string;
  journal: string;
  date: string;
  pdfUrl: string;
}

const papers: Paper[] = [
  {
    id: 'livehood-recovery-for-peace-and-reconciliation',
    imageSrc: '/hug.png',
    title: 'Livehood recovery for peace and reconciliation The case of Rukara Reconciliation Village',
    author: 'Heli Habyarimana',
    journal: 'AEGIS TRUST',
    date: ' 1 September 2024',
    pdfUrl: '/livehood.pdf'
  },
  {
    id: 'unfolding-the-lived-experience-of-children-born-of-genocidal-rape-in-rwanda',
    imageSrc: '/hug.png',
    title: 'Unfolding the lived experience of children born of genocidal rape in Rwanda',
    author: 'Glorieuse Uwizeye, RN, MN(MH)',
    journal: 'AEGIS TRUST',
    date: ' June 2019',
    pdfUrl: '/unflooding.pdf'
  },
  {
    id: 'living-under-the-shadow-of-a-parents-criminal-past',
    imageSrc: '/papers.jpg',
    title: 'Living under the shadow of a parent’s criminal past: An exploration of the meaning of being a génocidaire’s',
    author: 'Dr. Theoneste Rutayisire , Annemiek Richters',
    journal: 'AEGIS TRUST',
    date: ' November 2018',
    pdfUrl: '/livehood.pdf'
  }
];

export default papers;