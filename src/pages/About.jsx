import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen relative text-white">
      {/* Stronger Blurred Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center z-0 text-white"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=nYAn4JKoCqO1hMTjZiND1PAIWoABuy1BwH1MhaEoG6w=')",
          filter: "blur(16px)",
          transform: "scale(1.1)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-10 text-white">
        <div
          className="backdrop-blur-xl shadow-xl rounded-xl p-10 max-w-6xl mt-2 mx-auto"
          style={{
            backgroundColor: 'rgba(173, 216, 230, 0.2)', // Seamless like navbar
          }}
        >
          <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">About Us</h1>

          <div className="space-y-10 text-white">
            {/* Company Profile */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">Company Profile</h2>
              <div className="space-y-4">
                <p>
                  Rao Associates Construction Engineers was established in 1995 as a professional
                  consultancy organization having no association with any contractor or other consultants.
                </p>
                <p>
                  Rao Associates is a proprietary concern with offices in Mysore & Mangalore. Currently,
                  we are rendering Total Project Management / Construction Management services to many
                  projects in Karnataka. We are also providing Structural design services to many projects.
                </p>
                <p>
                  Its constituent members are all highly educated professionals with vast experience in
                  handling diverse projects. Our staff is ably supported by experts of various disciplines
                  and associated with organizations that enable us to adopt state-of-the-art technologies.
                </p>
              </div>
            </section>

            {/* Principal Consultant */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">Principal Consultant</h2>
              <div className="bg-blue-100/10 bg-opacity-40 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-3">D V YOGISHA RAO</h3>
                <div className="space-y-4">
                <div className="md:flex md:items-start md:gap-4">
                  <div className="font-medium w-[120px]">Education:</div>
                  <div className="space-y-1">
                    <p className=''>B.E. (Civil Engineering)</p>
                    <p>MSc in Real Estate and Management</p>
                  </div>
                </div>
                

                  <div>
                    <div className="font-medium mb-2">Professional Credentials:</div>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Panel Valuer for All Nationalized Banks & Financial Institutions Since 1995</li>
                      <li>Membership No. with Institute of Engineers: M-121057-4</li>
                      <li>Life Membership Number with Institute of Valuers: F-5790</li>
                      <li>Chartered Engineer (India): AM063948-8</li>
                      <li>CBDT Reg No: CAT_1/106/20013-14/CC-111</li>
                      <li>IBBI REGISTERED VALUER: ibbi/rv/02/1014</li>
                    </ul>
                  </div>

                  <div>
                    <div className="font-medium mb-2">Area of Specialization:</div>
                    <p>Valuation Of Land & Building & Agricultural Lands</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Notable Projects */}
            <section className=''>
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">Notable Projects</h2>
              <div className="space-y-4 ">
                {[
                  {
                    title: 'Project Engineer - "SHRUTHA COMPLEX" (1990-1992)',
                    location: 'Multistoried Complex, No.19, Primrose Road, Bangalore 560 001',
                    cost: '2 Crore',
                  },
                  {
                    title: 'Independent Commercial Complex (1992-1995)',
                    location: '"Mythri Complex" next to service Bus stand Udupi',
                    cost: '2.5 Crore',
                  },
                  {
                    title: 'Construction of S.D.M. & MMK College (1995-1997)',
                    location: 'For Dharmasthala Educational Society at Krishnamurthypuram, Mysore',
                    cost: '1.5 Crore',
                  },
                  {
                    title: 'Residential & Commercial Complex (1998-2004)',
                    location:
                      '92 Residential Flats & 50,000 sq ft Commercial Complex, No. 50, Kantharaj Urs Road, Mysore',
                    cost: '16 Crore',
                  },
                ].map((project, i) => (
                  <div key={i} className="bg-blue-100/10 bg-opacity-50 p-4 rounded-lg">
                    <h3 className="font-bold text-blue-800">{project.title}</h3>
                    <p>{project.location}</p>
                    <p className="text-white font-medium">Project Cost: {project.cost}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Other Consultants */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">Other Consultants</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: 'Dr. Sarangpani',
                    role: 'Structural Consultant',
                    details: [
                      'Former Prof and Head, Dept of Civil',
                      'National Institute of Engineering, Mysore',
                    ],
                  },
                  {
                    name: 'Padmanab',
                    role: 'Quantity Surveyor and Project Engineer',
                    details: [],
                  },
                  {
                    name: 'Kumar',
                    role: 'Quantity Surveyor and Field Engineer',
                    details: [],
                  },
                ].map((consultant, i) => (
                  <div key={i} className="bg-blue-100/10 bg-opacity-50 p-4 rounded-lg">
                    <h3 className="font-bold text-blue-800">{consultant.name}</h3>
                    <p>{consultant.role}</p>
                    {consultant.details.map((line, j) => (
                      <p key={j}>{line}</p>
                    ))}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-10 text-center text-sm text-gray-800">
            <p>© {new Date().getFullYear()} Rao Associates - Construction Engineers & Consultants</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
