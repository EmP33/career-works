import React, { useState, useEffect, useReducer } from "react";
import CSSModules from "react-css-modules";
import styles from "./QuoteGeneratorPage.module.scss";

import { FaQuoteLeft } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const quoteReducer = (_, action) => {
  if (action.type === "QUOTE_GENERATE") {
    return { text: action.text, author: action.author };
  }

  return { text: "", author: "" };
};

const QuoteGeneratorPage = () => {
  const [loading, setLoading] = useState(false);
  const [quoteState, dispatchQuote] = useReducer(quoteReducer, {
    text: "",
    author: "",
  });

  const getQuote = async () => {
    try {
      setLoading(true);
      // Get data from api
      const data = await fetch("https://type.fit/api/quotes");
      const res = await data.json();
      // Random quote
      const randomQuote = res[Math.floor(Math.random() * 500) + 1];

      dispatchQuote({
        type: "QUOTE_GENERATE",
        text: randomQuote.text,
        author: randomQuote.author || "Unknow",
      });

      setLoading(false);
      //Handle error
    } catch (err) {
      console.error(err);
    }
  };

  const tweetQuote = function () {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteState.text} - ${quoteState.author}`;
    window.open(twitterUrl, "_blank");
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <article styleName="quote-wrapper">
      {!loading && (
        <div styleName="quote-container" id="quote-container">
          <div styleName="quote-text">
            <FaQuoteLeft />
            <span id="quote">{quoteState.text}</span>

            <div styleName="quote-author">
              <span id="author">{quoteState.author}</span>
            </div>

            <div styleName="button-container">
              <button
                styleName="twitter-button"
                id="twitter"
                title="Tweet this!"
                onClick={tweetQuote}
              >
                <AiOutlineTwitter />
              </button>
              <button id="new-quote" onClick={() => getQuote()}>
                New quote
              </button>
            </div>
          </div>
        </div>
      )}

      {loading && <div styleName="loader" id="loader"></div>}
    </article>
  );
};

export default CSSModules(QuoteGeneratorPage, styles);
