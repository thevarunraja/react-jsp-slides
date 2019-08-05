import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import meta from "./meta.js";

// night owl theme with customizations
const nightOwlTheme = /*: PrismTheme */ {
  plain: {
    color: "#d6deeb",
    backgroundColor: "#011627"
  },
  styles: [
    {
      types: ["changed"],
      style: {
        color: "rgb(162, 191, 252)",
        fontStyle: "italic"
      }
    },
    {
      types: ["deleted"],
      style: {
        color: "rgba(239, 83, 80, 0.56)",
        fontStyle: "italic"
      }
    },
    {
      types: ["inserted", "attr-name"],
      style: {
        color: "rgb(173, 219, 103)",
        fontStyle: "italic"
      }
    },
    {
      types: ["comment"],
      style: {
        color: "#637777",
        fontStyle: "italic"
      }
    },
    {
      types: ["string", "url"],
      style: {
        color: "rgb(173, 219, 103)"
      }
    },
    {
      types: ["variable"],
      style: {
        color: "rgb(214, 222, 235)"
      }
    },
    {
      types: ["number"],
      style: {
        color: "rgb(247, 140, 108)"
      }
    },
    {
      types: ["builtin", "char", "constant", "function"],
      style: {
        color: "rgb(130, 170, 255)"
      }
    },
    {
      // This was manually added after the auto-generation
      // so that punctuations are not italicised
      types: ["punctuation"],
      style: {
        color: "rgb(199, 146, 234)"
      }
    },
    {
      types: ["selector", "doctype"],
      style: {
        color: "rgb(199, 146, 234)",
        fontStyle: "italic"
      }
    },
    {
      types: ["class-name"],
      style: {
        color: "rgb(255, 203, 139)"
      }
    },
    {
      types: ["tag", "operator", "keyword"],
      style: {
        color: "rgb(127, 219, 202)"
      }
    },
    {
      types: ["boolean"],
      style: {
        color: "rgb(255, 88, 116)"
      }
    },
    {
      types: ["property"],
      style: {
        color: "rgb(128, 203, 196)"
      }
    },
    {
      types: ["namespace"],
      style: {
        color: "rgb(178, 204, 214)"
      }
    }
  ]
};

const Code = ({ children, className: [languageClassName] }) => {
  const language =
    languageClassName && languageClassName.replace(/language-/, "");
  return (
    <Highlight
      {...defaultProps}
      theme={nightOwlTheme}
      code={children.trim()}
      language={language}
    >
      {({
        className,
        style,
        tokens = [],
        getLineProps,
        getTokenProps,
        ...rest
      }) => {
        return (
          <pre
            className={className}
            style={style}
            css={{
              padding: "1rem",
              borderRadius: "4px",
              fontSize: "2.5vh",
              width: "65ch",
              maxWidth: "95%",
              overflow: "auto",
              alignSelf: "center"
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span
                    key={key}
                    {...getTokenProps({ token, key })}
                    css={{ fontSize: ".75em" }}
                  />
                ))}
              </div>
            ))}
          </pre>
        );
      }}
    </Highlight>
  );
};

const Provider = ({
  title,
  speaker,
  twitter,
  date,
  event,
  eventLink,
  description,
  children,
  image,
  displayHeader,
  displayFooter
}) => (
  <React.Fragment>
    <main>{children}</main>
  </React.Fragment>
);
const custom = {
  css: {
    letterSpacing: 0.5,
    'div[name="wrapper"]': {
      display: "flex",
      flexDirection: "column",
      width: "90vw"
    },
    li: {
      marginTop: 15,
      lineHeight: 1.3,
      "@media (min-width: 1024px)": {
        fontSize: "3.8vh"
      }
    },
    h1: {
      fontFamily: "Futura STD, Open Sans, sans-serif",
      letterSpacing: 5
    }
  },
  colors: {
    text: "white",
    background: "#272c35",
    primary: "blue"
  },
  font: "Dank Mono, Open Sans, sans-serif",
  components: {
    code: Code
  },
  code: {
    color: "#222",
    background: "#efefef",
    padding: ".1em .2em",
    borderRadius: "4px"
  },
  monospace: "Dank Mono, monospace",
  googleFont: "https://fonts.googleapis.com/css?family=Open+Sans&display=swap",
  Provider: ({ children }) => <Provider {...meta}>{children}</Provider>
};

export default custom;
