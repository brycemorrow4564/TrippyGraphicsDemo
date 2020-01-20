import React from 'react';
import ViewCarousel from "./ViewCarousel"; 

function AppContent(props) {
  
  return (
      <div style={{ width: '100%', height: '100%', position: "relative" }}>
        <ViewCarousel/>
      </div>
  );

}

export default AppContent;
