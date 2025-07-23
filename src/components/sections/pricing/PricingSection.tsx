"use client";

import { colors, spacing, typography, radii, shadows } from "@/constants/design-system";
import { pricing } from "@/constants/content";

export default function PricingSection() {
  return (
    <section
      style={{
        background: colors.neutral.light,
        padding: `${spacing[16]} ${spacing[4]}`,
        minHeight: "80vh",
      }}
      aria-labelledby="pricing-headline"
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          id="pricing-headline"
          style={{
            fontSize: typography.fontSizes["4xl"],
            fontWeight: typography.fontWeights.bold,
            color: colors.neutral.dark,
            marginBottom: spacing[4],
          }}
        >
          {pricing.headline}
        </h1>
        <p
          style={{
            fontSize: typography.fontSizes.lg,
            color: colors.neutral.dark,
            marginBottom: spacing[12],
            maxWidth: 600,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {pricing.subheadline}
        </p>
        
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: spacing[8],
            marginTop: spacing[8],
          }}
        >
          {pricing.tiers.map((tier, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: spacing[6],
                borderRadius: radii.lg,
                boxShadow: shadows.lg,
                border: `2px solid ${index === 1 ? colors.primary : colors.neutral.medium}`,
                position: "relative",
                transform: index === 1 ? "scale(1.05)" : "scale(1)",
              }}
            >
              {index === 1 && (
                <div
                  style={{
                    position: "absolute",
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: colors.primary,
                    color: "white",
                    padding: `${spacing[1]} ${spacing[3]}`,
                    borderRadius: radii.full,
                    fontSize: typography.fontSizes.sm,
                    fontWeight: typography.fontWeights.medium,
                  }}
                >
                  Most Popular
                </div>
              )}
              
              <h3
                style={{
                  fontSize: typography.fontSizes.xl,
                  fontWeight: typography.fontWeights.bold,
                  color: colors.neutral.dark,
                  marginBottom: spacing[2],
                }}
              >
                {tier.name}
              </h3>
              
              <div
                style={{
                  fontSize: typography.fontSizes["3xl"],
                  fontWeight: typography.fontWeights.bold,
                  color: colors.primary,
                  marginBottom: spacing[4],
                }}
              >
                {tier.price}
              </div>
              
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  marginBottom: spacing[6],
                }}
              >
                {tier.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: spacing[3],
                      fontSize: typography.fontSizes.base,
                      color: colors.neutral.dark,
                    }}
                  >
                    <span
                      style={{
                        color: colors.success,
                        marginRight: spacing[2],
                        fontSize: "16px",
                      }}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button
                style={{
                  width: "100%",
                  background: index === 1 ? colors.primary : "transparent",
                  color: index === 1 ? "white" : colors.primary,
                  padding: `${spacing[3]} ${spacing[6]}`,
                  borderRadius: radii.md,
                  fontSize: typography.fontSizes.base,
                  fontWeight: typography.fontWeights.medium,
                  border: `2px solid ${colors.primary}`,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (index !== 1) {
                    e.currentTarget.style.background = colors.primary;
                    e.currentTarget.style.color = "white";
                  }
                }}
                onMouseLeave={(e) => {
                  if (index !== 1) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = colors.primary;
                  }
                }}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
        
        <div
          style={{
            marginTop: spacing[12],
            padding: spacing[6],
            background: "white",
            borderRadius: radii.lg,
            boxShadow: shadows.md,
          }}
        >
          <h3
            style={{
              fontSize: typography.fontSizes.xl,
              fontWeight: typography.fontWeights.bold,
              color: colors.neutral.dark,
              marginBottom: spacing[3],
            }}
          >
            Need a custom solution?
          </h3>
          <p
            style={{
              fontSize: typography.fontSizes.base,
              color: colors.neutral.dark,
              marginBottom: spacing[4],
            }}
          >
            Contact our sales team for enterprise pricing and custom integrations.
          </p>
          <button
            style={{
              background: colors.accent,
              color: "white",
              padding: `${spacing[3]} ${spacing[6]}`,
              borderRadius: radii.md,
              fontSize: typography.fontSizes.base,
              fontWeight: typography.fontWeights.medium,
              border: "none",
              cursor: "pointer",
            }}
          >
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
} 