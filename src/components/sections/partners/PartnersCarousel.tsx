import { colors, spacing, typography } from "@/constants/design-system";
import { partners } from "@/constants/content";

export default function PartnersCarousel() {
  return (
    <section
      style={{
        background: "white",
        padding: `${spacing[12]} ${spacing[4]}`,
      }}
      aria-labelledby="partners-headline"
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          id="partners-headline"
          style={{
            fontSize: typography.fontSizes["3xl"],
            fontWeight: typography.fontWeights.bold,
            color: colors.neutral.dark,
            marginBottom: spacing[4],
          }}
        >
          {partners.headline}
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
          {partners.subheadline}
        </p>
        
        <div
          style={{
            display: "flex",
            gap: spacing[8],
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            overflowX: "auto",
            padding: spacing[4],
          }}
        >
          {partners.brands.map((brand, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 120,
                height: 60,
                background: colors.neutral.light,
                borderRadius: "8px",
                padding: spacing[4],
                border: `1px solid ${colors.neutral.medium}`,
              }}
            >
              <span
                style={{
                  fontSize: typography.fontSizes.sm,
                  color: colors.neutral.dark,
                  fontWeight: typography.fontWeights.medium,
                }}
              >
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 