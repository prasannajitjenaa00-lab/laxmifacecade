import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const prog = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setWidth(prog);
    };
    window.addEventListener('scroll', update);
    return () => window.removeEventListener('scroll', update);
  }, []);
  return <div id="scroll-progress" style={{ width: `${width}%` }} />;
}
