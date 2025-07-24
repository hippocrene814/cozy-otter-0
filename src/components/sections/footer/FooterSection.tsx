import Link from "next/link";
import Image from "next/image";
import { colors, spacing, typography } from "@/constants/design-system";
import { footer } from "@/constants/content";
import { mainNav } from "@/constants/navigation";

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
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: spacing[12],
        }}
      >
        {/* Left Column: CozyOtter Info */}
        <div
          style={{
            flex: "1 1 240px",
            minWidth: 220,
            textAlign: "left",
            marginBottom: spacing[8],
          }}
        >
          <h3
            style={{
              fontSize: typography.fontSizes.lg,
              fontWeight: typography.fontWeights.bold,
              marginBottom: spacing[3],
            }}
          >
            {footer.company.name}
          </h3>
          {/* Social Icons */}
          <div style={{ display: "flex", gap: spacing[4], marginBottom: spacing[4] }}>
            {footer.social.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                style={{ display: "inline-flex", alignItems: "center" }}
              >
                <Image src={social.icon} alt={social.name} width={32} height={32} style={{ display: "block" }} />
              </a>
            ))}
          </div>
          <p
            style={{
              fontSize: typography.fontSizes.sm,
              lineHeight: typography.lineHeights.relaxed,
              opacity: 0.8,
              margin: 0,
            }}
          >
            {footer.company.description}
          </p>
        </div>

        {/* Right Column: Product & Company */}
        <div
          style={{
            display: "flex",
            flex: "2 1 400px",
            minWidth: 260,
            justifyContent: "flex-end",
            gap: spacing[16],
            textAlign: "right",
          }}
        >
          {/* Product Links (automated from mainNav) */}
          <div>
            <h4
              style={{
                fontSize: typography.fontSizes.base,
                fontWeight: typography.fontWeights.medium,
                marginBottom: spacing[3],
                textAlign: "right",
              }}
            >
              Product
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                textAlign: "right",
              }}
            >
              {mainNav.map((item) => (
                <li key={item.href} style={{ marginBottom: spacing[2] }}>
                  <Link
                    href={item.href}
                    style={{
                      fontSize: typography.fontSizes.sm,
                      color: "white",
                      textDecoration: "none",
                      opacity: 0.8,
                    }}
                  >
                    {item.label}
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
                textAlign: "right",
              }}
            >
              Company
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                textAlign: "right",
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
        </div>
      </div>

      {/* Bottom Section */}
      <div
        style={{
          borderTop: `1px solid ${colors.neutral.medium}`,
          paddingTop: spacing[6],
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: spacing[4],
          maxWidth: 1200,
          margin: "32px auto 0 auto",
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
      <style>{`
        @media (max-width: 900px) {
          footer > div:first-child {
            flex-direction: column;
            align-items: flex-start !important;
            gap: ${spacing[8]};
          }
          footer > div:first-child > div:last-child {
            justify-content: flex-start !important;
            gap: ${spacing[8]};
            margin-top: ${spacing[4]};
            text-align: right !important;
          }
        }
        @media (max-width: 600px) {
          footer > div:first-child {
            flex-direction: column;
            align-items: flex-start !important;
            gap: ${spacing[6]};
          }
          footer > div:first-child > div:last-child {
            flex-direction: column;
            align-items: flex-end !important;
            gap: ${spacing[4]};
            margin-top: ${spacing[4]};
            text-align: right !important;
          }
        }
      `}</style>
    </footer>
  );
} 