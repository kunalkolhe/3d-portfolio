export default function Courses() {
  const courses = [
    {
      title: "Google Veo 3.1 Complete Mastery",
      badge: "Bestseller",
      platform: "Udemy",
    },
    {
      title: "HeyGen + ElevenLabs: Viral AI Videos",
      badge: "Most Popular",
      platform: "Skillshare",
    },
    {
      title: "UI/UX Design With Figma: 5+ Projects",
      badge: "Bestseller + Highest Rated",
      platform: "Udemy",
    },
    {
      title: "Mastering ChatGPT Prompt Engineering",
      badge: "Highest Rated",
      platform: "Coursera",
    },
    {
      title: "Master Notion: All-in-One Productivity",
      badge: "Highest Rated",
      platform: "Skillshare",
    },
    {
      title: "Canva Masterclass for Social Media",
      badge: "Bestseller",
      platform: "Udemy",
    },
  ];

  return (
    <section className="bg-[#0d0d0d] py-24 md:py-32 px-6 md:px-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 leading-tight tracking-[-0.03em] text-center">
          Featured Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <div 
              key={i} 
              className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-white/30 transition-all group"
            >
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-bold px-3 py-1 bg-[#ff6b35]/10 text-[#ff6b35] rounded-full uppercase tracking-wider">
                    {course.badge}
                  </span>
                  <span className="text-xs font-bold px-3 py-1 bg-white/10 text-white rounded-full uppercase tracking-wider">
                    {course.platform}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#ff6b35] transition-colors leading-snug">
                  {course.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
