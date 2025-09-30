import { PIproduct } from "@/data/pages/product";

export function getGallery(productMedia: PIproduct["media"]) {
  const mainImage = getMedia(productMedia, "m");
  const gallery = productMedia.filter((item) => item.type === "g");
  const productImages = mainImage ? [mainImage, ...gallery] : gallery;
  return productImages;
}

export function getMedia(object: PIproduct["media"], type: string) {
  const data = object.find((item) => item.type === type && item.active);
  if (!data) {
    return {
      id: 0,
      active: true,
      type: type,
      title: 'Default',
      address: '/image/Iran-Exportal-Header.jpg',
      alt: 'Default'
    }
  }
  return data;
}