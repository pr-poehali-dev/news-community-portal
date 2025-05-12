import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mockNews, mockComments } from "@/data/mockData";
import FeaturedNews from "@/components/home/FeaturedNews";
import MainContent from "@/components/home/MainContent";
import NewsletterSubscription from "@/components/home/NewsletterSubscription";

/**
 * Главная страница новостного портала NexusNet
 */
const Index: React.FC = () => {
  // Получаем основную новость
  const featuredNews = mockNews.find((news) => news.featured);
  // Получаем остальные новости для ленты
  const regularNews = mockNews.filter((news) => !news.featured);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-1">
        {/* Главный баннер */}
        {featuredNews && <FeaturedNews news={featuredNews} />}

        {/* Основной контент */}
        <MainContent news={regularNews} comments={mockComments} />

        {/* Регистрация для рассылки */}
        <NewsletterSubscription />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
