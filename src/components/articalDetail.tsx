//@ts-nocheck
import React from "react";
import { Label } from "./ui/Label";
import { Checkbox } from "./ui/Checkbox";

const ArticalDetail = ({ id }: { id: string }) => {
  const articals = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence",
      content:
        "<p>Artificial Intelligence (AI) has been a transformative force in various industries. Its rapid evolution has led to significant advancements, impacting our daily lives and shaping the future.</p><h2>Key Developments in AI</h2><ul><li>Natural Language Processing (NLP): Tools like chatbots and voice assistants have revolutionized communication.</li><li>Computer Vision: Applications in facial recognition and medical imaging are groundbreaking.</li><li>Machine Learning: Automated systems capable of predictive analytics have transformed industries.</li></ul><h2>Challenges and Opportunities</h2><p>While AI offers immense potential, it also poses challenges, including ethical dilemmas, privacy concerns, and the need for robust regulations. Balancing innovation with responsibility will be key in the coming years.</p>",
      author: "Jane Doe",
      publicationDate: "2024-12-10",
      tags: ["AI", "Technology", "Future"],
    },
    {
      id: 2,
      title: "10 Tips for Effective Remote Work",
      content:
        "<p>Remote work has become the norm for many professionals, especially post-pandemic. It offers flexibility but requires discipline to maintain productivity.</p><h2>Top Tips for Success</h2><ol><li>Set a dedicated workspace to create boundaries between work and personal life.</li><li>Use productivity tools like Trello or Asana to organize tasks.</li><li>Establish a routine to manage time effectively.</li><li>Communicate regularly with your team to stay aligned.</li><li>Take regular breaks to avoid burnout.</li></ol><p>By implementing these tips, remote work can be as effective as traditional office setups.</p>",
      author: "John Smith",
      publicationDate: "2024-12-01",
      tags: ["Remote Work", "Productivity", "Tips"],
    },
    {
      id: 3,
      title: "A Beginner's Guide to Web3",
      content:
        "<p>Web3 represents a paradigm shift in how we interact with the internet. Unlike its predecessor, it focuses on decentralization and user empowerment.</p><h2>Core Principles of Web3</h2><ul><li><strong>Decentralization:</strong> Data is stored across a network of computers rather than centralized servers.</li><li><strong>Blockchain Technology:</strong> Provides transparency and security.</li><li><strong>User Ownership:</strong> Users have greater control over their data and digital assets.</li></ul><h2>Applications of Web3</h2><p>From decentralized finance (DeFi) platforms to NFTs, Web3 is reshaping various sectors. Its adoption is expected to grow exponentially in the coming years.</p>",
      author: "Alice Johnson",
      publicationDate: "2024-11-20",
      tags: ["Web3", "Blockchain", "Internet"],
    },
    {
      id: 4,
      title: "Mastering JavaScript: Advanced Concepts",
      content:
        "<p>JavaScript is a versatile language, and mastering it requires a deep understanding of its core concepts.</p><h2>Essential Advanced Topics</h2><ul><li><strong>Closures:</strong> Enable functions to access variables from their lexical scope.</li><li><strong>Promises and Async/Await:</strong> Simplify asynchronous programming.</li><li><strong>ES6 Features:</strong> Tools like destructuring and modules enhance code readability.</li></ul><p>By exploring these advanced topics, developers can write more efficient and maintainable code.</p>",
      author: "Chris Lee",
      publicationDate: "2024-11-15",
      tags: ["JavaScript", "Programming", "Advanced"],
    },
    {
      id: 5,
      title: "The Importance of Mental Health Awareness",
      content:
        "<p>Mental health is as important as physical health, yet it often does not receive the attention it deserves.</p><h2>Breaking the Stigma</h2><ul><li>Encouraging open conversations about mental health.</li><li>Providing access to mental health resources and support.</li><li>Highlighting the role of education in awareness campaigns.</li></ul><p>Greater awareness can lead to more individuals seeking help and building a supportive community.</p>",
      author: "Emma Brown",
      publicationDate: "2024-10-25",
      tags: ["Mental Health", "Awareness", "Wellness"],
    },
    {
      id: 6,
      title: "The Rise of Electric Vehicles",
      content:
        "<p>Electric vehicles (EVs) are rapidly transforming the automotive industry, offering a sustainable alternative to traditional fuel-powered cars.</p><h2>Advantages of EVs</h2><ul><li><strong>Eco-Friendly:</strong> Reduced carbon emissions and environmental impact.</li><li><strong>Cost-Efficiency:</strong> Lower operating costs compared to gasoline vehicles.</li><li><strong>Innovation:</strong> Features like autonomous driving and smart connectivity.</li></ul><p>As battery technology advances and infrastructure improves, the adoption of EVs is expected to soar in the coming decade.</p>",
      author: "Sophia Green",
      publicationDate: "2024-11-30",
      tags: ["Electric Vehicles", "Technology", "Sustainability"],
    },
    {
      id: 7,
      title: "Understanding the Basics of Cybersecurity",
      content:
        "<p>In a digital world, cybersecurity is essential to protect sensitive information and systems from malicious attacks.</p><h2>Common Cyber Threats</h2><ul><li><strong>Phishing:</strong> Fraudulent attempts to obtain sensitive information.</li><li><strong>Malware:</strong> Software designed to disrupt or damage systems.</li><li><strong>Ransomware:</strong> Threatening to release data unless a ransom is paid.</li></ul><h2>Best Practices</h2><p>Implementing strong passwords, regular updates, and employee training are vital steps to enhance cybersecurity.</p>",
      author: "Michael Brown",
      publicationDate: "2024-10-20",
      tags: ["Cybersecurity", "Technology", "Safety"],
    },
    {
      id: 8,
      title: "The Role of Renewable Energy in the Future",
      content:
        "<p>Renewable energy sources like solar, wind, and hydro are key to achieving a sustainable future.</p><h2>Benefits of Renewable Energy</h2><ul><li><strong>Environmental Impact:</strong> Significant reduction in greenhouse gas emissions.</li><li><strong>Energy Independence:</strong> Reducing reliance on imported fuels.</li><li><strong>Economic Growth:</strong> Creation of jobs in renewable energy sectors.</li></ul><p>With continued investments and policy support, renewable energy can power the world sustainably.</p>",
      author: "Linda Carter",
      publicationDate: "2024-11-10",
      tags: ["Renewable Energy", "Sustainability", "Environment"],
    },
    {
      id: 9,
      title: "Tips for Healthy Eating on a Budget",
      content:
        "<p>Eating healthy doesn’t have to be expensive. With the right strategies, you can maintain a nutritious diet within your budget.</p><h2>Practical Tips</h2><ol><li>Plan meals and create a shopping list to avoid unnecessary purchases.</li><li>Buy in bulk to save money on staples like rice, beans, and oats.</li><li>Choose seasonal produce for cost-effective and fresh options.</li><li>Cook at home instead of eating out to control ingredients and portion sizes.</li></ol><p>Healthy eating is achievable for everyone with proper planning and smart choices.</p>",
      author: "David King",
      publicationDate: "2024-12-05",
      tags: ["Healthy Eating", "Budget", "Wellness"],
    },
    {
      id: 10,
      title: "Exploring the Marvels of Space Exploration",
      content:
        "<p>Space exploration has always fascinated humanity, pushing the boundaries of science and technology.</p><h2>Notable Achievements</h2><ul><li>The Moon Landing: A monumental milestone in 1969.</li><li>Mars Rovers: Providing invaluable data about the Red Planet.</li><li>Space Telescopes: Unveiling the mysteries of distant galaxies.</li></ul><h2>The Future</h2><p>With advancements in reusable rockets and international collaboration, the dream of interplanetary travel is closer than ever.</p>",
      author: "Rachel Adams",
      publicationDate: "2024-10-15",
      tags: ["Space Exploration", "Science", "Innovation"],
    },
  ];

  if (!id) {
    return (
      <>
        <span>No id found</span>
      </>
    );
  }

  if (
    !articals.find((element) => {
      return element.id === parseInt(id);
    })
  ) {
    return (
      <>
        <span>No Artical found</span>
      </>
    );
  }

  return (
    <>
      <div className="max-w-4xl w-full  mx-auto h-auto bg-transparent">
        <div className="flex flex-col items-center justify-center w-full">
          <span className="font-bold text-4xl">
            {
              articals.find((element) => {
                return element.id === parseInt(id);
              })?.title
            }
          </span>
          <span className="text-sm opacity-75 group-hover:opacity-100">
            Author:{" "}
            {
              articals.find((element) => {
                return element.id === parseInt(id);
              })?.author
            }
          </span>
          <span className="flex gap-2">
            {articals
              .find((element) => {
                return element.id === parseInt(id);
              })
              ?.tags.map((data, key) => (
                <button
                  key={key}
                  className="bg-transparent opacity-75 text-[10px] rounded-full px-2 border border-[#D98B44]"
                >
                  #{data}
                </button>
              ))}
          </span>
        </div>
        <hr className="border-[#D98B44] my-2" />
        <div className="flex h-[70vh] gap-2">
          <div
            className="flex-1 overflow-y-auto pr-4 prose"
            dangerouslySetInnerHTML={{
              __html: articals.find((element) => {
                return element.id === parseInt(id);
              })?.content,
            }}
          ></div>
          <div className="sticky top-0 w-[20vw] border-2 border-blue-500 min-h-[70vh] flex flex-col justify-between">
            <div className="flex flex-col gap-4 pt-2 pl-2 items-start">
              <div className="flex items-center justify-center gap-2">
                <Checkbox id="r1" />
                <Label htmlFor="r1">Checkbox 1</Label>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Checkbox id="r2" />
                <Label htmlFor="r2">Checkbox 2</Label>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Checkbox id="r3" />
                <Label htmlFor="r3">Checkbox 3</Label>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Checkbox id="r4" />
                <Label htmlFor="r4">Checkbox 4</Label>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-2">
              <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-4">
                <textarea
                  placeholder="Write your prompt here..."
                  className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>

                <button className="mt-4 w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticalDetail;
