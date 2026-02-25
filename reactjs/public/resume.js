const rootEl = document.getElementById("root-element");
const reactDom = ReactDOM.createRoot(rootEl);

const Section = ({ title, children }) => {
  return (
    <div className="mb-6">
      <h2 className="text-pink-600 font-semibold mb-2">{title}</h2>
      {children}
    </div>
  );
};

const Resume = () => {
  return (
    <div className="bg-rose-50 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white w-200 rounded-2xl shadow-lg p-8">

        <div className="flex gap-[400px]">
          <div className="border-b pb-4 mb-6">
            <h1 className="text-3xl font-bold">Samandeep Kaur</h1>
            <p className="text-pink-600 font-medium">Aspiring Web Developement</p>
            <div className="text-sm text-gray-600 mt-2">
              <p>📞 75782762</p>
              <p>📧 kaursaman@gmail.com</p>
              <p>📍 Khadur Sahib, Tarn Taran, Punjab</p>
            </div>
          </div>

          <div>
            <img className="w-28 h-28 rounded-full object-cover justify-center"
              src="\passport-img.jpeg" alt=""></img>
          </div>
        </div>


        <div className="flex gap-8">
          <div className="w-1/3 border-r pr-6">
            <Section title="Skills">
              <ul className="list-disc ml-4 space-y-1">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Tailwind CSS</li>
                <li>Responsive Design</li>
                <li>UI Basics</li>
              </ul>
            </Section>
          </div>

          <div className="w-2/3">
            <Section title="About Me">
              <p>
                Motivated aspiring web developement with strong skills in modern
                frontend technologies.
              </p>
            </Section>

            <Section title="Education">
              <p className="font-medium">12th Grade — PSEB Board</p>
              <p>Baba Gurmukh Singh Baba Uttam Singh Senior Secondary School</p>
              <p>2022</p><br />
              <p className="font-medium">BCA (Bacholer of Computer Application) - GNDU University</p>
              <p>SGAD College,Khadur Sahib</p>
              <p>2025</p>
            </Section>

            <Section title="Projects">
              <ul className="list-disc ml-4 space-y-1">
                <li>Pet Adoption Website</li>
                <li>Boutique UI Design</li>
                <li>UI Components Practice</li>
              </ul>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};

reactDom.render(<Resume />);