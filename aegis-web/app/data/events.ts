interface Event {
    id: string;
    imageSrc: string;
    title: string;
    content?: string[];
  }
  
  const events: Event[] = [
    {
      id: 'youth-physcial-and-mental-health',
      imageSrc: '/event-1.jpg',
      title: 'Youth Physical and Mental Health after Genocidal Rape during the 1994 Genocide against the Tutsi in Rwanda',
      content: [
        'The Centre on Conflict, Rights and Justice (CCRJ) and Aegis Trust Rwanda’s programme in Research, Policy and Higher Education (RPHE) are co-hosting Dr. Glorieuse Uwizeye (Dartmouth College) who will speak on',
        '“Youth Physical and Mental Health after Genocidal Rape during the 1994 Genocide against the Tutsi in Rwanda”.',
        'Youth Physical and Mental Health after Genocidal Rape during the 1994 Genocide against the Tutsi in Rwanda',
        'Dr. Glorieuse Uwizeye, Research Fellow in Anthropology, Dartmouth College',
        'Date: 8 June 2021Time: 5:00 PM',
        'Finishes: 8 June 2021Time: 6:30 PM',
        'Venue',
        'Type of Event: Talk',
  
        'No registration is required, and participants can join these events through the following link:',
        'https://eu.bbcollab.com/collab/ui/session/guest/f151a13534544254bf71e46b84b3ae0f',
        'This event is co-hosted by the Aegis Trust Rwanda programme in Research, Policy and Higher Education',
  
        'Contact email: Phil Clark pc44@soas.ac.uk or Dr. Sutha Nadarajah sn22@soas.ac.uk'
      ]
    }
  ];
  
  export default events;