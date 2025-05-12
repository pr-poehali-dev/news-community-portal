
import React from "react";
import NewsCard from "@/components/NewsCard";

interface FeaturedNewsProps {
  news: {
    id: string;
    title: string;
    summary: string;
    category: string;
    imageUrl: string;
    publishedAt: string;
    author: string;
    commentsCount: number;
    likes: number;
    featured?: boolean;
  };
}

/**
 * Компонент для отображения главной выделенной новости
 */
const FeaturedNews: React.FC<FeaturedNewsProps> = ({ news }) => {
  if (!news) return null;

  return (
    <section className="bg-muted py-8 border-b border-border/30">
      <div className="container max-w-screen-xl px-4 mx-auto">
        <NewsCard
          id={news.id}
          title={news.title}
          summary={news.summary}
          category={news.category}
          imageUrl={news.imageUrl}
          publishedAt={news.publishedAt}
          author={news.author}
          commentsCount={news.commentsCount}
          likes={news.likes}
          featured={true}
        />
      </div>
    </section>
  );
};

export default FeaturedNews;
