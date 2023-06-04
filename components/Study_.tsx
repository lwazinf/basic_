import Polygon_ from "./Polygon_";

interface Study_Props {}

const Study_ = ({}: Study_Props) => {
  return (
    <div
      className={`w-full h-[100vh] flex flex-col justify-center items-center relative`}
    >
      <img
        className={`w-full h-full object-cover`}
        src={`https://images.pexels.com/photos/4254898/pexels-photo-4254898.jpeg?auto=compress&cs=tinysrgb&w=1600`}
      />
      <div
        className={`w-full h-full absolute top-0 left-0 bg-white/50 backdrop-blur-md`}
      />
      <div
        className={`w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center topFade2`}
      >
        <InnerContent_/>
      </div>
      <div
        className={`w-[160px] h-full absolute left-0 flex flex-col justify-center items-center`}
      >
        <p
          className={`xl:text-[30px] lg:text-[30px] text-[30px] text-black/20 text-center leading-[.8] tracking-[-0.0em] _Bungee cursor-default -rotate-90 opacity-0 lg:opacity-100`}
        >
          CASE STUDY
        </p>
      </div>
    </div>
  );
};

export default Study_;


// InnerContent_

interface InnerContent_Props {
  
}
 
const InnerContent_ = ({}:InnerContent_Props) => {
  return ( 
    <div
          className={`w-[90em] h-full relative flex flex-col justify-center items-center text-black/70 text-left`}
        >
          <h2
            className={`_Bungee font-black text-[18px] my-2`}
          >
            Introduction:
          </h2>
          <p className={`font-medium text-[13px] mb-4 text-black/50`}>
            Discover how XYZ Road Construction Company revolutionized road
            construction in ABC County, improving connectivity, safety, and
            efficiency. This case study highlights their remarkable achievements
            and sustainable approach to delivering exceptional infrastructure
            projects.
          </p>

          <h2
            className={`_Bungee font-black text-[18px] my-2`}
          >
            Client Overview:
          </h2>
          <p className={`font-medium text-[13px] mb-4 text-black/50`}>
            ABC County faced road infrastructure challenges and sought a trusted
            partner. XYZ Road Construction Company was chosen for their
            expertise and customer-centric approach to enhance transportation
            networks and drive progress.
          </p>

          <h2
            className={`_Bungee font-black text-[18px] my-2`}
          >
            Project Objectives:
          </h2>
          <ol className={`font-medium text-[13px] mb-4`}>
            <li className={`font-medium text-[13px] mb-1 text-black/50`}>
              Enhance Connectivity: Build a robust road network to connect key
              areas, improving accessibility.
            </li>
            <li className={`font-medium text-[13px] mb-1 text-black/50`}>
              Improve Safety: Implement modern design practices and safety
              features to create a secure environment for all.
            </li>
            <li className={`font-medium text-[13px] mb-1 text-black/50`}>
              Optimize Efficiency: Employ innovative techniques to expedite
              projects and minimize disruptions.
            </li>
            <li className={`font-medium text-[13px] mb-1 text-black/50`}>
              Sustainable Solutions: Integrate eco-friendly practices to reduce
              environmental impact.
            </li>
          </ol>

          <h2
            className={`_Bungee font-black text-[18px] my-2`}
          >
            Approach:
          </h2>
          <p className={`font-medium text-[13px] mb-4 text-black/50`}>
            XYZ embraced comprehensive planning, advanced technology adoption,
            stakeholder collaboration, and efficient project management.
          </p>

          <h2
            className={`_Bungee font-black text-[18px] my-2`}
          >
            Results and Impact:
          </h2>
          <ol className={`font-medium text-[13px] mb-4`}>
            <li className={`font-medium text-[13px] mb-1 text-black/50`}>
              Enhanced Connectivity: Improved transportation, reduced
              congestion, and enabled economic growth.
            </li>
            <li className={`font-medium text-[13px] mb-1 text-black/50`}>
              Enhanced Safety: Reduced accidents and injuries with modern safety
              features.
            </li>
            <li className={`font-medium text-[13px] mb-1 text-black/50`}>
              Expedited Timelines: Completed projects ahead of schedule,
              minimizing disruptions.
            </li>
            <li className={`font-medium text-[13px] mb-1 text-black/50`}>
              Sustainable Practices: Prioritized eco-friendly materials and
              energy-efficient measures.
            </li>
          </ol>

          <h2
            className={`_Bungee font-black text-[18px] my-2`}
          >
            Conclusion:
          </h2>
          <p className={`font-medium text-[13px] mb-2 text-black/50`}>
            XYZ Road Construction Company's partnership with ABC County
            transformed infrastructure, positively impacting residents' lives
            through connectivity, safety, efficiency, and sustainability.
          </p>
        </div>
   );
}
 