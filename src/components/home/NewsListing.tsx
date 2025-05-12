
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewsCard from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface NewsItem {
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
}

interface NewsListingProps {
  news: NewsItem[];
}

/**
 * Компонент для отображения списка новостей с фильтрацией по категориям
 */
const NewsListing: React.FC<NewsListingProps> = ({ news }) => {
  const [activeCategory, setActiveCategory] = React.useState("all");

  const filteredNews =
    activeCategory === "all"
      ? news
      : news.filter((item) => item.category.toLowerCase() === activeCategory);

  return (
    <Tabs defaultValue="all" onValueChange={setActiveCategory} className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-playfair font-bold">Новости</h2>
      </div>
      <TabsList className="bg-muted/50 w-full justify-start">
        <TabsTrigger value="all">Все</TabsTrigger>
        <TabsTrigger value="политика">Политика</TabsTrigger>
        <TabsTrigger value="бизнес">Бизнес</TabsTrigger>
        <TabsTrigger value="технологии">Технологии</TabsTrigger>
        <TabsTrigger value="культура">Культура</TabsTrigger>
      </TabsList>

      <TabsContent value={activeCategory} className="space-y-6 mt-4">
        {filteredNews.length > 0 ? (
          <>
            {filteredNews.map((item) => (
              <NewsCard
                key={item.id}
                id={item.id}
                title={item.title}
                summary={item.summary}
                category={item.category}
                imageUrl={item.imageUrl}
                publishedAt={item.publishedAt}
                author={item.author}
                commentsCount={item.commentsCount}
                likes={item.likes}
              />
            ))}
            <div className="flex justify-center mt-8">
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 hover:border-primary"
              >
                Загрузить больше новостей
                <Icon name="ChevronDown" className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center py-10">
            <p className="text-muted-foreground">
              В этой категории пока нет новостей
            </p>
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
};

export default NewsListing;
