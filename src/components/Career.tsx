import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Intern</h4>
                <h5>Codec Technology Pvt. Ltd. - Remote</h5>
              </div>
              <h3>Jul - Aug 2025</h3>
            </div>
            <p>
            Built and maintained 3+ full-stack applications with MongoDB,
            Express.js, React.js, and Node.js. Optimized API responses and
            reduced average page load time by 20%. Implemented JWT
            authentication and RBAC across 10K+ records, cutting query
            response time by 30%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Intern</h4>
                <h5>Raised Digital - Remote</h5>
              </div>
              <h3>May - Jul 2024</h3>
            </div>
            <p>
            Developed and deployed scalable MERN applications, delivering
            5+ features and resolving 15+ bugs. Reduced React bundle size
            by 14% through code splitting and lazy loading, and wrote Jest
            tests achieving 80%+ component coverage.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech, Information Technology</h4>
                <h5>Ajay Kumar Garg Engineering College</h5>
              </div>
              <h3>2023 - 2027</h3>
            </div>
            <p>
            Currently pursuing a Bachelor of Technology in Information
            Technology. Alongside academics, I have solved 300+ DSA
            problems across LeetCode, GeeksforGeeks, CodeChef, and
            Codeforces. Certifications include DSA (Java) from PW Skills
            and Full Stack Web Development from College Wallah. I also
            participate in hackathons, coding contests, and technical
            workshops.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
