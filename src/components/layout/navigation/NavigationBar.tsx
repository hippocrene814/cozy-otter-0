import Link from "next/link";
import Image from "next/image";
import { colors, spacing, typography } from "@/constants/design-system";

export default function NavigationBar() {
  return (
    <nav
      style={{
        background: colors.neutral.light,
        padding: spacing[4],
        borderBottom: `1px solid ${colors.neutral.medium}`,
        fontFamily: typography.fontFamily,
      }}
      aria-label="Main navigation"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <Link href="/" aria-label="CozyOtter Home" style={{ display: "flex", alignItems: "center", gap: spacing[2] }}>
          <Image src="/logo.png" alt="CozyOtter Logo" width={40} height={40} priority />
          <span style={{ fontWeight: typography.fontWeights.bold, fontSize: typography.fontSizes.lg, color: colors.primary }}>
            CozyOtter
          </span>
        </Link>
        <div style={{ display: "flex", gap: spacing[6] }}>
          <Link href="/pricing" style={{ color: colors.neutral.dark, fontSize: typography.fontSizes.base }}>
            Pricing
          </Link>
          <Link href="/faq" style={{ color: colors.neutral.dark, fontSize: typography.fontSizes.base }}>
            FAQ
          </Link>
        </div>
      </div>
    </nav>
  );
} 