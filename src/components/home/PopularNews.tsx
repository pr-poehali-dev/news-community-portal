
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

interface NewsItem {
  id: string;
  title: string;
  category: string;
  commentsCount: number;
}

interface PopularNewsProps {
  news: NewsItem[];
  limit?: number;
}

/**
 * Компонент для отображения популярных новостей в боковой колонке
 */
const PopularNews: React.FC<PopularNewsProps> = ({ news, limit = 4 }) => {
  // Ограничиваем количество отображаемых новостей
  const limitedNews = news.slice(0, limit);

  return (
    <Card className="sticky top-20 shadow-md border-primary/20">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl flex items-center gap-2">
          <Icon name="Zap" className="h-5 w-5 text-primary" />
          Популярное
        </CardTitle>
        <CardDescription>
          Самые обсуждаемые новости дня
        </CardDescription>
      </CardHeader>
      <CardContent className="divide-y divide-border/30">
        {limitedNews.map((item, index) => (
          <div key={item.id} className="py-3 first:pt-0 last:pb-0">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                {index + 1}
              </div>
              <div>
                <Link
                  to={`/news/${item.id}`}
                  className="font-medium hover:text-primary line-clamp-2"
                >
                  {item.title}
                </Link>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <span className="bg-secondary/10 text-secondary rounded-sm px-1">
                    {item.category}
                  </span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <Icon name="MessageSquare" className="mr-1 h-3 w-3" />
                    <span>{item.commentsCount}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PopularNews;
