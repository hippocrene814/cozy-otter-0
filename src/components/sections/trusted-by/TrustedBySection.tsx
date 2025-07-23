import { colors, spacing, typography, radii, shadows } from "@/constants/design-system";
import { trustedBy } from "@/constants/content";

export default function TrustedBySection() {
  return (
    <section
      style={{
        background: "white",
        padding: `${spacing[12]} ${spacing[4]}`,
      }}
      aria-labelledby="trusted-by-headline"
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          id="trusted-by-headline"
          style={{
            fontSize: typography.fontSizes["3xl"],
            fontWeight: typography.fontWeights.bold,
            color: colors.neutral.dark,
            marginBottom: spacing[4],
          }}
        >
          {trustedBy.headline}
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
          {trustedBy.subheadline}
        </p>
        
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: spacing[8],
            marginTop: spacing[8],
          }}
        >
          {trustedBy.testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{
                background: colors.neutral.light,
                padding: spacing[6],
                borderRadius: radii.lg,
                boxShadow: shadows.md,
                border: `1px solid ${colors.neutral.medium}`,
                textAlign: "left",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  color: colors.primary,
                  marginBottom: spacing[3],
                }}
              >
                "
              </div>
              <p
                style={{
                  fontSize: typography.fontSizes.base,
                  color: colors.neutral.dark,
                  lineHeight: typography.lineHeights.relaxed,
                  marginBottom: spacing[4],
                  fontStyle: "italic",
                }}
              >
                {testimonial.quote}
              </p>
              <div>
                <div
                  style={{
                    fontSize: typography.fontSizes.base,
                    fontWeight: typography.fontWeights.medium,
                    color: colors.neutral.dark,
                  }}
                >
                  {testimonial.author}
                </div>
                <div
                  style={{
                    fontSize: typography.fontSizes.sm,
                    color: colors.neutral.dark,
                    opacity: 0.8,
                  }}
                >
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 