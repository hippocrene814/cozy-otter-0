import { colors, spacing, typography, radii, shadows } from "@/constants/design-system";
import { comparison } from "@/constants/content";

export default function ComparisonSection() {
  return (
    <section
      style={{
        background: "white",
        padding: `${spacing[12]} ${spacing[4]}`,
      }}
      aria-labelledby="comparison-headline"
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          id="comparison-headline"
          style={{
            fontSize: typography.fontSizes["3xl"],
            fontWeight: typography.fontWeights.bold,
            color: colors.neutral.dark,
            marginBottom: spacing[4],
          }}
        >
          {comparison.headline}
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
          {comparison.subheadline}
        </p>
        
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: spacing[8],
            marginTop: spacing[8],
          }}
        >
          {/* Traditional Column */}
          <div
            style={{
              background: colors.neutral.light,
              padding: spacing[6],
              borderRadius: radii.lg,
              border: `2px solid ${colors.neutral.medium}`,
            }}
          >
            <h3
              style={{
                fontSize: typography.fontSizes.xl,
                fontWeight: typography.fontWeights.bold,
                color: colors.neutral.dark,
                marginBottom: spacing[4],
              }}
            >
              {comparison.traditional.title}
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {comparison.traditional.features.map((feature, index) => (
                <li
                  key={index}
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
                      color: colors.error,
                      marginRight: spacing[2],
                      fontSize: "20px",
                    }}
                  >
                    ✕
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* CozyOtter Column */}
          <div
            style={{
              background: colors.secondary,
              padding: spacing[6],
              borderRadius: radii.lg,
              border: `2px solid ${colors.primary}`,
              boxShadow: shadows.lg,
            }}
          >
            <h3
              style={{
                fontSize: typography.fontSizes.xl,
                fontWeight: typography.fontWeights.bold,
                color: colors.neutral.dark,
                marginBottom: spacing[4],
              }}
            >
              {comparison.cozyOtter.title}
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {comparison.cozyOtter.features.map((feature, index) => (
                <li
                  key={index}
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
                      fontSize: "20px",
                    }}
                  >
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 