import React from "react";
import Image from "next/image";
import Teamimg from "../../public/images/team-member.png";
import member1 from '../../public/images/Team/member1.svg';
import member2 from '../../public/images/Team/member2.svg';
import member3 from '../../public/images/Team/member3.svg';
import member4 from '../../public/images/Team/member4.svg';
import member5 from '../../public/images/Team/member5.svg';


function Team() {
  return (
    <>
      <div className="team flex">
        <div className="content-part w-[53%]">
          <h2 className="mb-0">Our Team</h2>
          <p className="pt-2 text-2xl pr-24 text-[#333333]">
            Lorem ipsum dollor site amet the best consectuer adipiscing elites
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
            aliquam erat volutpat insignia the consectuer adipiscing elit.
          </p>
        </div>
        <div className="images-part flex w-[47%] justify-between mb-6">
          <div className="member-part">
            <Image src={Teamimg} alt="Event" />
          </div>
          <div className="member-part">
            <Image src={member1} alt="member1" />
          </div>
        </div>
      </div>
      <div className="images-part flex justify-between">
        <div className="member-part">
          <Image src={member2} alt="member2" />
        </div>
        <div className="member-part">
          <Image src={member3} alt="member3" />
        </div>
        <div className="member-part">
          <Image src={member4} alt="member4" />
        </div>
        <div className="member-part">
          <Image src={member5} alt="member5" />
        </div>
      </div>
    </>
  );
}

export default Team;
