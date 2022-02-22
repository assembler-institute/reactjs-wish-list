import React, { useEffect, useState } from "react";
import { motion } from "framer-motion/dist/framer-motion";

import "./Quote.scss";

export default function Quote() {
  const [quote, setQuote] = useState({
    text: "",
    author: "",
  });
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => setQuote(data[Math.round(Math.random() * 1500)]));
  }, []);
  //   const getQuote = () => {
  //     const datos = fetch("https://type.fit/api/quotes")
  //       .then((response) => response.json())
  //       .then((data) => data[0].text);
  //     return datos;
  //   };

  //   console.log(getQuote());

  return (
    <div className="quoteContainer">
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="quote"
      >
        {`"${quote.text}"`}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 2 }}
        className="author"
      >
        {`-${quote.author === null ? "Unknown" : quote.author}-`}
      </motion.p>
    </div>
  );
}
