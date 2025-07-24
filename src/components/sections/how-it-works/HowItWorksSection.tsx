import { colors, spacing, typography, radii, shadows, borderWidths } from "@/constants/design-system";
import { howItWorks } from "@/constants/content";

export default function HowItWorksSection() {
  return (
    <section
      style={{
        background: colors.neutral.light,
        padding: `${spacing[12]} ${spacing[4]}`,
      }}
      aria-labelledby="how-it-works-headline"
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          id="how-it-works-headline"
          style={{
            fontSize: typography.fontSizes["3xl"],
            fontWeight: typography.fontWeights.bold,
            color: colors.neutral.dark,
            marginBottom: spacing[4],
          }}
        >
          {howItWorks.headline}
        </h2>
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
          {howItWorks.subheadline}
        </p>
        
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: spacing[8],
            marginTop: spacing[8],
          }}
        >
          {howItWorks.steps.map((step, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: spacing[6],
                borderRadius: radii.lg,
                boxShadow: shadows.md,
                textAlign: "center",
                border: `${borderWidths.thick} solid ${colors.neutral.medium}`,
              }}
            >
              <div
                style={{
                  fontSize: "48px",
                  marginBottom: spacing[4],
                }}
              >
                {step.icon}
              </div>
              <h3
                style={{
                  fontSize: typography.fontSizes.xl,
                  fontWeight: typography.fontWeights.bold,
                  color: colors.neutral.dark,
                  marginBottom: spacing[3],
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: typography.fontSizes.base,
                  color: colors.neutral.dark,
                  lineHeight: typography.lineHeights.relaxed,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 