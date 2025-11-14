export interface PortfolioItem {
  title: string;
  clientOrBrand: string;
  timePeriod: string;
  description: string;
  keyDeliverables: string;
  whatIDid: JSX.Element;
  images: string[];
  videoEmbeds: string[];
  heroImage: {
    src: string;
    imageHeight: number;
    imageWidth: number;
  };
}

export interface PortfolioSection {
  title: string;
  footnote: string;
  clientOrBrandTitle: string;
  keyDeliverablesTitle: string;
  whatIHandledTitle: string;
  folderImage: {
    src: string;
    imageHeight: number;
    imageWidth: number;
  };
  backgroundImageSrc: string;
}
