import React, { useEffect } from "react";
import Badge from "../Common/Badge";
import CommunityCard from "./CommunityCard";
import CampusCard from "./CampusCard";
import { COMMUNITIES, CAMPUSES } from "../../data/constants";
import "./Communities.css";

const Communities = () => {
  
  const cols = Math.min(CAMPUSES.length || 1, 3); // 1..3

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="communities-section" id="communities">
      <div className="container">
        <div className="section-header section-header-center">
          <Badge variant="alt">🌐 POWERED BY GOOGLE</Badge>
          <h2 className="section-title">
            Our <span className="title-highlight">Communities</span>
          </h2>
        </div>

        <div className="main-communities">
          {COMMUNITIES.map((community, idx) => (
            <CommunityCard
              key={community.id}
              {...community}
              iconClass={`community-icon-${idx + 1}`}
            />
          ))}
        </div>

        <div className="campus-chapters">
          <h3 className="campus-title">
            <span className="campus-title-highlight">GDGC</span> Campus
            Chapters
          </h3>
           <div
    className="campus-grid"
    style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
  >
    {CAMPUSES.map((campus, index) => (
      <CampusCard key={index} {...campus} index={index} />
    ))}
  </div>
        
        </div>
      </div>
    </section>
  );
};

export default Communities;
 