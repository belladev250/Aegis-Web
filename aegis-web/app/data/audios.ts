interface Paper {
    id: string;
    imageSrc: string;
    title: string;
    author: string;
    journal: string;
    date: string;
    audioUrl: string;
  }
  
  const papers: Paper[] = [
    {
      id: 'livehood-recovery-for-peace-and-reconciliation',
      imageSrc: '/hug.png',
      title: 'Livehood recovery for peace and reconciliation The case of Rukara Reconciliation Village',
      author: 'Heli Habyarimana',
      journal: 'AEGIS TRUST',
      date: ' 1 September 2024',
      audioUrl: '/audi-1.mp4'
    }    
  ];
  
  export default papers;