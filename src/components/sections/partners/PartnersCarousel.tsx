import Image from "next/image";
import { colors, spacing, typography, borderWidths } from "@/constants/design-system";
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
            gap: spacing[3],
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
                width: 180,
                minHeight: 120,
                background: colors.neutral.light,
                borderRadius: "16px",
                padding: `${spacing[6]} ${spacing[4]}`,
                border: `${borderWidths.thick} solid ${colors.neutral.medium}`,
                position: "relative",
              }}
            >
              <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Image
                  src={brand.logo}
                  alt={brand.name + " logo"}
                  width={120}
                  height={60}
                  // update the logo tint color to be primary color
                  style={{
                    objectFit: "contain",
                    maxWidth: "120px",
                    maxHeight: "60px",
                    width: "100%",
                    height: "auto",
                    filter: `sepia(1) saturate(2) hue-rotate(-20deg) brightness(0.7) drop-shadow(0 0 0 ${colors.primary})`,
                    opacity: 0.7,
                  }}
                  priority={index < 3}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 