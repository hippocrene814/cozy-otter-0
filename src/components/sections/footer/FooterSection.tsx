import Link from "next/link";
import { colors, spacing, typography } from "@/constants/design-system";
import { footer } from "@/constants/content";

export default function FooterSection() {
  return (
    <footer
      style={{
        background: colors.neutral.dark,
        color: "white",
        padding: `${spacing[12]} ${spacing[4]}`,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: spacing[8],
            marginBottom: spacing[8],
          }}
        >
          {/* Company Info */}
          <div>
            <h3
              style={{
                fontSize: typography.fontSizes.lg,
                fontWeight: typography.fontWeights.bold,
                marginBottom: spacing[3],
              }}
            >
              {footer.company.name}
            </h3>
            <p
              style={{
                fontSize: typography.fontSizes.sm,
                lineHeight: typography.lineHeights.relaxed,
                opacity: 0.8,
              }}
            >
              {footer.company.description}
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4
              style={{
                fontSize: typography.fontSizes.base,
                fontWeight: typography.fontWeights.medium,
                marginBottom: spacing[3],
              }}
            >
              Product
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {footer.links.product.map((link, index) => (
                <li key={index} style={{ marginBottom: spacing[2] }}>
                  <Link
                    href="#"
                    style={{
                      fontSize: typography.fontSizes.sm,
                      color: "white",
                      textDecoration: "none",
                      opacity: 0.8,
                    }}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4
              style={{
                fontSize: typography.fontSizes.base,
                fontWeight: typography.fontWeights.medium,
                marginBottom: spacing[3],
              }}
            >
              Company
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {footer.links.company.map((link, index) => (
                <li key={index} style={{ marginBottom: spacing[2] }}>
                  <Link
                    href="#"
                    style={{
                      fontSize: typography.fontSizes.sm,
                      color: "white",
                      textDecoration: "none",
                      opacity: 0.8,
                    }}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4
              style={{
                fontSize: typography.fontSizes.base,
                fontWeight: typography.fontWeights.medium,
                marginBottom: spacing[3],
              }}
            >
              Support
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {footer.links.support.map((link, index) => (
                <li key={index} style={{ marginBottom: spacing[2] }}>
                  <Link
                    href="#"
                    style={{
                      fontSize: typography.fontSizes.sm,
                      color: "white",
                      textDecoration: "none",
                      opacity: 0.8,
                    }}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          style={{
            borderTop: `1px solid ${colors.neutral.medium}`,
            paddingTop: spacing[6],
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: spacing[4],
          }}
        >
          <div
            style={{
              fontSize: typography.fontSizes.sm,
              opacity: 0.8,
            }}
          >
            © 2024 {footer.company.name}. All rights reserved.
          </div>
          
          <div
            style={{
              display: "flex",
              gap: spacing[4],
              alignItems: "center",
            }}
          >
            <Link
              href={footer.legal.privacy}
              style={{
                fontSize: typography.fontSizes.sm,
                color: "white",
                textDecoration: "none",
                opacity: 0.8,
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href={footer.legal.terms}
              style={{
                fontSize: typography.fontSizes.sm,
                color: "white",
                textDecoration: "none",
                opacity: 0.8,
              }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 