import React, { useEffect, useState, useRef } from 'react';

export default function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''} ${props.isTiled ? 'is-tiled' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
