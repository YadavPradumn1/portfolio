import "./styles/ResumeDetails.css";

const skillGroups = [
  ["Languages", "Java", "Python (Basics)", "JavaScript (ES6+)"],
  ["Frontend", "React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "MUI", "Vite"],
  ["Backend", "Node.js", "Express.js", "Spring Boot", "Spring Security", "Hibernate", "REST APIs", "JWT"],
  ["Databases", "MongoDB", "SQL"],
  ["AI Integration", "Google Gemini API"],
  ["Testing", "Jest"],
  ["Tools", "Git", "GitHub", "Postman", "Netlify"],
  ["Soft Skills", "Collaboration", "Communication", "Problem Solving", "Agile", "Rapid Prototyping"],
];

const ResumeDetails = () => (
  <section className="resume-details section-container" aria-label="Education, skills, and achievements">
    <div className="resume-panel" id="education">
      <h2>Education</h2>
      <div className="resume-entry">
        <div>
          <h3>Ajay Kumar Garg Engineering College</h3>
          <p>Bachelor of Technology, Information Technology</p>
        </div>
        <strong>2023 – 2027</strong>
      </div>
      <div className="resume-entry">
        <div>
          <h3>School Education</h3>
          <p>Class XII, CBSE Board</p>
          <p>Class X, CBSE Board</p>
        </div>
      </div>
    </div>

    <div className="resume-panel" id="skills">
      <h2>Technical Skills</h2>
      <div className="skill-groups">
        {skillGroups.map(([group, ...skills]) => (
          <div className="skill-group" key={group}>
            <h3>{group}</h3>
            <div className="skill-tags">
              {skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="resume-panel" id="achievements">
      <h2>Certifications &amp; Achievements</h2>
      <div className="achievement-grid">
        <div>
          <h3>Certifications</h3>
          <p>DSA (Java) — PW Skills (2025)</p>
          <p>Full Stack Web Development — College Wallah (2025)</p>
        </div>
        <div id="competitive-programming">
          <h3>Competitive Programming</h3>
          <p>Solved 300+ DSA problems on LeetCode, GeeksforGeeks, CodeChef, and Codeforces.</p>
        </div>
        <div>
          <h3>Activities</h3>
          <p>Participated in hackathons, coding contests, and technical workshops.</p>
        </div>
      </div>
    </div>
  </section>
);

export default ResumeDetails;
