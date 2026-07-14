import type { ProcessStep } from "@/types/process";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "planted",
    title: "Planted with Care",
    image: "/images/home/planted-with-care.png",
    imageAlt: "Farmers planting rice seedlings in a green paddy field",
  },
  {
    id: "harvested",
    title: "Harvested with Care",
    image: "/images/home/harvested-with-care.png",
    imageAlt: "Golden rice crop being harvested by hand",
  },
  {
    id: "processed",
    title: "Expertly Processed",
    image: "/images/home/expertly-processed.png",
    imageAlt: "Rice being milled and quality-checked at the facility",
  },
  {
    id: "packed",
    title: "Packed with Care",
    image: "/images/home/primium-packaging.jpg",
    imageAlt: "Finished rice being sealed into branded packs",
  },
];