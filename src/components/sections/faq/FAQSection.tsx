"use client";

import { useState } from "react";
import { colors, spacing, typography, radii, shadows, borderWidths } from "@/constants/design-system";
import { faq } from "@/constants/content";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      style={{
        background: colors.neutral.light,
        padding: `${spacing[12]} ${spacing[4]}`,
      }}
      aria-labelledby="faq-headline"
    >
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          id="faq-headline"
          style={{
            fontSize: typography.fontSizes["3xl"],
            fontWeight: typography.fontWeights.bold,
            color: colors.neutral.dark,
            marginBottom: spacing[4],
          }}
        >
          {faq.headline}
        </h2>
        <p
          style={{
            fontSize: typography.fontSizes.lg,
            color: colors.neutral.dark,
            marginBottom: spacing[12],
          }}
        >
          {faq.subheadline}
        </p>
        
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: spacing[4],
          }}
        >
          {faq.questions.map((item, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: radii.lg,
                border: `1px solid ${colors.neutral.medium}`,
                overflow: "hidden",
                boxShadow: shadows.sm,
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: "100%",
                  padding: spacing[4],
                  background: "transparent",
                  border: "none",
                  textAlign: "left",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: openIndex === index ? `${borderWidths.thin} solid ${colors.neutral.medium}` : "none",
                }}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3
                  style={{
                    fontSize: typography.fontSizes.lg,
                    fontWeight: typography.fontWeights.medium,
                    color: colors.neutral.dark,
                    margin: 0,
                  }}
                >
                  {item.question}
                </h3>
                <span
                  style={{
                    fontSize: "24px",
                    color: colors.primary,
                    transition: "transform 0.2s ease",
                    transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>
              
              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  style={{
                    padding: `${spacing[4]} ${spacing[4]}`,
                    textAlign: "left",
                  }}
                >
                  <p
                    style={{
                      fontSize: typography.fontSizes.base,
                      color: colors.neutral.dark,
                      lineHeight: typography.lineHeights.relaxed,
                      margin: 0,
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 