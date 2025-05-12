
import React from "react";
import PopularNews from "@/components/home/PopularNews";
import NewsListing from "@/components/home/NewsListing";
import LatestComments from "@/components/LatestComments";
import SubmitNewsForm from "@/components/SubmitNewsForm";

interface MainContentProps {
  news: Array<{
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
  }>;
  comments: Array<{
    id: string;
    author: {
      name: string;
      avatar?: string;
    };
    newsId: string;
    newsTitle: string;
    content: string;
    createdAt: string;
  }>;
}

/**
 * Компонент основного содержимого главной страницы, разделенного на три колонки
 */
const MainContent: React.FC<MainContentProps> = ({ news, comments }) => {
  return (
    <section className="py-10">
      <div className="container px-4 max-w-screen-xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Левая колонка - Популярное */}
          <div className="lg:w-1/4">
            <PopularNews news={news} />
          </div>

          {/* Центральная колонка - Новости */}
          <div className="lg:w-2/4">
            <NewsListing news={news} />
          </div>

          {/* Правая колонка - Комментарии и форма */}
          <div className="lg:w-1/4 space-y-8">
            <LatestComments comments={comments} />
            <SubmitNewsForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
