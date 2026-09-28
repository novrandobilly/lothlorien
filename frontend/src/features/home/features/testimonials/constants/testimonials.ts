export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatarSrc?: string;
  initials?: string;
  profileUrl?: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "testimonial-1",
    quote: `Kerja bareng Envien Studio itu praktis dan solutif. Billy paham betul objektif bisnis yang mau kita capai, ngga sekadar bikin web jadi. Engine psikotes online yang dibangun hasilnya juga sangat rapi, cepat, dan minim kendala saat dipakai asesmen klien korporat. 
    
    Desain dan flow-nya kreatif, proses pengerjaannya gesit, dan hasilnya langsung memperkuat branding serta operasional Inti Dinamis. Sangat memuaskan.`,
    author: "John Purba",
    role: "Owner of Inti Dinamis",
    company: "Inti Dinamis",
    initials: "JP",
  },
  {
    id: "testimonial-2",
    quote: `It was a pleasure working alongside Billy. He was always on top of his tasks, fixing bugs and shipping features right on schedule. This reliability was a huge help to me as a QA, giving me the breathing room to dive deep into critical testing.

What sets Billy apart is his communication and the positive energy he brings to the team. He’s also very passionate about tech and UI/UX. He doesn't just code, he makes sure what he builds actually makes sense for the user. He is a fast learner who adapts to every "road" he takes, and I highly recommend him for any senior-level frontend roles.`,
    author: "Dedi Semara",
    role: "SQA Engineer, Transfez",
    company: "Transfez",
    initials: "DS",
    profileUrl: "https://www.linkedin.com/in/dedisemara/",
  },
  {
    id: "testimonial-3",
    quote: `As a QA engineer working with Billy always makes my job easier. He quickly understands every bug that’s reported and consistently delivers exceptionally superb results. 
    
    I rarely need to send a bug back to him or reopen an issue that has already been fixed. That's why with Billy, it’s almost always a new bug and end up with the "Pass" status results within the first retest!

He has excellent time management skills, some of the best I’ve seen in a person. That’s why he’s able to solve bugs faster than the given time limit. The capabilities of this guy are on another level, he can fix this, he can fix that, whether it’s on the portal or mobile, he can handle it all! Call him the handyman, problem solver, troubleshooter, or even Superman (okay, I might be exaggerating a little, but he’s truly top-notch!). I can easily guarantee you that.

He can explain and update you about development progress or bug fixes very clearly. He has excellent communication skills and a great sense of humor, which always makes working with him both productive and enjoyable.`,
    author: "Marcel Ivaldri Rahman",
    role: "SQA Engineer, Transfez",
    company: "Transfez",
    initials: "MI",
    profileUrl: "https://www.linkedin.com/in/mivaldri/",
  },
];
