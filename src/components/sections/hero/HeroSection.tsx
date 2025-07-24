import { colors, spacing, typography, radii, shadows, borderWidths } from "@/constants/design-system";
import { hero } from "@/constants/content";

export default function HeroSection() {
  return (
    <section
      style={{
        background: colors.neutral.light,
        padding: `${spacing[16]} ${spacing[4]}`,
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
      }}
      aria-labelledby="hero-headline"
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: spacing[12],
          alignItems: "center",
        }}
      >
        <div>
          <h1
            id="hero-headline"
            style={{
              fontSize: typography.fontSizes["4xl"],
              fontWeight: typography.fontWeights.bold,
              color: colors.neutral.dark,
              lineHeight: typography.lineHeights.tight,
              marginBottom: spacing[6],
            }}
          >
            {hero.headline}
          </h1>
          <p
            style={{
              fontSize: typography.fontSizes.lg,
              color: colors.neutral.dark,
              lineHeight: typography.lineHeights.relaxed,
              marginBottom: spacing[8],
            }}
          >
            {hero.subheadline}
          </p>
          <div
            style={{
              display: "flex",
              gap: spacing[4],
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                background: colors.primary,
                color: "white",
                padding: `${spacing[3]} ${spacing[6]}`,
                borderRadius: radii.md,
                fontSize: typography.fontSizes.base,
                fontWeight: typography.fontWeights.medium,
                border: "none",
                cursor: "pointer",
                boxShadow: shadows.md,
              }}
              aria-label={hero.ctaPrimary}
            >
              {hero.ctaPrimary}
            </button>
            <button
              style={{
                background: "transparent",
                color: colors.primary,
                padding: `${spacing[3]} ${spacing[6]}`,
                borderRadius: radii.md,
                fontSize: typography.fontSizes.base,
                fontWeight: typography.fontWeights.medium,
                border: `${borderWidths.thick} solid ${colors.primary}`,
                cursor: "pointer",
              }}
              aria-label={hero.ctaSecondary}
            >
              {hero.ctaSecondary}
            </button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 500,
              height: 400,
              background: colors.secondary,
              borderRadius: radii.lg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: shadows.lg,
            }}
          >
            <span
              style={{
                fontSize: typography.fontSizes.lg,
                color: colors.neutral.dark,
                textAlign: "center",
              }}
            >
              Hero Image Placeholder
            </span>
          </div>
        </div>
      </div>
    </section>
  );
} 