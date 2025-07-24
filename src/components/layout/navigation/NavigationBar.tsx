import Link from "next/link";
import Image from "next/image";
import { colors, spacing, typography, borderWidths, shadows } from "@/constants/design-system";
import { mainNav } from "@/constants/navigation";

export default function NavigationBar() {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: `rgba(${parseInt(colors.neutral.light.slice(1,3),16)},${parseInt(colors.neutral.light.slice(3,5),16)},${parseInt(colors.neutral.light.slice(5,7),16)},0.95)`,
        boxShadow: shadows.md,
        borderBottom: `${borderWidths.thin} solid ${colors.neutral.medium}`,
        fontFamily: typography.fontFamily,
        backdropFilter: 'blur(8px)',
        transition: 'box-shadow 0.2s',
        padding: `${spacing[4]} 0`,
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
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} style={{ color: colors.neutral.dark, fontSize: typography.fontSizes.base }}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
} 