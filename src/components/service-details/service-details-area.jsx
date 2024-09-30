import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import VideoPopup from '@/src/modals/video-popup';
import ServiceContactForm from '@/src/forms/service-contact-form';
import service_details_thumb from "@assets/img/services/service-details/img-1.jpg";
import service_video_thumb from "@assets/img/services/service-details/image.jpg";
import service_video_thumb2 from "@assets/img/services/service-details/img2.jpg";
import RightSymbol from '@/src/svg/right-symbol';
import accordion from '@/src/data/accordion';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const service_details_content = {
   service_details_tab: [
      { id: 1, title: "Our Company", active: "active" },

   ],
   title: <>Our Story</>,
   description: <>FAMZ  was founded in 1998 in Texas, USA, by a group of
      passionate  professionals who recognized the critical need
      for reliable, high-quality aircraft spare parts and maintenance
      services. From the outset, our founders were driven by a mission to
      enhance the safety, reliability, and efficiency of aircraft operations
      worldwide

   </>,
   description_5: <>In the early days, the  industry was rapidly evolving, with
      increasing demand for both commercial and private aircraft. Our
      founders faced numerous challenges, from sourcing rare spare parts
      to establishing trust with potential clients. Despite these hurdles,
      their unwavering dedication and commitment to excellence set the
      foundation for what FAMZ  would become.</>,
   title_1: <>Our Mission</>,

   title_2: <>Our Mission and Vision</>,

   description_2: <>Our mission is to provide unparalleled service and support to the
      industry, ensuring the safety, reliability, and efficiency of
      aircraft operations. Our vision is to be the preferred global partner
      for aircraft parts and maintenance services, recognized for our
      excellence, innovation, and commitment to customer satisfaction.</>,

   title_3: <>Looking Ahead</>,

   description_3: <>As we look to the future, FAMZ  remains committed to our
      core values of excellence, integrity, customer focus, innovation,
      and safety. We continue to expand our capabilities, forge new
      partnerships, and invest in the latest technologies to better serve
      our clients. Our goal is to keep aircraft in the air, safely and
      efficiently, for years to come</>,
   title_4: <>Philosophy</>,
   description_4: <>At FAMZ , our philosophy is centered around the belief that the
      industry thrives on precision, trust, and continuous
      improvement. We understand the critical role that our services play in
      ensuring the safety and efficiency of aircraft operations. Therefore, our
      approach is built on several core principles:
   </>,
   title_5: <>Customer-Centric Approach: </>,
   description_6: <>We believe that our customers are our most
      valuable assets. Our success is directly tied to their satisfaction, which is
      why we go above and beyond to meet their needs. We listen actively,
      respond promptly, and provide personalized solutions that address
      specific requirements.
   </>,
   title_6: <>Commitment to Quality:</>,
   description_7: <>Quality is non-negotiable at FAMZ . From
      the sourcing of spare parts to the execution of repair and maintenance
      services, every step is governed by stringent quality control measures. We
      ensure that all parts and services meet or exceed industry standards and
      regulatory requirements.
   </>,
   title_7: <>Innovation and Adaptability:</>,
   description_8: <>The  industry is dynamic, with new
      challenges and advancements emerging regularly. We foster a culture of
      innovation and adaptability, encouraging our team to embrace new
      technologies and methodologies. This proactive approach enables us to
      stay ahead of industry trends and continuously enhance our service
      offerings.</>,
}
// const { service_details_tab, title, description, title_1, title_2, title_3, title_4, title_5, title_6, title_7, description_2, description_3, description_4, description_5, description_6, description_7, feture_list, description_8, description_9 } = service_details_content

const ServiceDetailsArea = () => {
   const [activeTab, setActiveTab] = useState(0);

   const tabs = [
      {

         title: "Aviation",
         content: (
            <>
               <p>FAMZ provides reliable aviation services, specializing in the supply and maintenance of high-quality aircraft spare parts and equipment. With a commitment to safety and efficiency, we support both commercial and private aircraft operators by offering tailored solutions for their maintenance needs. Our aviation services include sourcing rare and essential spare parts, ensuring that all components meet industry standards and regulatory requirements.</p>
               <p>FAMZ partners with global manufacturers to offer an extensive range of aviation equipment, from essential mechanical parts to advanced navigation systems. Our team of experts provides maintenance services and technical support, ensuring aircraft remain operational and safe. With our dedication to quality and innovation, we continue to be a trusted partner in the aviation industry, delivering excellence in every aspect of aircraft operation and support.</p>
            </>
         )
      },
      {
         title: "Medical",
         content: (
            <>
               <p>FAMZ offers comprehensive medical solutions, providing equipment and services to both the public and private healthcare sectors.We specialize in turnkey healthcare projects, ensuring that hospitals and clinics have the necessary infrastructure, equipment, and technology for optimal operations. Our partnerships with leading global healthcare brands allow us to provide top-tier medical equipment, while our expert team offers reliable after-sales support, maintenance, and training.</p>

               <p>In the medical field, FAMZ supplies a wide range of therapeutic, diagnostic, and lifesaving equipment. We also assist with hospital planning and facility development, ensuring that healthcare providers have the most advanced tools and technologies at their disposal. With over 15 years of experience, we are committed to delivering solutions that promote patient care and healthcare efficiency.</p>
            </>
         )
      },
      {
         title: "Software Development",
         content: (
            <>
               <p>FAMZ specializes in developing innovative software solutions tailored to meet the unique needs of various industries. Our software development team works closely with clients to create custom web and mobile applications, enterprise-level systems, and AI-driven automation tools. We ensure that our software solutions enhance operational efficiency, improve user experience, and meet the highest standards of security and scalability.</p>
                                 
                                 <p>From automating business processes to building e-commerce platforms and AI-powered chatbots, FAMZ leverages the latest technologies to deliver cutting-edge solutions. Our services include everything from initial software design to post-launch support, ensuring that our clients benefit from reliable, future-proof software systems that drive business growth.</p>

                                 <h4>Key Offerings:</h4>
                                 <ul>
                                    <li>Custom Web & Mobile Applications: Tailored software to meet specific business needs.</li>
                                    <li>AI & Automation Solutions: Intelligent systems that automate tasks and improve operational efficiency.</li>
                                    <li>Enterprise Software: Robust, scalable systems for managing complex business operations</li>
                                    <li>E-commerce Development: Building user-friendly, secure online stores with integrated payment systems.</li>
                                    <li>Digital Marketing</li>
                                 </ul>
            </>
         )
      },
   ];

   return (
      <>
         <section className="tp-service-details-area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-lg-4">
                     <div className="tp-service-widget">

                        {/* <div className="tp-service-widget-item mb-40"> */}
                        {/* <div className="tp-service-widget-tab">
                              <ul>
                                 {service_details_tab.map((item, i) =>
                                    <li key={i}>
                                       <Link className={item.active} href="/service-details">
                                          {item.title} <i className="fa-regular fa-arrow-right-long"></i>
                                       </Link>
                                    </li>
                                 )}
                              </ul>
                           </div> */}
                        {/* </div> */}

                        <div className="tp-service-widget-item mb-40">
                           <div className="tp-service-contact">
                              <div className="tp-service-contact-form">
                                 <ServiceContactForm />
                                 <p className="ajax-response"></p>
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>
                  <div className="col-lg-8">
                     <div className="tp-service-details-wrapper">
                        {/* <div className="tp-service-details-thumb">
                           <Image src={service_details_thumb} alt="theme-pure" />
                           <h1 className="tp-service-details-title-1">{title}</h1>
                           <p>{description}</p>
                           <p>{description_5}</p>
                        </div> */}
                        {/* <div className="row">

                           <div className="tp-service-details-thumb p-relative">
                              <Image src={service_video_thumb} alt="theme-pure" />
                              {/* <div className="tp-video-play text-center">
                                    <a className="popup-video effect-1 effect-2" 
                                    onClick={() => setIsVideoOpen(true)}  
                                    ><i className="fa-sharp fa-solid fa-play"></i>
                                    </a>
                                    </div> */}
                        {/* </div>
                                    <h1 className="tp-service-details-title-1">{title_1}</h1>
                                    <br /><br />
                                    <br /><br />

                           
                              <div className="tp-service-details-list">
                                 <h2 className="tp-service-details-title">{title_2}</h2>
                                 <p>{description_2}</p>

                           </div>
                           <h2 className="tp-service-details-title">{title_3}</h2>
                           <p>{description_3}</p>
                        </div> */}

                        {/* <Image src={service_video_thumb2} alt="theme-pure" />
                        <br /><br />
                        <h1 className="tp-service-details-title-1">{title_4}</h1>
                        <p>{description_4}</p>
                        
                        <h3 className="tp-service-details-title">{title_5}</h3>
                        <p>{description_6}</p>
                        <h3 className="tp-service-details-title">{title_6}</h3>
                        <p>{description_7}</p>
                        <h3 className="tp-service-details-title">{title_7}</h3>
                        <p>{description_8}</p>
                        <div className="tp-service-details-thumb p-relative"> */}
                        {/* <div className="tp-video-play text-center">
                                    <a className="popup-video effect-1 effect-2" 
                                        onClick={() => setIsVideoOpen(true)}  
                                        ><i className="fa-sharp fa-solid fa-play"></i>
                                    </a>
                                 </div> */}
                        {/* </div> */}

                        {/* <Tabs isFitted variant='enclosed'>
                           <TabList mb='1em'>
                              <Tab className=' md:text-xl lg:text-2xl mr-50 border-black border w-25 border-3 rounded-2xl'><h1>Aviation</h1></Tab>
                              <Tab className='mr-50 border-black border w-25 border-3 rounded-2xl'><h1>Medical</h1></Tab>
                              <Tab className='border-black border w-25 border-3'><h1 >Software</h1></Tab>
                           </TabList>
                           <TabPanels>
                              <TabPanel>
                                 <p>FAMZ provides reliable aviation services, specializing in the supply and maintenance of high-quality aircraft spare parts and equipment. With a commitment to safety and efficiency, we support both commercial and private aircraft operators by offering tailored solutions for their maintenance needs. Our aviation services include sourcing rare and essential spare parts, ensuring that all components meet industry standards and regulatory requirements.</p>
                                 <p>FAMZ partners with global manufacturers to offer an extensive range of aviation equipment, from essential mechanical parts to advanced navigation systems. Our team of experts provides maintenance services and technical support, ensuring aircraft remain operational and safe. With our dedication to quality and innovation, we continue to be a trusted partner in the aviation industry, delivering excellence in every aspect of aircraft operation and support.</p>
                              </TabPanel>
                              <TabPanel>
                                 <p>FAMZ offers comprehensive medical solutions, providing equipment and services to both the public and private healthcare sectors.We specialize in turnkey healthcare projects, ensuring that hospitals and clinics have the necessary infrastructure, equipment, and technology for optimal operations. Our partnerships with leading global healthcare brands allow us to provide top-tier medical equipment, while our expert team offers reliable after-sales support, maintenance, and training.</p>
                               
                                 <p>In the medical field, FAMZ supplies a wide range of therapeutic, diagnostic, and lifesaving equipment. We also assist with hospital planning and facility development, ensuring that healthcare providers have the most advanced tools and technologies at their disposal. With over 15 years of experience, we are committed to delivering solutions that promote patient care and healthcare efficiency.</p>
                              
                              </TabPanel>
                              <TabPanel>
                                 <p>FAMZ specializes in developing innovative software solutions tailored to meet the unique needs of various industries. Our software development team works closely with clients to create custom web and mobile applications, enterprise-level systems, and AI-driven automation tools. We ensure that our software solutions enhance operational efficiency, improve user experience, and meet the highest standards of security and scalability.</p>
                                 
                                 <p>From automating business processes to building e-commerce platforms and AI-powered chatbots, FAMZ leverages the latest technologies to deliver cutting-edge solutions. Our services include everything from initial software design to post-launch support, ensuring that our clients benefit from reliable, future-proof software systems that drive business growth.</p>

                                 <h4>Key Offerings:</h4>
                                 <ul>
                                    <li>Custom Web & Mobile Applications: Tailored software to meet specific business needs.</li>
                                    <li>AI & Automation Solutions: Intelligent systems that automate tasks and improve operational efficiency.</li>
                                    <li>Enterprise Software: Robust, scalable systems for managing complex business operations</li>
                                    <li>E-commerce Development: Building user-friendly, secure online stores with integrated payment systems.</li>
                                    <li>Digital Marketing</li>
                                 </ul>
                              </TabPanel>
                           </TabPanels>
                        </Tabs> */}

                        {/* <div className="container mx-auto p-4">
                           <div className="flex border-b">
                              {tabs.map((tab, index) => (
                                 <button
                                    key={index}
                                    className={`py-2 px-4 text-sm font-medium transition-colors duration-300 ${activeTab === index
                                          ? 'border-b-2 border-blue-500 text-blue-500'
                                          : 'text-gray-600 hover:text-blue-500'
                                       }`}
                                    onClick={() => setActiveTab(index)}
                                 >
                                    {tab.title}
                                 </button>
                              ))}
                           </div>
                           <div className="mt-4 p-4 border rounded-lg bg-gray-100">
                              {tabs[activeTab].content}
                           </div>
                        </div> */}
                        <div className="container mx-auto p-4">
                           <div className="flex border-b">
                              {tabs.map((tab, index) => (
                                 <button
                                    key={index}
                                    className={`py-2 px-4 text-sm font-medium transition-all duration-300 ease-in-out ${activeTab === index
                                       ? 'border-b-2 border-blue-500 text-blue-800 bg-blue-100 transform scale-105'
                                       : 'text-gray-600 hover:text-white hover:bg-blue-500 hover:scale-105'
                                       } rounded-md`} // Rounded corners for better aesthetics
                                    onClick={() => setActiveTab(index)}
                                 >
                                    {tab.title}
                                 </button>
                              ))}
                           </div>
                           <div
                              className={`mt-4 p-4 border rounded-lg bg-gray-100 transition-opacity duration-300 ${activeTab === 0 ? 'opacity-100' : 'opacity-0'
                                 } ${activeTab === 1 ? 'opacity-100' : 'opacity-0'} ${activeTab === 2 ? 'opacity-100' : 'opacity-0'} `}
                           >
                              {tabs[activeTab].content}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* video modal start */}
         {/* <VideoPopup 
                isVideoOpen={isVideoOpen}
                setIsVideoOpen={setIsVideoOpen}
                videoId={"csnD5EVL5z8"}
            /> */}
         {/* video modal end */}
      </>
   );
};

export default ServiceDetailsArea;