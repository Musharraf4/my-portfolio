import { Icon, loadIcon } from "@iconify/react";
import { useEffect, useState } from "react";

export const DEFAULT_SKILL_ICON = "mdi:code-tags";

type SkillIconProps = {
  icon?: string;
  width?: number;
  height?: number;
};

const SkillIcon = ({ icon, width = 20, height = 20 }: SkillIconProps) => {
  const [resolvedIcon, setResolvedIcon] = useState(icon?.trim() || DEFAULT_SKILL_ICON);

  useEffect(() => {
    const targetIcon = icon?.trim() || DEFAULT_SKILL_ICON;
    let cancelled = false;

    loadIcon(targetIcon)
      .then(() => {
        if (!cancelled) {
          setResolvedIcon(targetIcon);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setResolvedIcon(DEFAULT_SKILL_ICON);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [icon]);

  return <Icon icon={resolvedIcon} width={width} height={height} aria-hidden />;
};

export default SkillIcon;
