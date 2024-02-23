import { FC } from "react";
import { GetShortcutQueryParams, Shortcut } from "../../types";
import { ShortcutView } from "./ShortcutView";

const fetchShortcuts = async (
  params: GetShortcutQueryParams
): Promise<Shortcut[]> => {
  const response = await fetch("https://api.testvalley.kr/main-shortcut/all", {
    next: {
      revalidate: 0,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch Shortcuts: ${response.statusText}`);
  }

  const data = await response.json();

  return data;
};

export const ShortcutSection: FC = async () => {
  const shortcuts = await fetchShortcuts({});

  return <ShortcutView shortcuts={shortcuts} />;
};
