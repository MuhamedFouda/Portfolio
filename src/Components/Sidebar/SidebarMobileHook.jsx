import { useState, useEffect } from 'react';

 function useResponsiveSize() {
    const[size ,setSize]=useState(false)
    useEffect(()=>{
      function handleMobileView(e) {
        if (e.matches) {
          setSize("30px")
        } else {
          setSize("50px")
        }
      }
      const mobileQuery = window.matchMedia("(max-width: 768px)");
      handleMobileView(mobileQuery);
      mobileQuery.addEventListener("change", handleMobileView);
    },[size])
  
    return size;
  }
  export default useResponsiveSize;