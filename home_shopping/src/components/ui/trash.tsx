"use client";

import { ICON_GRAY_COLOUR } from "@/constants";
import { FaTrash } from "react-icons/fa";

type Props = {
  onClick: (e: any) => void;
};

export default function TrashIcon({ onClick }: Props) {
  return <FaTrash onClick={onClick} color={ICON_GRAY_COLOUR} />;
}
