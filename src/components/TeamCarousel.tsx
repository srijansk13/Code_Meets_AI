import { Phone } from "lucide-react";

const Linkedin = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const teamMembers = [
  {
    id: 1,
    name: "Akash Gupta",
    image: "/team/Akash Gupta (1).jpeg",
    role: "Software & Web Development",
    contact: { linkedin: "https://www.linkedin.com/in/akash-gupta6300?utm_source=share_via&utm_content=profile&utm_medium=member_android", phone: "+916300761220" }
  },
  {
    id: 2,
    name: "Srijan Kumar",
    image: "/team/Srijan Kumar (2).jpeg",
    role: "Software & Web Development",
    contact: { linkedin: "https://www.linkedin.com/in/srijan-kumar-sk13/", phone: "+918019682137" }
  },
  {
    id: 3,
    name: "Aaditya Varma",
    image: "/team/Aaditya Varma (3).jpeg",
    role: "Motion & Visual Experiences",
    contact: { linkedin: "https://www.linkedin.com/in/aaditya-varma-aa20ab382?utm_source=share_via&utm_content=profile&utm_medium=member_android", phone: "+917207870088" }
  },
  {
    id: 4,
    name: "D. Durga Akhil",
    image: "/team/Durga Akhil (4).jpeg",
    role: "UI/UX & Experience Design",
    contact: { linkedin: "https://www.linkedin.com/in/d-durga-akhil112?utm_source=share_via&utm_content=profile&utm_medium=member_android", phone: "+919849657534" }
  },
  {
    id: 5,
    name: "Karthikeya Gupta",
    image: "/team/Karthikeya Gupta (5).jpeg",
    role: "Video Editing & Post-Production",
    contact: { linkedin: "https://www.linkedin.com/in/karthikeya-gupta-g26?utm_source=share_via&utm_content=profile&utm_medium=member_android", phone: "+919381388393" }
  },
  {
    id: 6,
    name: "TEAM MEMBER",
    image: null,
    role: "COMING SOON",
    contact: { linkedin: "", phone: "" }
  },
  {
    id: 7,
    name: "Pradeep K",
    image: "/team/Pradeep (7).jpeg",
    role: "Quality Assurance & Testing",
    contact: { linkedin: "https://www.linkedin.com/in/pradeep-k-5b3400380?utm_source=share_via&utm_content=profile&utm_medium=member_android", phone: "+918712373163" }
  },
  {
    id: 8,
    name: "Omprakash",
    image: "/team/Omprakash (8).jpeg",
    role: "Production & Cinematography",
    contact: { linkedin: "", phone: "+918639593894" }
  }
];

export default function TeamCarousel() {
  const duplicatedTeam = [...teamMembers, ...teamMembers];

  return (
    <section className="relative w-full py-4 md:py-8 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="flex w-max animate-marquee space-x-4 md:space-x-6 px-4 md:px-6">
        {duplicatedTeam.map((member, index) => (
          <div
            key={`${member.id}-${index}`}
            className={`flex-none w-[250px] md:w-[300px] h-[360px] md:h-[420px] group relative overflow-hidden flex flex-col rounded-2xl border transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 ${member.image ? 'bg-white/5 border-white/5 hover:border-brand-cyan/30 hover:shadow-[0_0_40px_rgba(0,240,255,0.1)]' : 'bg-black/40 border-white/5 shadow-inner'}`}
          >
            {/* Image Section */}
            <div className="relative w-full h-full overflow-hidden flex flex-col justify-end">
              {member.image ? (
                <img
                  src={member.image}
                  alt={`${member.name} — Core Team`}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30">
                  <div className="w-14 h-14 mb-3 rounded-full border border-white/20 flex items-center justify-center">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  </div>
                  <div className="font-mono tracking-widest text-xs text-white">TEAM MEMBER</div>
                  <div className="font-mono tracking-widest text-xs text-white/50 mt-1">COMING SOON</div>
                </div>
              )}
              
              {/* Gradient overlay — image fades into dark info panel */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-[#111116]/75 to-transparent" style={{ top: '35%' }} />

              {/* Details Section */}
              <div className="relative z-10 p-4 md:p-5 flex flex-col justify-end w-full">
                <h3 className="text-lg md:text-xl font-bold text-white leading-tight mb-1 drop-shadow-md">
                  {member.name}
                </h3>
                <p className="text-brand-cyan text-[10px] md:text-xs font-semibold tracking-[0.18em] uppercase mb-3">
                  {member.role}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-white/10 mb-3 group-hover:bg-brand-cyan/30 transition-colors duration-300" />

                <div className="flex gap-2">
                  {member.contact.linkedin && (
                    <a
                      href={member.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${member.name}'s LinkedIn profile`}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] md:text-xs font-medium hover:text-white hover:bg-brand-cyan/20 hover:border-brand-cyan/50 hover:-translate-y-0.5 transition-all min-h-[36px]"
                    >
                      <Linkedin size={11} />
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {member.contact.phone && (
                    <a
                      href={`tel:${member.contact.phone}`}
                      aria-label={`Call ${member.name}`}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] md:text-xs font-medium hover:text-white hover:bg-white/10 hover:border-white/40 hover:-translate-y-0.5 transition-all min-h-[36px]"
                    >
                      <Phone size={11} />
                      <span>Mobile</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edge Fades */}
      <div className="absolute top-0 bottom-0 left-0 w-12 md:w-24 bg-gradient-to-r from-[#050508] to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-12 md:w-24 bg-gradient-to-l from-[#050508] to-transparent pointer-events-none z-10" />
    </section>
  );
}
