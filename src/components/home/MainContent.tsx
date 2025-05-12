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
 * Компонент основного содержимого главной страницы с фокусом на новостную ленту по центру
 */
const MainContent: React.FC<MainContentProps> = ({ news, comments }) => {
  return (
    <section className="py-10">
      <div className="container px-4 max-w-screen-xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Левая колонка - Популярное */}
          <div className="w-full lg:w-1/4 order-2 lg:order-1">
            <div className="lg:sticky lg:top-20 space-y-8">
              <PopularNews news={news} />
              <LatestComments comments={comments} />
            </div>
          </div>

          {/* Центральная колонка - Новости с комментариями */}
          <div className="w-full lg:w-2/4 order-1 lg:order-2">
            <NewsListing news={news} />
          </div>

          {/* Правая колонка - Форма предложения новости */}
          <div className="w-full lg:w-1/4 order-3">
            <div className="lg:sticky lg:top-20">
              <SubmitNewsForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
