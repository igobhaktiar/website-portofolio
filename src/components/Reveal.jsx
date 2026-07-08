import { useEffect, useRef, useState } from 'react';

/**
 * Fades + slides its children in once they scroll into view — the React
 * equivalent of the original IntersectionObserver + `.reveal.in` script.
 *
 * @param {import('react').ElementType} [as] element to render (default "div")
 */
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    io.observe(node);
    return () => io.disconnect();
  }, []);

  const classes = ['reveal', shown ? 'in' : '', className].filter(Boolean).join(' ');

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
