import React, { useRef, useState, useCallback, useLayoutEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";
import { useViewportScroll, useTransform, useSpring, motion } from "framer-motion";
import "../../App.css";

const SmoothScroll = ({ children }) => {
  // Scroll container ref
  const scrollRef = useRef(null);

  // Page scrollable height based on content length
  const [pageHeight, setPageHeight] = useState(0);

  // Update scrollable height when the browser is resizing
  const resizePageHeight = useCallback((entries) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  // Observe when the browser is resizing
  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => resizePageHeight(entries));
    if (scrollRef.current) resizeObserver.observe(scrollRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  const { scrollY } = useViewportScroll(); // Measures how many pixels user has scrolled vertically
  // Create a negative scroll value based on the current scroll position to translateY the document naturally
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }; // Easing for smooth scroll
  const spring = useSpring(transform, physics); // Apply easing to the negative scroll value

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: spring }} // translateY of scroll container using negative scroll value
        className="scroll-container"
      >
        {children}
      </motion.div>
      {/* Blank div with a dynamic height based on content's inherent height */}
      {/* This is necessary to allow the scroll container to scroll using the browser's native scrollbar */}
      <div style={{ height: pageHeight }} />
    </>
  );
};

export default SmoothScroll;
