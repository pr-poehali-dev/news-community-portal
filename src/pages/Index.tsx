
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import LatestComments from "@/components/LatestComments";
import SubmitNewsForm from "@/components/SubmitNewsForm";
import { mockNews, mockComments } from "@/data/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const featuredNews = mockNews.find(news => news.featured);
  const regularNews = mockNews.filter(news => !news.featured);
  
  const filteredNews = activeCategory === "all" 
    ? regularNews 
    : regularNews.filter(news => news.category.toLowerCase() === activeCategory);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Главный баннер */}
        <section className="bg-primary/5 py-8 border-b border-border/40">
          <div className="container max-w-screen-2xl px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                {featuredNews && (
                  <NewsCard
                    id={featuredNews.id}
                    title={featuredNews.title}
                    summary={featuredNews.summary}
                    category={featuredNews.category}
                    imageUrl={featuredNews.imageUrl}
                    publishedAt={featuredNews.publishedAt}
                    author={featuredNews.author}
                    commentsCount={featuredNews.commentsCount}
                    likes={featuredNews.likes}
                    featured={true}
                  />
                )}
              </div>
              
              <div className="lg:col-span-1">
                <Card className="h-full">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Icon name="Zap" className="h-5 w-5 text-primary" />
                      Главное сегодня
                    </CardTitle>
                    <CardDescription>
                      Самые обсуждаемые новости дня
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="divide-y divide-border/60">
                    {regularNews.slice(0, 4).map((news, index) => (
                      <div key={news.id} className="py-3 first:pt-0 last:pb-0">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                            {index + 1}
                          </div>
                          <div>
                            <a 
                              href={`/news/${news.id}`} 
                              className="font-medium hover:text-primary line-clamp-2"
                            >
                              {news.title}
                            </a>
                            <div className="flex items-center text-xs text-muted-foreground mt-1">
                              <span className="bg-secondary/10 text-secondary rounded-sm px-1">
                                {news.category}
                              </span>
                              <span className="mx-2">•</span>
                              <div className="flex items-center">
                                <Icon name="MessageSquare" className="mr-1 h-3 w-3" />
                                <span>{news.commentsCount}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Основной контент */}
        <section className="py-10">
          <div className="container max-w-screen-2xl px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Новости */}
              <div className="lg:col-span-8">
                <Tabs defaultValue="all" onValueChange={setActiveCategory}>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-playfair font-bold">Новости</h2>
                    <TabsList>
                      <TabsTrigger value="all">Все</TabsTrigger>
                      <TabsTrigger value="политика">Политика</TabsTrigger>
                      <TabsTrigger value="бизнес">Бизнес</TabsTrigger>
                      <TabsTrigger value="технологии">Технологии</TabsTrigger>
                      <TabsTrigger value="культура">Культура</TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value={activeCategory} className="space-y-0 mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredNews.map((news) => (
                        <NewsCard
                          key={news.id}
                          id={news.id}
                          title={news.title}
                          summary={news.summary}
                          category={news.category}
                          imageUrl={news.imageUrl}
                          publishedAt={news.publishedAt}
                          author={news.author}
                          commentsCount={news.commentsCount}
                          likes={news.likes}
                        />
                      ))}
                    </div>
                    <div className="flex justify-center mt-8">
                      <Button variant="outline" size="lg">
                        Загрузить больше новостей
                        <Icon name="ChevronDown" className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              {/* Боковая панель */}
              <div className="lg:col-span-4 space-y-8">
                <LatestComments comments={mockComments} />
                <SubmitNewsForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* Регистрация для рассылки */}
        <section className="bg-primary/5 py-12 border-y border-border/40">
          <div className="container max-w-screen-lg px-4 md:px-8 text-center">
            <div className="flex flex-col items-center">
              <Icon name="Mail" className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-2xl font-playfair font-bold mb-2">Подпишитесь на нашу рассылку</h2>
              <p className="text-muted-foreground mb-6 max-w-xl">
                Получайте самые важные новости и эксклюзивные материалы прямо на вашу почту. 
                Никакого спама, только качественный контент.
              </p>
              <div className="flex w-full max-w-md flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                />
                <Button>Подписаться</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
