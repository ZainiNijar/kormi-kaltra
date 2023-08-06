import React from "react";
import ArticleCardDesktop from "./article-card-desktop";
import { Article } from "../../../pages/media-informasi/artikel/data";

type Props = {
  isMobile: boolean;
  data: Article;
};

const ArticleCard = (props: Props) => {
  const { isMobile, data } = props;
  return isMobile ? <div>ArticleCard</div> : <ArticleCardDesktop data={data} />;
};

export default ArticleCard;
